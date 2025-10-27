import Hero from "@/components/Hero";
import type { Metadata } from "next";
import { generatePersonSchema, generateWebSiteSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Richard Dillman | Engineering Leadership & Performance",
  description: "Engineering leadership, performance, and mentorship. Building high-performing teams and scalable systems.",
  openGraph: {
    title: "Richard Dillman",
    description: "Engineering leadership, performance, and mentorship. Building high-performing teams and scalable systems.",
    url: "https://richarddillman.com",
    siteName: "Richard Dillman",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Richard Dillman",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Richard Dillman",
    description: "Engineering leadership, performance, and mentorship. Building high-performing teams and scalable systems.",
    images: ["/api/og"],
  },
};

export default function Home() {
  const personSchema = generatePersonSchema();
  const websiteSchema = generateWebSiteSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Hero />
    </>
  );
}
