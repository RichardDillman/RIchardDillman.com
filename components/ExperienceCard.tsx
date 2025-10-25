import { Experience } from "@/data/experience";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
          {experience.company}
        </h3>
        <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-neutral-600 dark:text-neutral-400 mt-1">
          <span>{experience.location}</span>
          <span>{experience.period}</span>
        </div>
      </div>

      <div className="space-y-6">
        {experience.roles.map((role, roleIndex) => (
          <div key={roleIndex} className="border-l-2 border-neutral-200 dark:border-neutral-800 pl-4">
            <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
              {role.title}
            </h4>

            {role.description && (
              <p className="text-neutral-600 dark:text-neutral-400 mb-3 leading-relaxed">
                {role.description}
              </p>
            )}

            <ul className="space-y-2">
              {role.achievements.map((achievement, achIndex) => (
                <li key={achIndex} className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600 mr-2 -translate-y-0.5" />
                  {achievement.text}
                  {achievement.metrics && (
                    <span className="ml-2 font-semibold text-emerald-700 dark:text-emerald-400">
                      ({achievement.metrics})
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
