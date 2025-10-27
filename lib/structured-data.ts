import type { Person, WithContext, BlogPosting, Organization, WebSite, ProfilePage, ItemList, ContactPage, Blog } from 'schema-dts';

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

/**
 * Generates JSON-LD structured data for ProfilePage (About page)
 */
export function generateProfilePageSchema(): WithContext<ProfilePage> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: 'https://richarddillman.com/about',
    mainEntity: {
      '@type': 'Person',
      name: 'Richard Dillman',
      alternateName: 'Rick Dillman',
      image: 'https://richarddillman.com/api/og',
      jobTitle: 'Senior Director of Engineering',
      worksFor: {
        '@type': 'Organization',
        name: 'The Muse',
        url: 'https://www.themuse.com',
      },
      description: 'Engineering leader focused on performance, SEO, mentoring, and modernizing legacy systems into unified, scalable architectures.',
      sameAs: [
        'https://www.linkedin.com/in/richarddillman/',
        'https://github.com/richarddillman',
        'https://dev.to/richarddillman',
      ],
      knowsAbout: [
        'Next.js',
        'TypeScript',
        'Vercel',
        'Cloudflare Workers',
        'AWS',
        'Performance Optimization',
        'SEO Engineering',
      ],
    },
  };
}

/**
 * Generates JSON-LD structured data for Blog index
 */
export function generateBlogSchema(): WithContext<Blog> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    url: 'https://richarddillman.com/blog',
    name: "Richard Dillman's Blog",
    description: 'Insights on engineering leadership, performance optimization, and AI-augmented development.',
    publisher: {
      '@type': 'Person',
      name: 'Richard Dillman',
    },
  };
}

/**
 * Generates JSON-LD structured data for ContactPage
 */
export function generateContactPageSchema(): WithContext<ContactPage> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    url: 'https://richarddillman.com/contact',
    mainEntity: {
      '@type': 'Person',
      name: 'Richard Dillman',
      email: 'mailto:hello@richarddillman.com',
      sameAs: [
        'https://www.linkedin.com/in/richarddillman/',
        'https://github.com/richarddillman',
      ],
    },
  };
}

/**
 * Generates JSON-LD structured data for Experience page (ItemList)
 */
export function generateExperienceItemListSchema(experiences: any[]): WithContext<ItemList> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    url: 'https://richarddillman.com/experience',
    name: 'Professional Experience - Richard Dillman',
    itemListElement: experiences.flatMap((exp, expIndex) =>
      exp.roles.map((role: any, roleIndex: number) => ({
        '@type': 'ListItem' as const,
        position: expIndex * 10 + roleIndex + 1,
        item: {
          '@type': 'OrganizationRole' as const,
          roleName: role.title,
          startDate: role.period.split(' - ')[0],
          endDate: role.period.split(' - ')[1] || undefined,
          memberOf: {
            '@type': 'Organization' as const,
            name: exp.company,
          },
        },
      }))
    ),
  };
}

/**
 * Generates JSON-LD structured data for Projects page (ItemList)
 */
export function generateProjectsItemListSchema(projects: any[]): WithContext<ItemList> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    url: 'https://richarddillman.com/projects',
    name: 'Projects by Richard Dillman',
    itemListElement: projects.map((project, index) => ({
      '@type': 'ListItem' as const,
      position: index + 1,
      item: {
        '@type': 'SoftwareSourceCode' as const,
        name: project.title,
        programmingLanguage: project.stack?.join(', '),
        about: project.summary,
        creator: {
          '@type': 'Person' as const,
          name: 'Richard Dillman',
        },
      },
    })),
  };
}

/**
 * Generates JSON-LD structured data for Tech Stack page (ItemList)
 */
export function generateTechStackItemListSchema(techStack: any[]): WithContext<ItemList> {
  const allItems = techStack.flatMap((category) =>
    category.items.filter((item: any) => item.primary).map((item: any) => item.name)
  );

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    url: 'https://richarddillman.com/stack',
    name: 'Preferred Tech Stack',
    itemListElement: allItems.map((name, index) => ({
      '@type': 'ListItem' as const,
      position: index + 1,
      item: {
        '@type': 'DefinedTerm' as const,
        name: name,
      },
    })),
  };
}
