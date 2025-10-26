import ExperienceList from "@/components/ExperienceList";
import { LogoMontage } from "@/components/LogoMontage";
import { Briefcase } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Richard Dillman",
  description: "Engineering leadership roles at The Muse, Condé Nast, Everyday Health, and CatalpaSoft. 20+ years building fast, scalable web platforms.",
};

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
            <Briefcase className="w-8 h-8" />
            Professional Experience
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl leading-relaxed">
            Over two decades building fast, reliable web platforms at scale. From
            state government systems serving millions to Condé Nast's premier
            brands, I focus on performance, SEO, and maintainable architecture.
          </p>
        </div>

        <ExperienceList />

        {/* Brand logos montage */}
        <div className="mt-24">
          <LogoMontage
            title="Brands I've Worked With"
            description="26 years building high-traffic platforms for world-class organizations"
            showPeriods={false}
          />
        </div>
      </div>
    </div>
  );
}
