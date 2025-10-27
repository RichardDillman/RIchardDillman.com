import ExperienceCard from "./ExperienceCard";
import { experiences } from "@/data/experience";
import { brandLogos } from "@/data/logos";
import Image from "next/image";

export default function ExperienceList() {
  // Helper to get brand name from logo filename
  const getBrandName = (filename: string) => {
    const logo = brandLogos.find(l => l.file === filename);
    return logo?.name || filename;
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
                {experience.companyLogos.map((logo, idx) => {
                  const brandName = getBrandName(logo);
                  return (
                    <span key={idx} title={brandName} className="inline-block" style={{ height: '24px', width: 'auto' }}>
                      <Image
                        src={`/images/logos/${logo}`}
                        alt={`${brandName} logo`}
                        width={100}
                        height={24}
                        style={{ width: 'auto', height: '24px' }}
                        className="object-contain"
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
              <ExperienceCard
                key={roleIndex}
                role={role}
                company={experience.company}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
