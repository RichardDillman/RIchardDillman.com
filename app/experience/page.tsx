import ExperienceList from "@/components/ExperienceList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Richard Dillman",
  description: "Engineering leadership roles at The Muse, Condé Nast, Everyday Health, and CatalpaSoft. 20+ years building fast, scalable web platforms.",
};

export default function ExperiencePage() {
  return (
    <div className="py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Experience</h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl leading-relaxed">
          Over two decades building fast, reliable web platforms at scale. From
          state government systems serving millions to Condé Nast's premier
          brands, I focus on performance, SEO, and maintainable architecture.
        </p>
      </div>

      <ExperienceList />
    </div>
  );
}
