# Hero Image Generation Prompts

Use these prompts with an AI image generator (like DALL-E, Midjourney, or Stable Diffusion) to create hero images for blog posts. All images should be **1200x600px** in **webp format**.

## Design Guidelines

- **Style**: Modern, clean, technical aesthetic
- **Colors**: Neutral palette with blue accents (matching site theme)
- **Format**: Landscape 2:1 ratio (1200x600px)
- **Text**: Minimal or no text (titles are added in HTML)
- **Mood**: Professional, approachable, developer-focused
- **Export**: webp format for performance

---

## 1. Creating Readable Names

**Filename**: `creating-readable-names.webp`

**Article Summary**: Guidelines for writing clear, meaningful variable and function names in code. Focuses on avoiding meaningless words and improving code documentation through better naming conventions.

**Prompt**:

```
A modern, minimal technical illustration showing code variable naming concepts.
Split composition: left side shows messy, confusing variable names (like 'data', 'temp', 'obj')
in faded gray monospace text with question marks; right side shows clean, descriptive names
(like 'userProfile', 'activeUsers', 'currentOrder') in sharp blue-to-teal gradient.
Abstract geometric shapes suggest clarity and organization. Dark neutral background with
subtle code editor aesthetic. Professional developer tool vibe. No faces or people.
Photorealistic rendering. 1200x600px landscape format.
```

---

## 2. Head Tags Organized

**Filename**: `head-tags-organized.webp`

**Article Summary**: How to organize HTML head tags for optimal performance. Discusses ordering of meta tags, scripts, stylesheets, and preloading for better page speed.

**Prompt**:

```
A technical diagram showing HTML document structure with emphasis on the <head> section.
Abstract visualization of nested tags flowing in organized layers from top to bottom:
meta tags (blue), stylesheets (teal), preload tags (green), scripts (purple).
Clean lines and geometric shapes represent hierarchy and order. Subtle browser chrome
aesthetic at the edges. Dark neutral background with glowing accents suggesting
performance and speed. Minimalist, isometric perspective. No text or people.
Modern developer tool aesthetic. 1200x600px landscape format.
```

---

## 3. How to Write a Readable Commit Message

**Filename**: `how-to-write-a-readable-commit-message.webp`

**Article Summary**: Best practices for writing clear Git commit messages. Guidelines for creating commits that help with collaboration and make Git history useful.

**Prompt**:

```
A modern Git-themed illustration showing commit history and messages. Split composition:
left side displays messy, unclear commit messages ('fix', 'wip', 'asdf') in faded
red/orange; right side shows clear, structured commit messages ('feat: add user auth',
'fix: resolve login timeout', 'refactor: optimize database queries') in clean green
checkmarks. Abstract git branch lines and nodes connect elements. Dark terminal/code
editor aesthetic background. Blue and teal accent colors. No faces or people. Clean,
modern developer tools style. 1200x600px landscape format.
```

---

## Alternative Generators

### Free Options

- **Ideogram** (ideogram.ai) - Good for technical illustrations
- **Leonardo.ai** - Free tier available
- **Bing Image Creator** (DALL-E 3) - Free with Microsoft account

### Paid Options

- **DALL-E 3** (via ChatGPT Plus) - Excellent for technical concepts
- **Midjourney** - Great artistic quality
- **Stable Diffusion** - Customizable, local generation

### Quick Canva Alternative

If AI generation isn't working, you can create simple hero images in Canva:

1. Create 1200x600px canvas
2. Use dark neutral background (#171717 or #262626)
3. Add relevant icon or shape in blue/teal gradient
4. Keep it minimal and professional
5. Export as webp

---

## Placement Instructions

Once generated, place images in:

```
/public/images/
  ├── creating-readable-names.webp
  ├── head-tags-organized.webp
  └── how-to-write-a-readable-commit-message.webp
```

Then update the frontmatter in each corresponding MDX file:

```yaml
---
title: '...'
date: '...'
description: '...'
tags: [...]
coverImage: '/images/FILENAME.webp'
---
```

Run `pnpm run build` to regenerate and verify images display correctly.
