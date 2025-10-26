import ExperienceList from "@/components/ExperienceList";
import { LogoMontage } from "@/components/LogoMontage";
import { Briefcase, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Richard Dillman",
  description: "Engineering leadership roles at The Muse, Condé Nast, Everyday Health, and CatalpaSoft. 20+ years building fast, scalable web platforms.",
};

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 pt-24 pb-20">
      <div className="container mx-auto px-6">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Experience & Skills</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            A decade of building and leading engineering teams
          </p>
          <Button
            asChild
            size="lg"
            className="bg-blue-500 hover:bg-blue-600 text-white"
          >
            <a href="/about/resume.pdf" download>
              <Download className="w-4 h-4 mr-2" />
              Download Full Resume
            </a>
          </Button>
        </header>

        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Briefcase className="w-6 h-6 text-blue-500" />
          Professional Experience
        </h2>

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
