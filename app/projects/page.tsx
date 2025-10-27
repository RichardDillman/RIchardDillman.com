import type { Metadata } from "next";
import { ProjectDisclosure } from "@/components/ProjectDisclosure";
import { projects, getAllTags } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Richard Dillman",
  description: "Technical projects and achievements spanning performance optimization, platform migrations, SEO, monetization, and social impact at scale.",
  openGraph: {
    title: "Projects | Richard Dillman",
    description: "Technical projects spanning performance optimization, platform migrations, SEO, and social impact at scale.",
    url: "https://richarddillman.com/projects",
    siteName: "Richard Dillman",
    images: [
      {
        url: "/api/og?title=Technical Projects&description=26 years of solving complex technical challenges at scale",
        width: 1200,
        height: 630,
        alt: "Richard Dillman Projects",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Richard Dillman",
    description: "Technical projects spanning performance optimization, platform migrations, SEO, and social impact at scale.",
    images: ["/api/og?title=Technical Projects&description=26 years of solving complex technical challenges at scale"],
  },
};

export default function ProjectsPage() {
  const tags = getAllTags();

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20 pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
      {/* Header */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span>Technical Projects</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          26 years of solving complex technical challenges at scale. From government digital transformation
          to premium media platforms serving hundreds of millions of users.
        </p>
      </header>

      {/* Tag Filter Preview */}
      <div className="mb-8">
        <p className="text-sm text-neutral-500 mb-2">Focus areas:</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-4">
        {projects.map((project) => (
          <ProjectDisclosure
            key={project.id}
            title={project.title}
            summary={project.summary}
            details={
              <div className="space-y-6 pt-4">
                {/* Problem */}
                <div>
                  <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                    Problem
                  </h4>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    {project.problem}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                    Solution
                  </h4>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    {project.solution}
                  </p>
                </div>

                {/* Outcome */}
                <div>
                  <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                    Outcome
                  </h4>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    {project.outcome}
                  </p>
                </div>

                {/* Metrics */}
                {project.metrics && (
                  <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                    <p className="font-semibold text-blue-900 dark:text-blue-100 text-sm">
                      Impact: {project.metrics}
                    </p>
                  </div>
                )}

                {/* Stack */}
                <div>
                  <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Meta */}
                <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 text-xs text-neutral-500">
                  <p>
                    {project.company} • {project.period}
                  </p>
                </div>
              </div>
            }
          />
        ))}
      </div>

      {/* Footer CTA */}
      <footer className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Interested in working together?</h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            I am open to technical leadership roles, engineering consulting, and advisory positions.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </footer>
      </div>
      </div>
    </main>
  );
}
