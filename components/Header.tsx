'use client';

import Link from 'next/link';
import { useState, memo } from 'react';
import { Activity } from 'react'; // React 19.2

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/stack', label: 'Stack' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

// Memoized component for stable Activity children
const MobileMenuContent = memo(
  ({ isOpen, onLinkClick }: { isOpen: boolean; onLinkClick: () => void }) => (
    <div
      className={`absolute top-full left-0 right-0 bg-[rgb(30,58,95)] shadow-xl transition-all duration-200 ease-in-out transform origin-top ${
        isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex flex-col gap-2 items-end">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onLinkClick}
            className="px-4 py-2 text-white hover:bg-white/10 rounded-md transition-colors text-right"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  )
);

MobileMenuContent.displayName = 'MobileMenuContent';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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

          {/* Mobile Menu - React 19.2 Activity Component */}
          <div className="md:hidden">
            {/* Hamburger Button - Transforms to X when menu is open */}
            <button
              onClick={toggleMenu}
              className="flex flex-col justify-center items-center w-10 h-10 cursor-pointer relative p-2"
              aria-label="Toggle mobile menu"
              aria-expanded={isMenuOpen}
            >
              <span
                className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out ${
                  isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white rounded-full mt-[5px] transition-all duration-300 ease-in-out ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white rounded-full mt-[5px] transition-all duration-300 ease-in-out ${
                  isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                }`}
              ></span>
            </button>

            {/* Mobile Menu Dropdown with Activity */}
            <Activity mode={isMenuOpen ? 'visible' : 'hidden'}>
              <MobileMenuContent isOpen={isMenuOpen} onLinkClick={closeMenu} />
            </Activity>
          </div>
        </div>
      </div>
    </nav>
  );
}
