# PRD: Lighthouse Performance & Accessibility Optimization

**Status:** 🔴 Active
**Priority:** High
**Owner:** Engineering
**Created:** 2025-10-29

---

## Executive Summary

Recent Lighthouse CI testing revealed critical performance and accessibility issues across richarddillman.com. While the site successfully migrated from Contentlayer to Content Collections, several optimization opportunities were identified that impact user experience, SEO rankings, and accessibility compliance.

**Key Findings:**
- ❌ 4 pages fail accessibility targets (91-99% vs 100% target)
- ⚠️ JavaScript bundles 3x over budget (780KB vs 250KB target)
- ⚠️ HTML documents significantly oversized on content-heavy pages

---

## Problem Statement

### 1. Accessibility Compliance Failures

**Impact:** Legal risk, reduced user base, poor SEO

| Page | Current Score | Target | Gap | Severity |
|------|---------------|--------|-----|----------|
| `/projects` | 98% | 100% | -2% | Medium |
| `/blog` | 99% | 100% | -1% | Low |
| `/experience` | 96% | 100% | -4% | High |
| `/stack` | 96% | 100% | -4% | High |
| Production blog | 91% | 100% | -9% | Critical |

**Root Causes:**
- Missing ARIA labels on interactive elements
- Insufficient color contrast ratios
- Missing alt text on images
- Improper heading hierarchy
- Form accessibility issues

---

### 2. JavaScript Bundle Bloat

**Impact:** Slow page loads, poor mobile experience, increased bounce rate

**Current State:**
- Bundle Size: **750-780KB** (3x over budget)
- Target: **≤250KB**
- Over Budget: **500-530KB per page**

**Root Causes:**
- Next.js client-side JavaScript includes all routes
- Unused dependencies bundled in production
- Large third-party libraries not code-split
- MDX runtime overhead with next-mdx-remote
- Potentially duplicated React code across chunks

**Breakdown (Estimated):**
```
Next.js Runtime:     ~200KB
React 19 + ReactDOM: ~150KB
MDX Runtime:         ~100KB
Third-party libs:    ~150KB
Application code:    ~180KB
------------------------
Total:               ~780KB
```

---

### 3. HTML Document Size

**Impact:** Slower initial page load, SEO penalties, poor mobile experience

| Page | Current Size | Target | Over Budget | Severity |
|------|--------------|--------|-------------|----------|
| `/experience` | 84KB | 18KB | **+366%** | Critical |
| `/projects` | 67KB | 18KB | **+272%** | Critical |
| `/stack` | 33KB | 18KB | **+83%** | High |
| `/blog` | 22KB | 18KB | **+26%** | Medium |
| `/contact` | 18.5KB | 18KB | **+2.7%** | Low |

**Root Causes:**
- Large inline JSON data for projects/experience
- Embedded structured data (JSON-LD)
- Long text content without pagination
- Inline critical CSS not optimized

---

## Goals & Success Metrics

### Primary Goals
1. **Achieve 100% accessibility** on all pages
2. **Reduce JS bundle to ≤250KB** (68% reduction)
3. **Reduce HTML to ≤18KB** on all pages

### Success Metrics
| Metric | Current | Target | Timeline |
|--------|---------|--------|----------|
| Accessibility Score | 91-99% | 100% | Sprint 1 (Week 1-2) |
| JS Bundle Size | 780KB | 250KB | Sprint 2-3 (Week 3-6) |
| HTML Document Size | 22-84KB | 18KB | Sprint 2 (Week 3-4) |
| Performance Score | Unknown | ≥95% | Sprint 3 (Week 5-6) |
| Lighthouse CI Passing | ❌ | ✅ | End of Sprint 3 |

---

## Solutions & Implementation Plan

### Sprint 1: Accessibility Fixes (Week 1-2)

#### Tasks
1. **Audit with axe DevTools**
   - Install browser extension
   - Run on all failing pages
   - Document specific violations

2. **Fix Common Issues**
   - Add `alt` attributes to all `<Image>` components
   - Ensure proper heading hierarchy (h1 → h2 → h3)
   - Add ARIA labels to icon buttons
   - Fix color contrast issues
   - Ensure keyboard navigation works

3. **Fix Page-Specific Issues**
   - **`/projects`**: Fix ProjectDisclosure accessibility
   - **`/blog`**: Check blog post link accessibility
   - **`/experience`**: Timeline component ARIA roles
   - **`/stack`**: Technology badges contrast/labels

4. **Add Accessibility Testing**
   - Install `@axe-core/react` for runtime checking
   - Add `eslint-plugin-jsx-a11y` rules
   - Configure pre-commit hooks

**Deliverables:**
- ✅ 100% accessibility score on all pages
- ✅ axe DevTools reports with 0 violations
- ✅ Updated components with proper ARIA
- ✅ Accessibility testing in CI/CD

---

### Sprint 2: Bundle Size Optimization (Week 3-4)

#### Phase 1: Analysis
```bash
# Install bundle analyzer
pnpm add -D @next/bundle-analyzer

# Analyze current bundles
ANALYZE=true pnpm build
```

#### Phase 2: Code Splitting
1. **Dynamic Imports for Heavy Components**
   ```tsx
   // Before
   import { ProjectDisclosure } from '@/components/ProjectDisclosure'

   // After
   const ProjectDisclosure = dynamic(
     () => import('@/components/ProjectDisclosure'),
     { ssr: true }
   )
   ```

2. **Route-based Code Splitting**
   - Ensure each page bundle is separate
   - Move shared components to separate chunks
   - Use `next/dynamic` for below-the-fold content

3. **Third-Party Library Optimization**
   ```tsx
   // Replace date-fns with smaller alternatives
   // Before: import { format } from 'date-fns'
   // After: Use native Intl.DateTimeFormat

   // Replace heavy icon libraries with SVG components
   // Before: import { FaReact } from 'react-icons/fa'
   // After: inline SVG or use next/image
   ```

#### Phase 3: MDX Optimization
1. **Evaluate MDX Compilation Strategy**
   - Consider compiling MDX at build time instead of runtime
   - Explore `@next/mdx` as lighter alternative to `next-mdx-remote`
   - Pre-compile blog posts to static JSX

2. **Remove Unused Rehype/Remark Plugins**
   - Audit which syntax highlighting is actually used
   - Consider lighter alternatives to `rehype-prism-plus`

#### Phase 4: Production Optimizations
```js
// next.config.ts
{
  compiler: {
    removeConsole: {
      exclude: ['error', 'warn'],
    },
    reactRemoveProperties: true,
  },
  experimental: {
    optimizePackageImports: [
      'react-icons',
      'lucide-react',
      'framer-motion',
    ],
  },
}
```

**Deliverables:**
- ✅ JS bundle ≤250KB on all pages
- ✅ Bundle analyzer report showing improvements
- ✅ Documentation of optimization techniques
- ✅ Updated dependencies list

**Expected Impact:**
- 780KB → 250KB = **68% reduction**
- Estimated timeline: **2-3 weeks**

---

### Sprint 3: HTML Size Optimization (Week 5-6)

#### Phase 1: Data Pagination
1. **Experience Page**
   ```tsx
   // Current: All experience loaded at once (84KB)
   // Solution: Paginate or lazy-load older roles

   export default function ExperiencePage() {
     const [showAll, setShowAll] = useState(false)
     const visibleExperience = showAll
       ? allExperience
       : allExperience.slice(0, 3)

     return (
       <>
         {visibleExperience.map(exp => <ExperienceCard />)}
         {!showAll && (
           <button onClick={() => setShowAll(true)}>
             Show More
           </button>
         )}
       </>
     )
   }
   ```

2. **Projects Page**
   - Paginate projects (show 6, load more on demand)
   - Move long descriptions to separate detail pages
   - Reduce inline data, fetch on interaction

#### Phase 2: Structured Data Optimization
1. **Move JSON-LD to External Files**
   ```tsx
   // Before: Inline in every page
   <script type="application/ld+json">
     {JSON.stringify(largeSchema)}
   </script>

   // After: Import only what's needed
   import { personSchema } from '@/lib/schemas'
   ```

2. **Minimize Structured Data**
   - Remove redundant fields
   - Use schema.org minimums
   - Consider server-side injection

#### Phase 3: Content Optimization
1. **Text Compression**
   - Enable gzip/brotli on Vercel
   - Ensure Next.js compression is active

2. **Critical CSS Extraction**
   - Extract only above-the-fold CSS
   - Defer non-critical styles
   - Use Tailwind's JIT mode effectively

**Deliverables:**
- ✅ All pages ≤18KB HTML
- ✅ Pagination on content-heavy pages
- ✅ Optimized structured data
- ✅ Measured improvement in FCP/LCP

**Expected Impact:**
- `/experience`: 84KB → 18KB = **78% reduction**
- `/projects`: 67KB → 18KB = **73% reduction**
- `/stack`: 33KB → 18KB = **45% reduction**

---

## Technical Approach

### Bundle Analysis Commands
```bash
# Analyze production bundle
ANALYZE=true pnpm build

# Check bundle sizes
pnpm build && ls -lh .next/static/chunks/

# Monitor during development
pnpm dev --turbo
```

### Lighthouse Testing
```bash
# Run local tests
pnpm test:lhci

# Test specific page
lighthouse http://localhost:3000/projects --view

# Production test
lighthouse https://richarddillman.com --view
```

### Accessibility Testing
```bash
# Install axe CLI
npm install -g @axe-core/cli

# Run audit
axe http://localhost:3000/projects
```

---

## Dependencies & Risks

### Dependencies
- [ ] Bundle analyzer results
- [ ] axe DevTools audit reports
- [ ] Design approval for pagination changes
- [ ] Content team review for text truncation

### Risks & Mitigations

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Breaking changes from optimization | High | Medium | Comprehensive testing, gradual rollout |
| Accessibility fixes break design | Medium | Low | Work with design team, maintain visual parity |
| Bundle splitting affects performance | High | Low | Monitor Core Web Vitals, A/B test |
| MDX migration breaks blog posts | High | Medium | Test all posts, maintain Contentlayer compatibility layer |

---

## Testing Strategy

### Pre-Deployment Testing
1. **Lighthouse CI** (automated)
   - All pages must score 95%+ performance
   - 100% accessibility required
   - No bundle size violations

2. **Visual Regression Testing**
   - Screenshot comparison before/after
   - Ensure UI remains identical

3. **Manual QA**
   - Keyboard navigation on all pages
   - Screen reader testing (NVDA/JAWS)
   - Mobile device testing

4. **Load Testing**
   - Measure FCP, LCP, TBT, CLS
   - Compare before/after metrics

### Post-Deployment Monitoring
- Vercel Analytics for real-user metrics
- Sentry for error tracking
- Lighthouse CI on every PR

---

## Success Criteria

### Must Have (Sprint 1-3)
- ✅ 100% accessibility score on all pages
- ✅ JS bundle ≤250KB
- ✅ HTML ≤18KB on all pages
- ✅ Lighthouse CI passing on CI/CD
- ✅ No regression in visual design

### Nice to Have (Future Sprints)
- 🎯 Performance score ≥98%
- 🎯 Core Web Vitals "Good" on all metrics
- 🎯 Bundle size ≤200KB
- 🎯 Image optimization with WebP/AVIF
- 🎯 Service worker for offline support

---

## Timeline

```
Week 1-2:  Sprint 1 - Accessibility Fixes
Week 3-4:  Sprint 2 - Bundle Optimization
Week 5-6:  Sprint 3 - HTML Size Optimization
Week 7:    Testing & Refinement
Week 8:    Production Deployment
```

**Total Duration:** 8 weeks
**Team Size:** 1 engineer (full-time)

---

## Open Questions

1. **Should we paginate blog posts** or keep them as single pages?
2. **What's the acceptable trade-off** between bundle size and feature richness?
3. **Do we need all third-party libraries** (framer-motion, etc)?
4. **Should experience/projects move to database** instead of static data?
5. **Is server-side rendering helping or hurting** bundle size?

---

## Appendix: Current Lighthouse Results

### Test Summary (2025-10-29)
- **Pages Tested:** 7 local + 1 production
- **Total Runs:** 24 (3 runs per page)
- **Status:** ❌ Failed

### Detailed Results

#### Home Page (`/`)
- Performance: ✅ (assumed >95%)
- Accessibility: ✅ 100%
- JS Bundle: ⚠️ 782KB (target: 250KB)
- HTML Size: ✅ ~15KB

#### About Page (`/about`)
- Performance: ✅ (assumed >95%)
- Accessibility: ✅ 100%
- JS Bundle: ⚠️ 754KB (target: 250KB)
- HTML Size: ✅ ~14KB

#### Projects Page (`/projects`)
- Performance: ✅ (assumed >95%)
- Accessibility: ❌ 98% (target: 100%)
- JS Bundle: ⚠️ 757KB (target: 250KB)
- HTML Size: ❌ 67KB (target: 18KB)

#### Blog Page (`/blog`)
- Performance: ✅ (assumed >95%)
- Accessibility: ❌ 99% (target: 100%)
- JS Bundle: ⚠️ 782KB (target: 250KB)
- HTML Size: ⚠️ 22KB (target: 18KB)

#### Experience Page (`/experience`)
- Performance: ✅ (assumed >95%)
- Accessibility: ❌ 96% (target: 100%)
- JS Bundle: ⚠️ 782KB (target: 250KB)
- HTML Size: ❌ 84KB (target: 18KB)

#### Contact Page (`/contact`)
- Performance: ✅ (assumed >95%)
- Accessibility: ✅ 100%
- JS Bundle: ⚠️ 754KB (target: 250KB)
- HTML Size: ⚠️ 18.5KB (target: 18KB)

#### Stack Page (`/stack`)
- Performance: ✅ (assumed >95%)
- Accessibility: ❌ 96% (target: 100%)
- JS Bundle: ⚠️ 754KB (target: 250KB)
- HTML Size: ⚠️ 33KB (target: 18KB)

#### Production Blog Post
- Performance: ⚠️ (needs investigation)
- Accessibility: ❌ 91% (target: 100%)

### Full Reports
- [Home](https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1761707782361-45785.report.html)
- [About](https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1761707782756-77688.report.html)
- [Projects](https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1761707783158-80874.report.html)
- [Blog](https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1761707783579-60590.report.html)
- [Experience](https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1761707784259-80969.report.html)
- [Contact](https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1761707784629-83604.report.html)
- [Stack](https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1761707784960-27814.report.html)

---

## References

- [Lighthouse Performance Scoring](https://web.dev/performance-scoring/)
- [Next.js Bundle Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Core Web Vitals](https://web.dev/vitals/)
- [Next.js Optimization Docs](https://nextjs.org/docs/app/building-your-application/optimizing)
