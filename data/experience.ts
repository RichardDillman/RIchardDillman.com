export interface Achievement {
  text: string;
  metrics?: string;
  projectId?: string; // Links to project ID in projects.ts
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
  location: string;
  period: string;
  roles: Role[];
}

export const experiences: Experience[] = [
  {
    company: "The Muse",
    companyLogos: ["the-muse.png", "fairy-god-boss.png", "purpose-jobs.png"],
    location: "Remote",
    period: "Dec 2018 - Sep 2025",
    roles: [
      {
        title: "Senior Director of Engineering",
        period: "Jan 2022 - Sep 2025",
        description: "Led engineering at The Muse, building job search platforms that help people find work they actually want. Spanned technical planning, mentoring, hands-on architecture, and cross-functional collaboration with Product, Design, and leadership.",
        achievements: [
          {
            text: "Increased article pageviews 3,500 users/month launching Maya, The Muse's first AI-powered content discovery tool surfacing 24K+ articles",
            metrics: "+3,500 users/month",
            projectId: "the-muse-ai-search-maya"
          },
          {
            text: "Improved job applications 50% by redesigning search to two-pane layout enabling inline browsing",
            metrics: "+50% applications per user",
            projectId: "the-muse-two-paned-search"
          },
          {
            text: "Accelerated build times from 45+ min to 75 sec completing migration to Next.js/TypeScript with Claude Code",
            metrics: "45+ min → 75 sec",
            projectId: "the-muse-migration"
          },
          {
            text: "Boosted job applies 10% and CTR 15% through dynamic forms integrating multiple ATS partners for Google Jobs",
            metrics: "+15% CTR, +10% applies",
            projectId: "the-muse-direct-apply-forms"
          },
          {
            text: "Achieved all-green Lighthouse scores (Perf 91, A11y 100, SEO 96) replatforming Company Profiles to Next.js",
            metrics: "Perf 62→91, A11y 96→100, SEO 89→96",
            projectId: "the-muse-company-profiles"
          },
          {
            text: "Launched white-label job search platform generating projected $153K-$230K annual revenue per partner tenant",
            metrics: "$153K-$230K/year/tenant",
            projectId: "the-muse-white-label"
          },
          {
            text: "Increased SEO visits 74K/month by replacing infinite scroll with server-side pagination",
            metrics: "+74K/month SEO visits",
            projectId: "the-muse-seo-pagination"
          },
          {
            text: "Increased ad revenue 15% migrating to Raptive with improved layouts and formats",
            metrics: "+15% revenue",
            projectId: "the-muse-ad-optimization"
          },
          {
            text: "Improved searches per user 13% through personalized search features",
            metrics: "+13% searches per user"
          },
          {
            text: "Formalized Claude as The Muse's first AI contributor handling GitHub issues, code review, and autonomous tasks"
          }
        ]
      },
      {
        title: "Staff Engineer, Director of Application Development",
        period: "Jun 2020 - Dec 2021",
        description: "Led engineering strategy and product delivery across The Muse. Set architectural direction, guided roadmap priorities, mentored engineers, and improved development velocity.",
        achievements: [
          {
            text: "Increased job tile clicks 21.9% and views per user 20% through complete UX refresh achieving perfect Web Vitals",
            metrics: "+21.9% clicks, +20% views/user",
            projectId: "the-muse-search-ux-refresh"
          },
          {
            text: "Generated $994K annual revenue integrating display ads across The Muse platform",
            metrics: "$994K annual revenue"
          },
          {
            text: "Improved CTR 22% through systematic UX experiments",
            metrics: "+22% CTR"
          },
          {
            text: "Increased job search conversions 13% launching Trending Search module through end-to-end ownership",
            metrics: "+13% conversions"
          },
          {
            text: "Accelerated code review velocity 30% and reduced bugs standardizing ESLint and Jest across all teams",
            metrics: "30% faster reviews"
          },
          {
            text: "Modernized page templates extracting from legacy Tornado/Python monolith and rebuilding as scalable microservices"
          }
        ]
      },
      {
        title: "Staff Engineer",
        period: "Mar 2019 - May 2020",
        achievements: [
          {
            text: "Increased organic SEO traffic 10x deploying JSON-LD structured data and performance refactors",
            metrics: "10x traffic increase",
            projectId: "the-muse-structured-data"
          },
          {
            text: "Achieved 90%+ green Core Web Vitals improving rankings and conversions",
            metrics: "90%+ green",
            projectId: "the-muse-core-web-vitals"
          },
          {
            text: "Cut build times from 45 min to 75 sec modularizing repos and overhauling CI/CD pipelines",
            metrics: "45 min → 75 sec"
          },
          {
            text: "Improved LCP and conversions reducing site load 4 seconds sitewide",
            metrics: "-4 seconds load time"
          },
          {
            text: "Reduced regression bugs 30%+ championing test automation, linting, and CI/CD",
            metrics: "30%+ fewer bugs"
          },
          {
            text: "Scaled team delivery through standardization (ESLint, Jest, Puppeteer, CLA) and mentorship"
          },
          {
            text: "Owned full-stack performance monitoring (Web Vitals, GA, SEO, Datadog)"
          }
        ]
      },
      {
        title: "Senior Application Engineer",
        period: "Dec 2018 - Feb 2019",
        description: "Worked with Director of Engineering to shape technical strategy, extend platforms, and lead new product development. Modernized legacy systems using Node, React, Python, AWS, Postgres.",
        achievements: [
          {
            text: "Accelerated deployments 50% and reduced incidents replatforming CMS and article renderer using KOA, React, Docker",
            metrics: "50% faster deployments"
          },
          {
            text: "Accelerated code review 30% and reduced bugs standardizing ESLint and Jest across teams",
            metrics: "30% faster reviews"
          },
          {
            text: "Reduced project setup from 2-3 weeks to 2-3 days building reusable repo template (Next.js, KOA, Docker, CircleCI) adopted org-wide"
          },
          {
            text: "Modernized job search, article rendering, and homepage rebuilding as scalable microservices"
          }
        ]
      }
    ]
  },
  {
    company: "Condé Nast",
    companyLogos: [
      "vogue.png",
      "the-new-yorker.png",
      "wired.png",
      "gq.png",
      "vanity-fair.png",
      "ars-technica.png",
      "architectural-digest.png",
      "allure.png",
      "bon-appetit.png",
      "conde-nast-traveler.png",
      "epicurious.png",
      "glamour.png",
      "pitchfork.png",
      "self.png",
      "teen-vogue.png",
      "them.png"
    ],
    location: "New York City",
    period: "Jul 2015 - Nov 2018",
    roles: [
      {
        title: "Senior Software Engineer, Ad Tech, Monetization",
        period: "Jul 2015 - Nov 2018",
        description: "Led ad-platform modernization across Condé Nast's premier brands (Vogue, The New Yorker, Wired, GQ, Bon Appétit, Vanity Fair, etc.) where every millisecond of latency impacted global revenue and user trust.",
        achievements: [
          {
            text: "Increased ad viewability from 45% to 85% rebuilding infrastructure for 30+ global publications serving 229M+ monthly users",
            metrics: "45% → 85% viewability",
            projectId: "conde-nast-ad-platform"
          },
          {
            text: "Optimized monetization pipelines serving 229M+ monthly users and 1B+ monthly video views",
            metrics: "229M users, 1B video views"
          },
          {
            text: "Accelerated ad render times removing legacy jQuery dependencies and reducing bundle size"
          },
          {
            text: "Reduced integration defects achieving 80%+ test coverage through standardized testing and documentation org-wide",
            metrics: "80%+ test coverage"
          },
          {
            text: "Designed shared UI tooling and plugin architecture adopted across multiple editorial brands"
          },
          {
            text: "Led code reviews, mentored junior engineers, coordinated with major ad vendors and programmatic exchanges"
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
    companyLogos: [
      "everyday-health.png",
      "medpage-today.png",
      "denise-austin.png",
      "jillian-michaels.png",
      "south-beach-diet.png",
      "spark-america.png",
      "diabetes-daily.png",
      "what-to-expect.png"
    ],
    location: "New York City",
    period: "Jan 2012 - Jul 2015",
    roles: [
      {
        title: "Front End Engineer",
        period: "Jan 2012 - Jul 2015",
        description: "Built and optimized consumer health platforms reaching 30M+ monthly users, delivering performance, accessibility, and monetization improvements.",
        achievements: [
          {
            text: "Improved page load time 54% and cut network requests 53% optimizing Core Web Vitals for 30M+ monthly users",
            metrics: "-54% load time, -53% requests",
            projectId: "everyday-health-performance"
          },
          {
            text: "Increased ad CTR 86% while reducing impressions 29% driving higher programmatic yield",
            metrics: "+86% CTR, -29% impressions"
          },
          {
            text: "Engineered responsive, mobile-first architecture using SASS (BEM), Bootstrap, and modular JavaScript"
          },
          {
            text: "Led integrations with key monetization partners (Google, Swoop, Taboola)"
          },
          {
            text: "Developed internal tools used across Product, Design, and Content teams"
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
    companyLogos: [
      "state-of-indiana.svg",
      "indiana-health.png",
      "indiana-heart-gallery.png"
    ],
    location: "Indianapolis, IN",
    period: "Jan 2003 - Jan 2012",
    roles: [
      {
        title: "Sr Software Engineer / CEO",
        period: "Jan 2003 - Jan 2012",
        description: "Founded and led software firm specializing in digital solutions for foster care and child welfare agencies. Designed and delivered web platforms adopted statewide and across the Midwest.",
        achievements: [
          {
            text: "Accelerated foster/adoption placements 50%+ for 12K+ children cutting statewide processing time",
            metrics: "50%+ faster for 12K+ children",
            projectId: "catalpasoft-foster-care"
          },
          {
            text: "Saved $400K+/year eliminating manual paperwork and replacing data-entry roles with automated systems",
            metrics: "$400K+/year savings"
          },
          {
            text: "Built 5+ enterprise systems replacing paper, email, and spreadsheets (parent recruitment, child placement, training compliance, mentorship forums, developmental evaluation)"
          },
          {
            text: "Expanded child welfare platforms across state lines for recruitment, training, and assessments"
          },
          {
            text: "Built web-based developmental assessment system standardizing behavioral evaluations for clinicians"
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
