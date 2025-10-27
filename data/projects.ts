export interface Project {
  id: string;
  title: string;
  summary: string;
  company: string;
  period: string;
  problem: string;
  solution: string;
  outcome: string;
  metrics?: string;
  stack: string[];
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "the-muse-migration",
    title: "Legacy Platform Migration to Next.js/TypeScript",
    summary: "The Muse - Complete replatforming from Python/Tornado/CoffeeScript to modern stack",
    company: "The Muse",
    period: "2023-2025",
    problem: "Legacy Python/Tornado/CoffeeScript platform with 45+ minute build times was blocking rapid iteration, making deployments risky, and limiting engineering velocity. The technical debt had accumulated over years, creating maintenance burden and slowing feature development.",
    solution: "Led complete migration to Next.js/TypeScript/SCSS stack using Claude Code for assisted refactoring. Incrementally decomposed monolithic services into microservices, established modern CI/CD pipelines, implemented comprehensive testing, and standardized development practices across teams.",
    outcome: "Build times dropped from 45+ minutes to 75 seconds, enabling multiple daily deployments. Development velocity increased significantly with modern tooling, type safety, and improved developer experience. Reduced production incidents and accelerated feature delivery.",
    metrics: "Build times: 45+ min → 75 sec",
    stack: ["Next.js", "TypeScript", "React", "SCSS", "Node.js", "AWS", "Docker", "CircleCI"],
    tags: ["Migration", "Performance", "DevOps", "Leadership"]
  },
  {
    id: "the-muse-white-label",
    title: "Multi-Tenant White-Label Job Search Platform",
    summary: "The Muse - Scalable B2B SaaS product enabling partners to launch branded job search sites",
    company: "The Muse",
    period: "2022-2023",
    problem: "The Muse wanted to expand revenue beyond job seeker platform by enabling partners to leverage job search technology. Required building scalable multi-tenant architecture that could handle custom branding, domains, and configuration while maintaining single codebase.",
    solution: "Architected and led development of white-label platform with tenant isolation, dynamic configuration, custom domain mapping, and brand theming. Built admin tooling for tenant provisioning and management. Designed data isolation strategy ensuring security and performance across tenants.",
    outcome: "Successfully launched B2B SaaS product opening new revenue stream. Platform enabled partners to launch branded job search sites within days instead of months. Architecture supports unlimited tenants with minimal overhead.",
    metrics: "Projected: $153K-$230K annual revenue per tenant",
    stack: ["Next.js", "TypeScript", "React", "Node.js", "PostgreSQL", "AWS", "Docker"],
    tags: ["Architecture", "B2B SaaS", "Multi-Tenant", "Product Leadership"]
  },
  {
    id: "the-muse-seo-pagination",
    title: "SEO Architecture Overhaul - Infinite Scroll to Pagination",
    summary: "The Muse - Replaced infinite scroll with paginated search for improved crawlability",
    company: "The Muse",
    period: "2021-2022",
    problem: "Infinite scroll job search prevented Google from discovering and indexing deep job listings. Search engines could only crawl the initial page load, leaving thousands of job postings invisible to organic search traffic and costing significant potential revenue.",
    solution: "Redesigned search UX from infinite scroll to paginated results with proper SEO implementation (canonical URLs, rel=prev/next, XML sitemaps). Collaborated with Product/Design to maintain user experience while optimizing for crawlability. Implemented progressive enhancement ensuring functionality without JavaScript.",
    outcome: "Google began indexing entire job catalog. Organic search traffic increased dramatically as job listings became discoverable. Improved rankings for job-related queries and reduced dependency on paid acquisition.",
    metrics: "+74K monthly SEO visits",
    stack: ["Next.js", "React", "SEO", "JavaScript", "Server-Side Rendering"],
    tags: ["SEO", "Product", "UX", "Growth"]
  },
  {
    id: "the-muse-ad-optimization",
    title: "Ad Platform Migration & Revenue Optimization",
    summary: "The Muse - Migrated to new ad partner with improved layouts and formats",
    company: "The Muse",
    period: "2020-2021",
    problem: "Existing ad partner provided limited formats and poor viewability. Ad revenue was plateauing and user experience suffered from intrusive placements. Needed better monetization without degrading Core Web Vitals or user experience.",
    solution: "Led evaluation and migration to new ad partner with modern formats (native, video, rich media). Redesigned ad integration with lazy loading, viewability optimization, and performance budgets. Implemented A/B testing framework to validate revenue impact and user experience metrics.",
    outcome: "Revenue increased 15% with better user experience. Improved ad viewability and CTR while maintaining excellent Core Web Vitals. Established framework for ongoing ad optimization experiments.",
    metrics: "+15% revenue increase",
    stack: ["JavaScript", "React", "Next.js", "Google Ad Manager", "A/B Testing"],
    tags: ["Monetization", "Performance", "Optimization"]
  },
  {
    id: "conde-nast-ad-platform",
    title: "Global Ad Platform for 30+ Premium Publications",
    summary: "Condé Nast - Rebuilt cross-brand ad delivery infrastructure at massive scale",
    company: "Condé Nast",
    period: "2015-2018",
    problem: "Legacy ad platform across Vogue, The New Yorker, Wired, GQ, Bon Appétit, and 25+ other brands had poor viewability (45%), slow render times, and inconsistent implementation. Every millisecond of latency impacted global revenue across 229M+ monthly users.",
    solution: "Architected and implemented unified ad platform serving all Condé Nast brands. Removed jQuery dependencies, optimized bundle size, implemented lazy loading and viewability tracking. Created shared UI tooling and plugin architecture. Standardized testing achieving 80%+ coverage.",
    outcome: "Ad viewability jumped from 45% to 85%, dramatically increasing revenue. Faster render times improved user experience and Core Web Vitals. Reduced integration defects and accelerated feature delivery across all brands.",
    metrics: "Ad viewability: 45% → 85%, 229M+ monthly users, 1B+ monthly video views",
    stack: ["JavaScript", "React", "Node.js", "Google Ad Manager", "Prebid", "AWS"],
    tags: ["Scale", "Monetization", "Architecture", "Performance"]
  },
  {
    id: "everyday-health-performance",
    title: "Health Platform Performance Optimization",
    summary: "Everyday Health - Reduced page load time and network requests for 30M+ monthly users",
    company: "Everyday Health",
    period: "2012-2015",
    problem: "Slow page loads (5+ seconds) and excessive network requests (100+ per page) created poor user experience, hurt SEO rankings, and reduced ad revenue. Mobile users particularly impacted, with high bounce rates on slow connections.",
    solution: "Implemented comprehensive performance optimization: lazy loading, image optimization, critical CSS, code splitting, CDN optimization, and reduced third-party scripts. Built responsive mobile-first architecture using SASS (BEM) and modular JavaScript. Established performance budgets and monitoring.",
    outcome: "Page load time decreased 54% and network requests cut 53%. Improved engagement metrics, better Core Web Vitals, higher SEO rankings, and increased ad revenue. Mobile experience dramatically improved.",
    metrics: "-54% load time, -53% requests, +86% ad CTR",
    stack: ["JavaScript", "SASS", "Bootstrap", "Responsive Design", "Performance Optimization"],
    tags: ["Performance", "Mobile", "SEO", "User Experience"]
  },
  {
    id: "catalpasoft-foster-care",
    title: "Statewide Foster Care & Adoption Platform",
    summary: "CatalpaSoft - Digital transformation for Indiana foster care system",
    company: "CatalpaSoft",
    period: "2003-2012",
    problem: "Indiana foster care system relied on manual paperwork, spreadsheets, and email to manage 12K+ children and 3K+ foster households. Processing took months, data was inconsistent, and staff spent significant time on data entry instead of helping families.",
    solution: "Founded software firm and built comprehensive platform handling parent recruitment, child placement, training compliance, mentorship forums, and developmental evaluations. Replaced paper/spreadsheet workflows with automated systems. Implemented secure single sign-on and encrypted remote access for field staff.",
    outcome: "Cut statewide foster/adoption processing time by 50%+, accelerating placements for vulnerable children. Eliminated manual paperwork and data entry roles, saving $400K+ annually. Platform expanded across state lines and served as model for child welfare digital transformation.",
    metrics: "50%+ faster processing for 12K+ children, $400K+ annual savings",
    stack: ["ColdFusion", "SQL Server", "JavaScript", "Exchange SSO", "Encryption"],
    tags: ["Social Impact", "Government", "Enterprise", "Founder"]
  },
  {
    id: "the-muse-core-web-vitals",
    title: "Core Web Vitals Optimization to Google Green",
    summary: "The Muse - Performance refactors improving rankings and conversions",
    company: "The Muse",
    period: "2020-2021",
    problem: "Google Core Web Vitals scores in red/orange range hurt SEO rankings and conversion rates. LCP, FID, and CLS metrics failed Google's thresholds, directly impacting search visibility and user experience during critical job search moments.",
    solution: "Implemented comprehensive Web Vitals optimization: image optimization with next/image, font loading optimization, code splitting, lazy loading, server-side rendering improvements, and third-party script optimization. Established monitoring and performance budgets to prevent regression.",
    outcome: "Achieved 90%+ green Core Web Vitals scores across all pages. Improved SEO rankings, increased organic traffic, and higher conversion rates. Established performance culture with ongoing monitoring and optimization.",
    metrics: "90%+ green Web Vitals, improved LCP + conversions",
    stack: ["Next.js", "React", "Performance API", "Lighthouse", "Web Vitals"],
    tags: ["Performance", "SEO", "User Experience"]
  },
  {
    id: "the-muse-structured-data",
    title: "Structured Data Implementation & SEO Growth",
    summary: "The Muse - JSON-LD structured data driving 10x organic traffic increase",
    company: "The Muse",
    period: "2019-2020",
    problem: "Job listings and articles not appearing in Google rich results (job cards, article snippets). Search engines struggled to understand content structure, limiting visibility in competitive job search market.",
    solution: "Implemented comprehensive JSON-LD structured data across all content types (JobPosting, Article, Organization, BreadcrumbList). Worked with SEO team to optimize schema markup and validate in Search Console. Built automated testing to prevent schema regression.",
    outcome: "Organic SEO traffic increased 10x as content appeared in Google rich results. Job listings displayed with salary, location, and company in search. Articles featured in Top Stories and article carousels. Dramatically reduced dependency on paid acquisition.",
    metrics: "10x increase in organic SEO traffic",
    stack: ["Next.js", "JSON-LD", "Schema.org", "SEO", "Server-Side Rendering"],
    tags: ["SEO", "Growth", "Structured Data"]
  },
  {
    id: "the-muse-ai-search-maya",
    title: "AI-Powered Content Discovery Tool (Maya)",
    summary: "The Muse - AI search tool surfacing 24,000+ articles with natural language queries",
    company: "The Muse",
    period: "2024",
    problem: "Over 24,000 articles from The Muse and FGB were difficult for users to discover through traditional search and navigation. Article content represented significant value but wasn't being surfaced effectively, limiting engagement and monetization opportunities. Users needed a more intuitive way to find relevant career advice.",
    solution: "Designed and led development of Maya, an AI-powered content discovery tool that uses natural language processing to surface relevant articles. Built with React.js and Next.js, integrating with article APIs to provide intelligent search results. Positioned platform for AI-first search future while maintaining performance standards.",
    outcome: "Increased article pageviews by 3,500 unique users per month. Boosted organic reach and created PR-driven traffic opportunities. Opened new top-of-funnel monetization paths by improving content discoverability. Demonstrated technical leadership in emerging AI technologies.",
    metrics: "+3,500 unique users/month, 24K articles surfaced",
    stack: ["React.js", "Next.js", "APIs", "AI/ML", "Natural Language Processing"],
    tags: ["AI/ML", "Product", "Innovation", "User Experience"]
  },
  {
    id: "the-muse-two-paned-search",
    title: "Two-Paned Job Search UX Redesign",
    summary: "The Muse - Revolutionary split-pane interface increasing applications 50%",
    company: "The Muse",
    period: "2024",
    problem: "Job seekers had to click into separate pages to view job details, then use back button to return to search results. This multi-tab workflow created friction, interrupted browsing flow, and reduced application conversion. Users lost context switching between search and detail views.",
    solution: "Revamped job search UX to two-pane layout allowing jobseekers to browse listings and view details in same tab. Implemented inline navigation that updates URL for SEO while maintaining smooth UX. Created new indexable URLs for each job view state while keeping user in browsing mode.",
    outcome: "50% increase in job applications per user by reducing navigation friction. Improved SEO through new indexable job detail URLs. Enhanced user experience by maintaining search context while exploring opportunities. Demonstrated impact of thoughtful UX on core conversion metrics.",
    metrics: "+50% applications per user",
    stack: ["React.js", "Next.js", "TypeScript", "UX Design", "SEO"],
    tags: ["UX", "Product", "Conversion", "SEO"]
  },
  {
    id: "the-muse-direct-apply-forms",
    title: "Dynamic Direct Apply Forms with Multi-ATS Integration",
    summary: "The Muse - JSON-driven application forms integrated with partner ATS platforms",
    company: "The Muse",
    period: "2023",
    problem: "Google prioritizes sites with direct application capability in Google Jobs search results. The Muse needed to enable on-site applications without rebuilding forms for each partner's unique requirements. Each ATS had different fields, validation rules, and security requirements for handling PII.",
    solution: "Partnered with multiple third-party applicant tracking systems and built dynamic form generator consuming JSON schema definitions. Created system supporting custom fields, validation rules, display ordering, and PII security. Implemented multi-phase approach with technical documentation, partner coordination, and POC variants for each ATS integration.",
    outcome: "Clickthrough rate increased 15% and job applications increased 10% by reducing friction. Achieved Google Jobs prioritization improving organic discovery. Built scalable platform supporting unlimited ATS partners without custom development for each integration.",
    metrics: "+15% CTR, +10% job applies",
    stack: ["React.js", "Next.js", "TypeScript", "JSON", "APIs", "Jest"],
    tags: ["Integration", "Product", "Conversion", "APIs"]
  },
  {
    id: "the-muse-company-profiles",
    title: "Company Profile Pages Performance & SEO Transformation",
    summary: "The Muse - Lighthouse scores to all-green across performance, accessibility, and SEO",
    company: "The Muse",
    period: "2023",
    problem: "Company profile pages built on legacy monolith (CoffeeScript, Python, Tornado) had poor performance scores hurting SEO rankings and user experience. Mobile Lighthouse scores: Performance 62, Accessibility 96, Best Practices 83, SEO 89. Slow load times reduced engagement and conversion for job seekers researching employers.",
    solution: "Replatformed Company Profile pages as server-side rendering microfrontend using Next.js, TypeScript, Docker, AWS ECS, and CircleCI. Replaced legacy stack with modern standards while maintaining feature parity. Focused optimization efforts on Core Web Vitals and accessibility compliance.",
    outcome: "Achieved all-green Lighthouse scores: Performance 91 (+29), Accessibility 100 (+4), Best Practices 92 (+9), SEO 96 (+7). Dramatically improved page load times and user experience. Enhanced SEO rankings leading to increased organic traffic to company profiles and job listings.",
    metrics: "Lighthouse: Perf 62→91, A11y 96→100, BP 83→92, SEO 89→96",
    stack: ["Next.js", "TypeScript", "React.js", "Docker", "AWS ECS", "CircleCI"],
    tags: ["Performance", "SEO", "Migration", "Accessibility"]
  },
  {
    id: "the-muse-search-ux-refresh",
    title: "Job Search Experience Complete UX & Technical Rebuild",
    summary: "The Muse - Modern search interface with 21.9% increase in clicks and perfect Web Vitals",
    company: "The Muse",
    period: "2021-2022",
    problem: "Job search experience felt dated and didn't align with The Muse's modern approach to job seeking. Technical debt in search page architecture limited ability to iterate quickly and add features. Poor Core Web Vitals hurt SEO rankings. User engagement metrics showed room for improvement in browsing and discovery.",
    solution: "Complete UX refresh redesigning search interface from ground up while rebuilding technical architecture. Migrated to Next.js, Koa, Storybook, TypeScript, CSS Modules, and Docker. Collaborated with Product and Design teams to reimagine job discovery experience. Focused on performance optimization achieving perfect Core Web Vitals scores.",
    outcome: "Increased job tile views 8.7%, tile views per unique visitor 20%, and job tile clicks 21.9%. Achieved exceptional Core Web Vitals: LCP 2.23s, FID 0.02s, CLS 0 (perfect). Improved SEO rankings through performance gains. Created scalable, maintainable platform for future search innovations.",
    metrics: "+21.9% clicks, +20% views/user, LCP 2.23s, FID 0.02s, CLS 0",
    stack: ["Next.js", "TypeScript", "Koa", "Storybook", "CSS Modules", "Docker"],
    tags: ["UX", "Performance", "Product", "Architecture"]
  }
];

// Helper function to get projects by tag
export function getProjectsByTag(tag: string): Project[] {
  return projects.filter(project => project.tags.includes(tag));
}

// Helper function to get projects by company
export function getProjectsByCompany(company: string): Project[] {
  return projects.filter(project => project.company === company);
}

// Get all unique tags
export function getAllTags(): string[] {
  const tags = new Set<string>();
  projects.forEach(project => {
    project.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
}

// Get all unique companies
export function getAllCompanies(): string[] {
  const companies = new Set<string>();
  projects.forEach(project => companies.add(project.company));
  return Array.from(companies).sort();
}
