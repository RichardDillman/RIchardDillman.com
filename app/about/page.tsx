import type { Metadata } from "next";
import Link from "next/link";
import { generateProfilePageSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "About | Richard Dillman",
  description: "Senior Director of Engineering. Mentor, performance optimizer, build speed fanatic. I love building fast, reliable products and helping others grow.",
  openGraph: {
    title: "About | Richard Dillman",
    description: "Senior Director of Engineering. Mentor, performance optimizer, build speed fanatic.",
    url: "https://richarddillman.com/about",
    siteName: "Richard Dillman",
    images: [
      {
        url: "/api/og?title=About&description=Senior Director of Engineering focused on mentorship, performance optimization, and build speed",
        width: 1200,
        height: 630,
        alt: "About Richard Dillman",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Richard Dillman",
    description: "Senior Director of Engineering. Mentor, performance optimizer, build speed fanatic.",
    images: ["/api/og?title=About&description=Senior Director of Engineering focused on mentorship, performance optimization, and build speed"],
  },
};

export const dynamic = 'force-static';

export default function AboutPage() {
  const profilePageSchema = generateProfilePageSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span>About Me</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Leader, Mentor, performance optimizer, build speed fanatic.
            </p>
          </div>

        <div className="bg-card border border-border rounded-lg shadow-sm p-8 md:p-12">
          <div className="prose prose-neutral dark:prose-invert max-w-none text-lg leading-relaxed space-y-6">
            <p className="mt-0">
              I love building fast, reliable products, and helping others grow while I
              do it. I&apos;m passionate about SEO, Page Speed, and clean, scalable
              code. At The Muse, I lead with curiosity, clarity, and care, bridging
              tech and business. Nearly a decade later, my code still powers ads
              on sites like Vogue, GQ, Wired, and The New Yorker.
            </p>

            <p>
              I&apos;m focused on mentorship, performance optimization, and build speed. My stack centers on
              TypeScript and Next.js, but I&apos;ve spent decades working across the web platform, from Python/Tornado
              monoliths to modern React architectures, from state government systems to global media properties.
            </p>

            <p>
              Over the past 20+ years, I&apos;ve built systems that serve millions of users
              daily. At <strong>Condé Nast</strong>, I modernized ad delivery infrastructure
              across 30+ publications reaching 229M+ monthly users. At{" "}
              <strong>The Muse</strong>, I&apos;ve led engineering through multiple platform
              migrations, cutting build times from 45 minutes to 75 seconds and
              driving significant improvements in SEO, revenue, and user engagement.
            </p>

            <p>
              Before that, I founded <strong>CatalpaSoft</strong>, where I built
              child welfare platforms that accelerated foster care placements by 50%
              across thousands of families. Earlier still, I helped build systems for
              the State of Indiana, Everyday Health, and organizations serving millions
              of people seeking critical information.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">How I Lead</h2>

            <p>
              I believe great engineering leadership means staying technical while
              scaling people and systems. I write code, review PRs, debug production
              issues, and mentor engineers, from junior ICs to senior architects. I&apos;ve
              even formalized <strong>Claude Code</strong> as a structured contributor
              on my team, treating AI as a force multiplier that still requires tight
              direction and thorough review.
            </p>

            <p>
              I care deeply about the fundamentals: <strong>Web Vitals</strong>,{" "}
              <strong>Lighthouse scores</strong>, accessibility, observability, and
              developer experience. I&apos;ve built experimentation into workflows so we
              can measure what we ship. I&apos;ve standardized linting, typing, testing,
              and formatting pipelines across teams to improve velocity and reduce
              bugs.
            </p>

            <p>
              Most importantly, I lead with <strong>curiosity, clarity, and care</strong>.
              I ask questions, explain decisions, and make sure everyone (engineers,
              product managers, designers, and stakeholders) understands not just{" "}
              <em>what</em> we&apos;re building, but <em>why</em>.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Outside of Work</h2>

            <p>
              When I&apos;m not optimizing build pipelines or debugging Core Web Vitals,
              you&apos;ll find me gardening, playing Elder Scrolls Online, reading about
              Egyptology, or experimenting with bookbinding and typography. I&apos;m
              fascinated by craft, systems, and the intersection of art and
              engineering.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Let&apos;s Connect</h2>

            <p>
              I write occasionally on{" "}
              <a
                href="https://dev.to/richarddillman"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 dark:text-blue-400 hover:underline font-medium"
              >
                dev.to
              </a>
              , share updates on{" "}
              <a
                href="https://www.linkedin.com/in/richarddillman/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 dark:text-blue-400 hover:underline font-medium"
              >
                LinkedIn
              </a>
              , and maintain projects on{" "}
              <a
                href="https://github.com/richardDillman/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 dark:text-blue-400 hover:underline font-medium"
              >
                GitHub
              </a>
              . If you want to talk about engineering leadership, performance
              optimization, or how to work effectively with AI agents, feel free to{" "}
              <Link
                href="/contact"
                className="text-blue-700 dark:text-blue-400 hover:underline font-medium"
              >
                reach out
              </Link>
              .
            </p>
          </div>
        </div>
        </div>
      </div>
      </div>
    </>
  );
}
