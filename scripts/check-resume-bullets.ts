#!/usr/bin/env tsx
// Every bullet on a resume must be the `engineer` or `director` line of an achievement in the
// same company and role in data/experience.ts. The reverse is not checked: tapering cuts
// eligible lines for space.
import { readFileSync } from 'fs';
import { join } from 'path';
import { experiences } from '../data/experience';

const RESUMES = {
  engineer: 'Richard-Dillman-Engineer-Resume',
  director: 'Richard-Dillman-Director-Resume',
} as const;

// Resume headings write "Ad Tech and Monetization" where the data has "Ad Tech, Monetization".
const norm = (s: string) =>
  s
    .toLowerCase()
    .replace(/\band\b/g, ' ')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

let failures = 0;

for (const e of experiences) {
  for (const r of e.roles) {
    for (const a of r.achievements) {
      if ((a.engineer || a.director) && !a.tier) {
        failures++;
        console.log(`❌ ${e.company} / ${r.title}: eligible achievement has no tier:\n   ${a.text}`);
      }
    }
  }
}

for (const [kind, name] of Object.entries(RESUMES) as [keyof typeof RESUMES, string][]) {
  const lines = readFileSync(join(process.cwd(), 'resume', `${name}.md`), 'utf8').split('\n');
  let company = '';
  let role = '';
  let checked = 0;

  for (const line of lines) {
    if (line.startsWith('## ')) company = role = '';
    if (line.startsWith('### ')) company = line.slice(4).split(' | ')[0];
    if (line.startsWith('#### ')) role = line.slice(5).split(' | ')[0];
    if (!line.startsWith('- ') || !company || !role) continue;

    const bullet = line.slice(2);
    const roleData = experiences
      .find((e) => e.company === company)
      ?.roles.find((r) => norm(r.title) === norm(role));
    checked++;

    if (!roleData) {
      failures++;
      console.log(`❌ ${kind}: no role "${role}" at "${company}" in data/experience.ts`);
    } else if (!roleData.achievements.some((a) => a[kind] === bullet)) {
      failures++;
      console.log(`❌ ${kind}: ${company} / ${role}: no achievement has this ${kind} line:\n   ${bullet}`);
    }
  }

  console.log(`${kind}: checked ${checked} bullets`);
}

if (failures) {
  console.log(`\n${failures} bullet(s) do not match data/experience.ts`);
  process.exit(1);
}
console.log('✅ Every resume bullet matches data/experience.ts');
