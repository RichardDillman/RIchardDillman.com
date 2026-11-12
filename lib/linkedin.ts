// Builds every LinkedIn field from data/experience.ts and data/linkedin.ts, and compares each one
// with data/linkedin-live.json, the record of what is pasted on the profile now. Used by
// scripts/linkedin.ts (the paste loop) and scripts/check-resume-bullets.ts (the stale warning).
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { experiences } from '../data/experience';
import {
  LIMITS,
  about,
  actions,
  employmentType,
  headline,
  pinnedSkills,
  roleIntro,
  roleVerbatim,
  skills,
  untouchedCompanies,
} from '../data/linkedin';

export interface Field {
  id: string;
  label: string;
  // What to set or do, shown above the paste box.
  instruction: string;
  // The text to paste. Empty for an action with nothing to paste.
  text: string;
  limit?: number;
}

const LIVE = join(process.cwd(), 'data', 'linkedin-live.json');

const slug = (s: string) =>
  s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

// The site writes "Job search marketplace: 12M users". LinkedIn reads better as a sentence.
const scaleSentence = (scale: string) => {
  const i = scale.indexOf(': ');
  return i < 0 ? `${scale}.` : `${scale.slice(0, i)} (${scale.slice(i + 2)}).`;
};

export const chars = (s: string) => [...s].length;

export function buildFields(): Field[] {
  const fields: Field[] = [];
  const action = (id: string) => {
    const a = actions.find((x) => x.id === id);
    if (!a) throw new Error(`data/linkedin.ts: no action "${id}"`);
    fields.push({ id: a.id, label: a.id.replace(/-/g, ' '), instruction: a.text, text: '' });
  };

  action('open-to-work');
  fields.push({
    id: 'headline',
    label: 'Headline',
    instruction: 'Intro section.',
    text: headline,
    limit: LIMITS.headline,
  });
  fields.push({
    id: 'about',
    label: 'About',
    instruction: 'About section.',
    text: about,
    limit: LIMITS.about,
  });
  action('delete-dillman-engineering');

  for (const e of experiences) {
    if (untouchedCompanies.includes(e.company)) continue;
    e.roles.forEach((r, roleIndex) => {
      const key = `${e.company}|${r.title}`;
      let text = roleVerbatim[key];
      if (text === undefined) {
        const bullets = r.achievements
          .filter((a) => a.linkedin)
          .map((a) => {
            const li = a.linkedin as { line: 'engineer' | 'director'; position: number };
            const line = a[li.line];
            if (!line)
              throw new Error(`${key}: linkedin uses the empty ${li.line} line of:\n   ${a.text}`);
            return { position: li.position, line };
          })
          .sort((a, b) => a.position - b.position)
          .map((b) => `• ${b.line}`);
        const head = [
          roleIndex === 0 && e.scale ? scaleSentence(e.scale) : '',
          roleIntro[key] ?? '',
        ]
          .filter(Boolean)
          .join('\n\n');
        text = [head, bullets.join('\n')].filter(Boolean).join('\n\n');
      }
      const type = employmentType[key];
      fields.push({
        id: `${slug(e.company)}--${slug(r.title)}`,
        label: `${e.company}: ${r.title}`,
        instruction: `Title "${r.title}". ${r.period.replace(' - ', ' to ')}.${type ? ` Employment type ${type}.` : ''} Replace the description.`,
        text,
        limit: LIMITS.position,
      });
    });
  }

  fields.push({
    id: 'skills',
    label: 'Skills',
    instruction: `Add any missing, one at a time. Pin ${pinnedSkills.join(', ')} as the top five.`,
    text: skills.join('\n'),
  });
  for (const id of actions.map((a) => a.id)) {
    if (!fields.some((f) => f.id === id)) action(id);
  }
  return fields;
}

// What is recorded as live, per field id. An action records "done".
export const readLive = (): Record<string, string> => JSON.parse(readFileSync(LIVE, 'utf8'));

export const writeLive = (live: Record<string, string>) =>
  writeFileSync(LIVE, `${JSON.stringify(live, null, 2)}\n`);

// The record for a field: its instruction carries title, dates and type, so a date change is stale too.
export const recordOf = (f: Field) => (f.text ? `${f.instruction}\n\n${f.text}` : 'done');

export const pendingFields = () => {
  const live = readLive();
  return buildFields().filter((f) => live[f.id] !== recordOf(f));
};
