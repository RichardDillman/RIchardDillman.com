"use client";

import { useState, useEffect } from "react";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";

interface ProjectDisclosureProps {
  title: string;
  summary: string;
  details: React.ReactNode;
  id?: string;
}

export function ProjectDisclosure({ title, summary, details, id }: ProjectDisclosureProps) {
  const [open, setOpen] = useState(false);

  // Check hash on mount and when hash changes
  useEffect(() => {
    const checkHash = () => {
      if (id && typeof window !== 'undefined') {
        const hash = window.location.hash.substring(1);
        setOpen(hash === id);
      }
    };

    // Check immediately on mount (handles both hard refresh and client-side navigation)
    checkHash();

    // Also listen for hash changes
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, [id]);

  return (
    <Disclosure
      as="section"
      id={id}
      className={`border rounded-2xl p-6 bg-white dark:bg-neutral-900 scroll-mt-24 transition-shadow duration-300 ${
        open
          ? 'shadow-xl border-blue-200 dark:border-blue-800'
          : 'shadow-sm hover:shadow-md'
      }`}
    >
      <DisclosureButton
        as="div"
        className="flex justify-between items-center cursor-pointer select-none"
        onClick={() => setOpen(!open)}
      >
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-neutral-500">{summary}</p>
        </div>
        <span className="text-blue-600 text-sm">{open ? "Hide" : "View"}</span>
      </DisclosureButton>

      <DisclosurePanel static={open} className="mt-4 text-sm text-neutral-700 dark:text-neutral-300">
        {details}
      </DisclosurePanel>
    </Disclosure>
  );
}
