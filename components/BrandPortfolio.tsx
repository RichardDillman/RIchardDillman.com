import { BrandLogo } from '@/data/logos';
import { BrandImage } from '@/data/brand-images';
import BrandCard from './BrandCard';

interface BrandPortfolioProps {
  brands: BrandLogo[];
  brandImages: BrandImage[];
}

export function BrandPortfolio({ brands, brandImages }: BrandPortfolioProps) {
  // Filter brands to only show those marked for /brands page
  const brandsToShow = brands
    .filter((brand) => brand.showOnBrandsPage)
    .map((brand) => ({
      brand,
      images: brandImages.find((bi) => bi.brandSlug === brand.slug)?.images || [],
    }));

  if (brandsToShow.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Brand portfolio coming soon...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap mb-8 md:mb-16 px-4 md:px-8 max-w-7xl mx-auto">
      {brandsToShow.map(({ brand, images }) => (
        <BrandCard key={brand.slug} brand={brand} images={images} />
      ))}
    </div>
  );
}
