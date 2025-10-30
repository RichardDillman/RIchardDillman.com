import { Metadata } from 'next';
import { BrandPortfolio } from '@/components/BrandPortfolio';
import { brandLogos } from '@/data/logos';
import { brandImages } from '@/data/brand-images';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Brands I\'ve Worked With | Richard Dillman',
    description:
      '26 years building high-traffic platforms for world-class organizations including The Muse, Condé Nast, Everyday Health, and more. View portfolio screenshots from sites as they appeared during my tenure.',
    openGraph: {
      title: 'Brands I\'ve Worked With | Richard Dillman',
      description:
        'Portfolio of brands and organizations I\'ve worked with over 26 years. Click any brand to view screenshots from when I worked on their platform.',
      url: 'https://richarddillman.com/brands',
      siteName: 'Richard Dillman',
      images: [
        {
          url: '/api/og?title=Brands Portfolio&description=26 years of world-class work',
          width: 1200,
          height: 630,
          alt: 'Richard Dillman Brand Portfolio',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Brands I\'ve Worked With | Richard Dillman',
      description:
        'Portfolio of brands and organizations I\'ve worked with over 26 years.',
      images: ['/api/og?title=Brands Portfolio&description=26 years of world-class work'],
    },
  };
}

export const dynamic = 'force-static';

export default function BrandsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 pt-24 pb-20">
      <div className="container mx-auto px-6">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Brands I Have Worked With
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-3">
            26 years building high-traffic platforms for world-class organizations. Click any brand
            to view screenshots from when I worked on their platform.
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-500 max-w-3xl mx-auto">
            Note: Sites may have changed significantly since my tenure. These screenshots reflect
            the work as it appeared during my time with each organization.
          </p>
        </header>

        <BrandPortfolio brands={brandLogos} brandImages={brandImages} />
      </div>
    </div>
  );
}
