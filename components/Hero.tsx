import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 58, 95, 0.85), rgba(30, 58, 95, 0.7)), url(/images/hero-bg.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto animate-fade-in">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            {/* Headshot */}
            <div className="flex-shrink-0">
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden ring-4 ring-accent/50 shadow-2xl">
                <Image
                  src="/images/homepage-hero.webp"
                  alt="Richard Dillman"
                  fill
                  sizes="(max-width: 768px) 192px, 256px"
                  className="object-cover"
                  priority={true}
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary-foreground">
                Hi, I&apos;m Richard Dillman
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 mb-6 leading-relaxed">
                Leader• Mentor • Performance optimizer • Build speed fanatic
              </p>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl">
                I build fast, reliable web platforms that focus on performance, SEO, and developer experience.
                26 years of experience from state government systems to Condé Nast&apos;s premier brands.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
                <Link
                  href="/experience"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
                >
                  View Experience
                </Link>
                <Link
                  href="/projects"
                  className="px-6 py-3 bg-transparent border-2 border-primary-foreground text-primary-foreground rounded-lg font-semibold hover:bg-primary-foreground/10 transition-all hover:-translate-y-0.5"
                >
                  See Projects
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-transparent border-2 border-primary-foreground text-primary-foreground rounded-lg font-semibold hover:bg-primary-foreground/10 transition-all hover:-translate-y-0.5"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
