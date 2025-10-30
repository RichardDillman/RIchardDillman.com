/**
 * Portfolio images for brands
 *
 * Maps brand slugs to their portfolio screenshot filenames.
 * Images are stored in /public/images/portfolio/
 *
 * Naming convention: {brand-slug}-{page-type}.png
 * Example: the-muse-home.png, vogue-article.png
 */

export interface BrandImage {
  brandSlug: string; // Must match slug from data/logos.ts
  images: string[];  // Filenames in /public/images/portfolio/
}

export const brandImages: BrandImage[] = [
  // 2018-2025: Career Platforms (Most Recent - Priority)
  {
    brandSlug: 'the-muse',
    images: [
      'the-muse-home.png',
      'the-muse-article.png',
      'the-muse-search.png',
      'the-muse-job.png',
    ],
  },
  {
    brandSlug: 'fairy-god-boss',
    images: ['fairy-god-boss-home.png'],
  },

  // 2015-2018: Condé Nast (Priority)
  {
    brandSlug: 'vogue',
    images: ['vogue-home.png'],
  },
  {
    brandSlug: 'the-new-yorker',
    images: ['the-new-yorker-home.png'],
  },
  {
    brandSlug: 'ars-technica',
    images: ['ars-technica-home.png'],
  },

  // 2012-2015: Everyday Health Group (Priority)
  {
    brandSlug: 'everyday-health',
    images: ['everyday-health-home.png'],
  },
  {
    brandSlug: 'what-to-expect',
    images: ['what-to-expect-home.png'],
  },
  {
    brandSlug: 'medpage-today',
    images: ['medpage-today-home.png'],
  },
  {
    brandSlug: 'jillian-michaels',
    images: ['jillian-michaels-home.png'],
  },
  {
    brandSlug: 'spark-america',
    images: ['spark-america-home.png'],
  },

  // 2010-2011: Retail
  {
    brandSlug: 'the-shade-store',
    images: ['the-shade-store-home.png'],
  },

  // 2007-2010: Government
  {
    brandSlug: 'state-of-indiana',
    images: ['state-of-indiana-home.png'],
  },

  // 2005-2007: Client Portfolio
  {
    brandSlug: 'img-global',
    images: ['img-global-home.png'],
  },
  {
    brandSlug: 'rask-corp',
    images: ['rask-corp-home.png'],
  },
  {
    brandSlug: 'framing-4-yourself',
    images: ['framing-4-yourself-home.png'],
  },

  // 1999-2005: Public Health
  {
    brandSlug: 'indiana-health',
    images: ['indiana-health-home.png'],
  },
];

/**
 * Get portfolio images for a specific brand
 */
export function getBrandImages(slug: string): string[] {
  return brandImages.find((b) => b.brandSlug === slug)?.images || [];
}

/**
 * Get all brands that have portfolio images
 */
export function getBrandsWithImages(): string[] {
  return brandImages.map((b) => b.brandSlug);
}

/**
 * Check if a brand has portfolio images
 */
export function hasBrandImages(slug: string): boolean {
  return brandImages.some((b) => b.brandSlug === slug);
}
