import Image from 'next/image';
import { brandLogos, BrandLogo } from '@/data/logos';

interface LogoMontageProps {
  title?: string;
  description?: string;
  showPeriods?: boolean;
}

export function LogoMontage({
  title = 'Trusted by Leading Brands',
  description = '26 years building high-traffic platforms for world-class organizations',
  showPeriods = false,
}: LogoMontageProps) {
  // Group logos by period if showPeriods is true
  const groupedLogos = showPeriods ? groupByPeriod(brandLogos) : { all: brandLogos };

  return (
    <section className="py-16 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>
        </div>

        {/* Logo Grid */}
        {Object.entries(groupedLogos).map(([period, logos]) => (
          <div key={period} className="mb-12 last:mb-0">
            {showPeriods && period !== 'all' && (
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6 text-center">
                {period}
              </h3>
            )}

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 md:gap-10 items-center justify-items-center">
              {logos.map((logo) => (
                <LogoItem key={logo.slug} logo={logo} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function LogoItem({ logo }: { logo: BrandLogo }) {
  return (
    <div className="group relative transition-all duration-300 flex flex-col items-center justify-center w-full max-w-[160px] mx-auto">
      {/* Logo Image */}
      <div title={logo.name} className="relative w-full h-auto mb-3">
        <Image
          src={`/images/logos/${logo.file}`}
          alt={`${logo.name} logo`}
          width={logo.width}
          height={logo.height}
          style={{ width: '140px', height: 'auto', margin: '0 auto' }}
          className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 drop-shadow-sm"
        />
      </div>

      {/* Logo Title */}
      <div className="text-xs text-center text-muted-foreground group-hover:text-foreground transition-colors duration-300 font-medium">
        {logo.name}
      </div>
    </div>
  );
}

// Helper function to group logos by period
function groupByPeriod(logos: BrandLogo[]) {
  return logos.reduce(
    (acc, logo) => {
      if (!acc[logo.period]) {
        acc[logo.period] = [];
      }
      acc[logo.period].push(logo);
      return acc;
    },
    {} as Record<string, BrandLogo[]>
  );
}
