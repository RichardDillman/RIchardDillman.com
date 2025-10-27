import { Role } from "@/data/experience";
import { ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";

interface ExperienceCardProps {
  role: Role;
  company: string;
}

export default function ExperienceCard({ role, company }: ExperienceCardProps) {
  return (
    <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      {/* Header with title and date badge */}
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
            {role.title}
          </h3>
        </div>
        <span className="px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium rounded-full whitespace-nowrap">
          {role.period}
        </span>
      </div>

      {role.description && (
        <p className="text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
          {role.description}
        </p>
      )}

      {/* Achievements with chevron bullets */}
      <ul className="space-y-2">
        {role.achievements.map((achievement, achIndex) => (
          <li key={achIndex} className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
            <ChevronRight className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
            <span>
              {achievement.text}
              {achievement.metrics && (
                <span className="ml-2 font-semibold text-emerald-700 dark:text-emerald-400">
                  ({achievement.metrics})
                </span>
              )}
              {achievement.projectId && (
                <Link
                  href={`/projects#${achievement.projectId}`}
                  className="ml-2 inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline transition-colors"
                >
                  <ArrowRight className="w-3 h-3" />
                  <span className="text-xs">Read case study</span>
                </Link>
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
