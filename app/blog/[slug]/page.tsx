import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import Link from "next/link";
import Image from "next/image";
import { getMDXComponent } from "next-contentlayer/hooks";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const ogImageUrl = `/api/og?title=${encodeURIComponent(post.title)}&description=${encodeURIComponent(post.description || "Technical writing on engineering and web development")}`;

  return {
    title: `${post.title} | Richard Dillman`,
    description: post.description || post.title,
    openGraph: {
      title: post.title,
      description: post.description || post.title,
      url: `https://richarddillman.com/blog/${post.slug}`,
      siteName: "Richard Dillman",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: "en_US",
      type: "article",
      publishedTime: post.date,
      authors: ["Richard Dillman"],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description || post.title,
      images: [ogImageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  const MDXContent = getMDXComponent(post.body.code);

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      {/* Back Link */}
      <Link
        href="/blog"
        className="inline-flex items-center text-blue-600 hover:underline mb-8"
      >
        ← Back to Blog
      </Link>

      {/* Article Header */}
      <article>
        <header className="mb-8">
          {post.coverImage && (
            <div className="mb-6 overflow-hidden rounded-lg">
              <Image
                src={post.coverImage}
                alt={post.title}
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          )}
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

          <div className="flex items-center gap-4 text-sm text-neutral-500 mb-4">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* MDX Content */}
        <div className="prose prose-neutral dark:prose-invert max-w-none
          prose-headings:font-bold
          prose-h1:text-3xl prose-h1:mb-4
          prose-h2:text-2xl prose-h2:mb-3 prose-h2:mt-8
          prose-h3:text-xl prose-h3:mb-2 prose-h3:mt-6
          prose-p:mb-4 prose-p:leading-7
          prose-a:text-accent prose-a:no-underline hover:prose-a:underline
          prose-code:bg-muted prose-code:text-foreground prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-primary/5 prose-pre:border prose-pre:border-border/50 prose-pre:text-foreground/80 prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto
          prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-4
          prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-4
          prose-li:mb-2
          prose-blockquote:border-l-4 prose-blockquote:border-border prose-blockquote:pl-4 prose-blockquote:italic
          prose-img:rounded-lg prose-img:shadow-md
        ">
          <MDXContent />
        </div>
      </article>

      {/* Footer */}
      <footer className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800">
        <p className="text-sm text-neutral-500">
          Originally published on{" "}
          <a
            href="https://dev.to/richarddillman"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            dev.to
          </a>
        </p>

        <div className="mt-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:underline"
          >
            ← Back to all posts
          </Link>
        </div>
      </footer>
    </main>
  );
}
