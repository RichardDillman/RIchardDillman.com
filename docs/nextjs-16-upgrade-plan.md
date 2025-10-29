# Next.js 16 Upgrade Plan

## Current State

- **Next.js**: 15.5.6
- **React**: 19.2.0
- **React DOM**: 19.2.0
- **Node.js**: v20.11.1 ✅ (meets v20.9+ requirement)

## Upgrade Assessment

### ✅ GOOD NEWS - Minimal Impact!

Your codebase is **already compatible** with most Next.js 16 requirements:

1. **✅ Async Params Already Implemented**
   - `app/blog/[slug]/page.tsx` already uses `params: Promise<{ slug: string }>`
   - Both `generateMetadata` and page component already `await params`
   - **No migration needed!**

2. **✅ No Middleware File**
   - No `middleware.ts` file exists
   - **No proxy.ts migration needed!**

3. **✅ No Dynamic APIs Used**
   - No usage of `cookies()`, `headers()`, or `draftMode()`
   - **No async conversion needed!**

4. **✅ Standard Image Usage**
   - Using `next/image` (not legacy)
   - No query strings on local images
   - **No Image config changes needed!**

5. **✅ No AMP Usage**
   - No AMP configuration
   - **No removal needed!**

6. **✅ No Runtime Config**
   - Not using `serverRuntimeConfig` or `publicRuntimeConfig`
   - **No migration needed!**

## Breaking Changes That May Affect You

### 1. ⚠️ `next lint` Removal (IMPACT: LOW)

**What's Changing:**

- `next lint` command is completely removed in Next.js 16
- Must use ESLint CLI directly

**Current State:**

- `package.json` scripts: `"lint": "next lint"`
- We already have `@eslint/eslintrc` installed explicitly

**Action Required:**

```bash
# Run the codemod
npx @next/codemod@canary next-lint-to-eslint-cli .

# Or manually update package.json
"lint": "eslint ."
```

### 2. ⚠️ Turbopack Default (IMPACT: NONE)

**What's Changing:**

- Turbopack is now the default bundler
- No webpack customizations in your config

**Current State:**

- No custom webpack config
- Currently using default bundler

**Action Required:**

- None! Will automatically use Turbopack
- Can optionally remove `--turbopack` flags if added later

### 3. ⚠️ Contentlayer Compatibility (IMPACT: UNKNOWN)

**Potential Issue:**

- Contentlayer may not be compatible with Next.js 16 yet
- Currently on v0.3.4 (last updated 2023)
- May need to wait for update or find alternative

**Action Required:**

- Test after upgrade
- Monitor https://github.com/contentlayerdev/contentlayer for updates
- Consider alternatives if incompatible:
  - next-mdx-remote
  - MDX bundler
  - Velite

## New Features to Leverage

### 1. 🚀 Stable React Compiler

Enable auto-memoization for better performance:

```typescript
// next.config.ts
const nextConfig: NextConfig = {
  reactCompiler: true, // Enable React Compiler
  compiler: {
    reactRemoveProperties: true,
    removeConsole: {
      exclude: ['error', 'warn'],
    },
  },
};
```

### 2. 🚀 Cache Components API

Explore new explicit caching with `"use cache"` directive:

```typescript
// Example for future optimization
'use cache';
export async function getBlogPosts() {
  // This will be cached with explicit control
  return allPosts;
}
```

### 3. 🚀 Turbopack Filesystem Caching

Faster subsequent builds with disk caching (beta feature).

## Upgrade Steps

### Step 1: Backup & Preparation

```bash
# Create a backup branch
git checkout -b upgrade/nextjs-16

# Ensure all changes are committed
git status
```

### Step 2: Run Automated Upgrade

```bash
# Use official Next.js upgrade tool
npx @next/codemod@canary upgrade latest
```

This will:

- Upgrade Next.js, React, and React DOM
- Migrate ESLint configuration
- Remove `unstable_` prefixes
- Update Turbopack config (if any)

### Step 3: Manual Updates

**Update package.json scripts:**

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint ."
  }
}
```

**Optional: Enable React Compiler:**

```typescript
// next.config.ts
const nextConfig: NextConfig = {
  reactCompiler: true, // Add this line
  // ... rest of config
};
```

### Step 4: Test Everything

```bash
# Clean install
rm -rf node_modules .next
pnpm install

# Test dev mode
pnpm dev

# Test build
pnpm build

# Test lint
pnpm lint

# Test types
pnpm tsc --noEmit
```

### Step 5: Update Documentation

Update `CLAUDE.md` to reflect Next.js 16 usage.

## Rollback Plan

If Contentlayer or other issues arise:

```bash
# Revert to previous state
git checkout main

# Or manually downgrade
pnpm add next@15.5.6 react@19.2.0 react-dom@19.2.0
```

## Timeline Recommendation

### Option A: Upgrade Now ✅ RECOMMENDED

**Pros:**

- Your code is already 99% compatible
- Early adoption = fewer issues later
- Turbopack performance benefits
- React Compiler stable

**Cons:**

- Contentlayer compatibility unknown
- Potential for minor edge cases

### Option B: Wait for Contentlayer Update

**Pros:**

- Guaranteed compatibility
- Let others find edge cases first

**Cons:**

- Miss out on performance improvements
- May be waiting months (Contentlayer inactive)
- Will eventually need to upgrade anyway

## Recommendation

**PROCEED WITH UPGRADE** for these reasons:

1. ✅ Your codebase is already using Next.js 16 patterns (async params)
2. ✅ No middleware, dynamic APIs, or AMP to migrate
3. ✅ Simple config with no webpack customizations
4. ✅ Node.js version compatible
5. ✅ Minimal breaking changes affect you
6. ⚠️ Contentlayer risk can be mitigated with testing

**If Contentlayer breaks**, you have options:

- Wait for update (likely coming soon)
- Switch to `next-mdx-remote` or `velite`
- Use the MDX bundler directly

## Post-Upgrade Checklist

- [ ] `pnpm install` completes without errors
- [ ] `pnpm dev` starts successfully
- [ ] All pages load correctly in dev mode
- [ ] Blog posts render properly (Contentlayer test)
- [ ] `pnpm build` succeeds
- [ ] `pnpm lint` works with ESLint CLI
- [ ] Production build serves correctly
- [ ] No console errors in browser
- [ ] Deploy to Vercel succeeds
- [ ] Test all routes in production

## Key Commands

```bash
# Automated upgrade (recommended)
npx @next/codemod@canary upgrade latest

# Manual upgrade
pnpm add next@latest react@latest react-dom@latest

# ESLint migration
npx @next/codemod@canary next-lint-to-eslint-cli .

# Test everything
pnpm install && pnpm dev && pnpm build && pnpm lint
```

## Support Resources

- [Official Upgrade Guide](https://nextjs.org/docs/app/guides/upgrading/version-16)
- [Next.js 16 Blog Post](https://nextjs.org/blog/next-16)
- [Codemod Documentation](https://nextjs.org/docs/app/guides/codemods)
- [GitHub Discussions](https://github.com/vercel/next.js/discussions)
