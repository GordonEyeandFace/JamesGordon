#!/usr/bin/env node
/**
 * Supabase asset migration script.
 *
 * Modes:
 *   node --env-file=.env.local scripts/supabase-migrate.mjs plan
 *   node --env-file=.env.local scripts/supabase-migrate.mjs create-buckets
 *   node --env-file=.env.local scripts/supabase-migrate.mjs upload
 *   node --env-file=.env.local scripts/supabase-migrate.mjs verify
 *
 * Resume is automatic: re-running `upload` skips already-uploaded files
 * based on migration-map.json status.
 */

import { createClient } from '@supabase/supabase-js'
import { readdir, stat, readFile, writeFile, mkdir } from 'node:fs/promises'
import { existsSync, createReadStream } from 'node:fs'
import path from 'node:path'
import mime from 'mime'

// ── Config ──────────────────────────────────────────────────────────────────
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SERVICE_ROLE = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!SUPABASE_URL || !SERVICE_ROLE) {
  console.error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.')
  console.error('Run with: node --env-file=.env.local scripts/supabase-migrate.mjs <mode>')
  process.exit(1)
}

const PROJECT_ROOT = path.resolve(process.cwd())
const PUBLIC_DIR = path.join(PROJECT_ROOT, 'public')
const MAP_PATH = path.join(PROJECT_ROOT, 'scripts', 'migration-map.json')
const REPORT_PATH = path.join(PROJECT_ROOT, 'scripts', 'migration-report.md')

// Skip top-level Next.js defaults (tiny, stay in repo)
const SKIP_TOP_LEVEL = new Set([
  'file.svg', 'globe.svg', 'next.svg', 'vercel.svg', 'window.svg',
])

// Skip macOS junk
const isJunk = (name) => name.startsWith('._') || name === '.DS_Store' || name === 'Thumbs.db'

// Skip by extension (raw source archives — too big + not referenced)
const SKIP_EXT = new Set(['.zip', '.rar', '.7z', '.tar', '.gz'])

// Route source dir → bucket + subpath prefix
const BUCKET_MAP = {
  // site-assets
  'art':                { bucket: 'site-assets', sub: 'art' },
  'booking':            { bucket: 'site-assets', sub: 'booking' },
  'contact':            { bucket: 'site-assets', sub: 'contact' },
  'difference':         { bucket: 'site-assets', sub: 'difference' },
  'footer':             { bucket: 'site-assets', sub: 'footer' },
  'hallmark':           { bucket: 'site-assets', sub: 'hallmark' },
  'hero-section':       { bucket: 'site-assets', sub: 'hero-section' },
  'introduction':       { bucket: 'site-assets', sub: 'introduction' },
  'legacy':             { bucket: 'site-assets', sub: 'legacy' },
  'meet':               { bucket: 'site-assets', sub: 'meet' },
  'privilages':         { bucket: 'site-assets', sub: 'privilages' },
  'red-box':            { bucket: 'site-assets', sub: 'red-box' },
  'reviews':            { bucket: 'site-assets', sub: 'reviews' },
  'trusted':            { bucket: 'site-assets', sub: 'trusted' },
  '8 - UPDATED PHOTOS': { bucket: 'site-assets', sub: 'updated-photos' },
  // gallery (preserve sub-structure)
  'gallery':            { bucket: 'gallery',    sub: '' },
  // treatments
  'treatments':         { bucket: 'treatments', sub: '' },
  // press
  '1 - PUBLICATIONS':                        { bucket: 'press', sub: 'publications' },
  '2 - AWARDS':                              { bucket: 'press', sub: 'awards' },
  '3 - EVENTS-20260404T120524Z-3-001':       { bucket: 'press', sub: 'events' },
  '4 - VIDEOS':                              { bucket: 'press', sub: 'videos' },
  'press':                                   { bucket: 'press', sub: 'magazines' },
}

const BUCKETS = [
  { name: 'site-assets', public: true },
  { name: 'gallery',     public: true },
  { name: 'treatments',  public: true },
  { name: 'press',       public: true },
]

const CONCURRENCY = 6
const MAX_RETRIES = 3

// ── Supabase client (service role) ──────────────────────────────────────────
const supabase = createClient(SUPABASE_URL, SERVICE_ROLE, {
  auth: { persistSession: false, autoRefreshToken: false },
})

// ── Filename normalization ──────────────────────────────────────────────────
export function normalizeSegment(s) {
  return s
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')    // combining marks
    .replace(/['"""'`]/g, '')            // quotes
    .replace(/&/g, 'and')
    .replace(/[™®©]/g, '')
    .replace(/[—–]/g, '-')               // em/en-dash
    .replace(/[_\s]+/g, '-')             // underscores + spaces
    .replace(/[^a-zA-Z0-9.\-]/g, '-')   // anything else
    .replace(/-+/g, '-')                 // collapse
    .replace(/^-|-$/g, '')               // trim
    .toLowerCase()
}

function normalizeFilename(name) {
  const ext = path.extname(name)
  const base = path.basename(name, ext)
  return normalizeSegment(base) + ext.toLowerCase()
}

function normalizePath(segments) {
  return segments.map(normalizeSegment).filter(Boolean).join('/')
}

// ── Walk public/ and build plan ─────────────────────────────────────────────
async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const e of entries) {
    if (isJunk(e.name)) continue
    const full = path.join(dir, e.name)
    if (e.isDirectory()) {
      files.push(...(await walk(full)))
    } else if (e.isFile()) {
      files.push(full)
    }
  }
  return files
}

function classify(absPath) {
  const rel = path.relative(PUBLIC_DIR, absPath)
  const segments = rel.split(path.sep)
  const first = segments[0]

  // Skip archive formats
  const ext = path.extname(absPath).toLowerCase()
  if (SKIP_EXT.has(ext)) return { skip: `archive:${ext}` }

  // Top-level files (Next.js SVG defaults) — skip
  if (segments.length === 1) {
    if (SKIP_TOP_LEVEL.has(first)) return { skip: 'nextjs-default' }
    // other top-level → site-assets root
    return {
      bucket: 'site-assets',
      destPath: normalizeFilename(first),
    }
  }

  // carousel/ → site-assets/carousel/...
  if (first === 'carousel') {
    const rest = segments.slice(1)
    const fileName = normalizeFilename(rest.pop())
    const subDirs = rest.map(normalizeSegment).filter(Boolean).join('/')
    return {
      bucket: 'site-assets',
      destPath: ['carousel', subDirs, fileName].filter(Boolean).join('/'),
    }
  }

  // images/* → routed by second-level dir
  if (first === 'images') {
    if (segments.length < 3) {
      // file directly in public/images/ (e.g. dr-gordon-website-layout-guide.pdf)
      const fileName = normalizeFilename(segments[1])
      return { bucket: 'site-assets', destPath: `misc/${fileName}` }
    }
    const imagesSub = segments[1]
    const mapping = BUCKET_MAP[imagesSub]
    if (!mapping) {
      return { skip: `unmapped-dir:${imagesSub}` }
    }
    const rest = segments.slice(2)
    const fileName = normalizeFilename(rest.pop())
    const subDirs = rest.map(normalizeSegment).filter(Boolean).join('/')
    const destPath = [mapping.sub, subDirs, fileName].filter(Boolean).join('/')
    return { bucket: mapping.bucket, destPath }
  }

  return { skip: `unmapped-top:${first}` }
}

function humanSize(bytes) {
  if (bytes < 1024) return bytes + 'B'
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + 'K'
  if (bytes < 1024 * 1024 * 1024) return (bytes / 1024 / 1024).toFixed(1) + 'M'
  return (bytes / 1024 / 1024 / 1024).toFixed(2) + 'G'
}

// ── Plan mode ───────────────────────────────────────────────────────────────
async function cmdPlan() {
  console.log('Walking public/ ...')
  const files = await walk(PUBLIC_DIR)
  console.log(`Found ${files.length} files.`)

  const entries = []
  const skipped = []
  const collisions = new Map()  // bucket+destPath → [sourcePaths]

  for (const abs of files) {
    const stats = await stat(abs)
    const cls = classify(abs)
    if (cls.skip) {
      skipped.push({ path: path.relative(PROJECT_ROOT, abs), reason: cls.skip, size: stats.size })
      continue
    }
    const key = `${cls.bucket}/${cls.destPath}`
    if (!collisions.has(key)) collisions.set(key, [])
    collisions.get(key).push(abs)

    entries.push({
      source: path.relative(PROJECT_ROOT, abs),
      bucket: cls.bucket,
      destPath: cls.destPath,
      size: stats.size,
      status: 'pending',
    })
  }

  // Surface collisions (post-normalization name clashes)
  const realCollisions = [...collisions.entries()].filter(([, v]) => v.length > 1)
  if (realCollisions.length) {
    console.warn(`\n⚠️  ${realCollisions.length} destination collisions after normalization:`)
    for (const [key, sources] of realCollisions.slice(0, 10)) {
      console.warn(`  ${key}`)
      for (const s of sources) console.warn(`    ← ${path.relative(PROJECT_ROOT, s)}`)
    }
    // disambiguate collisions: suffix with hash
    for (const [, sources] of realCollisions) {
      sources.forEach((src, i) => {
        if (i === 0) return
        const entry = entries.find((e) => path.join(PROJECT_ROOT, e.source) === src)
        if (entry) {
          const ext = path.extname(entry.destPath)
          const base = entry.destPath.slice(0, -ext.length)
          entry.destPath = `${base}-${i + 1}${ext}`
        }
      })
    }
  }

  // Bucket summary
  const byBucket = entries.reduce((acc, e) => {
    acc[e.bucket] = acc[e.bucket] || { count: 0, size: 0 }
    acc[e.bucket].count += 1
    acc[e.bucket].size += e.size
    return acc
  }, {})

  console.log('\n── Plan summary ──')
  console.log(`Total to upload:  ${entries.length}  (${humanSize(entries.reduce((a, e) => a + e.size, 0))})`)
  console.log(`Skipped:          ${skipped.length}  (${humanSize(skipped.reduce((a, e) => a + e.size, 0))})`)
  console.log('')
  for (const [b, v] of Object.entries(byBucket)) {
    console.log(`  ${b.padEnd(14)} ${String(v.count).padStart(5)} files   ${humanSize(v.size).padStart(8)}`)
  }

  // Largest 10
  const top = [...entries].sort((a, b) => b.size - a.size).slice(0, 10)
  console.log('\n── Largest 10 ──')
  for (const e of top) console.log(`  ${humanSize(e.size).padStart(8)}  ${e.bucket}/${e.destPath}`)

  // Save map
  const map = { createdAt: new Date().toISOString(), entries, skipped }
  await writeFile(MAP_PATH, JSON.stringify(map, null, 2))
  console.log(`\nWrote ${MAP_PATH}`)
}

// ── Create buckets ──────────────────────────────────────────────────────────
async function cmdCreateBuckets() {
  for (const b of BUCKETS) {
    const { data: existing } = await supabase.storage.getBucket(b.name)
    if (existing) {
      console.log(`✔ bucket exists: ${b.name}`)
      continue
    }
    const { error } = await supabase.storage.createBucket(b.name, {
      public: b.public,
    })
    if (error) {
      console.error(`✘ ${b.name}: ${error.message}`)
      process.exit(1)
    }
    console.log(`✔ created bucket: ${b.name} (public)`)
  }
}

// ── Upload with concurrency + retry ─────────────────────────────────────────
async function loadMap() {
  if (!existsSync(MAP_PATH)) {
    console.error(`No plan found at ${MAP_PATH}. Run "plan" first.`)
    process.exit(1)
  }
  return JSON.parse(await readFile(MAP_PATH, 'utf8'))
}

async function saveMap(map) {
  await writeFile(MAP_PATH, JSON.stringify(map, null, 2))
}

async function uploadOne(entry) {
  const abs = path.join(PROJECT_ROOT, entry.source)
  const buf = await readFile(abs)
  const contentType = mime.getType(abs) || 'application/octet-stream'

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    const { error } = await supabase.storage
      .from(entry.bucket)
      .upload(entry.destPath, buf, { contentType, upsert: true })
    if (!error) return { ok: true }
    if (attempt === MAX_RETRIES) return { ok: false, error: error.message }
    await new Promise((r) => setTimeout(r, 500 * attempt))
  }
}

async function cmdUpload() {
  const map = await loadMap()
  const pending = map.entries.filter((e) => e.status !== 'uploaded')
  console.log(`Uploading ${pending.length} files (${humanSize(pending.reduce((a, e) => a + e.size, 0))})`)
  console.log(`Concurrency: ${CONCURRENCY}, max retries: ${MAX_RETRIES}\n`)

  let done = 0
  let failed = 0
  const total = pending.length
  const startedAt = Date.now()

  // Save map every N uploads for crash resume
  const SAVE_EVERY = 25
  let sinceLastSave = 0

  async function worker(queue) {
    while (queue.length) {
      const entry = queue.shift()
      if (!entry) break
      const res = await uploadOne(entry)
      if (res.ok) {
        entry.status = 'uploaded'
        entry.uploadedAt = new Date().toISOString()
      } else {
        entry.status = 'failed'
        entry.error = res.error
        failed++
      }
      done++
      sinceLastSave++
      const pct = ((done / total) * 100).toFixed(1)
      const elapsed = ((Date.now() - startedAt) / 1000).toFixed(0)
      const tag = res.ok ? '✔' : '✘'
      console.log(`[${done}/${total}] ${pct}% (${elapsed}s)  ${tag}  ${entry.bucket}/${entry.destPath}${res.ok ? '' : ' — ' + res.error}`)
      if (sinceLastSave >= SAVE_EVERY) {
        await saveMap(map)
        sinceLastSave = 0
      }
    }
  }

  const queue = [...pending]
  await Promise.all(Array.from({ length: CONCURRENCY }, () => worker(queue)))
  await saveMap(map)

  console.log(`\n── Upload complete ──`)
  console.log(`  Uploaded: ${done - failed}`)
  console.log(`  Failed:   ${failed}`)
  console.log(`  Elapsed:  ${((Date.now() - startedAt) / 1000).toFixed(0)}s`)

  if (failed > 0) {
    console.log(`\nFailed entries:`)
    for (const e of map.entries.filter((x) => x.status === 'failed')) {
      console.log(`  ✘ ${e.source} — ${e.error}`)
    }
    process.exit(1)
  }
}

// ── Verify: HEAD each public URL, report 200/non-200 ────────────────────────
async function cmdVerify() {
  const map = await loadMap()
  const uploaded = map.entries.filter((e) => e.status === 'uploaded')
  console.log(`Verifying ${uploaded.length} public URLs...\n`)

  let ok = 0
  let bad = 0
  const bads = []
  const q = [...uploaded]
  const CONC = 12

  async function worker() {
    while (q.length) {
      const e = q.shift()
      if (!e) break
      const url = `${SUPABASE_URL}/storage/v1/object/public/${e.bucket}/${e.destPath}`
      try {
        const res = await fetch(url, { method: 'HEAD' })
        if (res.ok) ok++
        else { bad++; bads.push({ url, status: res.status }) }
      } catch (err) {
        bad++
        bads.push({ url, status: err.message })
      }
    }
  }
  await Promise.all(Array.from({ length: CONC }, worker))
  console.log(`✔ 200: ${ok}`)
  console.log(`✘ !200: ${bad}`)
  for (const b of bads.slice(0, 20)) console.log(`   ${b.status}  ${b.url}`)
}

// ── Main ────────────────────────────────────────────────────────────────────
const [, , mode] = process.argv
const handlers = {
  plan: cmdPlan,
  'create-buckets': cmdCreateBuckets,
  upload: cmdUpload,
  verify: cmdVerify,
}
const handler = handlers[mode]
if (!handler) {
  console.error('Usage: node --env-file=.env.local scripts/supabase-migrate.mjs <plan|create-buckets|upload|verify>')
  process.exit(1)
}
handler().catch((err) => {
  console.error(err)
  process.exit(1)
})
