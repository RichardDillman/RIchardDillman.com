# PRD: Brands Portfolio Page with Interactive Slideshow

**Status:** Draft
**Owner:** Richard Dillman
**Created:** 2025-10-29
**Last Updated:** 2025-10-29

---

## 1. Overview

Create a dedicated `/brands` page to showcase brands and organizations Richard has worked with throughout his 26-year career. This page will replace the logo montage currently embedded in the `/experience` page and provide a richer, more interactive portfolio experience with full-page screenshots of sites as they appeared during his tenure.

### Problem Statement

Currently, the LogoMontage component on the `/experience` page shows brand logos but doesn't provide visual examples of the actual work delivered. Prospective clients and employers cannot see the scale, design quality, or technical implementation of these projects.

### Solution

A dedicated `/brands` page featuring:
- Brand logos in a grid layout
- Click-to-view interactive slideshows showing multiple pages from each site
- Screenshots of sites as they appeared when Richard worked on them (home pages, article pages, product pages, job listings, etc.)
- Lazy-loaded, code-split carousel component for optimal performance

---

## 2. Goals & Non-Goals

### Goals
✅ Create a visually compelling portfolio of brand work
✅ Provide concrete examples of site implementations
✅ Maintain excellent performance (no impact on other pages)
✅ Support 1-N images per brand
✅ Enable easy addition of new brands/images
✅ Mobile-responsive slideshow experience

### Non-Goals
❌ Detailed case studies (future enhancement)
❌ Video/animation assets (static images only)
❌ Client testimonials (separate feature)
❌ Filtering by technology or industry
❌ Search functionality

---

## 3. User Stories

**As a hiring manager**, I want to see examples of sites Richard has built so I can evaluate his design and technical capabilities.

**As a prospective client**, I want to browse brand work to understand the scale and quality of projects Richard has delivered.

**As a mobile user**, I want to view portfolio screenshots in a touch-friendly slideshow without performance degradation.

**As Richard (content manager)**, I want to easily add new brands and screenshots without writing code.

---

## 4. User Experience

### Page Structure

```
/brands
├── Page Header
│   ├── Title: "Brands I Have Worked With"
│   └── Subtitle: "26 years building high-traffic platforms for world-class organizations. Click any brand to view screenshots from when I worked on their platform."
│
├── Brand Grid (responsive)
│   ├── Brand Card (clickable)
│   │   ├── Logo (grayscale, hover → color)
│   │   └── Brand Name
│   │
│   └── [Repeats for all brands]
│
└── Modal Slideshow (on click)
    ├── Large Image Display
    ├── Navigation (prev/next arrows)
    ├── Pagination Dots
    ├── Close Button (X)
    └── Keyboard Support (←/→/Esc)
```

### Interaction Flow

1. User navigates to `/brands`
2. User sees grid of brand logos (same as current LogoMontage)
3. User hovers over logo → logo transitions from grayscale to color
4. User clicks logo → Modal opens with slideshow
5. User navigates through images with:
   - Arrow buttons (left/right)
   - Keyboard arrows (←/→)
   - Swipe gestures (mobile)
   - Pagination dots (click to jump)
6. User closes modal with:
   - Close button (X)
   - Escape key
   - Click outside modal

---

## 5. Technical Implementation

### File Changes

**New Files:**
- `app/brands/page.tsx` - New route
- `components/BrandPortfolio.tsx` - Main grid component
- `components/BrandCarousel.tsx` - Modal slideshow (client component, code-split)
- `data/brand-images.ts` - Brand image mapping

**Modified Files:**
- `app/experience/page.tsx` - Remove LogoMontage (lines 80-86)
- `components/Header.tsx` - Add "Brands" navigation link (if desired)

**Unchanged Files:**
- `components/LogoMontage.tsx` - Keep for potential reuse, but not imported on /experience
- `data/logos.ts` - Source of truth for brand data

### Data Structure

**`data/brand-images.ts`**
```typescript
import { BrandLogo } from './logos';

export interface BrandImage {
  brandSlug: string; // matches BrandLogo.slug
  images: string[];  // e.g., ['allure-home.png', 'allure-article.png']
}

export const brandImages: BrandImage[] = [
  {
    brandSlug: 'allure',
    images: ['allure-home.png', 'allure-article.png', 'allure-product.png']
  },
  {
    brandSlug: 'vogue',
    images: ['vogue-home.png']
  },
  // ... additional brands
];

// Helper to get images for a brand
export function getBrandImages(slug: string): string[] {
  return brandImages.find(b => b.brandSlug === slug)?.images || [];
}
```

**Image Naming Convention:**
```
public/images/portfolio/
├── allure-home.png
├── allure-article.png
├── allure-product.png
├── vogue-home.png
├── the-new-yorker-home.png
├── themuse-home.png
├── themuse-job.png
└── ...
```

### Component Architecture

**`app/brands/page.tsx` (Server Component)**
```typescript
import { Metadata } from 'next';
import { BrandPortfolio } from '@/components/BrandPortfolio';
import { brandLogos } from '@/data/logos';
import { brandImages } from '@/data/brand-images';

export const metadata: Metadata = {
  title: 'Brands I\'ve Worked With | Richard Dillman',
  description: '26 years building high-traffic platforms for world-class organizations including Condé Nast, The Muse, and Everyday Health.',
  // ... OpenGraph, Twitter cards, etc.
};

export const dynamic = 'force-static';

export default function BrandsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 pt-24 pb-20">
      <div className="container mx-auto px-6">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Brands I Have Worked With
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            26 years building high-traffic platforms for world-class organizations.
            Click any brand to view screenshots from when I worked on their platform.
          </p>
        </header>

        <BrandPortfolio brands={brandLogos} brandImages={brandImages} />
      </div>
    </div>
  );
}
```

**`components/BrandPortfolio.tsx` (Server Component)**
```typescript
import { BrandLogo } from '@/data/logos';
import { BrandImage } from '@/data/brand-images';
import dynamic from 'next/dynamic';

const BrandCard = dynamic(() => import('./BrandCard'), { ssr: false });

interface BrandPortfolioProps {
  brands: BrandLogo[];
  brandImages: BrandImage[];
}

export function BrandPortfolio({ brands, brandImages }: BrandPortfolioProps) {
  // Filter brands that have images
  const brandsWithImages = brands.filter(brand =>
    brandImages.some(bi => bi.brandSlug === brand.slug)
  );

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {brandsWithImages.map(brand => {
        const images = brandImages.find(bi => bi.brandSlug === brand.slug)?.images || [];
        return (
          <BrandCard key={brand.slug} brand={brand} images={images} />
        );
      })}
    </div>
  );
}
```

**`components/BrandCard.tsx` (Client Component)**
```typescript
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { BrandLogo } from '@/data/logos';
import dynamic from 'next/dynamic';

const BrandCarousel = dynamic(() => import('./BrandCarousel'), { ssr: false });

interface BrandCardProps {
  brand: BrandLogo;
  images: string[];
}

export default function BrandCard({ brand, images }: BrandCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        onMouseEnter={() => import('./BrandCarousel')} // Preload on hover
        className="group flex flex-col items-center transition-all hover:scale-105"
      >
        <Image
          src={`/images/logos/${brand.file}`}
          alt={`${brand.name} logo`}
          width={brand.width}
          height={brand.height}
          style={{ width: '140px', height: 'auto' }}
          className="grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
        />
        <span className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          {brand.name}
        </span>
      </button>

      {isOpen && (
        <BrandCarousel
          brandName={brand.name}
          images={images}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
```

**`components/BrandCarousel.tsx` (Client Component)**
```typescript
'use client';

import { useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface BrandCarouselProps {
  brandName: string;
  images: string[];
  onClose: () => void;
}

export default function BrandCarousel({ brandName, images, onClose }: BrandCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') emblaApi?.scrollPrev();
      if (e.key === 'ArrowRight') emblaApi?.scrollNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [emblaApi, onClose]);

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-neutral-300 z-10"
        aria-label="Close slideshow"
      >
        <X className="w-8 h-8" />
      </button>

      {/* Brand title */}
      <h2 className="absolute top-4 left-4 text-white text-2xl font-bold">
        {brandName}
      </h2>

      {/* Carousel */}
      <div className="w-full max-w-6xl">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {images.map((img, i) => (
              <div key={i} className="min-w-full flex-[0_0_100%] px-2">
                <Image
                  src={`/images/portfolio/${img}`}
                  alt={`${brandName} screenshot ${i + 1}`}
                  width={1920}
                  height={1080}
                  className="block w-full h-auto rounded-lg object-contain max-h-[80vh]"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
```

### Dependencies

**Install Embla Carousel:**
```bash
pnpm install embla-carousel-react --save
```

**Existing dependencies used:**
- `next/image` - Optimized images
- `next/dynamic` - Code splitting
- `lucide-react` - Icons (X, ChevronLeft, ChevronRight)

---

## 6. Performance Considerations

### Code Splitting
- `BrandCarousel` loaded only when modal opens (dynamic import)
- `BrandCard` preloads carousel on hover (anticipatory loading)
- Images lazy-loaded via Next.js Image component

### Bundle Impact
- Embla Carousel: ~10KB gzipped
- Only loaded on `/brands` page
- Client components isolated to this route

### Image Optimization
- Next.js Image component handles optimization
- Images served as WebP/AVIF where supported
- Responsive sizing via `sizes` attribute
- Lazy loading for off-screen images

---

## 7. Accessibility

- **Keyboard Navigation:**
  - `Escape` to close modal
  - `←/→` to navigate slides
  - `Tab` to focus close button and nav arrows

- **Screen Readers:**
  - Semantic HTML (`<button>`, `<dialog>` pattern)
  - `aria-label` on icon buttons
  - Alt text on all images

- **Focus Management:**
  - Focus trapped within modal when open
  - Focus returned to trigger button on close

---

## 8. SEO & Metadata

**Page Metadata:**
```typescript
{
  title: 'Brands I\'ve Worked With | Richard Dillman',
  description: '26 years building high-traffic platforms for world-class organizations including Condé Nast, The Muse, Everyday Health, and more.',
  openGraph: {
    title: 'Brands Portfolio | Richard Dillman',
    description: 'Portfolio of brands and organizations I\'ve worked with over 26 years',
    url: 'https://richarddillman.com/brands',
    images: [{
      url: '/api/og?title=Brands Portfolio&description=26 years of world-class work',
      width: 1200,
      height: 630,
    }],
  },
}
```

**Structured Data (JSON-LD):**
```json
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Brands I've Worked With",
  "description": "Portfolio of brands and organizations",
  "url": "https://richarddillman.com/brands"
}
```

---

## 9. Migration Plan

### Phase 1: Setup (Day 1)
1. ✅ Install `embla-carousel-react`
2. ✅ Create `data/brand-images.ts` with initial data structure
3. ✅ Populate initial brand images (start with 3-5 brands)

### Phase 2: Component Development (Day 1-2)
1. ✅ Create `components/BrandCarousel.tsx`
2. ✅ Create `components/BrandCard.tsx`
3. ✅ Create `components/BrandPortfolio.tsx`
4. ✅ Test modal interactions and carousel functionality

### Phase 3: Page Creation (Day 2)
1. ✅ Create `app/brands/page.tsx`
2. ✅ Add metadata and SEO tags
3. ✅ Test responsive layout

### Phase 4: Experience Page Cleanup (Day 2)
1. ✅ Remove LogoMontage from `/experience` page
2. ✅ Test `/experience` layout without montage
3. ✅ Update navigation if needed

### Phase 5: Content Population (Ongoing)
1. 🔄 Gradually add brand screenshots (manual process)
2. 🔄 Organize images in `public/images/portfolio/`
3. 🔄 Update `data/brand-images.ts` as new images are added

---

## 10. Image Capture Process (Manual)

### Workflow for Adding Brand Screenshots

1. **Identify Brand:**
   - Choose brand from `data/logos.ts`
   - Note the `slug` (e.g., `allure`, `vogue`)

2. **Capture Screenshots:**
   - Use Wayback Machine (web.archive.org) to find site during tenure
   - Capture full-page screenshots of:
     - Home page (`-home`)
     - Article/content page (`-article`)
     - Product page (`-product`)
     - Job listing (`-job`)
     - Other relevant pages

3. **Name & Optimize:**
   - Follow naming convention: `{slug}-{type}.png`
   - Example: `allure-home.png`, `allure-article.png`
   - Optimize images (compress, resize to ~1920px width)

4. **Save to Repository:**
   - Place in `public/images/portfolio/`

5. **Update Data File:**
   - Add entry to `data/brand-images.ts`:
   ```typescript
   {
     brandSlug: 'allure',
     images: ['allure-home.png', 'allure-article.png', 'allure-product.png']
   }
   ```

6. **Test:**
   - Run dev server (`pnpm dev`)
   - Navigate to `/brands`
   - Click brand logo
   - Verify slideshow displays all images

---

## 11. Success Criteria

### Launch Criteria
- ✅ `/brands` page accessible and responsive
- ✅ Modal slideshow functional (open/close/navigate)
- ✅ Keyboard navigation works
- ✅ At least 5 brands with images
- ✅ LogoMontage removed from `/experience`
- ✅ Lighthouse score remains 90+ on all metrics

### Post-Launch
- 📊 Track engagement (clicks on brand logos)
- 📊 Monitor performance (no regression on other pages)
- 🎯 Goal: Add 20+ brands within 3 months

---

## 12. Future Enhancements (Post-MVP)

### Phase 2 Features
- **Case Studies:** Link to detailed blog posts about specific projects
- **Filtering:** Filter by industry, technology, or time period
- **Image Captions:** Add context to each screenshot (e.g., "Homepage redesign, 2018")
- **Video Demos:** Support for screen recordings
- **Client Testimonials:** Quotes from clients/managers

### Performance Optimizations
- **Pagination:** Load brands in batches if count exceeds 30
- **Preloading:** Preload next/prev images in carousel
- **Blur Placeholders:** Use Next.js blur data URLs for smoother loading

---

## 13. Open Questions

1. **Navigation Link:** Should "Brands" appear in main navigation, or only be linked from Experience/About pages?
   - **Recommendation:** Add to main nav between "Projects" and "Experience"

2. **Mobile Layout:** Should mobile show fewer columns in grid?
   - **Recommendation:** Yes - 2 cols mobile, 3 tablet, 6 desktop (already in spec)

3. **Image Dimensions:** Standardize screenshot dimensions?
   - **Recommendation:** Flexible heights, max 1920px width, carousel handles varying sizes

4. **Archive vs Live:** Note on screenshots that sites may have changed since tenure?
   - **Recommendation:** Yes - add disclaimer in page subtitle

---

## 14. Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Manual image collection is time-consuming | High | Start with 5-10 key brands, add incrementally |
| Large image file sizes impact performance | Medium | Use Next.js Image optimization, compress before upload |
| Wayback Machine doesn't have all pages | Medium | Use available archives, note gaps in coverage |
| Modal doesn't work on some browsers | Low | Test on major browsers, use standard dialog pattern |
| Code-split bundle fails to load | Low | Provide fallback error state, test offline scenario |

---

## 15. Analytics & Metrics

**Track:**
- Page views on `/brands`
- Brand logo clicks (modal opens)
- Carousel interactions (next/prev clicks)
- Time spent in modal
- Bounce rate from `/brands`

**Goals:**
- Increase time-on-site from portfolio visitors
- Reduce bounce rate on `/brands` < 40%
- Average 3+ brand views per session

---

## Appendix: Image Checklist

### Brands to Prioritize (First Wave)
- [ ] The Muse (themuse-home, themuse-job, themuse-article)
- [ ] Allure (allure-home, allure-article)
- [ ] Vogue (vogue-home, vogue-article)
- [ ] The New Yorker (the-new-yorker-home, the-new-yorker-article)
- [ ] Everyday Health (everyday-health-home, everyday-health-article)

### Second Wave
- [ ] Condé Nast properties (remaining)
- [ ] Fairygodboss
- [ ] What to Expect
- [ ] Jillian Michaels
- [ ] MedPage Today

### Long Tail
- [ ] Government/enterprise clients
- [ ] Smaller agencies/consultancies
