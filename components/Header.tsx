import Link from 'next/link';
import MobileMenu from './MobileMenu';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/stack', label: 'Stack' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-[rgb(30,58,95)] backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-white">
            Richard Dillman
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-white hover:bg-white/10 rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu - Client Component with React 19.2 Activity */}
          <MobileMenu navLinks={navLinks} />
        </div>
      </div>
    </nav>
  );
}
