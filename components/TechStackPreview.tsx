import Link from 'next/link';
import { getPrimaryTech } from '@/data/techStack';

export default function TechStackPreview() {
  const primaryTech = getPrimaryTech();

  return (
    <section className="py-16 border-t border-neutral-200 dark:border-neutral-800">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Core Technologies</h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl">
          26 years of experience with modern frameworks, performance optimization, and scalable
          architecture.
        </p>
      </div>

      {/* Primary Technologies */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-3">
          {primaryTech.map((tech) => (
            <span
              key={tech.name}
              className="px-4 py-2 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg font-medium text-sm"
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>

      {/* CTA to full stack page */}
      <div className="mt-8">
        <Link
          href="/stack"
          className="inline-flex items-center gap-2 text-neutral-900 dark:text-neutral-100 font-semibold hover:underline"
        >
          View Full Tech Stack
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </Link>
        <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-2">
          Explore 60+ technologies across languages, frameworks, tools, and platforms
        </p>
      </div>
    </section>
  );
}
