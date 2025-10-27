🏠 / — Homepage (WebSite + Person)

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Richard Dillman",
  "url": "https://richard-dillman-com.vercel.app/",
  "description": "Personal site of Richard Dillman — Senior Director of Engineering specializing in performance, SEO, and modern web architecture.",
  "publisher": {
    "@type": "Person",
    "name": "Richard Dillman",
    "url": "https://richard-dillman-com.vercel.app/about"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://richard-dillman-com.vercel.app/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  "sameAs": [
    "https://www.linkedin.com/in/richarddillman",
    "https://github.com/richarddillman",
    "https://bsky.app/profile/rdillman.bsky.social",
    "https://twitter.com/RichardDillman"
  ]
}
```

👤 /about — About Page (ProfilePage → Person)

```json
{
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "url": "https://richard-dillman-com.vercel.app/about",
  "mainEntity": {
    "@type": "Person",
    "name": "Richard Dillman",
    "alternateName": "Rick Dillman",
    "image": "https://richard-dillman-com.vercel.app/images/profile.jpg",
    "jobTitle": "Senior Director of Engineering",
    "worksFor": {
      "@type": "Organization",
      "name": "The Muse",
      "url": "https://www.themuse.com"
    },
    "description": "Engineering leader focused on performance, SEO, mentoring, and modernizing legacy systems into unified, scalable architectures.",
    "sameAs": [
      "https://www.linkedin.com/in/richarddillman",
      "https://github.com/richarddillman",
      "https://bsky.app/profile/rdillman.bsky.social"
    ],
    "knowsAbout": [
      "Next.js 15",
      "TypeScript",
      "Vercel",
      "Cloudflare Workers",
      "AWS",
      "Performance Optimization",
      "SEO Engineering"
    ]
  }
}
```

💼 /experience — Experience Page (ItemList of OrganizationRole)

```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "url": "https://richard-dillman-com.vercel.app/experience",
  "name": "Professional Experience - Richard Dillman",
  "itemListElement": [
    {
      "@type": "OrganizationRole",
      "roleName": "Senior Director of Engineering",
      "startDate": "2018-12",
      "endDate": "2025-09",
      "memberOf": {
        "@type": "Organization",
        "name": "The Muse",
        "url": "https://www.themuse.com"
      }
    },
    {
      "@type": "OrganizationRole",
      "roleName": "Staff Engineer",
      "memberOf": {
        "@type": "Organization",
        "name": "Everyday Health",
        "url": "https://www.everydayhealth.com"
      }
    }
  ]
}
```

🧱 /projects — Projects Page (ItemList of SoftwareSourceCode)

```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "url": "https://richard-dillman-com.vercel.app/projects",
  "name": "Projects by Richard Dillman",
  "itemListElement": [
    {
      "@type": "SoftwareSourceCode",
      "name": "Backbeat CRM",
      "codeRepository": "https://github.com/richarddillman/backbeat-crm",
      "programmingLanguage": "TypeScript",
      "runtimePlatform": "Next.js 15",
      "about": "Multi-tenant CRM for musicians and venues.",
      "creator": { "@type": "Person", "name": "Richard Dillman" }
    },
    {
      "@type": "SoftwareSourceCode",
      "name": "The Muse Renderer",
      "programmingLanguage": "TypeScript",
      "runtimePlatform": "Next.js 15",
      "about": "High-performance multi-brand rendering system using ISR and Cloudflare caching."
    }
  ]
}
```

⚙️ /stack — Tech Stack (ItemList of DefinedTerm)

```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "url": "https://richard-dillman-com.vercel.app/stack",
  "name": "Preferred Tech Stack",
  "itemListElement": [
    { "@type": "DefinedTerm", "name": "Next.js 15" },
    { "@type": "DefinedTerm", "name": "TypeScript" },
    { "@type": "DefinedTerm", "name": "Vercel" },
    { "@type": "DefinedTerm", "name": "AWS" },
    { "@type": "DefinedTerm", "name": "Cloudflare Workers" },
    { "@type": "DefinedTerm", "name": "Docker" },
    { "@type": "DefinedTerm", "name": "CircleCI" }
  ]
}
```

✉️ /contact — Contact Page (ContactPage)

```json
{
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "url": "https://richard-dillman-com.vercel.app/contact",
  "mainEntity": {
    "@type": "Person",
    "name": "Richard Dillman",
    "email": "mailto:hello@richarddillman.com",
    "sameAs": [
      "https://www.linkedin.com/in/richarddillman",
      "https://bsky.app/profile/rdillman.bsky.social"
    ]
  }
}

```

/blog — Blog Index (Blog)

```json
{
  "@context": "https://schema.org",
  "@type": "Blog",
  "url": "https://richard-dillman-com.vercel.app/blog",
  "name": "Richard Dillman's Blog",
  "description": "Insights on engineering leadership, performance optimization, and AI-augmented development.",
  "publisher": {
    "@type": "Person",
    "name": "Richard Dillman"
  }
}

```

🧾 /blog/{slug} — Individual Blog Post (BlogPosting)

(You’ll want to fill this dynamically via your CMS or MDX metadata.)

```JSON
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Optimizing Next.js 15 for Multi-Tenant Deployments",
  "description": "A deep dive into BrandProviders, ISR, and caching strategies for multi-brand Next.js apps.",
  "author": {
    "@type": "Person",
    "name": "Richard Dillman",
    "url": "https://richard-dillman-com.vercel.app/about"
  },
  "publisher": {
    "@type": "Person",
    "name": "Richard Dillman"
  },
  "datePublished": "2025-10-25T00:00:00Z",
  "dateModified": "2025-10-26T00:00:00Z",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://richard-dillman-com.vercel.app/blog/nextjs15-multitenant"
  }
}
```

💡 Implementation Tips for Next.js 15

If you’re using next/script:

import Script from "next/script"

export default function AboutPage() {
  return (
    <>
      <Script
        id="ld-json-about"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutSchema)
        }}
      />
    </>
  )
}

