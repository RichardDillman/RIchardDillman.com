import { chromium } from 'playwright';
import fs from 'fs/promises';
import path from 'path';

interface Website {
  name: string;
  url: string;
  endYear: string;
  slug: string;
}

// Parse career history to extract websites and dates
const websites: Website[] = [
  // 1999-2005: Indiana Department of Health
  { name: 'Indiana Department of Health', url: 'https://www.in.gov/health/', endYear: '2005', slug: 'indiana-health' },

  // 2005-2007
  { name: 'Indiana Heart Gallery', url: 'https://www.indianaadoptionprogram.org/indianas-waiting-children/', endYear: '2007', slug: 'indiana-heart-gallery' },
  { name: 'International Medical Group', url: 'https://www.imglobal.com/', endYear: '2007', slug: 'img-global' },
  { name: 'RASK Snow Removal', url: 'https://www.raskcorp.com/', endYear: '2007', slug: 'rask-corp' },
  { name: 'Framing 4 Yourself', url: 'https://framing4yourself.com/', endYear: '2007', slug: 'framing-4-yourself' },

  // 2007-2010
  { name: 'State of Indiana', url: 'https://www.in.gov/', endYear: '2010', slug: 'state-of-indiana' },

  // 2010-2011
  { name: 'The Shade Store', url: 'https://www.theshadestore.com/', endYear: '2011', slug: 'the-shade-store' },

  // 2012-2015
  { name: 'Everyday Health', url: 'https://www.everydayhealth.com', endYear: '2015', slug: 'everyday-health' },
  { name: 'What to Expect', url: 'https://www.whattoexpect.com/', endYear: '2015', slug: 'what-to-expect' },
  { name: 'MedPage Today', url: 'https://www.medpagetoday.com/', endYear: '2015', slug: 'medpage-today' },
  { name: 'Diabetes Daily', url: 'https://www.diabetesdaily.com', endYear: '2015', slug: 'diabetes-daily' },
  { name: 'Jillian Michaels', url: 'https://www.jillianmichaels.com/', endYear: '2015', slug: 'jillian-michaels' },
  { name: 'SparkAmerica', url: 'https://sparkamerica.com/', endYear: '2015', slug: 'spark-america' },

  // 2015-2018: Condé Nast
  { name: 'Architectural Digest', url: 'https://www.ad.com/', endYear: '2018', slug: 'architectural-digest' },
  { name: 'Allure', url: 'https://www.allure.com/', endYear: '2018', slug: 'allure' },
  { name: 'Ars Technica', url: 'https://arstechnica.com/', endYear: '2018', slug: 'ars-technica' },
  { name: 'Bon Appétit', url: 'https://www.bonappetit.com/', endYear: '2018', slug: 'bon-appetit' },
  { name: 'Condé Nast Traveler', url: 'https://www.cntraveler.com/', endYear: '2018', slug: 'conde-nast-traveler' },
  { name: 'Epicurious', url: 'https://www.epicurious.com', endYear: '2018', slug: 'epicurious' },
  { name: 'Glamour', url: 'https://www.glamour.com', endYear: '2018', slug: 'glamour' },
  { name: 'GQ', url: 'https://www.gq.com', endYear: '2018', slug: 'gq' },
  { name: 'Pitchfork', url: 'https://www.pitchfork.com', endYear: '2018', slug: 'pitchfork' },
  { name: 'Self', url: 'https://www.self.com', endYear: '2018', slug: 'self' },
  { name: 'Teen Vogue', url: 'https://www.teenvogue.com', endYear: '2018', slug: 'teen-vogue' },
  { name: 'Them', url: 'https://www.them.us', endYear: '2018', slug: 'them' },
  { name: 'The New Yorker', url: 'https://www.newyorker.com/', endYear: '2018', slug: 'the-new-yorker' },
  { name: 'Vanity Fair', url: 'https://www.vanityfair.com', endYear: '2018', slug: 'vanity-fair' },
  { name: 'Vogue', url: 'https://www.vogue.com', endYear: '2018', slug: 'vogue' },
  { name: 'Wired', url: 'https://www.wired.com', endYear: '2018', slug: 'wired' },

  // 2018-2025
  { name: 'The Muse', url: 'https://www.themuse.com/', endYear: '2025', slug: 'the-muse' },
  { name: 'Fairy God Boss', url: 'https://fairygodboss.com/', endYear: '2025', slug: 'fairy-god-boss' },
  { name: 'Purpose Jobs', url: 'https://www.purpose.jobs/', endYear: '2025', slug: 'purpose-jobs' },
];

async function captureScreenshot(website: Website): Promise<void> {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1200, height: 1200 },
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  });

  const page = await context.newPage();

  try {
    // Construct Wayback Machine URL
    const waybackUrl = `https://web.archive.org/web/${website.endYear}1231/${website.url}`;

    console.log(`\n📸 Capturing: ${website.name}`);
    console.log(`   URL: ${waybackUrl}`);

    // Navigate to archived page
    await page.goto(waybackUrl, {
      waitUntil: 'domcontentloaded',
      timeout: 60000
    });

    // Wait for page to become fully interactive and completely finished loading
    console.log('   ⏳ Waiting for page to fully load (networkidle)...');
    await page.waitForLoadState('networkidle', { timeout: 60000 });
    console.log('   ✓ Page fully loaded');

    // Remove or hide Wayback Machine toolbar
    await page.evaluate(() => {
      const toolbar = document.getElementById('wm-ipp-base');
      if (toolbar) {
        toolbar.style.display = 'none';
      }
    });

    // Take screenshot of visible area (1200x1200)
    const outputPath = path.join(
      process.cwd(),
      'public',
      'images',
      'portfolio',
      `${website.slug}-${website.endYear}.png`
    );

    await page.screenshot({
      path: outputPath,
      clip: { x: 0, y: 0, width: 1200, height: 1200 }
    });

    console.log(`   ✅ Saved: ${outputPath}`);

  } catch (error: any) {
    console.error(`   ❌ Error capturing ${website.name}:`, error.message);
  } finally {
    await browser.close();
  }
}

async function main() {
  console.log('🚀 Starting portfolio screenshot capture...\n');

  // Create output directory
  const outputDir = path.join(process.cwd(), 'public', 'images', 'portfolio');
  await fs.mkdir(outputDir, { recursive: true });
  console.log(`📁 Output directory: ${outputDir}\n`);

  console.log(`📊 Total websites: ${websites.length}\n`);

  const failedSites: { name: string; url: string; year: string; error: string }[] = [];
  const successfulSites: string[] = [];

  // Capture screenshots sequentially to avoid overwhelming the Wayback Machine
  for (const website of websites) {
    try {
      await captureScreenshot(website);
      successfulSites.push(website.name);
    } catch (error: any) {
      failedSites.push({
        name: website.name,
        url: website.url,
        year: website.endYear,
        error: error.message
      });
      console.log(`   ⚠️  Will need manual capture`);
    }

    // Small delay between requests to be respectful
    await new Promise(resolve => setTimeout(resolve, 2000));
  }

  console.log('\n✨ Portfolio screenshot capture complete!');
  console.log(`📁 Screenshots saved to: ${outputDir}`);
  console.log(`\n📊 Summary:`);
  console.log(`   ✅ Successful: ${successfulSites.length}`);
  console.log(`   ❌ Failed: ${failedSites.length}`);

  if (failedSites.length > 0) {
    const failedListPath = path.join(process.cwd(), 'docs', 'failed-screenshots.md');
    const failedList = `# Sites Requiring Manual Screenshot Capture\n\n` +
      `Generated: ${new Date().toISOString()}\n\n` +
      `The following ${failedSites.length} sites could not be captured automatically from the Wayback Machine:\n\n` +
      failedSites.map((site, i) =>
        `${i + 1}. **${site.name}** (${site.year})\n` +
        `   - URL: ${site.url}\n` +
        `   - Wayback: https://web.archive.org/web/${site.year}1231/${site.url}\n` +
        `   - Error: ${site.error}\n`
      ).join('\n') +
      `\n## Manual Capture Instructions\n\n` +
      `For each failed site:\n` +
      `1. Visit the Wayback Machine URL above\n` +
      `2. Find a working snapshot near the end date\n` +
      `3. Manually capture a 1200x1200 screenshot\n` +
      `4. Save to \`/public/images/portfolio/{slug}-{year}.png\`\n`;

    await fs.writeFile(failedListPath, failedList);
    console.log(`\n📝 Failed sites list saved to: ${failedListPath}`);
  }
}

main().catch(console.error);
