import TechStack from "@/components/TechStack";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Stack | Richard Dillman",
  description: "Technologies, tools, and frameworks I use. 26 years of experience with TypeScript, React, Next.js, Node.js, and modern web development.",
};

export default function StackPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Tech Stack</h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl leading-relaxed">
            26 years of experience with modern frameworks, performance optimization, and scalable architecture.
            These are the technologies and tools I use to build fast, reliable web platforms.
          </p>
        </div>

        <TechStack />
      </div>
    </div>
  );
}
