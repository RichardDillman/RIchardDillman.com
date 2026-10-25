export interface Achievement {
  text: string;
  metrics?: string;
  projectId?: string; // Links to project ID in projects.ts
  // Present = a hiring manager for that resume would want this achievement, in this wording.
  // Absent = it stays off that resume. Both may hold the same line. Tapering can still cut an
  // eligible line for space, so every resume bullet must match one of these, not the reverse.
  engineer?: string;
  director?: string;
  // Required when either line is present. 1 = money, 2 = users or volume affected,
  // 3 = any other number or none. Tier 1 prints first, lower tiers fill the remaining room.
  tier?: 1 | 2 | 3;
}

export interface Role {
  title: string;
  period: string;
  description?: string;
  achievements: Achievement[];
}

export interface Experience {
  company: string;
  companyLogos?: string[]; // Array of filenames in /public/images/logos/
  scale?: string; // Shown under the company name on the site and on both resumes. Keep them identical.
  location: string;
  period: string;
  roles: Role[];
}

export const experiences: Experience[] = [
  {
    company: 'Talent.com',
    scale: '12M monthly unique visitors, 70M monthly page views, 46.8M active jobs',
    companyLogos: ['talent-com.svg'],
    location: 'Remote',
    period: 'Dec 2025 - Present',
    roles: [
      {
        title: 'Staff Software Engineer',
        period: 'Dec 2025 - Present',
        description:
          "SEO and frontend engineering on Talent.com's jobseeker platform at 5-8M pageviews/day: organic indexation recovery, structured data, full-stack platform modernization, and AI-assisted developer tooling.",
        achievements: [
          {
            text: 'Led the research and recovery of a Google Jobs indexing outage, proving 15.9M rejections were a daily quota rather than a rate limit and restoring new job submissions from zero to 1.5M+ a day',
            tier: 2,
            engineer:
              'Restored Google Jobs indexing from zero to 1.5M+ new jobs a day by proving 15.9M rejections came from a daily quota, not a rate limit.',
            director:
              'Restored Google Jobs indexing from zero to 1.5M+ new jobs a day by proving 15.9M rejections came from a daily quota, not a rate limit.',
            metrics: '0 to 1.5M+ jobs a day',
            projectId: 'talent-indexing-pipeline-recovery',
          },
          {
            text: 'Tuned PostgreSQL performance on a 600 GB table, cutting a failing 15.8-second query to 87 milliseconds and finding the stuck process that blocked database cleanup',
            tier: 3,
            engineer:
              'Reduced a failing PostgreSQL query on a 600 GB table from 15.8 seconds to 87 milliseconds (181x) and found the stuck process blocking database cleanup.',
            director:
              'Reduced a failing PostgreSQL query on a 600 GB table from 15.8 seconds to 87 milliseconds (181x) and found the stuck process blocking database cleanup.',
            metrics: '181x faster query',
            projectId: 'talent-postgres-600gb-table',
          },
          {
            text: 'Measured 45% duplication across job data sources and led a cross-team decision on showing one copy of each job without losing revenue',
            tier: 2,
            engineer:
              'Measured 45% duplication across job data sources and drove a cross-team decision to show one copy of each job without losing revenue.',
            director:
              'Measured 45% duplication across job data sources and drove a cross-team decision to show one copy of each job without losing revenue.',
            metrics: '45% of jobs duplicated',
            projectId: 'talent-duplicate-jobs-across-feeds',
          },
          {
            text: 'Proved a suspected memory leak in Kubernetes was a Node.js configuration problem, then validated the fix with a one-hour load test and zero crashes',
            tier: 3,
            engineer:
              'Proved a suspected Kubernetes memory leak was a Node.js configuration problem and validated the fix with a one-hour load test and zero crashes.',
            director:
              'Proved a suspected Kubernetes memory leak was a Node.js configuration problem and validated the fix with a one-hour load test and zero crashes.',
            metrics: '0 crashes under load',
            projectId: 'talent-v8-heap-not-a-leak',
          },
          {
            text: 'Found scrapers made up 22.5% of traffic counted as human, corrected business analytics, and root-caused a 3.2x traffic surge outage',
            tier: 3,
            engineer:
              'Found scrapers made up 22.5% of traffic counted as human, corrected business analytics, and root-caused a 3.2x traffic surge outage.',
            director:
              'Corrected business analytics after finding scrapers made up 22.5% of traffic counted as human.',
            metrics: '22.5% of "human" traffic',
            projectId: 'talent-bot-traffic-analytics-integrity',
          },
          {
            text: 'Stopped software releases from dropping 45.7% of apply clicks, secured the production key in AWS Secrets Manager, and fixed injection risks in user input handling',
            tier: 2,
            engineer:
              'Stopped releases from dropping 45.7% of apply clicks by keeping the server key stable across builds and loading it from AWS Secrets Manager.',
            director:
              'Stopped software releases from dropping 45.7% of apply clicks and moved the production key into AWS Secrets Manager.',
            metrics: '45.7% click loss to flat',
            projectId: 'talent-deploy-safety-secure-coding',
          },
          {
            text: 'Built a self-improving AI engineering platform on Claude Code: 59 skills and 21 agents wrapping GitLab, Jira, Confluence, Grafana, Kafka, AWS, and kubectl, a multi-agent review on every merge request, and guardrails that turn its own gaps into new skills (17 in one quarter)',
            tier: 3,
            engineer:
              'Built a self-improving AI engineering platform of 59 Claude Code skills and 21 agents, including multi-agent code review on every merge request, that turns its own gaps into new skills.',
            director:
              'Launched a team-shared AI engineering platform of 59 Claude Code skills and 21 agents, with multi-agent code review on every merge request, and seven other engineers have contributed to it.',
            metrics: '59 skills, 21 agents',
            projectId: 'talent-claude-code-dev-platform',
          },
          {
            text: 'Root-caused a soft-404 crisis on /view that peaked at 39.5M URLs in Search Console, pushing for scoped Googlebot logs that exposed POST and RSC flight-data requests returning tiny 200s (~14.5M/day) and shipping the redirect and bot-detection fixes',
            tier: 2,
            engineer:
              'Traced a soft-404 spike of 39.5M URLs in Search Console to ~14.5M bot requests a day returning near-empty pages, then shipped the redirect and bot-detection fixes.',
            director:
              'Traced a soft-404 spike of 39.5M URLs in Search Console to bot traffic and shipped the redirect and bot-detection fixes.',
            metrics: '39.5M peak, ~14.5M/day root-caused',
            projectId: 'talent-soft-404-saga',
          },
          {
            text: 'Identified $60K/year in recoverable Google Geocoding spend authoring the Location Service Consolidation PRD, baseline confirmed with Finance',
            tier: 1,
            engineer:
              'Identified $60K/year in recoverable Google Geocoding spend, confirmed by Finance, in a location service consolidation PRD.',
            director:
              'Identified $60K/year in recoverable Google Geocoding spend, confirmed by Finance, in a service consolidation plan.',
            metrics: '$60K/year savings',
            projectId: 'talent-location-service-consolidation',
          },
          {
            text: 'Carried the 5-8M pageviews/day jobseeker frontend from 3 years behind (Next.js 14→15, React 19, next-intl v4, Nx 22) through a staged rollout, live in production with zero regressions',
            metrics: 'Next.js 14→15, 5-8M views/day',
            projectId: 'talent-nextjs-staged-migration',
          },
          {
            text: 'Made Google job indexing reliable on the highest-traffic organic page by batching the Indexing API and dual-gating JobPosting JSON-LD to genuinely indexable jobs',
            tier: 3,
            engineer:
              'Made Google job indexing reliable on the highest-traffic organic page by batching the Indexing API and limiting JobPosting JSON-LD to indexable jobs.',
            director:
              'Made Google job indexing reliable on the highest-traffic organic page by batching the Indexing API and limiting JobPosting JSON-LD to indexable jobs.',
            metrics: '5-8M pageviews/day',
            projectId: 'talent-seo-rescue-view-page',
          },
          {
            text: 'Decided what counts as a job for Google: kept non-job listings (high-volume retail and gig postings from employers like Walmart, Kroger and DoorDash, plus job fairs, courses and services) out of the Google Indexing API and JobPosting structured data while they stay in on-site search and advertising, and linked translated copies of each job with hreflang alternates so Google reads them as one job in several languages',
            tier: 3,
            engineer:
              'Gated non-job listings out of Google for Jobs without losing their on-site search and ad revenue, and linked translations with hreflang.',
            director:
              'Gated non-job listings out of Google for Jobs without losing their on-site search and ad revenue, and linked translations with hreflang.',
            metrics: 'Google gets jobs only, revenue kept',
            projectId: 'talent-seo-rescue-view-page',
          },
          {
            text: 'Migrated 4 frontends (including the 5-8M pageviews/day jobseeker app) off next-auth to Better Auth behind a dual-impl flag with zero auth downtime',
            tier: 3,
            engineer:
              'Migrated 4 frontends from next-auth to Better Auth behind a dual-implementation flag with zero auth downtime.',
            director:
              'Migrated 4 frontends to a new authentication library behind a dual-implementation flag with zero auth downtime.',
            metrics: '4 frontends, zero downtime',
            projectId: 'talent-better-auth-migration',
          },
          {
            text: 'Raised jobseeker test coverage from 59% to 90.92% reviving and writing ~90 Jest suites, building a regression net for a 5-8M pageviews/day site',
            tier: 3,
            engineer:
              'Raised jobseeker test coverage from 59% to 91% and shipped a staged upgrade (Next.js 15, Nx 22, React 19, next-intl v4) with zero production regressions.',
            director:
              'Raised jobseeker test coverage from 59% to 91% and shipped a staged upgrade (Next.js 15, Nx 22, React 19, next-intl v4) with zero production regressions.',
            metrics: '59% → 90.92%',
            projectId: 'talent-jobseeker-coverage-revival',
          },
          {
            text: 'Built the first end-to-end and integration test suite for the jobseeker frontend (Playwright) covering search, /view, auth, and apply flows under CI',
            tier: 3,
            engineer:
              'Built the first end-to-end and integration test suite for the jobseeker frontend in Playwright, covering search, job view, auth, and apply flows in CI.',
            director:
              'Built the first end-to-end test suite for the jobseeker frontend, covering search, job view, auth, and apply flows in CI.',
            metrics: 'First e2e + integration coverage',
            projectId: 'talent-jobseeker-e2e-from-zero',
          },
          {
            text: 'Cut the ui unit test suite from 392 seconds to 43 with the same 728 tests, took unit tests off the network, added a type-check gate on 47 projects, and restored 22 services whose tests had stopped passing',
            tier: 3,
            engineer:
              'Cut a unit test suite from 392 to 43 seconds with all 728 tests kept, took tests off the network, and restored 22 services whose tests had stopped passing.',
            director:
              'Cut CI time on the shared UI test suite from 392 to 43 seconds without dropping a test, and restored 22 services whose tests had stopped passing.',
            metrics: '392 s to 43 s',
            projectId: 'talent-ci-unit-test-speed',
          },
          {
            text: 'Mapped 409 production workloads to their code and audited alerting end to end, finding 17 of 21 alert channels failing silently and 83 of 202 live rules routed to a failing channel',
            tier: 3,
            engineer:
              'Mapped 409 production workloads to their code and found 17 of 21 alert channels failing silently, with 83 of 202 live alert rules routed to a failing channel.',
            director:
              'Mapped 409 production workloads to their code and found 17 of 21 alert channels failing silently, with 83 of 202 live alert rules routed to a failing channel.',
            metrics: '17 of 21 alert channels failing',
            projectId: 'talent-system-map-alerting-audit',
          },
        ],
      },
    ],
  },
  {
    company: 'The Muse',
    scale: '16M monthly users',
    companyLogos: ['the-muse.png', 'fairy-god-boss.png', 'purpose-jobs.png'],
    location: 'Remote',
    period: 'Dec 2018 - Sep 2025',
    roles: [
      {
        title: 'Senior Director of Engineering',
        period: 'Apr 2024 - Sep 2025',
        description:
          'Led engineering at The Muse, building job search platforms that help people find work they actually want. Spanned technical planning, mentoring, hands-on architecture, and cross-functional collaboration with Product, Design, and leadership.',
        achievements: [
          {
            text: 'Led a 15-engineer team and promoted 6 engineers to senior or lead roles through mentorship and quarterly growth reviews',
            tier: 2,
            engineer:
              'Mentored a 15-engineer team and promoted 6 engineers to senior or lead roles.',
            director:
              'Led a 15-engineer team and promoted 6 engineers to senior or lead roles through mentorship and quarterly growth reviews.',
            metrics: '6 engineers promoted',
          },
          {
            text: "Increased article pageviews 3,500 users/month launching Maya, The Muse's first AI-powered content discovery tool surfacing 24K+ articles",
            tier: 2,
            engineer:
              "Launched Maya, The Muse's first AI content discovery tool, adding 3,500 article readers a month across 24K+ articles.",
            director:
              "Launched Maya, The Muse's first AI content discovery tool, adding 3,500 article readers a month across 24K+ articles.",
            metrics: '+3,500 users/month',
            projectId: 'the-muse-ai-search-maya',
          },
          {
            text: 'Improved job applications 50% by redesigning search to two-pane layout enabling inline browsing',
            tier: 2,
            engineer:
              'Increased job applications per user 50% by redesigning search into a two-pane layout with inline browsing.',
            director:
              'Increased job applications per user 50% by redesigning search into a two-pane layout with inline browsing.',
            metrics: '+50% applications per user',
            projectId: 'the-muse-two-paned-search',
          },
          {
            text: 'Accelerated build times from 45+ min to 75 sec completing migration to Next.js/TypeScript with Claude Code',
            metrics: '45+ min → 75 sec',
            projectId: 'the-muse-migration',
          },
          {
            text: 'Improved CTR 22% through systematic UX experiments',
            metrics: '+22% CTR',
          },
          {
            text: 'Increased conversions to the job marketplace 138% launching a Trending Search module on article pages',
            tier: 2,
            engineer:
              'Increased article-to-marketplace conversions 138% with a Trending Search module, and Apply button CTR 22% through UX experiments.',
            director:
              'Increased article-to-marketplace conversions 138% with a Trending Search module, and Apply button CTR 22% through UX experiments.',
            metrics: '+138% conversions',
          },
          {
            text: 'Improved searches per user 13% through personalized search features',
            tier: 2,
            engineer: 'Increased searches per user 13% with personalized search features.',
            director: 'Increased searches per user 13% with personalized search features.',
            metrics: '+13% searches per user',
          },
          {
            text: 'Cut page load from 3.5s to 800ms with Redis caching layers and PostgreSQL indexing',
            tier: 3,
            engineer:
              'Cut page load from 3.5s to 800ms with Redis caching layers and PostgreSQL indexing.',
            director:
              'Cut page load from 3.5s to 800ms with Redis caching layers and PostgreSQL indexing.',
            metrics: '3.5s → 800ms',
          },
          {
            text: "Designed the web client's data layer: SWR hooks on a shared fetcher and 6-hour ISR on search, replacing stacked server caches",
            tier: 3,
            engineer:
              "Designed the web client's data layer: SWR hooks on a shared fetcher and 6-hour ISR on search, replacing stacked server caches.",
          },
          {
            text: 'Increased ad revenue 15% migrating to Raptive with improved layouts and formats',
            tier: 1,
            engineer:
              'Increased ad revenue 15% by migrating to Raptive with improved layouts and formats.',
            director:
              'Increased ad revenue 15% by migrating to Raptive with improved layouts and formats.',
            metrics: '+15% revenue',
            projectId: 'the-muse-ad-optimization',
          },
          {
            text: "Formalized Claude as The Muse's first AI contributor handling GitHub issues, code review, and autonomous tasks",
            tier: 3,
            engineer:
              "Introduced Claude as The Muse's first AI contributor, running automated code review and issue management in daily workflows.",
            director:
              "Introduced Claude as The Muse's first AI contributor, running automated code review and issue management in daily workflows.",
          },
        ],
      },
      {
        title: 'Director of Application Development',
        period: 'Dec 2023 - Mar 2024',
        description:
          'Led engineering strategy and product delivery across The Muse. Set architectural direction, guided roadmap priorities, mentored engineers, and improved development velocity.',
        // Source: the Q1 2024 resume (Drive, "2024-resume-dillman-richard"), written during this role.
        // It already lists the article ad launch, so the $994K sits here, not under Senior Director
        // (#42 filed it there before #43 moved that role's start to Apr 2024).
        achievements: [
          {
            text: 'Generated $994K in new revenue in a year by launching on-site advertising with third-party vendors, without hurting page speed',
            tier: 1,
            engineer:
              'Generated $994K in annualized new ad revenue by launching on-site advertising with third-party vendors without slowing the site.',
            director:
              'Generated $994K in annualized new ad revenue by launching on-site advertising with third-party vendors without slowing the site.',
            metrics: '$994K new revenue',
          },
          {
            text: 'Increased the job posting crawl budget 49K by converting links to non-indexed offsite pages into buttons',
            tier: 3,
            engineer:
              'Increased the job posting crawl budget 49K by converting links to non-indexed offsite pages into buttons.',
            director:
              'Increased the job posting crawl budget 49K by converting links to non-indexed offsite pages into buttons.',
            metrics: '+49K crawl budget',
          },
          {
            text: 'Reduced Interaction to Next Paint (INP) by 300ms through Google Tag Manager cleanup',
            tier: 3,
            engineer:
              'Reduced Interaction to Next Paint (INP) by 300ms through Google Tag Manager cleanup.',
            director:
              'Reduced Interaction to Next Paint (INP) by 300ms through Google Tag Manager cleanup.',
            metrics: '-300ms INP',
          },
        ],
      },
      {
        title: 'Staff Engineer',
        period: 'Apr 2021 - Nov 2023',
        achievements: [
          {
            text: 'Launched white-label job search platform generating projected $153K-$230K annual revenue per partner tenant',
            tier: 1,
            engineer:
              'Architected a white-label, multi-tenant job search platform modeled at $153K-$230K annual revenue per partner tenant.',
            director:
              'Architected a white-label, multi-tenant job search platform modeled at $153K-$230K annual revenue per partner tenant.',
            metrics: '$153K-$230K/year/tenant',
            projectId: 'the-muse-white-label',
          },
          {
            text: 'Boosted job applies 10% and CTR 15% through dynamic forms integrating multiple ATS partners for Google Jobs',
            tier: 2,
            engineer:
              'Increased job applies 10% and CTR 15% by replacing Madgex, a third-party GraphQL apply layer, with in-house ATS-integrated forms.',
            director:
              'Increased job applies 10% and CTR 15% by replacing Madgex, a third-party GraphQL apply layer, with in-house ATS-integrated forms.',
            metrics: '+15% CTR, +10% applies',
            projectId: 'the-muse-direct-apply-forms',
          },
          {
            text: 'Achieved all-green Lighthouse scores (Perf 91, A11y 100, SEO 96) replatforming Company Profiles to Next.js',
            tier: 3,
            engineer:
              'Raised Lighthouse Performance from 62 to 91 (Accessibility 100, SEO 96) by replatforming Company Profiles to Next.js.',
            director:
              'Raised Lighthouse Performance from 62 to 91 (Accessibility 100, SEO 96) by replatforming Company Profiles to Next.js.',
            metrics: 'Perf 62→91, A11y 96→100, SEO 89→96',
            projectId: 'the-muse-company-profiles',
          },
          {
            text: 'Increased SEO visits 74K/month by replacing infinite scroll with server-side pagination',
            tier: 2,
            engineer:
              'Grew SEO visits 74K/month by replacing infinite scroll with server-side pagination.',
            director:
              'Grew SEO visits 74K/month by replacing infinite scroll with server-side pagination.',
            metrics: '+74K/month SEO visits',
            projectId: 'the-muse-seo-pagination',
          },
          {
            text: 'Increased job tile clicks 21.9% and views per user 20% through complete UX refresh achieving perfect Web Vitals',
            tier: 2,
            engineer:
              'Increased job tile clicks 21.9% and views per user 20% with a search UX refresh that passed Core Web Vitals.',
            director:
              'Increased job tile clicks 21.9% and views per user 20% with a search UX refresh that passed Core Web Vitals.',
            metrics: '+21.9% clicks, +20% views/user',
            projectId: 'the-muse-search-ux-refresh',
          },
          {
            text: 'Increased organic SEO traffic 10x deploying JSON-LD structured data and performance refactors',
            tier: 2,
            engineer:
              'Grew organic SEO traffic 10x with JSON-LD structured data and performance refactors.',
            director:
              'Grew organic SEO traffic 10x with JSON-LD structured data and performance refactors.',
            metrics: '10x traffic increase',
            projectId: 'the-muse-structured-data',
          },
          {
            text: 'Achieved 90%+ green Core Web Vitals improving rankings and conversions',
            metrics: '90%+ green',
            projectId: 'the-muse-core-web-vitals',
          },
          {
            text: 'Cut build times from 45 min to 75 sec modularizing repos and overhauling CI/CD pipelines',
            tier: 3,
            engineer:
              'Cut build times from 45 minutes to 75 seconds by modularizing repos and rebuilding the CI/CD pipelines.',
            director:
              'Cut build times from 45 minutes to 75 seconds by modularizing repos and rebuilding the CI/CD pipelines.',
            metrics: '45 min → 75 sec',
          },
          {
            text: 'Improved LCP and conversions reducing site load 4 seconds sitewide',
            tier: 3,
            engineer: 'Cut sitewide load time by 4 seconds and reached 90%+ green Core Web Vitals.',
            director: 'Cut sitewide load time by 4 seconds and reached 90%+ green Core Web Vitals.',
            metrics: '-4 seconds load time',
          },
          {
            text: 'Owned full-stack performance monitoring (Web Vitals, GA, SEO, Datadog)',
          },
        ],
      },
      {
        title: 'Senior Application Engineer',
        period: 'Dec 2018 - Mar 2021',
        description:
          'Worked with Director of Engineering to shape technical strategy, extend platforms, and lead new product development. Modernized legacy systems using Node, React, Python, AWS, Postgres.',
        achievements: [
          {
            text: 'Accelerated deployments 50% and reduced incidents replatforming CMS and article renderer using KOA, React, Docker',
            tier: 3,
            engineer:
              'Accelerated deployments 50% by replatforming the CMS and article renderer on Koa, React, and Docker.',
            director:
              'Accelerated deployments 50% by replatforming the CMS and article renderer on Koa, React, and Docker.',
            metrics: '50% faster deployments',
          },
          {
            text: 'Accelerated code review 30% and reduced bugs standardizing ESLint and Jest across teams',
            metrics: '30% faster reviews',
          },
          {
            text: 'Reduced project setup from 2-3 weeks to 2-3 days building reusable repo template (Next.js, KOA, Docker, CircleCI) adopted org-wide',
            tier: 3,
            engineer:
              'Cut new project setup from 2-3 weeks to 2-3 days with a Next.js, Koa, Docker, and CircleCI template adopted org-wide.',
            director:
              'Cut new project setup from 2-3 weeks to 2-3 days with a Next.js, Koa, Docker, and CircleCI template adopted org-wide.',
          },
          {
            text: 'Modernized job search, article rendering, and homepage rebuilding as scalable microservices',
          },
          {
            text: 'Modernized page templates extracting from legacy Tornado/Python monolith and rebuilding as scalable microservices',
            tier: 3,
            engineer:
              'Extracted page templates from a legacy Tornado/Python monolith and rebuilt them as scalable services.',
            director:
              'Extracted page templates from a legacy Tornado/Python monolith and rebuilt them as scalable services.',
          },
          {
            text: 'Reduced regression bugs 30%+ championing test automation, linting, and CI/CD',
            tier: 3,
            engineer:
              'Reduced regression bugs 30%+ by standardizing on ESLint, Jest, and Puppeteer and mentoring the team on them.',
            director:
              'Reduced regression bugs 30%+ by standardizing on ESLint, Jest, and Puppeteer and mentoring the team on them.',
            metrics: '30%+ fewer bugs',
          },
          {
            text: 'Scaled team delivery through standardization (ESLint, Jest, Puppeteer, CLA) and mentorship',
          },
        ],
      },
    ],
  },
  {
    company: 'Condé Nast',
    scale: '30+ brands, 229M monthly users, 1B+ monthly video views',
    companyLogos: [
      'vogue.png',
      'the-new-yorker.png',
      'wired.png',
      'gq.png',
      'vanity-fair.png',
      'ars-technica.png',
      'architectural-digest.png',
      'allure.png',
      'bon-appetit.png',
      'conde-nast-traveler.png',
      'epicurious.png',
      'glamour.png',
      'pitchfork.png',
      'self-black.png',
      'teen-vogue.png',
      'them.png',
    ],
    location: 'New York City',
    period: 'Jul 2015 - Nov 2018',
    roles: [
      {
        title: 'Senior Software Engineer, Ad Tech, Monetization',
        period: 'Jul 2015 - Nov 2018',
        description:
          "Led ad-platform modernization across Condé Nast's premier brands (Vogue, The New Yorker, Wired, GQ, Bon Appétit, Vanity Fair, etc.) where every millisecond of latency impacted global revenue and user trust.",
        achievements: [
          {
            text: 'Increased ad viewability from 45% to 85% rebuilding infrastructure for 30+ global publications serving 229M+ monthly users',
            tier: 2,
            engineer:
              'Increased ad viewability from 45% to 85% by rebuilding ad infrastructure for 30+ global publications (Vogue, The New Yorker, Wired, GQ, Vanity Fair).',
            director:
              'Increased ad viewability from 45% to 85% by rebuilding ad infrastructure for 30+ global publications (Vogue, The New Yorker, Wired, GQ, Vanity Fair).',
            metrics: '45% → 85% viewability',
            projectId: 'conde-nast-ad-platform',
          },
          {
            text: 'Optimized monetization pipelines serving 229M+ monthly users and 1B+ monthly video views',
            tier: 2,
            director: 'Optimized monetization pipelines supporting 1B+ monthly video views.',
            metrics: '229M users, 1B video views',
          },
          {
            text: 'Accelerated ad render times removing legacy jQuery dependencies and reducing bundle size',
            tier: 3,
            engineer:
              'Sped up ad rendering by removing legacy jQuery dependencies and shrinking the bundle.',
          },
          {
            text: 'Reduced integration defects achieving 80%+ test coverage through standardized testing and documentation org-wide',
            tier: 3,
            engineer:
              'Reached 80%+ test coverage across a 45-engineer editorial engineering org through standardized testing and documentation.',
            director:
              'Reached 80%+ test coverage across a 45-engineer editorial engineering org through standardized testing and documentation.',
            metrics: '80%+ test coverage',
          },
          {
            text: 'Designed shared UI tooling and plugin architecture adopted across multiple editorial brands',
            tier: 3,
            engineer:
              'Designed shared UI tooling and a plugin architecture adopted across editorial brands.',
            director:
              'Designed shared UI tooling and a plugin architecture adopted across editorial brands.',
          },
          {
            text: 'Led code reviews, mentored junior engineers, coordinated with major ad vendors and programmatic exchanges',
          },
          {
            text: 'Authored technical RFCs, migration plans, and build modernization efforts',
            tier: 3,
            engineer:
              'Authored the RFCs and migration plans for the ad platform rebuild, mentored engineers, and coordinated ad vendors and programmatic exchanges.',
            director:
              'Authored the RFCs and migration plans for the ad platform rebuild, mentored engineers, and coordinated ad vendors and programmatic exchanges.',
          },
        ],
      },
    ],
  },
  {
    company: 'Everyday Health',
    companyLogos: [
      'everyday-health.png',
      'medpage-today.png',
      'denise-austin.png',
      'jillian-michaels.png',
      'south-beach-diet.png',
      'spark-america.png',
      'diabetes-daily.png',
      'what-to-expect.png',
    ],
    location: 'New York City',
    period: 'Jan 2012 - Jul 2015',
    roles: [
      {
        title: 'Front End Engineer',
        period: 'Jan 2012 - Jul 2015',
        description:
          'Built and optimized consumer health platforms reaching 30M+ monthly users, delivering performance, accessibility, and monetization improvements.',
        achievements: [
          {
            text: 'Improved page load time 54% and cut network requests 53% optimizing Core Web Vitals for 30M+ monthly users',
            metrics: '-54% load time, -53% requests',
            projectId: 'everyday-health-performance',
          },
          {
            text: 'Increased ad CTR 86% while reducing impressions 29% driving higher programmatic yield',
            metrics: '+86% CTR, -29% impressions',
          },
          {
            text: 'Engineered responsive, mobile-first architecture using SASS (BEM), Bootstrap, and modular JavaScript',
          },
          {
            text: 'Led integrations with key monetization partners (Google, Swoop, Taboola)',
          },
          {
            text: 'Developed internal tools used across Product, Design, and Content teams',
          },
          {
            text: 'Mentored junior developers and presented frontend practices in engineering forums',
          },
        ],
      },
    ],
  },
  {
    company: 'CatalpaSoft',
    companyLogos: [
      'state-of-indiana.svg',
      'indiana-health.png',
      'indiana-heart-gallery.png',
      'rask-corp.png',
      'framing-4-yourself.svg',
    ],
    location: 'Indianapolis, IN',
    period: 'Jan 2003 - Jan 2012',
    roles: [
      {
        title: 'Sr Software Engineer / CEO',
        period: 'Jan 2003 - Jan 2012',
        description:
          'Founded and led software firm specializing in digital solutions for foster care and child welfare agencies. Designed and delivered web platforms adopted statewide and across the Midwest.',
        achievements: [
          {
            text: 'Accelerated foster/adoption placements 50%+ for 12K+ children cutting statewide processing time',
            metrics: '50%+ faster for 12K+ children',
            projectId: 'catalpasoft-foster-care',
          },
          {
            text: 'Saved $400K+/year eliminating manual paperwork and replacing data-entry roles with automated systems',
            metrics: '$400K+/year savings',
          },
          {
            text: 'Built 5+ enterprise systems replacing paper, email, and spreadsheets (parent recruitment, child placement, training compliance, mentorship forums, developmental evaluation)',
          },
          {
            text: 'Expanded child welfare platforms across state lines for recruitment, training, and assessments',
          },
          {
            text: 'Built web-based developmental assessment system standardizing behavioral evaluations for clinicians',
          },
          {
            text: 'Implemented secure single sign-on (Exchange/ColdFusion) and encrypted remote access for field staff years before modern cloud platforms',
          },
          {
            text: 'Collaborated with state leadership to increase foster parent recruitment and community awareness',
          },
        ],
      },
    ],
  },
];
