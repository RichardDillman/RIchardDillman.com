#!/usr/bin/env tsx
// The LinkedIn paste loop. LinkedIn has no write API for profiles, so the profile is updated by
// hand, and data/linkedin-live.json records what has been pasted.
//
//   pnpm linkedin              list the fields that differ from live, open them as a page,
//                              copy the first one to the clipboard
//   pnpm linkedin done         record the first pending field as live, copy the next
//   pnpm linkedin done <id>    record that field as live
//   pnpm linkedin copy <id>    copy that field
import { execFileSync } from 'child_process';
import { mkdirSync, writeFileSync } from 'fs';
import { homedir } from 'os';
import { join } from 'path';
import {
  buildFields,
  chars,
  pendingFields,
  readLive,
  recordOf,
  writeLive,
  type Field,
} from '../lib/linkedin';

const OUT = join(process.cwd(), 'drafts', 'linkedin');
const [cmd, arg] = process.argv.slice(2);

const fields = buildFields();
for (const f of fields) {
  if (f.limit && chars(f.text) > f.limit) {
    console.log(`❌ ${f.label} is ${chars(f.text)} characters, LinkedIn allows ${f.limit}`);
    process.exit(1);
  }
}

const byId = (id: string) => {
  const f = fields.find((x) => x.id === id);
  if (!f) {
    console.log(`❌ no field "${id}". Fields: ${fields.map((x) => x.id).join(', ')}`);
    process.exit(1);
  }
  return f;
};

const show = (f: Field) => {
  console.log(`→ ${f.label} (${f.id})\n  ${f.instruction}`);
  if (f.text) {
    execFileSync('pbcopy', { input: f.text });
    console.log(`  ${chars(f.text)} characters, on the clipboard.`);
  } else {
    console.log('  Nothing to paste.');
  }
};

if (cmd === 'copy') {
  show(byId(arg));
  process.exit(0);
}

if (cmd === 'done') {
  const pending = pendingFields();
  const f = arg ? byId(arg) : pending[0];
  if (!f) {
    console.log('✅ Nothing pending. LinkedIn matches the data.');
    process.exit(0);
  }
  writeLive({ ...readLive(), [f.id]: recordOf(f) });
  console.log(`✅ Recorded ${f.label} as live.`);
  const next = pendingFields();
  if (!next.length) {
    console.log('✅ Nothing left. Commit data/linkedin-live.json.');
  } else {
    console.log(`${next.length} left.\n`);
    show(next[0]);
  }
  process.exit(0);
}

if (cmd) {
  console.log(`❌ unknown command "${cmd}". Use: pnpm linkedin [done [id] | copy <id>]`);
  process.exit(1);
}

const pending = pendingFields();
if (!pending.length) {
  console.log('✅ Nothing pending. LinkedIn matches the data.');
  process.exit(0);
}

const md = [
  '# LinkedIn changes',
  '',
  `${pending.length} field(s) differ from what data/linkedin-live.json records as live, in the order to make them. After each one, run \`pnpm linkedin done\` to record it and copy the next.`,
  '',
  ...pending.flatMap((f) => [
    `## ${f.label}`,
    '',
    `*${f.instruction}*`,
    '',
    ...(f.text
      ? [
          `*${chars(f.text)} characters${f.limit ? ` of ${f.limit}` : ''}. Id \`${f.id}\`.*`,
          '',
          '```text',
          f.text,
          '```',
          '',
        ]
      : ['*Nothing to paste.*', '']),
  ]),
].join('\n');

mkdirSync(OUT, { recursive: true });
const readme = join(OUT, 'README.md');
writeFileSync(readme, md);
for (const f of pending) console.log(`• ${f.label}`);
console.log('');
try {
  execFileSync('python3', [join(homedir(), '.claude', 'scripts', 'render-preview.py'), readme], {
    stdio: 'inherit',
  });
} catch {
  console.log(`⚠️  Could not render the preview. The page source is ${readme}`);
}
show(pending[0]);
