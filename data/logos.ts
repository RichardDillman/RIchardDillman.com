export interface BrandLogo {
  name: string;
  slug: string;
  file: string; // filename in /public/images/logos/
  svgComponent?: string; // Optional: name of SVG component in /components/BrandLogos/ (e.g., 'Vogue')
  hoverBackground?: string; // Optional hover background image in /public/images/brand-backgrounds/
  period: string;
  category: 'government' | 'health' | 'media' | 'tech' | 'career' | 'retail' | 'other';
  prominence?: 'major' | 'standard'; // For sizing in montage
  width: number; // Original image width in pixels
  height: number; // Original image height in pixels
  showOnBrandsPage?: boolean; // Whether to show on the /brands page grid
}

export const brandLogos: BrandLogo[] = [
  // Premiere Clients - Featured First
  {
    name: 'Vogue',
    slug: 'vogue',
    file: 'vogue.png',
    svgComponent: 'Vogue',
    hoverBackground: 'vogue-bg.jpg',
    period: '2015-2018',
    category: 'media',
    prominence: 'major',
    width: 582,
    height: 150,
    showOnBrandsPage: true,
  },
  {
    name: 'The New Yorker',
    slug: 'the-new-yorker',
    file: 'TheNewYorker.png',
    svgComponent: 'TheNewYorker',
    hoverBackground: 'the-new-yorker-bg.jpg',
    period: '2015-2018',
    category: 'media',
    prominence: 'major',
    width: 128,
    height: 128,
    showOnBrandsPage: true,
  },
  {
    name: 'Wired',
    slug: 'wired',
    file: 'wired.png',
    svgComponent: 'Wired',
    hoverBackground: 'wired-bg.jpg',
    period: '2015-2018',
    category: 'tech',
    prominence: 'major',
    width: 840,
    height: 859,
    showOnBrandsPage: true,
  },
  {
    name: 'GQ',
    slug: 'gq',
    file: 'gq.png',
    svgComponent: 'Gq',
    hoverBackground: 'gq-bg.jpg',
    period: '2015-2018',
    category: 'media',
    prominence: 'major',
    width: 97,
    height: 51,
    showOnBrandsPage: true,
  },
  {
    name: 'Vanity Fair',
    slug: 'vanity-fair',
    file: 'VanityFair.png',
    svgComponent: 'VanityFair',
    hoverBackground: 'vanity-fair-bg.jpg',
    period: '2015-2018',
    category: 'media',
    prominence: 'major',
    width: 128,
    height: 128,
    showOnBrandsPage: true,
  },
  {
    name: 'State of Indiana',
    slug: 'state-of-indiana',
    file: 'state-of-indiana.svg',
    hoverBackground: 'state-of-indiana-bg.jpg',
    period: '2007-2010',
    category: 'government',
    prominence: 'major',
    width: 725,
    height: 725,
    showOnBrandsPage: true,
  },
  {
    name: 'Ars Technica',
    slug: 'ars-technica',
    file: 'ars-technica.png',
    hoverBackground: 'ars-technica-bg.jpg',
    period: '2015-2018',
    category: 'tech',
    prominence: 'major',
    width: 128,
    height: 128,
    showOnBrandsPage: true,
  },

  // The Muse (Current)
  {
    name: 'The Muse',
    slug: 'the-muse',
    file: 'the-muse.png',
    svgComponent: 'TheMuse',
    period: '2018-2025',
    category: 'career',
    prominence: 'major',
    width: 128,
    height: 128,
    showOnBrandsPage: true,
  },

  // Other Major Brands
  {
    name: 'Everyday Health',
    slug: 'everyday-health',
    file: 'everyday-health.png',
    period: '2012-2015',
    category: 'health',
    prominence: 'major',
    width: 128,
    height: 128,
    showOnBrandsPage: true,
  },

  // 1999-2005: Public Health
  {
    name: 'Indiana Department of Health',
    slug: 'indiana-health',
    file: 'indiana-health.png',
    period: '1999-2005',
    category: 'government',
    width: 200,
    height: 226,
    showOnBrandsPage: true,
  },

  // 2005-2007: Client Portfolio
  {
    name: 'Indiana Heart Gallery',
    slug: 'indiana-heart-gallery',
    file: 'indiana-heart-gallery.png',
    period: '2005-2007',
    category: 'other',
    width: 3132,
    height: 1661,
    showOnBrandsPage: true,
  },
  {
    name: 'International Medical Group',
    slug: 'img-global',
    file: 'img-global.png',
    period: '2005-2007',
    category: 'health',
    width: 128,
    height: 128,
    showOnBrandsPage: true,
  },
  {
    name: 'RASK Corporation',
    slug: 'rask-corp',
    file: 'rask-corp.png',
    period: '2005-2007',
    category: 'other',
    width: 270,
    height: 60,
    showOnBrandsPage: true,
  },
  {
    name: 'Framing 4 Yourself',
    slug: 'framing-4-yourself',
    file: 'framing-4-yourself.svg',
    period: '2005-2007',
    category: 'retail',
    width: 1100,
    height: 317,
    showOnBrandsPage: true,
  },

  // 2010-2011: Retail
  {
    name: 'The Shade Store',
    slug: 'the-shade-store',
    file: 'the-shade-store.png',
    period: '2010-2011',
    category: 'retail',
    width: 128,
    height: 128,
    showOnBrandsPage: true,
  },

  // 2012-2015: Health & Wellness Media
  {
    name: 'What to Expect',
    slug: 'what-to-expect',
    file: 'what-to-expect.png',
    period: '2012-2015',
    category: 'health',
    width: 180,
    height: 180,
    showOnBrandsPage: true,
  },
  {
    name: 'MedPage Today',
    slug: 'medpage-today',
    file: 'medpage-today.png',
    period: '2012-2015',
    category: 'health',
    width: 34,
    height: 33,
    showOnBrandsPage: true,
  },
  {
    name: 'Diabetes Daily',
    slug: 'diabetes-daily',
    file: 'diabetes-daily.png',
    period: '2012-2015',
    category: 'health',
    width: 128,
    height: 128,
    showOnBrandsPage: true,
  },
  {
    name: 'South Beach Diet',
    slug: 'south-beach-diet',
    file: 'south-beach-diet.png',
    period: '2012-2015',
    category: 'health',
    width: 1024,
    height: 1024,
    showOnBrandsPage: true,
  },
  {
    name: 'Denise Austin',
    slug: 'denise-austin',
    file: 'denise-austin.png',
    period: '2012-2015',
    category: 'health',
    width: 512,
    height: 512,
    showOnBrandsPage: true,
  },
  {
    name: 'Jillian Michaels',
    slug: 'jillian-michaels',
    file: 'jillian-michaels.png',
    period: '2012-2015',
    category: 'health',
    width: 120,
    height: 120,
    showOnBrandsPage: true,
  },
  {
    name: 'SparkAmerica',
    slug: 'spark-america',
    file: 'spark-america.png',
    period: '2012-2015',
    category: 'health',
    width: 3601,
    height: 451,
    showOnBrandsPage: true,
  },

  // 2015-2018: Condé Nast (Other Brands)
  {
    name: 'Architectural Digest',
    slug: 'architectural-digest',
    file: 'architectural-digest.png',
    hoverBackground: 'ad-bg.jpg',
    period: '2015-2018',
    category: 'media',
    width: 128,
    height: 128,
    showOnBrandsPage: true,
  },
  {
    name: 'Allure',
    slug: 'allure',
    file: 'allure.png',
    hoverBackground: 'allure-bg.jpg',
    period: '2015-2018',
    category: 'media',
    width: 128,
    height: 37,
    showOnBrandsPage: true,
  },
  {
    name: 'Bon Appétit',
    slug: 'bon-appetit',
    file: 'bon-appetit.png',
    hoverBackground: 'bon-appetit-bg.jpg',
    period: '2015-2018',
    category: 'media',
    width: 497,
    height: 100,
    showOnBrandsPage: true,
  },
  {
    name: 'Condé Nast Traveler',
    slug: 'conde-nast-traveler',
    file: 'conde-nast-traveler.png',
    hoverBackground: 'traveler-bg.jpg',
    period: '2015-2018',
    category: 'media',
    width: 128,
    height: 48,
    showOnBrandsPage: true,
  },
  {
    name: 'Epicurious',
    slug: 'epicurious',
    file: 'epicurious.png',
    hoverBackground: 'epicurious-bg.jpg',
    period: '2015-2018',
    category: 'media',
    width: 128,
    height: 26,
    showOnBrandsPage: true,
  },
  {
    name: 'Glamour',
    slug: 'glamour',
    file: 'glamour.png',
    hoverBackground: 'glamour-bg.jpg',
    period: '2015-2018',
    category: 'media',
    width: 567,
    height: 128,
    showOnBrandsPage: true,
  },
  {
    name: 'Pitchfork',
    slug: 'pitchfork',
    file: 'pitchfork.png',
    hoverBackground: 'pitchfork-bg.jpg',
    period: '2015-2018',
    category: 'media',
    width: 128,
    height: 128,
    showOnBrandsPage: true,
  },
  {
    name: 'Self',
    slug: 'self',
    file: 'self.png',
    hoverBackground: 'self-bg.jpg',
    period: '2015-2018',
    category: 'media',
    width: 128,
    height: 128,
    showOnBrandsPage: true,
  },
  {
    name: 'Teen Vogue',
    slug: 'teen-vogue',
    file: 'teen-vogue.png',
    hoverBackground: 'teen-vogue-bg.jpg',
    period: '2015-2018',
    category: 'media',
    width: 128,
    height: 128,
    showOnBrandsPage: true,
  },
  {
    name: 'Them',
    slug: 'them',
    file: 'them.png',
    hoverBackground: 'them-bg.jpg',
    period: '2015-2018',
    category: 'media',
    width: 128,
    height: 35,
    showOnBrandsPage: true,
  },

  // 2018-2025: Career Platforms
  {
    name: 'Fairy God Boss',
    slug: 'fairy-god-boss',
    file: 'fairy-god-boss.png',
    period: '2018-2025',
    category: 'career',
    width: 128,
    height: 128,
    showOnBrandsPage: true,
  },
  {
    name: 'Purpose Jobs',
    slug: 'purpose-jobs',
    file: 'purpose-jobs.png',
    period: '2018-2025',
    category: 'career',
    width: 128,
    height: 128,
    showOnBrandsPage: true,
  },
];

// Helper functions
export function getLogosByCategory(category: BrandLogo['category']): BrandLogo[] {
  return brandLogos.filter((logo) => logo.category === category);
}

export function getLogosByPeriod(period: string): BrandLogo[] {
  return brandLogos.filter((logo) => logo.period === period);
}

export function getMajorBrands(): BrandLogo[] {
  return brandLogos.filter((logo) => logo.prominence === 'major');
}

/**
 * Extracts the end year from a period string (e.g., "2018-2025" -> 2025)
 * Returns a number for sorting, with most recent years first
 */
function getEndYear(period: string): number {
  const match = period.match(/(\d{4})-(\d{4})/);
  if (match) {
    return parseInt(match[2], 10); // Return end year
  }
  return 0; // Fallback for any malformed periods
}

/**
 * Returns brands sorted by most recent end year first
 */
export function getBrandsSortedByYear(): BrandLogo[] {
  return [...brandLogos].sort((a, b) => {
    const yearA = getEndYear(a.period);
    const yearB = getEndYear(b.period);
    return yearB - yearA; // Descending order (most recent first)
  });
}
