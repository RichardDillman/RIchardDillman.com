# Richard Dillman

**Fractional SEO Engineer • Technical SEO • Next.js • Web Performance**

Indianapolis, IN | (317) 586-2365 | <rdillman@gmail.com> | [richarddillman.com](https://richarddillman.com) | [linkedin.com/in/richarddillman](https://www.linkedin.com/in/richarddillman/) | [github.com/richarddillman](https://github.com/richarddillman)

## Summary

Fractional, hands-on engineering leader building high-traffic web platforms, specializing in technical SEO, performance, and Next.js. Brings the same operating system to every team: code standards, automated testing, linting, disciplined code review, and metrics-driven development, now extended with AI-assisted review. Reached 80%+ coverage at Condé Nast, cut regression bugs 30%+ at The Muse, and raised Talent.com's coverage from 59% to 90.92%. As a fractional SEO engineer at Talent.com (5-8M pageviews/day), restored Google Jobs indexing from zero to 1.5M+ jobs a day, root-caused a soft-404 spike of 39.5M URLs, cut a failing PostgreSQL query from 15.8 seconds to 87 milliseconds, and turned a frontend three years out of date into a tested, current platform with zero production regressions. Earlier, grew organic traffic 10x with structured data, cut build times 97% at The Muse, and raised ad viewability from 45% to 85% across Condé Nast's 30+ publications. Known for proving root cause with data before anyone changes code. Open to fractional SEO and frontend engineering engagements.

## Skills

TypeScript · JavaScript · React · Next.js · Node.js · Python · Bash · PostgreSQL · MySQL · Redis · REST and GraphQL APIs · AWS · Docker · Kubernetes · Kafka · Nx · Jest · Playwright · Puppeteer · ESLint · CircleCI · GitLab CI · Datadog · Grafana · Technical SEO · JSON-LD / Schema.org · Google Search Console (GSC) · Google for Jobs (GFJ) · Google Tag Manager (GTM) · Google Analytics 4 (GA4) · Core Web Vitals · Lighthouse · Claude Code · AI Agent Tooling

## Work Experience

### Talent.com

#### Fractional SEO Engineer | Dec 2025 - Present

- Led the research and recovery of a Google Jobs indexing outage, proving 15.9M rejections were a daily quota rather than a rate limit and restoring new job submissions from zero to 1.5M+ a day.
- Root-caused a soft-404 crisis on /view that peaked at 39.5M URLs in Search Console, using scoped Googlebot logs to expose POST and RSC flight-data requests returning tiny 200s (~14.5M/day), then shipped the redirect and bot-detection fixes.
- Made Google job indexing reliable on the highest-traffic organic page by batching the Indexing API and gating JobPosting JSON-LD to genuinely indexable jobs.
- Led a quality and modernization program on the 5-8M pageviews/day jobseeker frontend: raised test coverage from 59% to 90.92%, built the first Playwright end-to-end suite, and shipped a six-phase upgrade (Nx 22, React 19, next-intl v4, Next.js 16) alongside it with zero production regressions.
- Migrated 4 frontends off next-auth to Better Auth behind a dual-implementation flag with zero auth downtime.
- Tuned PostgreSQL on a 600 GB table, cutting a failing 15.8-second query to 87 milliseconds (181x) and finding the stuck process that blocked database cleanup.
- Proved a suspected Kubernetes memory leak was a Node.js heap configuration problem, then validated the fix with a one-hour load test and zero crashes.
- Found scrapers made up 22.5% of traffic counted as human, corrected business analytics, and root-caused an outage during a 3.2x traffic surge.
- Stopped software releases from dropping 45.7% of apply clicks, moved the production key into AWS Secrets Manager, and fixed injection risks in user input handling.
- Measured 45% duplication across job data sources and led a cross-team decision on showing one copy of each job without losing revenue.
- Built a self-serve AI development platform of 30+ Claude Code skills wrapping GitLab, Jira, Confluence, Grafana, Kafka, AWS, and kubectl, plus a multi-agent code review pipeline that runs test, security, accessibility, and performance checks on every merge request.

### The Muse

#### Senior Director of Engineering | Jan 2022 - Sep 2025

- Increased job applications per user 50% by redesigning search into a two-pane layout with inline browsing.
- Architected a white-label, multi-tenant job search platform projected at $153K-$230K annual revenue per partner tenant.
- Increased SEO visits 74K/month by replacing infinite scroll with server-side pagination.
- Launched Maya, The Muse's first AI-powered content discovery tool, surfacing 24K+ articles and adding 3,500 article users a month.
- Boosted job applies 10% and CTR 15% with dynamic apply forms integrating multiple ATS partners for Google Jobs.
- Achieved all-green Lighthouse scores (Performance 62 to 91, Accessibility 100, SEO 96) replatforming Company Profiles to Next.js.
- Increased ad revenue 15% migrating to Raptive with improved layouts and formats.

#### Staff Engineer, Director of Application Development | Jun 2020 - Dec 2021

- Generated $994K in annual revenue replacing a 10+ year-old ad system that predated Google Ad Manager with a modern display ad integration.
- Increased job tile clicks 21.9% and views per user 20% through a complete search UX refresh with passing Core Web Vitals.
- Extracted page templates from a legacy Tornado/Python monolith and rebuilt them as scalable services.

#### Staff Engineer | Mar 2019 - May 2020

- Increased organic SEO traffic 10x by deploying JSON-LD structured data and performance refactors.
- Reached 90%+ green Core Web Vitals and cut sitewide load time by 4 seconds, improving rankings and conversions.
- Cut build times from 45 minutes to 75 seconds by modularizing repos and overhauling CI/CD pipelines.

#### Senior Application Engineer | Dec 2018 - Feb 2019

- Accelerated deployments 50% by replatforming the CMS and article renderer on Koa, React, and Docker.

### Condé Nast

#### Senior Software Engineer, Ad Tech and Monetization | Jul 2015 - Nov 2018

- Increased ad viewability from 45% to 85% by rebuilding ad infrastructure for 30+ global publications (Vogue, The New Yorker, Wired, GQ, Vanity Fair) serving 229M+ monthly users.
- Optimized monetization pipelines supporting 1B+ monthly video views.
- Sped up ad rendering by removing legacy jQuery dependencies and reducing bundle size.
- Designed shared UI tooling and a plugin architecture adopted across editorial brands.
