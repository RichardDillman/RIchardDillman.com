export interface BrandLogo {
  name: string;
  slug: string;
  file: string; // filename in /public/images/logos/
  period: string;
  category: 'government' | 'health' | 'media' | 'tech' | 'career' | 'retail' | 'other';
  prominence?: 'major' | 'standard'; // For sizing in montage
}

export const brandLogos: BrandLogo[] = [
  // 1999-2005: Public Health
  {
    name: 'Indiana Department of Health',
    slug: 'indiana-health',
    file: 'indiana-health.svg',
    period: '1999-2005',
    category: 'government'
  },

  // 2005-2007: Client Portfolio
  {
    name: 'Indiana Heart Gallery',
    slug: 'indiana-heart-gallery',
    file: 'indiana-heart-gallery.svg',
    period: '2005-2007',
    category: 'other'
  },
  {
    name: 'International Medical Group',
    slug: 'img-global',
    file: 'img-global.svg',
    period: '2005-2007',
    category: 'health'
  },
  {
    name: 'RASK Corporation',
    slug: 'rask-corp',
    file: 'rask-corp.svg',
    period: '2005-2007',
    category: 'other'
  },
  {
    name: 'Framing 4 Yourself',
    slug: 'framing-4-yourself',
    file: 'framing-4-yourself.svg',
    period: '2005-2007',
    category: 'retail'
  },

  // 2007-2010: Government
  {
    name: 'State of Indiana',
    slug: 'state-of-indiana',
    file: 'state-of-indiana.svg',
    period: '2007-2010',
    category: 'government'
  },

  // 2010-2011: Retail
  {
    name: 'The Shade Store',
    slug: 'the-shade-store',
    file: 'the-shade-store.svg',
    period: '2010-2011',
    category: 'retail'
  },

  // 2012-2015: Health & Wellness Media
  {
    name: 'Everyday Health',
    slug: 'everyday-health',
    file: 'everyday-health.svg',
    period: '2012-2015',
    category: 'health',
    prominence: 'major'
  },
  {
    name: 'What to Expect',
    slug: 'what-to-expect',
    file: 'what-to-expect.svg',
    period: '2012-2015',
    category: 'health'
  },
  {
    name: 'MedPage Today',
    slug: 'medpage-today',
    file: 'medpage-today.svg',
    period: '2012-2015',
    category: 'health'
  },
  {
    name: 'Diabetes Daily',
    slug: 'diabetes-daily',
    file: 'diabetes-daily.svg',
    period: '2012-2015',
    category: 'health'
  },
  {
    name: 'Jillian Michaels',
    slug: 'jillian-michaels',
    file: 'jillian-michaels.svg',
    period: '2012-2015',
    category: 'health'
  },
  {
    name: 'SparkAmerica',
    slug: 'spark-america',
    file: 'spark-america.svg',
    period: '2012-2015',
    category: 'health'
  },

  // 2015-2018: Condé Nast (Premium Media Brands)
  {
    name: 'Vogue',
    slug: 'vogue',
    file: 'vogue.svg',
    period: '2015-2018',
    category: 'media',
    prominence: 'major'
  },
  {
    name: 'Wired',
    slug: 'wired',
    file: 'wired.svg',
    period: '2015-2018',
    category: 'tech',
    prominence: 'major'
  },
  {
    name: 'The New Yorker',
    slug: 'the-new-yorker',
    file: 'the-new-yorker.svg',
    period: '2015-2018',
    category: 'media',
    prominence: 'major'
  },
  {
    name: 'GQ',
    slug: 'gq',
    file: 'gq.svg',
    period: '2015-2018',
    category: 'media',
    prominence: 'major'
  },
  {
    name: 'Vanity Fair',
    slug: 'vanity-fair',
    file: 'vanity-fair.svg',
    period: '2015-2018',
    category: 'media',
    prominence: 'major'
  },
  {
    name: 'Architectural Digest',
    slug: 'architectural-digest',
    file: 'architectural-digest.svg',
    period: '2015-2018',
    category: 'media'
  },
  {
    name: 'Allure',
    slug: 'allure',
    file: 'allure.svg',
    period: '2015-2018',
    category: 'media'
  },
  {
    name: 'Ars Technica',
    slug: 'ars-technica',
    file: 'ars-technica.svg',
    period: '2015-2018',
    category: 'tech'
  },
  {
    name: 'Bon Appétit',
    slug: 'bon-appetit',
    file: 'bon-appetit.svg',
    period: '2015-2018',
    category: 'media'
  },
  {
    name: 'Condé Nast Traveler',
    slug: 'conde-nast-traveler',
    file: 'conde-nast-traveler.svg',
    period: '2015-2018',
    category: 'media'
  },
  {
    name: 'Epicurious',
    slug: 'epicurious',
    file: 'epicurious.svg',
    period: '2015-2018',
    category: 'media'
  },
  {
    name: 'Glamour',
    slug: 'glamour',
    file: 'glamour.svg',
    period: '2015-2018',
    category: 'media'
  },
  {
    name: 'Pitchfork',
    slug: 'pitchfork',
    file: 'pitchfork.svg',
    period: '2015-2018',
    category: 'media'
  },
  {
    name: 'Self',
    slug: 'self',
    file: 'self.svg',
    period: '2015-2018',
    category: 'media'
  },
  {
    name: 'Teen Vogue',
    slug: 'teen-vogue',
    file: 'teen-vogue.svg',
    period: '2015-2018',
    category: 'media'
  },
  {
    name: 'Them',
    slug: 'them',
    file: 'them.svg',
    period: '2015-2018',
    category: 'media'
  },

  // 2018-2025: Career Platforms
  {
    name: 'The Muse',
    slug: 'the-muse',
    file: 'the-muse.svg',
    period: '2018-2025',
    category: 'career',
    prominence: 'major'
  },
  {
    name: 'Fairy God Boss',
    slug: 'fairy-god-boss',
    file: 'fairy-god-boss.svg',
    period: '2018-2025',
    category: 'career'
  },
  {
    name: 'Purpose Jobs',
    slug: 'purpose-jobs',
    file: 'purpose-jobs.svg',
    period: '2018-2025',
    category: 'career'
  },
];

// Helper functions
export function getLogosByCategory(category: BrandLogo['category']): BrandLogo[] {
  return brandLogos.filter(logo => logo.category === category);
}

export function getLogosByPeriod(period: string): BrandLogo[] {
  return brandLogos.filter(logo => logo.period === period);
}

export function getMajorBrands(): BrandLogo[] {
  return brandLogos.filter(logo => logo.prominence === 'major');
}
