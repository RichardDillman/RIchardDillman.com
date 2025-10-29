interface ProjectDisclosureProps {
  title: string;
  summary: string;
  details: React.ReactNode;
  id?: string;
}

export function ProjectDisclosure({ title, summary, details, id }: ProjectDisclosureProps) {
  return (
    <details
      id={id}
      className="group border rounded-2xl p-6 bg-white dark:bg-neutral-900 transition-shadow duration-300 scroll-mt-24 open:shadow-xl open:border-blue-200 dark:open:border-blue-800 shadow-sm hover:shadow-md"
    >
      <summary className="flex justify-between items-center cursor-pointer select-none list-none">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
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
