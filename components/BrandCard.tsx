'use client';

import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { BrandLogo } from '@/data/logos';
import dynamic from 'next/dynamic';
import { SVG_COMPONENTS } from './BrandLogos';

// Code-split the carousel component - only load when needed
const BrandCarousel = dynamic(() => import('./BrandCarousel'), { ssr: false });

interface BrandCardProps {
  brand: BrandLogo;
  images: string[];
}

export default function BrandCard({ brand, images }: BrandCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const hasPortfolioImages = images.length > 0;

  const handleClick = () => {
    if (hasPortfolioImages) {
      setIsOpen(true);
    }
  };

  return (
    <>
      {/* Parent container with negative margins for border overlap */}
      <div
        style={{ marginLeft: '-1px', marginTop: '-1px' }}
        className="w-6/12 md:w-1/3 lg:w-1/5 relative overflow-hidden group"
      >
        {/* Inner container with border and hover effects */}
        <div className="border border-neutral-300 dark:border-neutral-700 hover:text-white hover:bg-black transition-all duration-300">
          {/* Background cover image - shows on hover */}
          {brand.hoverBackground ? (
            <figure className="absolute top-0 left-0 h-full w-full opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none z-0">
              <Image
                src={`/images/brand-backgrounds/${brand.hoverBackground}`}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
              />
            </figure>
          ) : (
            /* Fallback: 70% black background when no image */
            <div className="absolute top-0 left-0 h-full w-full bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 pointer-events-none z-0" />
          )}

          {/* Button container with aspect ratio */}
          <button
            onClick={handleClick}
            onMouseEnter={hasPortfolioImages ? () => import('./BrandCarousel') : undefined}
            className={`inline-block w-full align-middle aspect-[4/3] relative overflow-hidden ${hasPortfolioImages ? 'cursor-pointer' : 'cursor-default'}`}
            title={brand.name}
            aria-label={hasPortfolioImages ? `View ${brand.name} portfolio (${images.length} screenshot${images.length > 1 ? 's' : ''})` : brand.name}
            disabled={!hasPortfolioImages}
          >
            {/* Logo + brand name */}
            <div className="h-full relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4 gap-2">
              <figure
                className={`flex-1 w-full min-h-0 flex items-center justify-center transition-[filter,color] duration-300 ${
                  brand.invertOnHover && brand.svgComponent ? 'text-black group-hover:text-white' : ''
                } ${
                  brand.invertOnHover && !brand.svgComponent ? 'group-hover:invert' : ''
                }`}
              >
                {brand.svgComponent && SVG_COMPONENTS[brand.svgComponent] ? (
                  React.createElement(SVG_COMPONENTS[brand.svgComponent], {
                    className: 'max-w-full max-h-full w-auto h-auto object-contain',
                  })
                ) : (
                  <Image
                    src={`/images/logos/${brand.file}`}
                    alt={`${brand.name} logo`}
                    width={brand.width}
                    height={brand.height}
                    className="max-w-full max-h-full w-auto h-auto object-contain"
                  />
                )}
              </figure>
              <span className="text-xs sm:text-sm font-medium text-black group-hover:text-white transition-colors duration-300 text-center leading-tight">
                {brand.name}
              </span>
            </div>

            {/* Image count badge - shown whenever portfolio images exist */}
            {images.length > 0 && (
              <div
                className="absolute top-2 right-2 text-xs rounded-full w-6 h-6 flex items-center justify-center font-semibold shadow-md ring-2 ring-background z-20"
                style={{ backgroundColor: 'hsl(var(--muted-foreground))', color: 'hsl(var(--background))' }}
                aria-label={`${images.length} screenshot${images.length > 1 ? 's' : ''}`}
              >
                {images.length}
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Modal slideshow - only if has portfolio images */}
      {isOpen &&
        hasPortfolioImages &&
        createPortal(
          <BrandCarousel brand={brand} images={images} onClose={() => setIsOpen(false)} />,
          document.body
        )}
    </>
  );
}
