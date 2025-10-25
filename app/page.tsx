import Link from "next/link";

export default function Home() {
  return (
    <section className="py-20 text-center">
      <h1 className="text-4xl font-bold mb-3">Hi, I am Richard</h1>
      <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6">
        Senior Director of Engineering. I build fast, reliable web platforms that focus on performance, SEO, and developer experience.
      </p>
      <div className="space-x-4">
        <Link href="/about" className="underline">About</Link>
        <Link href="/projects" className="underline">Projects</Link>
        <Link href="/contact" className="underline">Contact</Link>
      </div>
    </section>
  );
}
