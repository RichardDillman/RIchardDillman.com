// LinkedIn profile text that does not come from data/experience.ts. Role descriptions are built
// from each achievement's `linkedin` field there; this file holds only what has no home in the
// experience data. `pnpm linkedin` assembles both and lists the fields that differ from what is
// live on the profile (data/linkedin-live.json).

// Character limits LinkedIn enforces on each field.
export const LIMITS = { headline: 220, about: 2600, position: 2000 } as const;

export const headline = `
Staff Software Engineer at Talent.com | Former Senior Director of Engineering, The Muse | Technical SEO, Web Performance, Next.js | High-traffic platforms with millions of monthly users
`.trim();

export const about = `
I build high-traffic web platforms and the teams behind them, and I still ship the code myself.

At The Muse I rose from Senior Application Engineer to Senior Director of Engineering over seven years. I led a 15-engineer team, promoted 6 engineers to senior or lead roles, and launched on-site advertising that generated $994K in annualized new ad revenue without slowing the site. Earlier there I grew organic SEO traffic 10x and cut build times from 45 minutes to 75 seconds.

Today at Talent.com I find the highest-cost problems, prove the root cause with data, write the fix plan, and ship it. I restored Google Jobs indexing from zero to 1.5M+ new jobs a day, cut a failing PostgreSQL query from 15.8 seconds to 87 milliseconds, and raised test coverage from 59% to 91%. I also built the team's AI-assisted engineering platform on Claude Code, with multi-agent code review on every merge request.

Before that I raised ad viewability from 45% to 85% across Condé Nast's 30+ publications, including Vogue, The New Yorker and Wired.

What I'm good at
• Technical SEO and structured data at scale (Google for Jobs, JSON-LD, Search Console)
• Web performance and Core Web Vitals
• Ad tech and monetization (Google Ad Manager, Prebid)
• Platform modernization (TypeScript, React, Next.js, Node.js, Nx)
• Growing engineers into senior and lead roles

Portfolio and case studies at richarddillman.com
`.trim();

// Pinned first, in this order. LinkedIn shows the top five.
export const skills = `
Engineering Leadership
Technical SEO
Web Performance Optimization
Next.js
React.js
TypeScript
Node.js
Core Web Vitals
Structured Data (JSON-LD / Schema.org)
Google Search Console
Google for Jobs
Ad Tech
Google Ad Manager
Prebid
PostgreSQL
Redis
Kafka
GraphQL
REST APIs
Python
Amazon Web Services (AWS)
Kubernetes
Docker
Nx
Jest
Playwright
Accessibility (WCAG)
CI/CD
Datadog
Grafana
Google Tag Manager
Google Analytics 4
AI-Assisted Development
Claude Code
Mentoring
Technical Strategy
Product Requirements (PRDs)
`
  .trim()
  .split('\n');

export const pinnedSkills = [
  'Engineering Leadership',
  'Technical SEO',
  'Web Performance Optimization',
  'Next.js',
  'TypeScript',
];

// Keyed `company|role title`. A line printed after the scale line and before the bullets.
export const roleIntro: Record<string, string> = {
  'Talent.com|Staff Software Engineer':
    "Embedded with a 10-engineer team. I find the highest-cost problems, write the fix plan, and route each fix to the team's engineers or ship it directly.",
};

// Keyed `company|role title`. The whole description, used instead of building one from
// achievements. Everyday Health keeps the text already on LinkedIn, minus "and Core Web Vitals"
// (Google introduced them in 2020, after the role ended).
export const roleVerbatim: Record<string, string> = {
  'Everyday Health|Front End Engineer': `
Built and optimized consumer health platforms reaching 30M+ monthly unique users, delivering performance, accessibility, and monetization improvements across editorial and ad-driven products.

• Reduced page load time by 54% and cut total network requests by 53%, improving user engagement
• Increased ad click-through rate by 86% while reducing impressions by 29%, driving higher-value programmatic yield
• Engineered responsive, mobile-first architecture using SASS (BEM), Bootstrap, and modular JavaScript, accelerating delivery across product teams
• Developed internal tools used across Product, Design, and Content teams to standardize UI and ad delivery workflows
• Led integrations with key monetization partners (Google, Swoop, Taboola), ensuring performance compliance and ad targeting fidelity
• Mentored junior developers and presented emerging frontend practices in internal engineering forums and guilds
`.trim(),
};

// Companies in data/experience.ts that LinkedIn keeps as-is. No field is built for them.
export const untouchedCompanies = ['CatalpaSoft'];

// Changes with nothing to paste. Each shows as pending until recorded done.
export const actions: { id: string; label: string; text: string }[] = [
  {
    id: 'open-to-work',
    label: 'Open to Work: switch to Recruiters only',
    text: 'Profile, Open to, edit Open to Work, set visibility to Recruiters only. That also removes the green photo frame.',
  },
  {
    id: 'delete-dillman-engineering',
    label: 'Dillman Engineering: delete this position',
    text: 'Delete the Dillman Engineering (Owner) position. The LLC has no other clients, and its description implies it does.',
  },
];

// Keyed `company|role title`. Set when the position is created on LinkedIn.
export const employmentType: Record<string, string> = {
  'Talent.com|Staff Software Engineer': 'Contract',
};
