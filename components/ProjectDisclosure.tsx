'use client';

import { useEffect, useRef } from 'react';

interface ProjectDisclosureProps {
  title: string;
  summary: string;
  details: React.ReactNode;
  id?: string;
}

export function ProjectDisclosure({ title, summary, details, id }: ProjectDisclosureProps) {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    // Check if this disclosure should be opened based on the URL hash
    const checkHash = () => {
      if (id && window.location.hash === `#${id}`) {
        if (detailsRef.current && !detailsRef.current.open) {
          detailsRef.current.open = true;
          // Ensure smooth scroll to the element
          detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    // Check on mount
    checkHash();

    // Listen for hash changes (e.g., clicking links on same page)
    window.addEventListener('hashchange', checkHash);

    return () => {
      window.removeEventListener('hashchange', checkHash);
    };
  }, [id]);

  return (
    <details
      ref={detailsRef}
      id={id}
      className="group border rounded-2xl p-6 bg-white dark:bg-neutral-900 transition-all duration-300 scroll-mt-24 open:shadow-xl open:border-blue-200 dark:open:border-blue-800 shadow-sm hover:shadow-md target:border-blue-400 dark:target:border-blue-600 target:shadow-lg target:ring-2 target:ring-blue-200 dark:target:ring-blue-900"
    >
      <summary className="flex justify-between items-center cursor-pointer select-none list-none">
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-sm text-neutral-500">{summary}</p>
        </div>
        <span className="text-blue-600 text-sm transition-colors group-open:text-blue-400">
          <span className="sr-only">Toggle details for {title}</span>
          <span aria-hidden="true" className="font-medium">
            View&nbsp;
            <span className="group-open:hidden">+</span>
            <span className="hidden group-open:inline">–</span>
          </span>
        </span>
      </summary>

      <div
        className="mt-4 text-sm text-neutral-700 dark:text-neutral-300"
        role="region"
        aria-labelledby={id}
      >
        {details}
      </div>
    </details>
  );
}
