import { techStack, getPrimaryTech } from '@/data/techStack';

export default function TechStack() {
  const primaryTech = getPrimaryTech();

  return (
    <section className="py-16 border-t border-neutral-200 dark:border-neutral-800">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl">
          26 years of experience with modern frameworks, performance optimization, and scalable architecture.
          Here's what I work with:
        </p>
      </div>

      {/* Primary Technologies Highlight */}
      <div className="mb-12 p-6 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
        <h3 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-4">
          Primary Focus
        </h3>
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

      {/* Full Tech Stack by Category */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {techStack.map((category) => (
          <div key={category.name} className="space-y-4">
            <h3 className="text-lg font-semibold text-neutral-700 dark:text-neutral-300">
              {category.name}
            </h3>
            <ul className="space-y-2">
              {category.items.map((item) => (
                <li key={item.name} className="group">
                  <div className="flex items-start gap-2">
                    <span className={`
                      font-medium transition-colors
                      ${item.primary
                        ? 'text-neutral-900 dark:text-neutral-100'
                        : 'text-neutral-700 dark:text-neutral-300'
                      }
                    `}>
                      {item.name}
                    </span>
                    {item.primary && (
                      <span className="text-xs px-1.5 py-0.5 bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 rounded">
                        Core
                      </span>
                    )}
                  </div>
                  {item.description && (
                    <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-1">
                      {item.description}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
