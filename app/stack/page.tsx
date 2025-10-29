import TechStack from '@/components/TechStack';
import type { Metadata } from 'next';
import { techStack } from '@/data/techStack';
import { generateTechStackItemListSchema } from '@/lib/structured-data';

export async function generateMetadata(): Promise<Metadata> {
  const techStackSchema = generateTechStackItemListSchema(techStack);

  return {
    title: 'Tech Stack | Richard Dillman',
    description:
      'Technologies, tools, and frameworks I use. 26 years of experience with TypeScript, React, Next.js, Node.js, and modern web development.',
    openGraph: {
      title: 'Tech Stack | Richard Dillman',
      description:
        'Modern frameworks, performance optimization, and scalable architecture. Technologies I use to build fast, reliable web platforms.',
      url: 'https://richarddillman.com/stack',
      siteName: 'Richard Dillman',
      images: [
        {
          url: '/api/og?title=Tech Stack&description=TypeScript, React, Next.js, and modern web development tools',
          width: 1200,
          height: 630,
          alt: 'Richard Dillman Tech Stack',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Tech Stack | Richard Dillman',
      description:
        'Modern frameworks, performance optimization, and scalable architecture. Technologies I use to build fast, reliable web platforms.',
      images: [
        '/api/og?title=Tech Stack&description=TypeScript, React, Next.js, and modern web development tools',
      ],
    },
    other: {
      'script:ld+json': JSON.stringify(techStackSchema),
    },
  };
}

export const dynamic = 'force-static';

export default function StackPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 pt-24 pb-20">
      <div className="container mx-auto px-6">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span>Tech Stack</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            Modern frameworks, performance optimization, and scalable architecture. These are the
            technologies and tools I use to build fast, reliable web platforms.
          </p>
        </header>
        <TechStack />
      </div>
    </div>
  );
}
