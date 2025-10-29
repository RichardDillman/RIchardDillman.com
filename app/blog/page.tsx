import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { allPosts } from "content-collections-generated";
import { compareDesc } from "date-fns";
import { generateBlogSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Blog | Richard Dillman",
  description: "Technical writing on React, performance optimization, web development, and engineering leadership.",
  openGraph: {
    title: "Blog | Richard Dillman",
    description: "Technical writing on React, performance optimization, web development, and engineering leadership.",
    url: "https://richarddillman.com/blog",
    siteName: "Richard Dillman",
    images: [
      {
        url: "/api/og?title=Blog&description=Technical writing on React, performance optimization, and engineering leadership",
        width: 1200,
        height: 630,
        alt: "Richard Dillman Blog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Richard Dillman",
    description: "Technical writing on React, performance optimization, web development, and engineering leadership.",
    images: ["/api/og?title=Blog&description=Technical writing on React, performance optimization, and engineering leadership"],
  },
};

export const dynamic = 'force-static';

export default function BlogPage() {
  // Sort posts by date (newest first)
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  const blogSchema = generateBlogSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <main className="min-h-screen bg-gradient-to-b from-background to-muted/20 pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span>My random thoughts</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
              Technical writing on React, performance optimization, web development, and engineering leadership.
              Originally published on <a href="https://dev.to/richarddillman" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">dev.to</a>.
            </p>
          </header>

      {/* Posts List */}
      <div className="space-y-8">
        {posts.map((post, index) => (
          <article key={post.slug} className="border-b border-neutral-200 dark:border-neutral-800 pb-8 last:border-0">
            <Link href={`/blog/${post.slug}`} className="group">
              {post.coverImage && (
                <div className="mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    width={800}
                    height={400}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    priority={index === 0}
                  />
                </div>
              )}
              <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h2>
            </Link>

            <div className="flex items-center gap-4 text-sm text-neutral-500 mb-3">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric"
                })}
              </time>
              {post.tags && post.tags.length > 0 && (
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100 rounded font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {post.description && (
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                {post.description}
              </p>
            )}

            <Link
              href={`/blog/${post.slug}`}
              className="text-blue-600 hover:underline font-medium"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
        </div>
      </div>
      </main>
    </>
  );
}
