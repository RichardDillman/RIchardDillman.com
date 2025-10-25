"use client";

import { useActionState } from "react";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";

function toggleDrawer(prev: boolean) {
  return !prev;
}

interface ProjectDisclosureProps {
  title: string;
  summary: string;
  details: React.ReactNode;
}

export function ProjectDisclosure({ title, summary, details }: ProjectDisclosureProps) {
  const [open, toggle, isPending] = useActionState(toggleDrawer, false);

  return (
    <Disclosure as="section" className="border rounded-2xl p-6 bg-white dark:bg-neutral-900">
      <DisclosureButton
        as="div"
        className="flex justify-between items-center cursor-pointer select-none"
        onClick={() => toggle()}
      >
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-neutral-500">{summary}</p>
        </div>
        <span className="text-blue-600 text-sm">{open ? "Hide" : "View"}</span>
      </DisclosureButton>

      <DisclosurePanel static={open} className="mt-4 text-sm text-neutral-700 dark:text-neutral-300">
        {isPending ? <p>Loading...</p> : details}
      </DisclosurePanel>
    </Disclosure>
  );
}
