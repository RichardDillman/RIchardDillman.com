import ExperienceList from '@/components/ExperienceList';
import { LogoMontage } from '@/components/LogoMontage';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';
import { experiences } from '@/data/experience';
import { generateExperienceItemListSchema } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'Experience | Richard Dillman',
  description:
    'Engineering leadership roles at The Muse, Condé Nast, Everyday Health, and CatalpaSoft. 20+ years building fast, scalable web platforms.',
  openGraph: {
    title: 'Experience | Richard Dillman',
    description:
      'Engineering leadership roles at The Muse, Condé Nast, Everyday Health, and CatalpaSoft.',
    url: 'https://richarddillman.com/experience',
    siteName: 'Richard Dillman',
    images: [
      {
        url: '/api/og?title=Experience&description=20+ years building fast, scalable web platforms',
        width: 1200,
        height: 630,
        alt: 'Richard Dillman Experience',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Experience | Richard Dillman',
    description:
      'Engineering leadership roles at The Muse, Condé Nast, Everyday Health, and CatalpaSoft.',
    images: [
      '/api/og?title=Experience&description=20+ years building fast, scalable web platforms',
    ],
  },
};

export const dynamic = 'force-static';

export default function ExperiencePage() {
  const experienceSchema = generateExperienceItemListSchema(experiences);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(experienceSchema) }}
      />
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 pt-24 pb-20">
        <div className="container mx-auto px-6">
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span>Experience & Skills</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
              A decade of building and leading engineering teams
            </p>
            <Button
              asChild
              size="lg"
              className="bg-blue-700 hover:bg-blue-800 text-white font-semibold"
            >
              <a href="/images/resume.pdf" download className="flex items-center">
                <Download className="w-4 h-4 mr-2" aria-hidden="true" />
                Download Full Resume
              </a>
            </Button>
          </header>

          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            Professional Experience
          </h2>

          <ExperienceList />

          {/* Brand logos montage */}
          <div className="mt-24">
            <LogoMontage
              title="Brands I've Worked With"
              description="26 years building high-traffic platforms for world-class organizations"
              showPeriods={false}
            />
          </div>
        </div>
      </div>
    </>
  );
}
