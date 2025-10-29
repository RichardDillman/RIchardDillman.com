# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is richarddillman.com - a personal website and blog built with Next.js 16, React 19, TypeScript, and Tailwind CSS. The site is deployed on Vercel and uses Contentlayer for MDX-based blog content.

**IMPORTANT:** Check `docs/progress.md` for current implementation status, completed features, and priority next steps.

## Development Commands

```bash
# Install dependencies
pnpm install

# Run development server with Turbopack
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run ESLint
pnpm lint
```

The dev server runs on http://localhost:3000 by default.

## Architecture

### Tech Stack

- **Framework:** Next.js 16 with App Router
- **Bundler:** Turbopack (default in Next.js 16)
- **Compiler:** React Compiler (enabled for auto-memoization)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 3 with dark mode support
- **Content:** Contentlayer for MDX blog posts
- **Package Manager:** pnpm
- **Deployment:** Vercel

### Directory Structure

```
app/                    # Next.js App Router pages
├── about/             # About page route
├── blog/              # Blog listing and post routes
├── contact/           # Contact page route
├── experience/        # Experience/resume page route
├── projects/          # Projects showcase route
├── uses/              # Tech stack/tools page route
├── layout.tsx         # Root layout with Header/Footer
├── page.tsx           # Home page
└── globals.css        # Global styles and Tailwind directives

components/            # React components
├── Header.tsx         # Site header with navigation
└── Footer.tsx         # Site footer

content/               # MDX content files
└── posts/            # Blog posts in MDX format

public/                # Static assets
└── images/           # Image files

contentlayer.config.ts # Contentlayer configuration for MDX processing
```

### Key Patterns

**App Router:** This project uses Next.js 16's App Router. All routes are defined by the folder structure in the `app/` directory. Each route should have a `page.tsx` file.

**Layout:** The root layout (`app/layout.tsx`) wraps all pages with the Header and Footer components, and applies the Inter font globally.

**Styling:** Uses Tailwind CSS with a neutral color palette. Dark mode is supported via the `dark:` prefix and CSS variables. The design follows a minimalist, content-focused aesthetic.

**Content:** Blog posts are written in MDX and stored in `content/posts/`. Contentlayer processes these at build time and makes them available as typed data. Posts include frontmatter (title, date, description, tags) and a computed slug field.

**Type Safety:** The project uses TypeScript with strict mode enabled. Contentlayer generates types for all content automatically in `.contentlayer/generated`.

## Important Configuration Details

### Next.js Config

The `next.config.ts` includes:

- `reactCompiler: true` - Enables the stable React Compiler for automatic memoization
- `turbopack: {}` - Acknowledges Turbopack as default bundler (compatible with Contentlayer's webpack usage)
- Wrapped with Contentlayer's `withContentlayer()` function to enable MDX processing
- Compiler optimizations for production (remove React properties, console statements)

### Tailwind Config

- Uses `darkMode: "class"` for manual dark mode toggling
- Content paths include `app/`, `components/`, and `pages/`
- Extends default theme with custom CSS variables for colors

### ESLint Config

Uses Next.js 16's ESLint config with TypeScript support via the flat config format (`eslint.config.mjs`). The config directly imports from `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript` instead of using `next lint`.

### pnpm Notes

After initial install, you may need to run `pnpm approve-builds` to enable build scripts for certain dependencies (contentlayer, esbuild, sharp, protobufjs, unrs-resolver).

## Known Issues

**Contentlayer + Next.js 16:** Contentlayer's peer dependency expects Next.js 12 or 13, but the project uses Next.js 16. This causes peer dependency warnings during install but does not affect functionality. Testing confirms full compatibility with Next.js 16's Turbopack and React Compiler.

## Additional Dependencies

- **babel-plugin-react-compiler:** Required for React Compiler (Next.js 16+)
- **next-seo:** For managing SEO meta tags
- **next-themes:** For dark mode support
- **framer-motion:** For animations
- **react-icons:** For icon components
- **@vercel/analytics:** For Vercel Analytics integration
- **plausible-tracker:** For privacy-friendly analytics
- **rehype plugins:** For code syntax highlighting and heading anchors in MDX
