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
  // 2025-present: Current
  {
    brandSlug: 'talent-com',
    images: [
      'talent-com-home.png',
      'talent-com-jobs.png',
      'talent-com-salary.png',
      'talent-com-view.png',
      'talent-com-tax-calculator.png',
    ],
  },

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
    images: ['vogue-home.png', 'vogue-article.png'],
  },
  {
    brandSlug: 'the-new-yorker',
    images: ['the-new-yorker-home.png', 'thenewyorker-article.png'],
  },
  {
    brandSlug: 'ars-technica',
    images: ['ars-technica-home.png'],
  },
  {
    brandSlug: 'wired',
    images: ['wired-home.png'],
  },
  {
    brandSlug: 'allure',
    images: ['allure-home.png'],
  },
  {
    brandSlug: 'bon-appetit',
    images: ['bon-appetit-home.png'],
  },
  {
    brandSlug: 'self',
    images: ['self-home.png'],
  },
  {
    brandSlug: 'pitchfork',
    images: ['pitchfork-home.png'],
  },
  {
    brandSlug: 'conde-nast-traveler',
    images: ['conde-nast-traveler-home.png'],
  },
  {
    brandSlug: 'purpose-jobs',
    images: ['purpose-jobs-home.png'],
  },
  {
    brandSlug: 'epicurious',
    images: ['epicurious-home.png'],
  },
  {
    brandSlug: 'gq',
    images: ['gq-home.png'],
  },
  {
    brandSlug: 'architectural-digest',
    images: ['architectural-digest-home.png'],
  },
  {
    brandSlug: 'vanity-fair',
    images: ['vanity-fair-home.png'],
  },
  {
    brandSlug: 'them',
    images: ['them-home.png'],
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
    images: ['state-of-indiana-home.png', 'state-of-indiana-medicaid.png', 'state-of-iniana-dcs.png', 'state-of-indiana-bmv.png', 'state-of-indiana-dnr.png'],
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
  {
    brandSlug: 'indiana-heart-gallery',
    images: ['indiana-heart-gallery-home.png'],
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
