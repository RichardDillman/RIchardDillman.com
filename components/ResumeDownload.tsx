'use client';

import { useEffect, useRef, useState } from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const RESUMES = [
  {
    href: '/resume/Richard-Dillman-Director-Resume.pdf',
    label: 'Engineering leadership',
    description: 'Teams, strategy, and platform modernization',
  },
  {
    href: '/resume/Richard-Dillman-Engineer-Resume.pdf',
    label: 'Hands-on engineering',
    description: 'Technical SEO, performance, and Next.js',
  },
];

export default function ResumeDownload() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const firstItemRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;

    firstItemRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('pointerdown', handlePointerDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative inline-block">
      <Button
        ref={triggerRef}
        size="lg"
        onClick={() => setOpen((wasOpen) => !wasOpen)}
        aria-expanded={open}
        aria-haspopup="menu"
        className="bg-blue-700 hover:bg-blue-800 text-white font-semibold"
      >
        <Download className="w-4 h-4 mr-2" aria-hidden="true" />
        Download Resume
      </Button>

      <div
        role="menu"
        aria-label="Choose a resume to download"
        hidden={!open}
        className="absolute left-1/2 z-10 mt-2 w-72 -translate-x-1/2 rounded-xl border bg-white dark:bg-neutral-900 p-2 text-left shadow-xl"
      >
        {RESUMES.map((resume, index) => (
          <a
            key={resume.href}
            ref={index === 0 ? firstItemRef : undefined}
            role="menuitem"
            href={resume.href}
            download
            onClick={() => setOpen(false)}
            className="block rounded-lg px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:bg-neutral-100 dark:focus:bg-neutral-800 focus:outline-none"
          >
            <span className="block font-semibold">{resume.label}</span>
            <span className="block text-sm text-neutral-500 dark:text-neutral-400">
              {resume.description}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
