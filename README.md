# richarddillman.com

Personal website and blog built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## Getting Started

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Run production server
pnpm start

# Lint code
pnpm lint
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 3
- **Content:** Contentlayer for MDX blog posts
- **Deployment:** Vercel
- **Package Manager:** pnpm

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── about/           # About page
│   ├── blog/            # Blog listing and posts
│   ├── contact/         # Contact page
│   ├── experience/      # Experience page
│   ├── projects/        # Projects page
│   ├── uses/            # Uses page
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/          # React components
├── content/             # MDX content
│   └── posts/          # Blog posts
├── public/              # Static assets
│   └── images/         # Image files
└── contentlayer.config.ts  # Contentlayer configuration
```

## Development

The site uses Turbopack for faster development builds. All pages are server-rendered by default for optimal performance and SEO.

## Deployment

Automatically deployed to Vercel on push to main branch.
