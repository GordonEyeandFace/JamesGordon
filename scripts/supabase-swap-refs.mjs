#!/usr/bin/env node
/**
 * Rewrites all local /images/... references in src/ to Supabase public URLs,
 * using scripts/migration-map.json as the source of truth.
 *
 * Modes:
 *   node --env-file=.env.local scripts/supabase-swap-refs.mjs dry-run
 *   node --env-file=.env.local scripts/supabase-swap-refs.mjs apply
 */

import { readFile, writeFile, readdir, stat } from 'node:fs/promises'
import path from 'node:path'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
if (!SUPABASE_URL) {
  console.error('Missing NEXT_PUBLIC_SUPABASE_URL (load via --env-file=.env.local)')
  process.exit(1)
}

const PROJECT_ROOT = path.resolve(process.cwd())
const SRC_DIR = path.join(PROJECT_ROOT, 'src')
const MAP_PATH = path.join(PROJECT_ROOT, 'scripts', 'migration-map.json')

const mode = process.argv[2]
if (!['dry-run', 'apply'].includes(mode)) {
  console.error('Usage: node --env-file=.env.local scripts/supabase-swap-refs.mjs <dry-run|apply>')
  process.exit(1)
}

function publicUrl(bucket, destPath) {
  return `${SUPABASE_URL}/storage/v1/object/public/${bucket}/${destPath}`
}

// ── Build replacement table ─────────────────────────────────────────────────
const map = JSON.parse(await readFile(MAP_PATH, 'utf8'))

// 1. Full-path replacements (plain + URL-encoded)
const pathReplacements = []
for (const e of map.entries) {
  if (e.status !== 'uploaded') continue
  const oldPath = '/' + e.source.replace(/^public\//, '')   // e.g. /images/treatments/12-medical-eye-care.svg
  const oldPathEncoded = encodeURI(oldPath)
  const newUrl = publicUrl(e.bucket, e.destPath)
  pathReplacements.push({ from: oldPath, to: newUrl })
  if (oldPathEncoded !== oldPath) {
    pathReplacements.push({ from: oldPathEncoded, to: newUrl })
  }
}
// Sort longest-first so we match more specific paths before shorter prefixes
pathReplacements.sort((a, b) => b.from.length - a.from.length)

// 2. Press-page BASE/AW/EV constants — literal string substitutions
const pressBase = publicUrl('press', 'publications')
const pressAW   = publicUrl('press', 'awards')
const pressEV   = publicUrl('press', 'events')
const pressConstReplacements = [
  { from: "'/images/1%20-%20PUBLICATIONS'",                               to: `'${pressBase}'` },
  { from: "'/images/2%20-%20AWARDS'",                                     to: `'${pressAW}'` },
  { from: "'/images/3%20-%20EVENTS-20260404T120524Z-3-001/3%20-%20EVENTS'", to: `'${pressEV}'` },
]

// 3. Press-page template-literal filename swaps — filename only → normalized
// Build an index of known press-filenames (old → new), both plain and URL-encoded.
const pressFilenameMap = new Map()
for (const e of map.entries) {
  if (e.status !== 'uploaded') continue
  if (!/^public\/images\/(1 - PUBLICATIONS|2 - AWARDS|3 - EVENTS-20260404T120524Z-3-001|8 - UPDATED PHOTOS)\//.test(e.source)) continue
  const oldName = path.basename(e.source)
  const newName = path.basename(e.destPath)
  if (oldName === newName) continue
  // plain form (unlikely in source code, still safe)
  pressFilenameMap.set(oldName, newName)
  // encoded form (how it appears in press/page.tsx)
  const oldEnc = encodeURI(oldName)
  if (oldEnc !== oldName) pressFilenameMap.set(oldEnc, newName)
  // Additional encodings: press/page.tsx uses %27 (apostrophe), %26 (ampersand), etc.
  // encodeURIComponent gives stricter encoding (escapes /, ?, etc.). Add those too.
  const oldStrict = encodeURIComponent(oldName)
  if (oldStrict !== oldName) pressFilenameMap.set(oldStrict, newName)
}

// ── Walk src/ ────────────────────────────────────────────────────────────────
async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const e of entries) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) files.push(...(await walk(full)))
    else if (e.isFile() && /\.(tsx?|jsx?|css|mjs)$/.test(e.name)) files.push(full)
  }
  return files
}

const files = await walk(SRC_DIR)

// ── Apply replacements ──────────────────────────────────────────────────────
let totalChanges = 0
const fileChanges = []

for (const abs of files) {
  let content = await readFile(abs, 'utf8')
  const original = content
  const isPressPage = abs.endsWith(path.join('src', 'app', 'press', 'page.tsx'))
  let perFileChanges = 0

  // Press-page specific: BASE/AW/EV constants first
  if (isPressPage) {
    for (const { from, to } of pressConstReplacements) {
      if (content.includes(from)) {
        const count = content.split(from).length - 1
        content = content.split(from).join(to)
        perFileChanges += count
      }
    }
    // Filename-only swaps within template literals
    for (const [oldName, newName] of pressFilenameMap) {
      if (content.includes(oldName)) {
        const count = content.split(oldName).length - 1
        content = content.split(oldName).join(newName)
        perFileChanges += count
      }
    }
  }

  // Full-path replacements — applies to every file
  for (const { from, to } of pathReplacements) {
    if (content.includes(from)) {
      const count = content.split(from).length - 1
      content = content.split(from).join(to)
      perFileChanges += count
    }
  }

  if (content !== original) {
    totalChanges += perFileChanges
    fileChanges.push({ file: path.relative(PROJECT_ROOT, abs), changes: perFileChanges })
    if (mode === 'apply') {
      await writeFile(abs, content)
    }
  }
}

// ── Report ──────────────────────────────────────────────────────────────────
console.log(`\n── Ref swap ${mode === 'apply' ? 'applied' : 'DRY RUN'} ──`)
console.log(`Files touched: ${fileChanges.length}`)
console.log(`Total replacements: ${totalChanges}\n`)
for (const c of fileChanges) console.log(`  ${c.changes.toString().padStart(3)}  ${c.file}`)

// ── Sanity: scan for any TRUE leftover /images/ refs (ignore ${var}/... which resolves via BASE constants) ──
console.log('\n── Remaining /images/ references in src/ (genuine misses) ──')
let leftover = 0
for (const abs of files) {
  const content = await readFile(abs, 'utf8')
  const matches = content.match(/['"`][^'"`]*\/images\/[^'"`]*['"`]/g)
  if (matches) {
    for (const m of matches) {
      console.log(`  ${path.relative(PROJECT_ROOT, abs)}: ${m}`)
      leftover++
    }
  }
}
if (leftover === 0) console.log('  (none)')
console.log(`\nTotal genuine leftovers: ${leftover}`)
