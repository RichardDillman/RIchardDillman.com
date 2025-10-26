import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-6 border-b border-neutral-300 dark:border-neutral-700">
      <Link href="/" className="font-bold text-lg hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors">
        Richard Dillman
      </Link>
      <nav className="space-x-4 text-sm">
        <a href="/about">About</a>
        <a href="/experience">Experience</a>
        <a href="/projects">Projects</a>
        <a href="/stack">Stack</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}
