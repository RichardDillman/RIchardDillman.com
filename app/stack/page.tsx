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
        <header className="mb-12 text-center">

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Tech Stack</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            Modern frameworks, performance optimization, and scalable architecture.
            These are the technologies and tools I use to build fast, reliable web platforms.
          </p>
        </header>
        <TechStack />
      </div>
    </div>
  );
}
