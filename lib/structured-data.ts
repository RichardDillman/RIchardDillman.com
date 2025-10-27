import type { Person, WithContext, BlogPosting, Organization, WebSite } from 'schema-dts';

/**
 * Generates JSON-LD structured data for a Person (Richard Dillman)
 */
export function generatePersonSchema(): WithContext<Person> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Richard Dillman',
    url: 'https://richarddillman.com',
    image: 'https://richarddillman.com/api/og',
    jobTitle: 'Senior Director of Engineering',
    description: 'Engineering leadership, performance, and mentorship. Building high-performing teams and scalable systems.',
    sameAs: [
      'https://github.com/richarddillman',
      'https://www.linkedin.com/in/richarddillman/',
      'https://dev.to/richarddillman',
    ],
    knowsAbout: [
      'Engineering Leadership',
      'Performance Optimization',
      'TypeScript',
      'Next.js',
      'React',
      'Web Development',
      'SEO',
      'Core Web Vitals',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'The Muse',
      url: 'https://www.themuse.com',
    },
  };
}

/**
 * Generates JSON-LD structured data for the website
 */
export function generateWebSiteSchema(): WithContext<WebSite> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Richard Dillman',
    url: 'https://richarddillman.com',
    description: 'Engineering leadership, performance, and mentorship. Building high-performing teams and scalable systems.',
    author: {
      '@type': 'Person',
      name: 'Richard Dillman',
    },
    inLanguage: 'en-US',
  };
}

/**
 * Generates JSON-LD structured data for Organization
 */
export function generateOrganizationSchema(): WithContext<Organization> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Richard Dillman',
    url: 'https://richarddillman.com',
    logo: 'https://richarddillman.com/api/og',
    sameAs: [
      'https://github.com/richarddillman',
      'https://www.linkedin.com/in/richarddillman/',
      'https://dev.to/richarddillman',
    ],
  };
}

/**
 * Generates JSON-LD structured data for a blog post
 */
export function generateBlogPostingSchema({
  title,
  description,
  slug,
  date,
  tags,
  coverImage,
}: {
  title: string;
  description: string;
  slug: string;
  date: string;
  tags?: string[];
  coverImage?: string;
}): WithContext<BlogPosting> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    url: `https://richarddillman.com/blog/${slug}`,
    datePublished: date,
    dateModified: date,
    author: {
      '@type': 'Person',
      name: 'Richard Dillman',
      url: 'https://richarddillman.com',
    },
    publisher: {
      '@type': 'Person',
      name: 'Richard Dillman',
      url: 'https://richarddillman.com',
    },
    image: coverImage || `https://richarddillman.com/api/og?title=${encodeURIComponent(title)}`,
    keywords: tags?.join(', '),
    inLanguage: 'en-US',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://richarddillman.com/blog/${slug}`,
    },
  };
}
