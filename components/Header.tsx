"use client";

import Link from "next/link";
import { useEffect } from "react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/stack", label: "Stack" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  // Reset menu on navigation (pathname change)
  useEffect(() => {
    const checkbox = document.getElementById('mobile-menu-toggle') as HTMLInputElement;
    if (checkbox) checkbox.checked = false;
  }, []);

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

          {/* Mobile Menu - CSS Only (Zero JavaScript) */}
          <div className="md:hidden">
            <input
              type="checkbox"
              id="mobile-menu-toggle"
              className="peer sr-only"
              aria-label="Toggle mobile menu"
            />

            {/* Hamburger Icon - Transforms to X when checked */}
            <label
              htmlFor="mobile-menu-toggle"
              className="flex flex-col justify-center items-center w-10 h-10 cursor-pointer relative p-2"
            >
              <span className="block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-in-out peer-checked:rotate-45 peer-checked:translate-y-[7px]"></span>
              <span className="block w-6 h-0.5 bg-white rounded-full mt-[5px] transition-all duration-300 ease-in-out peer-checked:opacity-0"></span>
              <span className="block w-6 h-0.5 bg-white rounded-full mt-[5px] transition-all duration-300 ease-in-out peer-checked:-rotate-45 peer-checked:-translate-y-[7px]"></span>
            </label>

            {/* Mobile Menu Dropdown */}
            <div className="invisible peer-checked:visible opacity-0 peer-checked:opacity-100 absolute top-full left-0 right-0 bg-[rgb(30,58,95)] shadow-xl transition-all duration-200 ease-in-out transform origin-top scale-95 peer-checked:scale-100">
              <div className="container mx-auto px-4 py-4 flex flex-col gap-2 items-end">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-4 py-2 text-white hover:bg-white/10 rounded-md transition-colors text-right"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
