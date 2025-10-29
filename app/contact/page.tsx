import type { Metadata } from 'next';
import { Mail, Github as GitHub, Linkedin as LinkedIn, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { generateContactPageSchema } from '@/lib/structured-data';

export async function generateMetadata(): Promise<Metadata> {
  const contactPageSchema = generateContactPageSchema();

  return {
    title: 'Contact | Richard Dillman',
    description: 'Get in touch with Richard Dillman. Connect on LinkedIn, GitHub, or dev.to.',
    openGraph: {
      title: 'Contact | Richard Dillman',
      description:
        'Get in touch. Open to exciting opportunities, collaborations, and conversations about engineering.',
      url: 'https://richarddillman.com/contact',
      siteName: 'Richard Dillman',
      images: [
        {
          url: "/api/og?title=Let's Build Something Together&description=Open to opportunities, collaborations, and conversations about engineering",
          width: 1200,
          height: 630,
          alt: 'Contact Richard Dillman',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Contact | Richard Dillman',
      description:
        'Get in touch. Open to exciting opportunities, collaborations, and conversations about engineering.',
      images: [
        "/api/og?title=Let's Build Something Together&description=Open to opportunities, collaborations, and conversations about engineering",
      ],
    },
    other: {
      'script:ld+json': JSON.stringify(contactPageSchema),
    },
  };
}

export const dynamic = 'force-static';

const contactLinks = [
  {
    name: 'Email',
    href: 'mailto:&#114;&#100;&#105;&#108;&#108;&#109;&#097;&#110;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;',
    icon: Mail,
    description: 'rdillman [at] gmail [dot] com',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/richarddillman/',
    icon: LinkedIn,
    description: 'Connect with me',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/richardDillman/',
    icon: GitHub,
    description: 'Check out my code',
  },
  {
    name: 'Dev.to',
    href: 'https://dev.to/richarddillman',
    icon: BookOpen,
    description: 'Read my writing',
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span>Let&apos;s Build Something Together</span>
            </h1>
            <p className="text-xl text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
              Open to exciting opportunities, collaborations, and conversations about engineering
            </p>
          </div>

          <Card className="border-border/50 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <h2 className="sr-only">Contact Methods</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {contactLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target={link.name !== 'Email' ? '_blank' : undefined}
                      rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                      className="group"
                    >
                      <div className="p-6 bg-blue-50 dark:bg-blue-950/50 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all duration-300 hover:scale-105">
                        <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                        <h3 className="font-bold text-foreground mb-1">{link.name}</h3>
                        <p className="text-sm text-neutral-700 dark:text-neutral-300">
                          {link.description}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <p className="text-neutral-700 dark:text-neutral-300 mt-12">
            Based in Indianapolis, IN • Available for remote opportunities
          </p>
        </div>
      </div>
    </div>
  );
}
