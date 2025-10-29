import { techStack, getPrimaryTech } from '@/data/techStack';

export default function TechStack() {
  const primaryTech = getPrimaryTech();

  return (
    <section className="border-t border-neutral-200 dark:border-neutral-800">
      {/* Primary Technologies Highlight */}
      <div className="mb-12 p-6 bg-card border border-border rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          Primary Focus
        </h2>
        <div className="flex flex-wrap gap-3">
          {primaryTech.map((tech) => (
            <span
              key={tech.name}
              className="px-4 py-2 bg-blue-700 text-white rounded-lg font-semibold text-sm"
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>

      {/* Full Tech Stack by Category */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {techStack.map((category) => (
          <div key={category.name} className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              {category.name}
            </h2>
            <ul className="space-y-3">
              {category.items.map((item) => (
                <li key={item.name} className="group">
                  <div className="flex items-start gap-2">
                    <span className={`
                      font-medium transition-colors
                      ${item.primary
                        ? 'text-foreground'
                        : 'text-muted-foreground'
                      }
                    `}>
                      {item.name}
                    </span>
                    {item.primary && (
                      <span className="text-xs px-1.5 py-0.5 bg-blue-700 text-white font-semibold rounded">
                        Core
                      </span>
                    )}
                  </div>
                  {item.description && (
                    <p className="text-sm text-muted-foreground mt-1">
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
