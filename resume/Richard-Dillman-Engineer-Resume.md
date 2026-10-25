# Richard Dillman

**Staff Software Engineer • Web Performance • Technical SEO • Next.js**

Indianapolis, IN | (317) 586-2365 | <rdillman@gmail.com> | [richarddillman.com](https://richarddillman.com) | [linkedin.com/in/richarddillman](https://www.linkedin.com/in/richarddillman/) | [github.com/richarddillman](https://github.com/richarddillman)

## Summary

Hands-on engineer for high-traffic web platforms, specializing in technical SEO, performance, and Next.js. At Talent.com, restored Google Jobs indexing from zero to 1.5M+ jobs a day, cut a failing PostgreSQL query from 15.8 seconds to 87 milliseconds, and raised test coverage from 59% to 91%. Earlier, grew organic traffic 10x at The Muse and raised ad viewability from 45% to 85% across Condé Nast's 30+ publications. Proves root cause with data before anyone changes code. Comfortable shipping to platforms with millions of monthly users.

## Skills

**Languages and Frameworks:** TypeScript · JavaScript · HTML · CSS · Python · Bash · React · Next.js · Node.js · Accessibility (WCAG)\
**Data and APIs:** PostgreSQL · MySQL · Redis · Kafka · REST and GraphQL APIs\
**Infrastructure and Tooling:** AWS · Docker · Kubernetes · Nx · Jest · Playwright · Puppeteer · GitLab CI · CircleCI · Datadog · Grafana · Claude Code\
**SEO and Analytics:** Technical SEO · JSON-LD / Schema.org · hreflang · Google Search Console · Google for Jobs · GTM · GA4 · Core Web Vitals · Lighthouse

## Work Experience

### Talent.com | Dec 2025 - Present

*12M monthly unique visitors, 70M monthly page views, 46.8M active jobs*

#### Staff Software Engineer | Dec 2025 - Present

Embedded with a 10-engineer team: find the highest-cost problems, write the fix plan, and route each fix to the team's engineers or ship it directly.

- Restored Google Jobs indexing from zero to 1.5M+ new jobs a day by proving 15.9M rejections came from a daily quota, not a rate limit.
- Reduced a failing PostgreSQL query on a 600 GB table from 15.8 seconds to 87 milliseconds (181x) and found the stuck process blocking database cleanup.
- Traced a soft-404 spike of 39.5M URLs in Search Console to ~14.5M bot requests a day returning near-empty pages, then shipped the redirect and bot-detection fixes.
- Raised jobseeker test coverage from 59% to 91% and shipped a staged upgrade (Next.js 15, Nx 22, React 19, next-intl v4) with zero production regressions.
- Stopped releases from dropping 45.7% of apply clicks by keeping the server key stable across builds and loading it from AWS Secrets Manager.

### The Muse | Dec 2018 - Sep 2025

*16M monthly users*

#### Senior Director of Engineering | Apr 2024 - Sep 2025

- Increased ad revenue 15% by migrating to Raptive with improved layouts and formats.
- Increased job applications per user 50% by redesigning search into a two-pane layout with inline browsing.
- Cut page load from 3.5s to 800ms with Redis caching layers and PostgreSQL indexing.

#### Director of Application Development | Dec 2023 - Mar 2024

- Generated $994K in annualized new ad revenue by launching on-site advertising with third-party vendors without slowing the site.
- Increased the job posting crawl budget 49K by converting links to non-indexed offsite pages into buttons.
- Reduced Interaction to Next Paint (INP) by 300ms through Google Tag Manager cleanup.

#### Staff Engineer | Apr 2021 - Nov 2023

- Architected a white-label, multi-tenant job search platform modeled at $153K–$230K annual revenue per partner tenant.
- Grew SEO visits 74K/month by replacing infinite scroll with server-side pagination.
- Increased job tile clicks 21.9% and views per user 20% with a search UX refresh that passed Core Web Vitals.
- Grew organic SEO traffic 10x with JSON-LD structured data and performance refactors.
- Cut build times from 45 minutes to 75 seconds by modularizing repos and rebuilding the CI/CD pipelines.
- Cut sitewide load time by 4 seconds and reached 90%+ green Core Web Vitals.

#### Senior Application Engineer | Dec 2018 - Mar 2021

- Accelerated deployments 50% by replatforming the CMS and article renderer on Koa, React, and Docker.

### Condé Nast | Jul 2015 - Nov 2018

*30+ brands, 229M monthly users, 1B+ monthly video views*

#### Senior Software Engineer, Ad Tech and Monetization | Jul 2015 - Nov 2018

- Increased ad viewability from 45% to 85% by rebuilding ad infrastructure for 30+ global publications (Vogue, The New Yorker, Wired, GQ, Vanity Fair).
- Designed shared UI tooling and a plugin architecture adopted across editorial brands.
