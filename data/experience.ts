export interface Achievement {
  text: string;
  metrics?: string;
}

export interface Role {
  title: string;
  period: string;
  description?: string;
  achievements: Achievement[];
}

export interface Experience {
  company: string;
  location: string;
  period: string;
  roles: Role[];
}

export const experiences: Experience[] = [
  {
    company: "The Muse",
    location: "Remote",
    period: "Dec 2018 - Sep 2025",
    roles: [
      {
        title: "Senior Director of Engineering",
        period: "Jan 2022 - Sep 2025",
        description: "Led engineering at The Muse, building job search platforms that help people find work they actually want. Spanned technical planning, mentoring, hands-on architecture, and cross-functional collaboration with Product, Design, and leadership.",
        achievements: [
          {
            text: "Led final migration from Python/Tornado/CoffeeScript to Next.js/TypeScript/SCSS with Claude Code",
            metrics: "Build times: 45+ min → 75 sec"
          },
          {
            text: "White-labeled Multi-tenant Job Search site",
            metrics: "Projected: $153K-$230K/year/tenant"
          },
          {
            text: "Replaced infinite scroll with paginated search, improving Google crawlability",
            metrics: "+74K/month SEO visits"
          },
          {
            text: "Migrated to new ad partner with improved layouts and formats",
            metrics: "+15% revenue"
          },
          {
            text: "Enhanced Search Engagement with Personalized Features",
            metrics: "+13% searches per user"
          },
          {
            text: "Formalized Claude as structured contributor handling GitHub issues, code review, and autonomous tasks"
          }
        ]
      },
      {
        title: "Staff Engineer, Director of Application Development",
        period: "Jun 2020 - Dec 2021",
        description: "Led engineering strategy and product delivery across The Muse. Set architectural direction, guided roadmap priorities, mentored engineers, and improved development velocity.",
        achievements: [
          {
            text: "Ran UX experiments",
            metrics: "+22% CTR"
          },
          {
            text: "Launched Trending Search module through end-to-end design and implementation leadership",
            metrics: "+13% job search conversions"
          },
          {
            text: "Spearheaded integration of display ads, owning development and vendor coordination",
            metrics: "$994K annual revenue growth"
          },
          {
            text: "Standardized linting (ESLint) and testing (Jest) across all teams",
            metrics: "30% faster code review velocity, reduced bugs"
          },
          {
            text: "Modernized page templates by extracting from legacy Tornado/Python and rebuilding as scalable microservices"
          }
        ]
      },
      {
        title: "Staff Engineer",
        period: "Mar 2019 - May 2020",
        achievements: [
          {
            text: "Deployed structured data (JSON-LD) and performance refactors",
            metrics: "10x increase in organic SEO traffic"
          },
          {
            text: "Improved Core Web Vitals to green, boosting rankings and conversions",
            metrics: "90%+ green"
          },
          {
            text: "Modularized monolithic repos and overhauled CI/CD pipelines",
            metrics: "Build times: 45 min → 75 sec"
          },
          {
            text: "Reduced site load sitewide",
            metrics: "-4 seconds, improved LCP + conversions"
          },
          {
            text: "Scaled team delivery through standardization (ESLint, Jest, Puppeteer, CLA) and mentorship"
          },
          {
            text: "Owned full-stack performance monitoring (Web Vitals, GA, SEO, Datadog)"
          },
          {
            text: "Championed test automation, linting, and CI/CD",
            metrics: "30%+ reduction in regression bugs"
          }
        ]
      },
      {
        title: "Senior Application Engineer",
        period: "Dec 2018 - Feb 2019",
        description: "Worked with Director of Engineering to shape technical strategy, extend platforms, and lead new product development. Modernized legacy systems using Node, React, Python, AWS, Postgres.",
        achievements: [
          {
            text: "Standardized linting (ESLint) and testing (Jest) across teams",
            metrics: "30% faster code review, fewer bugs"
          },
          {
            text: "Replatformed CMS and article renderer using KOA, React, Docker",
            metrics: "50% faster deployments, fewer incidents"
          },
          {
            text: "Built reusable repo template (Next.js, KOA, Docker, CircleCI) adopted org-wide with baseline standards for testing, linting, and Web Vitals performance budgets"
          },
          {
            text: "Modernized job search, article rendering, and homepage by rebuilding as scalable microservices"
          }
        ]
      }
    ]
  },
  {
    company: "Condé Nast",
    location: "New York City",
    period: "Jul 2015 - Nov 2018",
    roles: [
      {
        title: "Senior Software Engineer, Ad Tech, Monetization",
        period: "Jul 2015 - Nov 2018",
        description: "Led ad-platform modernization across Condé Nast's premier brands (Vogue, The New Yorker, Wired, GQ, Bon Appétit, Vanity Fair, etc.) where every millisecond of latency impacted global revenue and user trust.",
        achievements: [
          {
            text: "Rebuilt cross-brand ad delivery infrastructure for 30+ global publications",
            metrics: "Ad viewability: 45% → 85%"
          },
          {
            text: "Optimized monetization pipelines, increasing inventory fill and yield",
            metrics: "229M+ monthly users, 1B+ monthly video views"
          },
          {
            text: "Removed legacy jQuery dependencies and reduced bundle size, accelerating ad render times"
          },
          {
            text: "Standardized testing and documentation org-wide",
            metrics: "80%+ coverage, reduced integration defects"
          },
          {
            text: "Led code reviews, mentored junior engineers, coordinated with major ad vendors and programmatic exchanges"
          },
          {
            text: "Designed shared UI tooling and plugin architecture adopted across multiple editorial brands"
          },
          {
            text: "Authored technical RFCs, migration plans, and build modernization efforts"
          }
        ]
      }
    ]
  },
  {
    company: "Everyday Health",
    location: "New York City",
    period: "Jan 2012 - Jul 2015",
    roles: [
      {
        title: "Front End Engineer",
        period: "Jan 2012 - Jul 2015",
        description: "Built and optimized consumer health platforms reaching 30M+ monthly users, delivering performance, accessibility, and monetization improvements.",
        achievements: [
          {
            text: "Reduced page load time and cut network requests, improving engagement and Core Web Vitals",
            metrics: "-54% load time, -53% requests"
          },
          {
            text: "Increased ad click-through rate while reducing impressions, driving higher programmatic yield",
            metrics: "+86% CTR, -29% impressions"
          },
          {
            text: "Engineered responsive, mobile-first architecture using SASS (BEM), Bootstrap, and modular JavaScript"
          },
          {
            text: "Developed internal tools used across Product, Design, and Content teams"
          },
          {
            text: "Led integrations with key monetization partners (Google, Swoop, Taboola)"
          },
          {
            text: "Mentored junior developers and presented frontend practices in engineering forums"
          }
        ]
      }
    ]
  },
  {
    company: "CatalpaSoft",
    location: "Indianapolis, IN",
    period: "Jan 2003 - Jan 2012",
    roles: [
      {
        title: "Sr Software Engineer / CEO",
        period: "Jan 2003 - Jan 2012",
        description: "Founded and led software firm specializing in digital solutions for foster care and child welfare agencies. Designed and delivered web platforms adopted statewide and across the Midwest.",
        achievements: [
          {
            text: "Cut statewide foster/adoption processing time, accelerating placements",
            metrics: "50%+ faster for 12K+ children, 3K foster households"
          },
          {
            text: "Eliminated manual paperwork and replaced data-entry roles with automated systems",
            metrics: "Saved $400K+/year"
          },
          {
            text: "Expanded child welfare platforms across state lines for recruitment, training, and assessments"
          },
          {
            text: "Built 5+ enterprise systems replacing paper, email, and spreadsheets (parent recruitment, child placement, training compliance, mentorship forums, developmental evaluation)"
          },
          {
            text: "Built web-based developmental assessment system used by clinicians to standardize behavioral evaluations"
          },
          {
            text: "Implemented secure single sign-on (Exchange/ColdFusion) and encrypted remote access for field staff years before modern cloud platforms"
          },
          {
            text: "Collaborated with state leadership to increase foster parent recruitment and community awareness"
          }
        ]
      }
    ]
  }
];
