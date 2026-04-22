'use client';

import React, { useEffect, useCallback, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Fade from 'embla-carousel-fade';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { BrandLogo } from '@/data/logos';
import { SVG_COMPONENTS } from './BrandLogos';

interface BrandCarouselProps {
  brand: BrandLogo;
  images: string[];
  onClose: () => void;
}

export default function BrandCarousel({ brand, images, onClose }: BrandCarouselProps) {
  const brandName = brand.name;
  const LogoComponent = brand.svgComponent ? SVG_COMPONENTS[brand.svgComponent] : undefined;
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Fade()]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Update selected index when slide changes
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    onSelect();

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') emblaApi?.scrollPrev();
      if (e.key === 'ArrowRight') emblaApi?.scrollNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [emblaApi, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Click outside to close
  const handleBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  return (
    <div
      className="fixed inset-0 z-[100] backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
      style={{ backgroundColor: 'rgba(30, 58, 95, 0.85)' }}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="carousel-title"
    >
      {/* Close button - top right corner */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-white/80 transition-colors p-2 rounded-lg hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 z-10"
        aria-label="Close slideshow"
      >
        <X className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      {/* Carousel container */}
      <div className="w-full max-w-4xl mx-auto">
        {/* Brand title / logo above image */}
        <h2
          id="carousel-title"
          className="text-white mb-4 flex items-center justify-center h-12 md:h-14"
        >
          <span className="sr-only">{brandName}</span>
          {LogoComponent ? (
            <LogoComponent className="h-full w-auto text-white" />
          ) : (
            <Image
              src={`/images/logos/${brand.file}`}
              alt=""
              width={brand.width}
              height={brand.height}
              className="h-full w-auto object-contain filter invert-0 dark:invert-0 brightness-0 invert"
            />
          )}
        </h2>
        {/* Image container with fade transitions */}
        <div className="overflow-hidden rounded-lg bg-muted/30 backdrop-blur-sm" ref={emblaRef}>
          <div className="flex">
            {images.map((img, i) => (
              <div key={i} className="min-w-full flex-[0_0_100%] relative" style={{ aspectRatio: '1/1' }}>
                <Image
                  src={`/images/portfolio/${img}`}
                  alt={`${brandName} screenshot ${i + 1} of ${images.length}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 80vw"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Controls container below image */}
        <div className="flex items-center justify-between mt-4">
          {/* Navigation arrows - bottom left */}
          {images.length > 1 && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => emblaApi?.scrollPrev()}
                className="bg-muted/80 hover:bg-muted text-foreground p-2 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background shadow-lg"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => emblaApi?.scrollNext()}
                className="bg-muted/80 hover:bg-muted text-foreground p-2 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background shadow-lg"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Pagination dots - bottom right */}
          {images.length > 1 && (
            <div className="flex items-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === selectedIndex
                      ? 'bg-accent w-6'
                      : 'bg-muted-foreground/40 hover:bg-muted-foreground/60'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                  aria-current={index === selectedIndex}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
