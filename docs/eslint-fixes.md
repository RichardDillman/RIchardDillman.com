# ESLint Configuration and Fixes

## Problem

The Vercel build was failing due to:

1. ESLint module resolution error: `Cannot find package '@eslint/eslintrc'`
2. Multiple `react/no-unescaped-entities` errors for apostrophes in JSX
3. Unused import warnings

## Solutions Applied

### 1. Fixed ESLint Module Resolution

**Added explicit dependency:**

```bash
pnpm add -D @eslint/eslintrc
```

This ensures `@eslint/eslintrc` is available in `node_modules` for the flat config compatibility layer.

**Updated `eslint.config.mjs`:**

```javascript
import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: ['.next/**', 'node_modules/**', '.contentlayer/**', 'out/**', 'build/**'],
  },
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
];

export default eslintConfig;
```

### 2. Fixed Unescaped Apostrophes

Replaced all straight apostrophes (`'`) in JSX text with HTML entities (`&apos;`):

**Files fixed:**

- `app/about/page.tsx` - 11 apostrophes
- `app/contact/page.tsx` - 1 apostrophe (in heading)
- `components/Hero.tsx` - 2 apostrophes

**Example:**

```tsx
// Before
<h1>Hi, I'm Richard Dillman</h1>

// After
<h1>Hi, I&apos;m Richard Dillman</h1>
```

### 3. Removed Unused Imports

**app/page.tsx:**

- Removed unused `TechStackPreview` import

**components/Hero.tsx:**

- Removed unused lucide-react icons: `Github`, `Linkedin`, `Mail`

## Results

### Lint Check

```bash
✔ No ESLint warnings or errors
```

### Build Success

```bash
Route (app)                                        Size  First Load JS
┌ ○ /                                             174 B         111 kB
├ ○ /_not-found                                   989 B         103 kB
├ ○ /about                                        161 B         105 kB
...
+ First Load JS shared by all                    102 kB
```

## Why These Fixes Matter

1. **Module Resolution**: Explicit `@eslint/eslintrc` dependency ensures consistent builds across environments (local, CI/CD, Vercel)

2. **HTML Entities**: Using `&apos;` instead of `'` in JSX:
   - Prevents React warnings about unescaped entities
   - Ensures proper HTML rendering
   - Avoids potential XSS vulnerabilities
   - Follows React best practices

3. **Clean Imports**: Removing unused imports:
   - Reduces bundle size (even if minimal)
   - Improves code maintainability
   - Prevents confusion for future developers

## Vercel Deployment

The build now passes all ESLint checks during deployment:

- ✅ No module resolution errors
- ✅ No unescaped entity warnings
- ✅ No unused import warnings
- ✅ Clean production build

## Future Considerations

Next.js 16 will deprecate `next lint` in favor of the ESLint CLI. When migrating:

```bash
npx @next/codemod@canary next-lint-to-eslint-cli .
```

This will update the project to use ESLint CLI directly instead of Next.js's wrapper.
