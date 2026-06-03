import { chromium } from 'playwright';
import { writeFileSync, mkdirSync } from 'fs';

const URL = 'https://drjamesgordon-landing-page.vercel.app';
const OUT = '/tmp/qa-screenshots';
mkdirSync(OUT, { recursive: true });

const sections = [
  { id: 'hero',         label: '01_Hero',         selector: null,           scrollTo: 0 },
  { id: 'redbox',       label: '02_RedBox',        selector: null,           scrollTo: 900 },
  { id: 'legacy',       label: '03_Legacy',        selector: '.pt-\\[400px\\]', scrollTo: null },
  { id: 'about',        label: '04_About',         selector: '#about',       scrollTo: null },
  { id: 'treatments',   label: '05_Treatments',    selector: '#treatments',  scrollTo: null },
  { id: 'booking',      label: '06_BookingCTA',    selector: null,           scrollTo: null },
  { id: 'difference',   label: '07_Difference',    selector: null,           scrollTo: null },
  { id: 'testimonials', label: '08_Testimonials',  selector: '#reviews',     scrollTo: null },
  { id: 'hallmark',     label: '09_Hallmark',      selector: null,           scrollTo: null },
  { id: 'press',        label: '10_Press',         selector: '#press',       scrollTo: null },
  { id: 'gallery',      label: '11_Gallery',       selector: '#gallery',     scrollTo: null },
  { id: 'contact',      label: '12_Contact',       selector: '#contact',     scrollTo: null },
  { id: 'footer',       label: '13_Footer',        selector: 'footer',       scrollTo: null },
];

async function audit() {
  const browser = await chromium.launch({ headless: true });
  const consoleErrors = [];
  const findings = [];

  // ── Desktop 1440×900 ──────────────────────────────────────────────────
  const ctx1440 = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx1440.newPage();

  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(`PAGE ERROR: ${err.message}`));

  console.log('Loading page at 1440×900…');
  await page.goto(URL, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(3000); // let fonts + animations settle

  // Full-page screenshot
  await page.screenshot({ path: `${OUT}/00_fullpage_1440.png`, fullPage: true });
  console.log('Full-page screenshot taken');

  // Section screenshots
  for (const s of sections) {
    try {
      if (s.selector) {
        const el = page.locator(s.selector).first();
        await el.scrollIntoViewIfNeeded({ timeout: 5000 });
        await page.waitForTimeout(600);
        await el.screenshot({ path: `${OUT}/${s.label}_desktop.png` });
      } else {
        if (s.scrollTo !== null) await page.evaluate(y => window.scrollTo(0, y), s.scrollTo);
        await page.waitForTimeout(600);
        await page.screenshot({ path: `${OUT}/${s.label}_desktop.png` });
      }
      console.log(`  ✓ ${s.label}`);
    } catch (e) {
      console.log(`  ✗ ${s.label}: ${e.message}`);
      findings.push({ section: s.label, issue: `Screenshot failed: ${e.message}`, severity: 'Minor' });
    }
  }

  // ── Spot checks ─────────────────────────────────────────────────────
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);

  // Check each section for key elements
  const checks = [
    // Hero
    { label: 'Hero: Logo',              selector: 'nav img[alt="Gordon Eye & Face"]' },
    { label: 'Hero: Phone number',      selector: 'a[href="tel:914-820-0000"]' },
    { label: 'Hero: Book CTA',          selector: '.glossy-cta' },
    // Red box
    { label: 'RedBox: red bg div',      selector: '.bg-accent\\/60, .bg-accent\\/75' },
    // Legacy
    { label: 'Legacy: header',          selector: 'section h2' },
    { label: 'Legacy: InfiniteSlider',  selector: '.flex-shrink-0' },
    // About
    { label: 'About: Meet watermark',   selector: '#about span' },
    { label: 'About: LEARN MORE btn',   selector: '#about button' },
    // Treatments
    { label: 'Treatments: section',     selector: '#treatments' },
    // Booking
    { label: 'Booking: Dr photo',       selector: 'img[alt="Dr. James Gordon"]' },
    { label: 'Booking: CTA button',     selector: 'button:has-text("START YOUR TRANSFORMATION"), button:has-text("BOOK")' },
    // Difference
    { label: 'Difference: logo img',    selector: 'img[alt="The Dr. Gordon Difference"]' },
    // Testimonials
    { label: 'Testimonials: section',   selector: '#reviews' },
    { label: 'Testimonials: quote img', selector: 'img[alt="Quote"]' },
    // Hallmark
    { label: 'Hallmark: cert badges',   selector: 'img[alt="Castle Connolly Top Doctor"]' },
    // Press
    { label: 'Press: YouTube iframe',   selector: 'iframe[src*="youtube"]' },
    { label: 'Press: LEARN MORE btn',   selector: '#press button' },
    // Gallery
    { label: 'Gallery: before/after',   selector: '.gallery-card' },
    // Contact
    { label: 'Contact: science logo',   selector: 'img[alt="Where Science Meets Art"]' },
    { label: 'Contact: red separator',  selector: '.bg-primary.h-1' },
    { label: 'Contact: procedure input',selector: 'input[placeholder*="Procedure"], input[placeholder*="procedure"]' },
    { label: 'Contact: newsletter chk', selector: 'input[type="checkbox"]' },
    { label: 'Contact: phone link',     selector: '#contact a[href="tel:914-820-0000"]' },
    // Footer
    { label: 'Footer: element',         selector: 'footer' },
  ];

  for (const c of checks) {
    try {
      const count = await page.locator(c.selector).count();
      if (count === 0) {
        findings.push({ section: c.label, issue: `Element not found: ${c.selector}`, severity: 'Critical' });
        console.log(`  ✗ MISSING: ${c.label}`);
      } else {
        console.log(`  ✓ ${c.label} (${count})`);
      }
    } catch (e) {
      findings.push({ section: c.label, issue: `Check error: ${e.message}`, severity: 'Minor' });
    }
  }

  // Check rounded-full on CTA buttons
  const ctaBtns = await page.locator('button, a').filter({ hasText: /BOOK|LEARN MORE|START YOUR/i }).all();
  for (const btn of ctaBtns) {
    const cls = await btn.getAttribute('class') || '';
    const rounded = cls.includes('rounded-full');
    const text = (await btn.innerText()).trim().slice(0, 30);
    if (!rounded) findings.push({ section: `CTA: "${text}"`, issue: 'Missing rounded-full', severity: 'Minor' });
    else console.log(`  ✓ rounded-full: "${text}"`);
  }

  // Count press magazine items
  const pressImgs = await page.locator('#press .grid img').count();
  console.log(`  Press magazine count: ${pressImgs}`);
  if (pressImgs < 8) findings.push({ section: 'Press', issue: `Only ${pressImgs}/8 magazine images`, severity: 'Critical' });

  // Count testimonial reviews (dot indicators = number of reviews)
  const dots = await page.locator('#reviews button[aria-label*="Go to review"]').count();
  console.log(`  Testimonial review count: ${dots}`);
  if (dots !== 6) findings.push({ section: 'Testimonials', issue: `${dots}/6 reviews`, severity: 'Critical' });

  await ctx1440.close();

  // ── Tablet 768×1024 ───────────────────────────────────────────────────
  const ctx768 = await browser.newContext({ viewport: { width: 768, height: 1024 } });
  const pageTab = await ctx768.newPage();
  await pageTab.goto(URL, { waitUntil: 'networkidle', timeout: 60000 });
  await pageTab.waitForTimeout(2000);
  await pageTab.screenshot({ path: `${OUT}/responsive_tablet_768.png`, fullPage: true });
  console.log('  ✓ Tablet 768×1024 screenshot');

  // Check horizontal scroll at tablet
  const tabHScroll = await pageTab.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  if (tabHScroll) findings.push({ section: 'Responsive/Tablet', issue: 'Horizontal scroll detected at 768px', severity: 'Critical' });
  await ctx768.close();

  // ── Mobile 375×812 ────────────────────────────────────────────────────
  const ctx375 = await browser.newContext({ viewport: { width: 375, height: 812 } });
  const pageMob = await ctx375.newPage();
  await pageMob.goto(URL, { waitUntil: 'networkidle', timeout: 60000 });
  await pageMob.waitForTimeout(2000);
  await pageMob.screenshot({ path: `${OUT}/responsive_mobile_375.png`, fullPage: true });
  console.log('  ✓ Mobile 375×812 screenshot');

  const mobHScroll = await pageMob.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  if (mobHScroll) findings.push({ section: 'Responsive/Mobile', issue: 'Horizontal scroll detected at 375px', severity: 'Critical' });
  await ctx375.close();

  await browser.close();

  // ── Report ──────────────────────────────────────────────────────────
  console.log('\n══════════════════════════════════════════');
  console.log('  QA AUDIT REPORT');
  console.log('══════════════════════════════════════════');

  if (consoleErrors.length > 0) {
    console.log(`\n⚠ CONSOLE ERRORS (${consoleErrors.length}):`);
    consoleErrors.forEach(e => console.log('  •', e));
  } else {
    console.log('\n✓ No console errors');
  }

  if (findings.length === 0) {
    console.log('\n✓ All checks passed — SHIP\n');
  } else {
    const critical = findings.filter(f => f.severity === 'Critical');
    const minor = findings.filter(f => f.severity !== 'Critical');
    console.log(`\nFindings: ${findings.length} total (${critical.length} critical, ${minor.length} minor/cosmetic)\n`);
    findings.forEach(f => console.log(`  [${f.severity}] ${f.section}: ${f.issue}`));
    console.log(`\nRecommendation: ${critical.length > 0 ? 'NO-SHIP — blockers present' : 'SHIP — minor issues only'}`);
  }

  console.log(`\nScreenshots saved to: ${OUT}`);
  writeFileSync(`${OUT}/findings.json`, JSON.stringify({ consoleErrors, findings }, null, 2));
}

audit().catch(e => { console.error('Audit failed:', e); process.exit(1); });
