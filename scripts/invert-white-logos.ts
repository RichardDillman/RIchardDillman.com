import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const LOGOS_DIR = path.join(process.cwd(), 'public', 'images', 'logos');

// Files to process. Outputs go to <basename>.inverted.<ext>
const targets = [
  'self.png',
  'pitchfork.svg',
];

// A pixel is "near white" when every RGB channel exceeds this.
// Colored accents (e.g. SparkAmerica's symbol) sit well below this and are preserved.
const WHITE_THRESHOLD = 220;

async function invertWhitePng(filename: string): Promise<void> {
  const input = path.join(LOGOS_DIR, filename);
  const outputName = filename.replace(/\.png$/i, '.inverted.png');
  const output = path.join(LOGOS_DIR, outputName);

  const image = sharp(input).ensureAlpha();
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  if (channels !== 4) {
    throw new Error(`Expected 4 channels (RGBA) for ${filename}, got ${channels}`);
  }

  let swapped = 0;
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    // alpha at i+3 is preserved
    if (r >= WHITE_THRESHOLD && g >= WHITE_THRESHOLD && b >= WHITE_THRESHOLD) {
      data[i] = 0;
      data[i + 1] = 0;
      data[i + 2] = 0;
      swapped++;
    }
  }

  await sharp(data, { raw: { width, height, channels } })
    .png()
    .toFile(output);

  console.log(`  ${filename} → ${outputName} (${swapped} pixels swapped)`);
}

async function invertWhiteSvg(filename: string): Promise<void> {
  const input = path.join(LOGOS_DIR, filename);
  const outputName = filename.replace(/\.svg$/i, '.inverted.svg');
  const output = path.join(LOGOS_DIR, outputName);

  const src = await fs.readFile(input, 'utf8');

  // Replace common white color references with black. Leaves colored fills alone.
  const replacements: Array<[RegExp, string]> = [
    [/fill="#ffffff"/gi, 'fill="#000000"'],
    [/fill="#fff"/gi, 'fill="#000"'],
    [/fill="white"/gi, 'fill="black"'],
    [/fill:\s*#ffffff/gi, 'fill:#000000'],
    [/fill:\s*#fff(?![0-9a-f])/gi, 'fill:#000'],
    [/fill:\s*white/gi, 'fill:black'],
    [/stroke="#ffffff"/gi, 'stroke="#000000"'],
    [/stroke="#fff"/gi, 'stroke="#000"'],
    [/stroke="white"/gi, 'stroke="black"'],
    [/stroke:\s*#ffffff/gi, 'stroke:#000000'],
    [/stroke:\s*#fff(?![0-9a-f])/gi, 'stroke:#000'],
    [/stroke:\s*white/gi, 'stroke:black'],
  ];

  let out = src;
  let totalHits = 0;
  for (const [pattern, replacement] of replacements) {
    const matches = out.match(pattern);
    if (matches) totalHits += matches.length;
    out = out.replace(pattern, replacement);
  }

  await fs.writeFile(output, out);
  console.log(`  ${filename} → ${outputName} (${totalHits} color refs swapped)`);
}

async function main() {
  console.log('Inverting white pixels to black (preserving colored accents)...');
  console.log(`Threshold: RGB >= ${WHITE_THRESHOLD} on all channels`);
  console.log('');

  for (const target of targets) {
    try {
      if (target.toLowerCase().endsWith('.svg')) {
        await invertWhiteSvg(target);
      } else {
        await invertWhitePng(target);
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      console.error(`  ✗ ${target}: ${message}`);
    }
  }

  console.log('\nReview outputs at public/images/logos/*.inverted.*');
  console.log('If they look right, move them over the originals:');
  console.log('  cd public/images/logos');
  console.log('  for f in *.inverted.*; do mv "$f" "${f/.inverted/}"; done');
}

main().catch(console.error);
