import { readFileSync } from "fs";
import { join } from "path";

// Read package.json at build time (server-side only)
function getVersionInfo() {
  const packageJsonPath = join(process.cwd(), "package.json");
  const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf-8"));

  // Extract versions (major for 1.x+, major.minor for 0.x)
  const getVersion = (versionString: string | undefined): string => {
    if (!versionString) return "";
    const match = versionString.match(/(\d+)\.(\d+)/);
    if (!match) return "";
    const [, major, minor] = match;
    // For 0.x versions, show both major and minor (e.g., "0.11")
    // For 1.x+ versions, show only major (e.g., "16")
    return major === "0" ? `${major}.${minor}` : major;
  };

  const nextVersion = getVersion(packageJson.dependencies.next) || "16";
  const reactVersion = getVersion(packageJson.dependencies.react) || "19";
  const tailwindVersion =
    getVersion(packageJson.devDependencies.tailwindcss) || "3";
  const typescriptVersion =
    getVersion(packageJson.devDependencies.typescript) || "5";
  const contentCollectionsVersion =
    getVersion(packageJson.dependencies["@content-collections/core"]) || "0.11";

  return {
    nextVersion,
    reactVersion,
    tailwindVersion,
    typescriptVersion,
    contentCollectionsVersion,
    year: new Date().getFullYear(),
  };
}

export default function Footer() {
  const {
    nextVersion,
    reactVersion,
    tailwindVersion,
    typescriptVersion,
    contentCollectionsVersion,
    year,
  } = getVersionInfo();

  return (
    <footer className="text-center py-10 text-sm text-neutral-600 dark:text-neutral-400">
      <p>© {year} Richard Dillman</p>
      <p className="mt-1">
        Built with{" "}
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-black dark:hover:text-white transition-colors"
        >
          Next.js {nextVersion}
        </a>
        ,{" "}
        <a
          href="https://react.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-black dark:hover:text-white transition-colors"
        >
          React {reactVersion}
        </a>
        ,{" "}
        <a
          href="https://www.typescriptlang.org"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-black dark:hover:text-white transition-colors"
        >
          TypeScript {typescriptVersion}
        </a>
        ,{" "}
        <a
          href="https://tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-black dark:hover:text-white transition-colors"
        >
          Tailwind CSS {tailwindVersion}
        </a>
        ,{" "}
        <a
          href="https://www.content-collections.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-black dark:hover:text-white transition-colors"
        >
          Content Collections {contentCollectionsVersion}
        </a>
        , and hosted on{" "}
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-black dark:hover:text-white transition-colors"
        >
          Vercel
        </a>
      </p>
    </footer>
  );
}
