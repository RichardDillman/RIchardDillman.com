import { chromium } from 'playwright';
import fs from 'fs/promises';
import path from 'path';

interface PageCapture {
  type: string; // e.g. 'home', 'search', 'job'
  url: string;
  waitForSelector?: string;
}

interface Site {
  slug: string; // must match slug in data/logos.ts
  name: string;
  pages: PageCapture[];
}

const sites: Site[] = [
  {
    slug: 'talent-com',
    name: 'Talent.com',
    pages: [
      { type: 'home', url: 'https://www.talent.com/' },
      { type: 'jobs', url: 'https://www.talent.com/jobs?l=United+States' },
      { type: 'salary', url: 'https://www.talent.com/salary?job=Engineer&location=' },
      { type: 'tax-calculator', url: 'https://www.talent.com/tax-calculator' },
      { type: 'view', url: 'https://www.talent.com/view?id=612188281793676244' },
    ],
  },
];

async function capturePage(site: Site, capture: PageCapture): Promise<void> {
  const outputPath = path.join(
    process.cwd(),
    'public',
    'images',
    'portfolio',
    `${site.slug}-${capture.type}.png`
  );

  // Skip if already captured
  try {
    await fs.access(outputPath);
    console.log(`\nSkipping ${site.name} / ${capture.type} (already exists)`);
    return;
  } catch {
    // file does not exist, proceed
  }

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1200, height: 1200 },
    userAgent:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  });
  const page = await context.newPage();

  try {
    console.log(`\nCapturing: ${site.name} / ${capture.type}`);
    console.log(`   URL: ${capture.url}`);

    await page.goto(capture.url, { waitUntil: 'domcontentloaded', timeout: 60000 });

    // Tolerate networkidle timeout — ad tags / analytics beacons often never settle.
    try {
      await page.waitForLoadState('networkidle', { timeout: 20000 });
    } catch {
      console.log('   networkidle never reached — proceeding after short paint wait');
      await page.waitForTimeout(3000);
    }

    if (capture.waitForSelector) {
      await page.waitForSelector(capture.waitForSelector, { timeout: 15000 });
    }

    await page.screenshot({
      path: outputPath,
      clip: { x: 0, y: 0, width: 1200, height: 1200 },
    });

    console.log(`   Saved: ${outputPath}`);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`   Error capturing ${site.name} / ${capture.type}:`, message);
  } finally {
    await browser.close();
  }
}

async function main() {
  console.log('Starting live screenshot capture...');

  const outputDir = path.join(process.cwd(), 'public', 'images', 'portfolio');
  await fs.mkdir(outputDir, { recursive: true });
  console.log(`Output directory: ${outputDir}`);

  for (const site of sites) {
    for (const capture of site.pages) {
      await capturePage(site, capture);
      await new Promise((resolve) => setTimeout(resolve, 1500));
    }
  }

  console.log('\nDone.');
}

main().catch(console.error);
