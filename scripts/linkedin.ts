#!/usr/bin/env tsx
// LinkedIn has no write API for profiles, so updates are pasted by hand and
// data/linkedin-live.json records what has been pasted.
//
//   pnpm linkedin        open a page listing only the fields that differ from live, each with a
//                        Copy button, in the order to make them
//   pnpm linkedin done   record every listed field as live (run once, after pasting them all)
import { execFileSync } from 'child_process';
import { mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';
import { buildFields, chars, pendingFields, readLive, recordOf, writeLive } from '../lib/linkedin';

const PAGE = join(process.cwd(), 'drafts', 'linkedin', 'index.html');
const cmd = process.argv[2];

for (const f of buildFields()) {
  if (f.limit && chars(f.text) > f.limit) {
    console.log(`❌ ${f.label} is ${chars(f.text)} characters, LinkedIn allows ${f.limit}`);
    process.exit(1);
  }
}

const pending = pendingFields();
if (!pending.length) {
  console.log('✅ Nothing to change. LinkedIn matches the data.');
  process.exit(0);
}

if (cmd === 'done') {
  const live = readLive();
  for (const f of pending) live[f.id] = recordOf(f);
  writeLive(live);
  console.log(`✅ Recorded ${pending.length} field(s) as live. Commit data/linkedin-live.json.`);
  process.exit(0);
}

if (cmd) {
  console.log(`❌ unknown command "${cmd}". Use: pnpm linkedin [done]`);
  process.exit(1);
}

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const items = pending
  .map(
    (f, i) => `<section>
  <h2>${i + 1}. ${esc(f.label)}</h2>
  <p class="how">${esc(f.instruction)}</p>
  ${
    f.text
      ? `<div class="bar"><button data-i="${i}">Copy</button><span>${chars(f.text)} characters${f.limit ? ` of ${f.limit}` : ''}</span></div>
  <pre id="t${i}">${esc(f.text)}</pre>`
      : '<p class="none">Nothing to paste.</p>'
  }
  ${f.skills ? `<p class="how"><b>Skills for this position:</b> ${f.skills.map(esc).join(', ')}</p>` : ''}
</section>`
  )
  .join('\n');

const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>LinkedIn changes</title>
<style>
:root{--bg:#fff;--fg:#1a1a1a;--muted:#666;--box:#f4f4f4;--line:#ddd;--btn:#0a66c2}
@media (prefers-color-scheme:dark){:root{--bg:#161616;--fg:#eee;--muted:#aaa;--box:#222;--line:#333;--btn:#4b9be8}}
body{background:var(--bg);color:var(--fg);font:16px/1.5 system-ui,sans-serif;max-width:760px;margin:0 auto;padding:24px 16px}
h1{font-size:1.5rem;margin:0 0 4px}h2{font-size:1.1rem;margin:0 0 4px}
.lead,.how,.bar span,.none{color:var(--muted)}section{border-top:1px solid var(--line);padding:20px 0}
.bar{display:flex;gap:12px;align-items:center;margin:8px 0}
button{background:var(--btn);color:#fff;border:0;border-radius:6px;padding:6px 16px;font:inherit;cursor:pointer}
button.ok{background:#2e7d32}
pre{background:var(--box);padding:12px;border-radius:6px;white-space:pre-wrap;word-wrap:break-word;font:14px/1.5 system-ui,sans-serif;margin:0}
</style></head><body>
<h1>LinkedIn changes</h1>
<p class="lead">${pending.length} change(s), in order. Copy each one into LinkedIn. When you are done with all of them, tell Claude "done".</p>
${items}
<script>
document.querySelectorAll('button[data-i]').forEach(b=>b.addEventListener('click',async()=>{
  await navigator.clipboard.writeText(document.getElementById('t'+b.dataset.i).textContent);
  b.textContent='Copied';b.classList.add('ok');
}));
</script>
</body></html>
`;

mkdirSync(join(PAGE, '..'), { recursive: true });
writeFileSync(PAGE, html);
for (const f of pending) console.log(`• ${f.label}`);
execFileSync('open', [PAGE]);
console.log(`\nOpened ${PAGE}`);
