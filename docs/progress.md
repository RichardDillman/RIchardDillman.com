# Project Progress Checklist

## ✅ Completed

### Infrastructure & Setup

- [x] Next.js 15 with App Router initialized
- [x] TypeScript 5 with strict mode configured
- [x] Tailwind CSS 3 with dark mode support (class-based)
- [x] Contentlayer configured for MDX blog posts
- [x] ESLint with Next.js recommended config
- [x] pnpm package manager setup
- [x] All dependencies installed (next-seo, contentlayer, react-icons, framer-motion, next-themes, @vercel/analytics, plausible-tracker, rehype plugins)
- [x] **React 19.2.0** upgraded for modern hooks (useActionState, use)
- [x] **Headless UI** installed for Disclosure component pattern
- [x] Git repository initialized and cleaned up
- [x] CLAUDE.md documentation created for future Claude Code instances
- [x] README.md with project overview
- [x] Directory structure created (app routes, components, content, public)

### Documentation

- [x] `docs/setup.prd` - Original PRD from user
- [x] `docs/implementation.prd` - Detailed implementation backlog
- [x] `docs/Resume.pdf` - User's resume for content reference
- [x] `docs/career-history.md` - Complete website portfolio (32+ sites, 1999-2025)
- [x] `CLAUDE.md` - Guide for Claude Code
- [x] `README.md` - Project documentation

### Data & Content

- [x] `data/experience.ts` - Structured experience data extracted from resume
  - The Muse (4 roles, 28+ achievements)
  - Condé Nast (1 role, 7 achievements)
  - Everyday Health (1 role, 6 achievements)
  - CatalpaSoft (1 role, 7 achievements)
- [x] `data/projects.ts` - **9 major technical projects** with Problem/Solution/Outcome structure
  - Migration, Performance, SEO, Monetization, Architecture, Social Impact
  - Helper functions for filtering by tag/company
  - Full tech stack and metrics for each project

### Components

- [x] `components/Header.tsx` - Site navigation header
- [x] `components/Footer.tsx` - Site footer with copyright
- [x] `components/ExperienceCard.tsx` - Individual experience card with roles and achievements
- [x] `components/ExperienceList.tsx` - Container for all experience cards
- [x] `components/ProjectDisclosure.tsx` - **React 19.2 useActionState** expandable project card
  - Uses Headless UI Disclosure component
  - Supports isPending state for async loading
  - Clean expandable drawer UX

### Pages (Completed)

- [x] `app/layout.tsx` - Root layout with Header/Footer, Inter font
- [x] `app/globals.css` - Global styles with Tailwind directives
- [x] `app/page.tsx` - **Home page with Hero and TechStackPreview**
  - Professional headshot in circular frame
  - Three CTA buttons (Experience, Projects, Contact)
  - Condensed tech stack preview showing primary technologies
  - CTA to full /stack page
- [x] `app/stack/page.tsx` - **Full tech stack page**
  - 60+ technologies across 7 categories
  - Primary focus highlight section
  - Organized by Languages, Frontend, Backend, DevOps, Performance, Testing, Tools
- [x] `app/about/page.tsx` - Full about page with bio, leadership style, interests
- [x] `app/experience/page.tsx` - **Experience page with LogoMontage**
  - All roles and achievements
  - Brand logos montage at bottom (32 companies)
- [x] `app/contact/page.tsx` - Contact page with obfuscated email and social links
- [x] `app/projects/page.tsx` - **Projects showcase with 9 major technical achievements**
  - Expandable disclosure pattern with Problem/Solution/Outcome
  - Tech stack tags, metrics, and impact highlights
  - Tag filter preview showing focus areas
  - CTA footer linking to contact page
- [x] `app/blog/page.tsx` - **Blog listing page with 7 posts**
  - Sorted by date (newest first)
  - Tag badges, descriptions, and read time
  - Links to dev.to for attribution
- [x] `app/blog/[slug]/page.tsx` - **Individual blog post pages**
  - MDX rendering with syntax highlighting
  - Full prose styling with Tailwind Typography
  - SEO metadata per post
  - Static generation for all posts

### Content

- [x] **7 blog posts imported from dev.to**:
  - "Why Your React Component Is a Hot Mess (and How to Fix It)" (2025) - with hero image
  - "Hero Image Optimization Techniques" (2023) - with hero image
  - "Head tags organized" (2021) - with hero image
  - "Creating readable names" (2021) - with hero image
  - "Operation Code at The Muse" (2020) - with hero image
  - "How to write a readable commit message" (2020) - with hero image
  - All with frontmatter (title, date, description, tags, coverImage)
- [x] **6 hero images** for blog posts (150KB webp, 66-83KB jpeg each)
  - All optimized with Next.js Image component
  - Responsive with hover effects on blog listing
  - Full-width display on individual posts

### Configuration Files

- [x] `package.json` - All dependencies configured (including date-fns for blog)
- [x] `tsconfig.json` - TypeScript configuration
- [x] `next.config.ts` - Next.js config with Contentlayer
- [x] `tailwind.config.ts` - Tailwind with dark mode
- [x] `postcss.config.mjs` - PostCSS configuration
- [x] `eslint.config.mjs` - ESLint flat config
- [x] `contentlayer.config.ts` - MDX blog post processing
- [x] `.gitignore` - Comprehensive ignore patterns

---

## 🚧 In Progress / Not Started

### Pages (Empty Routes)

- [x] `app/stack/page.tsx` - **Full tech stack page with 60+ technologies**
  - Complete TechStack component with all categories
  - SEO optimized for tech skills and tools

### Components Needed

- [x] `components/Hero.tsx` - Main hero section with headshot and CTAs
- [x] `components/TechStack.tsx` - Tech stack showcase with 60+ technologies
- [x] `components/TechStackPreview.tsx` - Condensed preview for home page with CTA
- [x] `components/LogoMontage.tsx` - Brand logos montage (32 companies)
- [ ] `components/SocialLinks.tsx` - Social media links component
- [ ] `components/ThemeToggle.tsx` - Dark mode switcher
- [ ] `components/SEO.tsx` - SEO meta tags component (or use next-seo directly)

### Data Structures Needed

- [x] `data/techStack.ts` - Tech stack, tools, frameworks data (60+ technologies across 7 categories)
- [x] `data/logos.ts` - Brand logos for portfolio montage (32 companies)

### Content Needed

- [x] Improve home page with proper Hero component
- [x] Document tech stack for home page
- [x] Add profile photo to `/public/images/` (homepage-hero.webp)
- [ ] Write additional blog posts (currently have 7 from dev.to)

### Features & Integrations

- [ ] Dark mode theme toggle (next-themes integration)
- [x] **SEO configuration complete**
  - [x] Enhanced metadata with OpenGraph and Twitter cards on all pages
  - [x] Dynamic OG image generation route (`/api/og`)
  - [x] Sitemap generation (`/sitemap.xml`)
  - [x] Robots.txt configuration
  - [x] metadataBase configured in root layout
  - [x] Blog post-specific OG images with title and description
- [ ] Vercel Analytics integration
- [ ] Plausible tracker setup
- [x] Blog post MDX rendering with syntax highlighting
- [x] Blog post pagination (if needed)

### Performance & Optimization

- [x] **Lighthouse CI Setup Complete**
  - [x] `lighthouse/lighthouserc.ts` configuration with strict thresholds
  - [x] GitHub Actions workflow (`.github/workflows/lighthouse-ci.yml`)
  - [x] Pre-push git hook with `--no-verify` escape hatch
  - [x] `pnpm run test:lhci` script for local testing
  - [x] @lhci/cli package installed
- [ ] Run initial Lighthouse audit and fix any issues
- [x] Optimize images (add profile photo, optimize loading)
- [ ] Font optimization review
- [ ] Code splitting review
- [x] Web Vitals monitoring setup (Lighthouse CI configured)
- [x] Target: LCP < 2.5s (enforced in Lighthouse CI)
- [x] Target: Lighthouse Performance 95+ (enforced in Lighthouse CI)
- [x] Target: Lighthouse Accessibility 100 (enforced in Lighthouse CI)
- [x] Target: Build time < 60s on Vercel (monitored in GitHub Actions)

### Accessibility

- [ ] Keyboard navigation testing
- [ ] ARIA labels audit
- [ ] Screen reader testing
- [ ] WCAG AA compliance verification

### Deployment

- [x] Deploy to Vercel
- [ ] Configure custom domain (richarddillman.com)
- [ ] Set up environment variables (if needed for analytics)
- [ ] Configure Vercel Analytics
- [ ] Test production build

---

## 📈 Talent.com work waiting on an "after" number (added 2026-10-25)

Shipped Talent.com work that could become a project and achievement once a before/after number exists. The bar: it moved a measurable number, the change can be traced, and it moved the right way. Drop anything that doesn't clear it. Each item names the check that produces the number. Ticket keys are in the talent repo's Jira.

- [ ] **Job expiry, no-crawl pass (ADTECH-718).** First real run is Tue 2026-10-27 after 5:00 AM Eastern. Check the jobs-ingestion cron log for the expired count. The 2026-10-19 dry run said 36,142 jobs from 460 scanIDs; that is a plan, not a result.
- [ ] **AdSense click tracking (ADTECH-730).** Not on main as of 2026-10-25. Once in prod, compare daily `adsense_clicked` in `datalake.user_event` with AdSense console clicks. Before: 107,423 events against 129,118 clicks, Oct 8 to 21.
- [ ] **Job type and salary in JobPosting data (ADTECH-724, BUGT-15862).** Final fix db8ee2a498 not on main as of 2026-10-25. Compare the Search Console Job posting enhancement report (valid and warnings) before and after it reaches main.
- [ ] **Google for Jobs ping timing (ADTECH-697, 703, 720).** On main. Measure the share of newly pinged URLs that URL Inspection reports as "Excluded by noindex", before against after 2026-10-20. Before: 17,553 of 20,000 sampled comeback pings went out under 30 minutes after the job came back (ADTECH-720).

Considered and left out: /view performance (ADTECH-677), about 100 ms faster at the median, judged too small to feature.

## 📋 Priority Next Steps

> As of 2026-10-25 this list looks out of date: the projects page and deploy are done. Verify each item against the site before acting on it.

Based on PRD and current state, here's the recommended order:

1. **Home Page Hero** - Create strong first impression
   - Build Hero.tsx component
   - Add SocialLinks.tsx
   - Update app/page.tsx with proper content
   - Add profile photo

2. **Dark Mode** - Complete theme system
   - Build ThemeToggle.tsx
   - Integrate next-themes
   - Add toggle to Header

3. **Projects Page** - Showcase technical work
   - Create data/projects.ts
   - Build ProjectCard.tsx and ProjectGrid.tsx
   - Create app/projects/page.tsx

4. **Blog System** - Enable content publishing
   - Build PostList.tsx and PostLayout.tsx
   - Create app/blog/page.tsx
   - Create app/blog/[slug]/page.tsx
   - Write 2-3 real blog posts

5. **Uses Page** - Share tech stack
   - Create data/uses.ts
   - Build UsesList.tsx component (if needed)
   - Create app/uses/page.tsx

6. **SEO & Analytics** - Improve discoverability
   - Configure next-seo globally
   - Add per-page SEO metadata
   - Set up Vercel Analytics
   - Set up Plausible (optional)

7. **Performance Audit** - Hit target metrics
   - Run Lighthouse
   - Optimize images
   - Review bundle size
   - Test Core Web Vitals

8. **Deploy** - Go live
   - Deploy to Vercel
   - Configure domain
   - Test production

---

## 🔧 Known Issues

1. **Contentlayer peer dependency warning** - Expects Next.js 12/13, but using Next.js 15. Functions correctly despite warning.
2. **Build scripts need approval** - Run `pnpm approve-builds` to enable build scripts for contentlayer, esbuild, sharp, protobufjs, unrs-resolver.
3. **No profile photo yet** - Need to add image to `/public/images/`
4. **ESLint config warning** - Minor import path warning in eslint.config.mjs (does not affect build)

---

## 📝 Notes

- **React 19.2.0** installed with modern hooks (`useActionState`, `use`)
- **Headless UI** integrated for accessible, unstyled components
- Email on contact page is obfuscated with HTML entities for spam protection
- All em/en dashes removed from about page per user preference
- Experience page has 48 detailed achievements with metrics
- **Projects page has 9 major technical projects** with full Problem/Solution/Outcome structure
- Projects use expandable Disclosure pattern (React 19 + Headless UI)
- **Blog system fully functional** with 7 posts imported from dev.to
- Blog posts use MDX with syntax highlighting and responsive embeds
- **Home page redesigned** with professional Hero component and TechStack showcase
- **Hero component** features circular headshot, tagline, and three CTAs
- **TechStack component** showcases 45+ technologies across 7 categories
- **LogoMontage component** displays 32 brand logos on experience page
- 32 brand logos downloaded (30 PNG, 2 SVG) from career history
- Dark mode configured but toggle UI not yet implemented
- Resume available in docs/Resume.pdf for reference
- **Complete career history** documented in docs/career-history.md (32+ websites, 1999-2025)
- User's LinkedIn tagline: "Senior Director of Engineering • Mentor Performance optimizer • Build speed fanatic • TypeScript/Next.js engineer"
- User's portfolio includes: The Muse, Condé Nast (Vogue, GQ, Wired, etc.), Everyday Health, CatalpaSoft, State of Indiana, and many others

## 🎯 Modern Stack Highlights

- **React 19.2** - Latest hooks including `useActionState` for form/state management
- **Headless UI 2.2** - Accessible, unstyled components (Disclosure, future: Dialog, Menu, etc.)
- **Next.js 15** - App Router, Server Components, optimized builds
- **TypeScript 5** - Full type safety across components and data
- **Contentlayer** - MDX blog posts with frontmatter, auto-generated types
- **Build Performance** - 7.1s production builds, all static pages
- **Bundle Size** - 102 kB shared JS, 9.43 kB for projects, 1.77 kB for blog posts
- **Static Generation** - 16 total pages (home, about, contact, experience, projects, blog + 7 blog posts)
