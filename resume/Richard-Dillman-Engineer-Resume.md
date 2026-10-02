# Richard Dillman

**Fractional SEO Engineer • Technical SEO • Next.js • Web Performance**

Indianapolis, IN | (317) 586-2365 | <rdillman@gmail.com> | [richarddillman.com](https://richarddillman.com) | [linkedin.com/in/richarddillman](https://www.linkedin.com/in/richarddillman/) | [github.com/richarddillman](https://github.com/richarddillman)

## Summary

Hands-on engineer for high-traffic web platforms, specializing in technical SEO, performance, and Next.js. At Talent.com (5-8M pageviews/day), restored Google Jobs indexing from zero to 1.5M+ jobs a day, cut a failing PostgreSQL query from 15.8 seconds to 87 milliseconds, and raised test coverage from 59% to 91%. Earlier, grew organic traffic 10x at The Muse and raised ad viewability from 45% to 85% across Condé Nast's 30+ publications. Proves root cause with data before anyone changes code.

## Skills

**Languages and Frameworks:** TypeScript · JavaScript · HTML · CSS · Python · Bash · React · Next.js · Node.js · Accessibility (WCAG)\
**Data and APIs:** PostgreSQL · MySQL · Redis · Kafka · REST and GraphQL APIs\
**Infrastructure and Tooling:** AWS · Docker · Kubernetes · Nx · Jest · Playwright · Puppeteer · GitLab CI · CircleCI · Datadog · Grafana · Claude Code\
**SEO and Analytics:** Technical SEO · JSON-LD / Schema.org · Google Search Console · Google for Jobs · GTM · GA4 · Core Web Vitals · Lighthouse

## Work Experience

### Talent.com

#### Fractional SEO Engineer | Dec 2025 - Present

Embedded with a 10-engineer team: find the highest-cost problems, write the fix plan, and route each fix to the team's engineers or ship it directly.

- Restored Google Jobs indexing from zero to 1.5M+ new jobs a day by proving 15.9M rejections came from a daily quota, not a rate limit.
- Reduced a failing PostgreSQL query on a 600 GB table from 15.8 seconds to 87 milliseconds (181x) and found the stuck process blocking database cleanup.
- Traced a soft-404 spike of 39.5M URLs in Search Console to ~14.5M bot requests a day returning near-empty pages, then shipped the redirect and bot-detection fixes.
- Raised jobseeker test coverage from 59% to 91% and shipped a staged upgrade (Next.js 15, Nx 22, React 19, next-intl v4) with zero production regressions.
- Stopped releases from dropping 45.7% of apply clicks by keeping the server key stable across builds and loading it from AWS Secrets Manager.
- Corrected business analytics after finding scrapers made up 22.5% of traffic counted as human.

### The Muse

#### Senior Director of Engineering | Jan 2022 - Sep 2025

- Increased job applications per user 50% by redesigning search into a two-pane layout with inline browsing.
- Grew SEO visits 74K/month by replacing infinite scroll with server-side pagination.
- Raised Lighthouse Performance from 62 to 91 (Accessibility 100, SEO 96) by replatforming Company Profiles to Next.js.
- Increased job applies 10% and CTR 15% with dynamic apply forms integrated with multiple ATS partners for Google Jobs.
- Launched Maya, The Muse's first AI content discovery tool, adding 3,500 article readers a month across 24K+ articles.
- Architected a white-label, multi-tenant job search platform projected at $153K-$230K annual revenue per partner tenant.
- Increased ad revenue 15% by migrating to Raptive with improved layouts and formats.

#### Staff Engineer, Director of Application Development | Jun 2020 - Dec 2021

- Generated $994K in annual revenue by replacing a 10+ year-old ad system that predated Google Ad Manager with a modern display ad integration.
- Increased job tile clicks 21.9% and views per user 20% with a search UX refresh that passed Core Web Vitals.
- Extracted page templates from a legacy Tornado/Python monolith and rebuilt them as scalable services.

#### Staff Engineer | Mar 2019 - May 2020

- Grew organic SEO traffic 10x with JSON-LD structured data and performance refactors.
- Cut build times from 45 minutes to 75 seconds by modularizing repos and rebuilding the CI/CD pipelines.
- Cut sitewide load time by 4 seconds and reached 90%+ green Core Web Vitals.

#### Senior Application Engineer | Dec 2018 - Feb 2019

- Accelerated deployments 50% by replatforming the CMS and article renderer on Koa, React, and Docker.

### Condé Nast

#### Senior Software Engineer, Ad Tech and Monetization | Jul 2015 - Nov 2018

- Increased ad viewability from 45% to 85% by rebuilding ad infrastructure for 30+ global publications (Vogue, The New Yorker, Wired, GQ, Vanity Fair) serving 229M+ monthly users.
- Optimized monetization pipelines supporting 1B+ monthly video views.
- Sped up ad rendering by removing legacy jQuery dependencies and shrinking the bundle.
- Designed shared UI tooling and a plugin architecture adopted across editorial brands.

## Open-Source Projects

- **[seo-audit-mcp](https://github.com/RichardDillman/seo-audit-mcp):** MCP server for technical SEO audits of job boards: page analysis, site crawling, Lighthouse, sitemaps, and JobPosting schema validation.
- **[googlebot-simulator-mcp](https://github.com/RichardDillman/googlebot-simulator-mcp):** MCP server that crawls pages as Googlebot to verify bot detection and analytics tracking.
- **[innerVoice](https://github.com/RichardDillman/innerVoice):** MCP server for two-way messaging between Claude and Telegram.
