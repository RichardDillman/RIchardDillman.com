#!/usr/bin/env tsx
import { chromium } from 'playwright';
import { readFileSync } from 'fs';
import { join } from 'path';
import { remark } from 'remark';
import html from 'remark-html';

const RESUME_DIR = join(process.cwd(), 'resume');

// Accept filename as CLI argument (without .md extension)
const resumeName = process.argv[2] || 'Richard-Dillman-Resume';
const MARKDOWN_FILE = join(RESUME_DIR, `${resumeName}.md`);
const OUTPUT_PDF = join(RESUME_DIR, `${resumeName}.pdf`);

async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).process(markdown);
  return result.toString();
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
    @page {
      size: letter;
      margin: 1in;
    }

    body {
      font-family: 'Arial', 'Calibri', sans-serif;
      font-size: 10.5pt;
      line-height: 1.42;
      color: #000;
      max-width: 100%;
      margin: 0;
      padding: 0;
    }

    h1 {
      font-size: 24pt;
      font-weight: bold;
      margin: 0 0 4pt 0;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 0.5pt;
      color: #14b8a6;
    }

    h1 + p {
      text-align: center;
      color: #14b8a6;
      margin-bottom: 2pt;
      font-size: 11.5pt;
      font-weight: 500;
    }

    h1 + p strong {
      color: #14b8a6 !important;
      font-size: 11.5pt !important;
      font-weight: 600 !important;
    }

    /* Subtitle/tagline styling */
    p:first-of-type strong {
      color: #14b8a6 !important;
      font-size: 11.5pt !important;
    }

    h1 + p + p {
      text-align: center;
      margin-top: 0;
      margin-bottom: 2pt;
    }

    h1 + p + p + p {
      text-align: center;
      margin-top: 0;
    }

    h2 {
      font-size: 12.5pt;
      font-weight: bold;
      margin: 16pt 0 10pt 0;
      border-bottom: 2px solid #14b8a6;
      padding-bottom: 3pt;
      text-transform: uppercase;
      text-align: center;
      letter-spacing: 0.5pt;
      color: #14b8a6;
    }

    h3 {
      font-size: 11.5pt;
      font-weight: bold;
      margin: 15pt 0 6pt 0;
      color: #14b8a6;
      page-break-before: auto;
      text-transform: uppercase;
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    }

    h3 .date {
      font-weight: normal;
      color: #000;
      font-size: 10.75pt;
    }

    /* Force Condé Nast section to start on new page */
    h3:nth-of-type(2) {
      page-break-before: always;
      margin-top: 0;
    }

    h4 {
      font-size: 10.75pt;
      font-weight: bold;
      margin: 10pt 0 5pt 0;
      font-style: italic;
      color: #14b8a6;
    }

    p {
      margin: 0 0 8pt 0;
    }

    strong {
      font-weight: bold;
    }

    ul {
      margin: 5pt 0 10pt 0;
      padding-left: 20pt;
      list-style-type: none;
    }

    li {
      margin-bottom: 5pt;
      position: relative;
      padding-left: 0;
    }

    li::before {
      content: "•";
      position: absolute;
      left: -15pt;
      font-weight: bold;
    }

    a {
      color: #000;
      text-decoration: none;
    }

    hr {
      border: none;
      border-top: 1px solid #ccc;
      margin: 8pt 0;
    }

    span::after {
      content: "\\A";
      white-space: pre;
    }

    /* Header styling */
    h1 + p strong {
      font-size: 10pt;
      color: #333;
    }

    /* Contact info styling */
    h1 ~ p:first-of-type {
      font-size: 10pt;
      margin-bottom: 0;
      text-align: center;
    }

    h1 + p + p {
      font-size: 10pt;
      margin-top: 0;
      margin-bottom: 4pt;
      text-align: center;
    }

    /* Two-column competencies */
    h2:has(+ p > strong:first-child) + p {
      column-count: 2;
      column-gap: 20pt;
      margin-bottom: 12pt;
    }

    /* Allow page breaks but prevent orphans/widows */
    h2 {
      page-break-after: auto;
      page-break-inside: avoid;
    }

    h3, h4 {
      page-break-after: auto;
      page-break-inside: avoid;
    }

    p {
      orphans: 2;
      widows: 2;
    }

    ul {
      page-break-inside: auto;
    }

    li {
      page-break-inside: avoid;
    }

    /* Ensure content fits on pages */
    @media print {
      body {
        font-size: 11pt;
        line-height: 1.4;
      }

      h2 {
        text-align: center;
        margin: 16pt 0 8pt 0;
      }

      h3 {
        margin: 14pt 0 6pt 0;
      }

      ul {
        margin: 5pt 0 10pt 0;
      }

      li {
        margin-bottom: 5pt;
      }
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
      top: '0.5in',
      right: '0.75in',
      bottom: '0.5in',
      left: '0.75in',
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
