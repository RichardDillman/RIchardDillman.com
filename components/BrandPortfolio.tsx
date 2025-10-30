import { BrandLogo } from '@/data/logos';
import { BrandImage } from '@/data/brand-images';
import BrandCard from './BrandCard';

interface BrandPortfolioProps {
  brands: BrandLogo[];
  brandImages: BrandImage[];
}

export function BrandPortfolio({ brands, brandImages }: BrandPortfolioProps) {
  // Filter brands to only show those with portfolio images
  const brandsWithImages = brands
    .filter((brand) => brandImages.some((bi) => bi.brandSlug === brand.slug))
    .map((brand) => ({
      brand,
      images: brandImages.find((bi) => bi.brandSlug === brand.slug)?.images || [],
    }))
    .filter((item) => item.images.length > 0); // Extra safety check

  if (brandsWithImages.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">
          Portfolio screenshots coming soon...
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 md:gap-10 items-start justify-items-center">
      {brandsWithImages.map(({ brand, images }, index) => (
        <div
          key={brand.slug}
          className="animate-fade-in"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <BrandCard brand={brand} images={images} />
        </div>
      ))}
    </div>
  );
}
