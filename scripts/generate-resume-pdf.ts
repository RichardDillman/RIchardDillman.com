#!/usr/bin/env tsx
import { chromium } from 'playwright';
import { readFileSync } from 'fs';
import { join } from 'path';
import { remark } from 'remark';
import html from 'remark-html';

const RESUME_DIR = join(process.cwd(), 'resume');

// Accept filename as CLI argument (without .md extension)
const resumeName = process.argv[2] || 'Richard-Dillman-Engineer-Resume';
const MARKDOWN_FILE = join(RESUME_DIR, `${resumeName}.md`);
const OUTPUT_PDF = join(RESUME_DIR, `${resumeName}.pdf`);

async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).process(markdown);
  return splitRoleDates(result.toString());
}

// Markdown has no right-aligned column, so a role heading is written as
// `#### Title | Date` and split here into a title and a right-aligned date.
function splitRoleDates(htmlContent: string): string {
  return htmlContent.replace(
    /<h4>(.*) \| ([^|]*)<\/h4>/g,
    '<h4><span class="role">$1</span><span class="date">$2</span></h4>'
  );
}

function wrapHtmlWithStyles(htmlContent: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Richard Dillman - Resume</title>
  <style>
    body {
      font-family: 'Helvetica Neue', 'Arial', sans-serif;
      font-size: 9.75pt;
      line-height: 1.38;
      color: #222;
      margin: 0;
      padding: 0;
    }

    h1 {
      font-family: 'Georgia', 'Times New Roman', serif;
      font-size: 24pt;
      font-weight: normal;
      text-align: center;
      margin: 0 0 4pt 0;
      color: #111;
    }

    /* Headline */
    h1 + p {
      text-align: center;
      font-size: 10.5pt;
      color: #111;
      margin: 0 0 3pt 0;
    }

    /* Contact line */
    h1 + p + p {
      text-align: center;
      font-size: 9pt;
      color: #333;
      margin: 0 0 10pt 0;
    }

    h2 {
      font-family: 'Georgia', 'Times New Roman', serif;
      font-size: 12.5pt;
      font-weight: normal;
      color: #111;
      margin: 12pt 0 6pt 0;
      padding-bottom: 3pt;
      border-bottom: 1px solid #999;
      break-after: avoid;
    }

    /* Company */
    h3 {
      font-size: 10.25pt;
      font-weight: 600;
      color: #111;
      margin: 10pt 0 1pt 0;
      break-after: avoid;
    }

    h2 + h3 {
      margin-top: 4pt;
    }

    /* Role title with right-aligned dates */
    h4 {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      font-size: 9.75pt;
      font-weight: normal;
      color: #333;
      margin: 4pt 0 2pt 0;
      break-after: avoid;
    }

    h3 + h4 {
      margin-top: 0;
    }

    h4 .date {
      white-space: nowrap;
      padding-left: 12pt;
    }

    p {
      margin: 0 0 6pt 0;
    }

    ul {
      margin: 2pt 0 6pt 0;
      padding-left: 14pt;
      list-style: none;
    }

    li {
      position: relative;
      margin-bottom: 2pt;
      break-inside: avoid;
    }

    li::before {
      content: "\\00B7";
      position: absolute;
      left: -10pt;
      font-weight: bold;
    }

    a {
      color: inherit;
      text-decoration: none;
    }
  </style>
</head>
<body>
${htmlContent}
</body>
</html>
  `.trim();
}

async function generatePDF() {
  console.log('📄 Reading markdown resume...');
  const markdown = readFileSync(MARKDOWN_FILE, 'utf-8');

  console.log('🔄 Converting markdown to HTML...');
  const htmlContent = await markdownToHtml(markdown);
  const styledHtml = wrapHtmlWithStyles(htmlContent);

  console.log('🌐 Launching browser...');
  const browser = await chromium.launch();
  const page = await browser.newPage();

  console.log('📝 Rendering HTML...');
  await page.setContent(styledHtml);

  console.log('🖨️  Generating PDF...');
  await page.pdf({
    path: OUTPUT_PDF,
    format: 'Letter',
    printBackground: true,
    margin: {
      top: '0.55in',
      right: '0.6in',
      bottom: '0.55in',
      left: '0.6in',
    },
  });

  await browser.close();

  console.log('✅ PDF generated successfully!');
  console.log(`📂 Location: ${OUTPUT_PDF}`);
}

// Run the generator
generatePDF().catch((error) => {
  console.error('❌ Error generating PDF:', error);
  process.exit(1);
});
