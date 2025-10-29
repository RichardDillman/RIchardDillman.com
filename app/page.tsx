import Hero from '@/components/Hero';
import type { Metadata } from 'next';
import { generatePersonSchema, generateWebSiteSchema } from '@/lib/structured-data';

export async function generateMetadata(): Promise<Metadata> {
  const personSchema = generatePersonSchema();
  const websiteSchema = generateWebSiteSchema();

  return {
    title: 'Richard Dillman | Engineering Leadership & Performance',
    description:
      'Engineering leadership, performance, and mentorship. Building high-performing teams and scalable systems.',
    openGraph: {
      title: 'Richard Dillman',
      description:
        'Engineering leadership, performance, and mentorship. Building high-performing teams and scalable systems.',
      url: 'https://richarddillman.com',
      siteName: 'Richard Dillman',
      images: [
        {
          url: '/api/og',
          width: 1200,
          height: 630,
          alt: 'Richard Dillman',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Richard Dillman',
      description:
        'Engineering leadership, performance, and mentorship. Building high-performing teams and scalable systems.',
      images: ['/api/og'],
    },
    other: {
      'script:ld+json:person': JSON.stringify(personSchema),
      'script:ld+json:website': JSON.stringify(websiteSchema),
    },
  };
}

export const dynamic = 'force-static';

export default function Home() {
  return (
    <>
      <link rel="preload" as="image" href="/images/hero-bg.jpg" />
      <Hero />
    </>
  );
}
