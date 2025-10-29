import ExperienceCard from './ExperienceCard';
import { experiences } from '@/data/experience';
import { brandLogos } from '@/data/logos';
import Image from 'next/image';

export default function ExperienceList() {
  // Helper to get logo object from filename
  const getLogo = (filename: string) => {
    return brandLogos.find((l) => l.file === filename);
  };

  return (
    <div className="space-y-12">
      {experiences.map((experience, expIndex) => (
        <div key={expIndex} className="space-y-6">
          {/* Company Header */}
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-3">
              {experience.company}
            </h2>
            {experience.companyLogos && experience.companyLogos.length > 0 && (
              <div className="flex flex-wrap items-center gap-3">
                {experience.companyLogos.map((logoFilename, idx) => {
                  const logo = getLogo(logoFilename);
                  const brandName = logo?.name || logoFilename;
                  // Calculate width for 24px height based on aspect ratio
                  const displayHeight = 24;
                  const aspectRatio = logo ? logo.width / logo.height : 1;
                  const displayWidth = Math.round(displayHeight * aspectRatio);
                  // Prefetch first company's logos (above the fold)
                  const isPriority = expIndex === 0;
                  return (
                    <span key={idx} title={brandName} className="inline-block">
                      <Image
                        src={`/images/logos/${logoFilename}`}
                        alt={`${brandName} logo`}
                        width={displayWidth}
                        height={displayHeight}
                        className="object-contain"
                        priority={isPriority}
                      />
                    </span>
                  );
                })}
              </div>
            )}
          </div>

          {/* Role Cards */}
          <div className="space-y-6">
            {experience.roles.map((role, roleIndex) => (
              <ExperienceCard key={roleIndex} role={role} company={experience.company} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
