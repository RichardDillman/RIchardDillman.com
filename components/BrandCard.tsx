'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { BrandLogo } from '@/data/logos';
import dynamic from 'next/dynamic';

// Code-split the carousel component - only load when needed
const BrandCarousel = dynamic(() => import('./BrandCarousel'), { ssr: false });

interface BrandCardProps {
  brand: BrandLogo;
  images: string[];
}

export default function BrandCard({ brand, images }: BrandCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        onMouseEnter={() => import('./BrandCarousel')} // Preload carousel on hover
        className="group relative transition-all duration-300 flex flex-col items-center justify-center w-full max-w-[160px] mx-auto hover:scale-105 focus-visible:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg p-3"
        aria-label={`View ${brand.name} portfolio (${images.length} screenshot${images.length > 1 ? 's' : ''})`}
      >
        {/* Logo Image */}
        <div className="relative w-full h-auto mb-3">
          <Image
            src={`/images/logos/${brand.file}`}
            alt={`${brand.name} logo`}
            width={brand.width}
            height={brand.height}
            style={{ width: '160px', height: 'auto', margin: '0 auto' }}
            className="grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 drop-shadow-sm"
          />
        </div>

        {/* Logo Title */}
        <div className="text-xs text-center text-muted-foreground group-hover:text-foreground transition-colors duration-300 font-semibold">
          {brand.name}
        </div>

        {/* Image count badge - only show if multiple images */}
        {images.length > 1 && (
          <div
            className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full w-6 h-6 flex items-center justify-center font-semibold shadow-md ring-2 ring-background"
            aria-label={`${images.length} screenshots`}
          >
            {images.length}
          </div>
        )}
      </button>

      {/* Modal slideshow - rendered via portal to document body */}
      {isOpen &&
        createPortal(
          <BrandCarousel brandName={brand.name} images={images} onClose={() => setIsOpen(false)} />,
          document.body
        )}
    </>
  );
}
