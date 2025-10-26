import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

export const metadata: Metadata = {
  title: "Blog | Richard Dillman",
  description: "Technical writing on React, performance optimization, web development, and engineering leadership.",
};

export default function BlogPage() {
  // Sort posts by date (newest first)
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20 pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400">
          Technical writing on React, performance optimization, web development, and engineering leadership.
          Originally published on <a href="https://dev.to/richarddillman" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">dev.to</a>.
        </p>
      </header>

      {/* Posts List */}
      <div className="space-y-8">
        {posts.map((post) => (
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
                      className="px-2 py-1 text-xs bg-neutral-100 dark:bg-neutral-800 rounded"
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
  );
}
