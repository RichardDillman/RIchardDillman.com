import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Headshot */}
        <div className="flex-shrink-0">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden ring-4 ring-neutral-200 dark:ring-neutral-700 shadow-xl">
            <Image
              src="/images/homepage-hero.webp"
              alt="Richard Dillman"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm Richard Dillman
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
            Senior Director of Engineering • Mentor • Performance optimizer • Build speed fanatic
          </p>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl">
            I build fast, reliable web platforms that focus on performance, SEO, and developer experience.
            26 years of experience from state government systems to Condé Nast's premier brands.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link
              href="/experience"
              className="px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg font-semibold hover:bg-neutral-700 dark:hover:bg-neutral-300 transition-colors"
            >
              View Experience
            </Link>
            <Link
              href="/projects"
              className="px-6 py-3 border-2 border-neutral-900 dark:border-neutral-100 text-neutral-900 dark:text-neutral-100 rounded-lg font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              See Projects
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border-2 border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-lg font-semibold hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
