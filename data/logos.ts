export interface BrandLogo {
  name: string;
  slug: string;
  file: string; // filename in /public/images/logos/
  period: string;
  category: 'government' | 'health' | 'media' | 'tech' | 'career' | 'retail' | 'other';
  prominence?: 'major' | 'standard'; // For sizing in montage
  width: number; // Original image width in pixels
  height: number; // Original image height in pixels
}

export const brandLogos: BrandLogo[] = [
  // Premiere Clients - Featured First
  {
    name: 'Vogue',
    slug: 'vogue',
    file: 'vogue.png',
    period: '2015-2018',
    category: 'media',
    prominence: 'major',
    width: 128,
    height: 128,
  },
  {
    name: 'The New Yorker',
    slug: 'the-new-yorker',
    file: 'the-new-yorker.png',
    period: '2015-2018',
    category: 'media',
    prominence: 'major',
    width: 128,
    height: 128,
  },
  {
    name: 'Wired',
    slug: 'wired',
    file: 'wired.png',
    period: '2015-2018',
    category: 'tech',
    prominence: 'major',
    width: 840,
    height: 859,
  },
  {
    name: 'GQ',
    slug: 'gq',
    file: 'gq.png',
    period: '2015-2018',
    category: 'media',
    prominence: 'major',
    width: 97,
    height: 51,
  },
  {
    name: 'Vanity Fair',
    slug: 'vanity-fair',
    file: 'vanity-fair.png',
    period: '2015-2018',
    category: 'media',
    prominence: 'major',
    width: 128,
    height: 128,
  },
  {
    name: 'State of Indiana',
    slug: 'state-of-indiana',
    file: 'state-of-indiana.svg',
    period: '2007-2010',
    category: 'government',
    prominence: 'major',
    width: 725,
    height: 725,
  },
  {
    name: 'Ars Technica',
    slug: 'ars-technica',
    file: 'ars-technica.png',
    period: '2015-2018',
    category: 'tech',
    prominence: 'major',
    width: 128,
    height: 128,
  },

  // The Muse (Current)
  {
    name: 'The Muse',
    slug: 'the-muse',
    file: 'the-muse.png',
    period: '2018-2025',
    category: 'career',
    prominence: 'major',
    width: 128,
    height: 128,
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
  },
  {
    name: 'International Medical Group',
    slug: 'img-global',
    file: 'img-global.png',
    period: '2005-2007',
    category: 'health',
    width: 128,
    height: 128,
  },
  {
    name: 'RASK Corporation',
    slug: 'rask-corp',
    file: 'rask-corp.png',
    period: '2005-2007',
    category: 'other',
    width: 270,
    height: 60,
  },
  {
    name: 'Framing 4 Yourself',
    slug: 'framing-4-yourself',
    file: 'framing-4-yourself.svg',
    period: '2005-2007',
    category: 'retail',
    width: 1100,
    height: 317,
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
  },
  {
    name: 'MedPage Today',
    slug: 'medpage-today',
    file: 'medpage-today.png',
    period: '2012-2015',
    category: 'health',
    width: 34,
    height: 33,
  },
  {
    name: 'Diabetes Daily',
    slug: 'diabetes-daily',
    file: 'diabetes-daily.png',
    period: '2012-2015',
    category: 'health',
    width: 128,
    height: 128,
  },
  {
    name: 'South Beach Diet',
    slug: 'south-beach-diet',
    file: 'south-beach-diet.png',
    period: '2012-2015',
    category: 'health',
    width: 1024,
    height: 1024,
  },
  {
    name: 'Denise Austin',
    slug: 'denise-austin',
    file: 'denise-austin.png',
    period: '2012-2015',
    category: 'health',
    width: 512,
    height: 512,
  },
  {
    name: 'Jillian Michaels',
    slug: 'jillian-michaels',
    file: 'jillian-michaels.png',
    period: '2012-2015',
    category: 'health',
    width: 120,
    height: 120,
  },
  {
    name: 'SparkAmerica',
    slug: 'spark-america',
    file: 'spark-america.png',
    period: '2012-2015',
    category: 'health',
    width: 3601,
    height: 451,
  },

  // 2015-2018: Condé Nast (Other Brands)
  {
    name: 'Architectural Digest',
    slug: 'architectural-digest',
    file: 'architectural-digest.png',
    period: '2015-2018',
    category: 'media',
    width: 128,
    height: 128,
  },
  {
    name: 'Allure',
    slug: 'allure',
    file: 'allure.png',
    period: '2015-2018',
    category: 'media',
    width: 128,
    height: 37,
  },
  {
    name: 'Bon Appétit',
    slug: 'bon-appetit',
    file: 'bon-appetit.png',
    period: '2015-2018',
    category: 'media',
    width: 497,
    height: 100,
  },
  {
    name: 'Condé Nast Traveler',
    slug: 'conde-nast-traveler',
    file: 'conde-nast-traveler.png',
    period: '2015-2018',
    category: 'media',
    width: 128,
    height: 48,
  },
  {
    name: 'Epicurious',
    slug: 'epicurious',
    file: 'epicurious.png',
    period: '2015-2018',
    category: 'media',
    width: 128,
    height: 26,
  },
  {
    name: 'Glamour',
    slug: 'glamour',
    file: 'glamour.png',
    period: '2015-2018',
    category: 'media',
    width: 567,
    height: 128,
  },
  {
    name: 'Pitchfork',
    slug: 'pitchfork',
    file: 'pitchfork.png',
    period: '2015-2018',
    category: 'media',
    width: 128,
    height: 128,
  },
  {
    name: 'Self',
    slug: 'self',
    file: 'self.png',
    period: '2015-2018',
    category: 'media',
    width: 128,
    height: 128,
  },
  {
    name: 'Teen Vogue',
    slug: 'teen-vogue',
    file: 'teen-vogue.png',
    period: '2015-2018',
    category: 'media',
    width: 128,
    height: 128,
  },
  {
    name: 'Them',
    slug: 'them',
    file: 'them.png',
    period: '2015-2018',
    category: 'media',
    width: 128,
    height: 35,
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
  },
  {
    name: 'Purpose Jobs',
    slug: 'purpose-jobs',
    file: 'purpose-jobs.png',
    period: '2018-2025',
    category: 'career',
    width: 128,
    height: 128,
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
