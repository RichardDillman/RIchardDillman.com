# Modern Browser Targeting Configuration

## Overview

This project is configured to target only modern browsers, which reduces bundle size by eliminating unnecessary polyfills and legacy code transformations.

## Dependency Management

The project uses pnpm overrides to resolve peer dependency conflicts with Contentlayer's outdated dependencies:

- `@opentelemetry/api`: Pinned to ^1.4.1 (compatible with Contentlayer's OpenTelemetry dependencies)
- `esbuild`: Pinned to ^0.18.20 (required by Contentlayer)

These overrides eliminate peer dependency warnings while maintaining full compatibility.

## Target Browsers

The site targets the following modern browsers:

- **Chrome**: >= 102 (May 2022)
- **Safari**: >= 18.5 (Latest)
- **Edge**: >= 138 (Latest)
- **iOS**: >= 18.5 (Latest)
- **Not dead**: Excludes browsers with no official support

## Configuration Files

### `.browserslistrc`

The primary configuration file that defines our browser targets. This is used by:

- **PostCSS/Autoprefixer**: Determines which CSS vendor prefixes to include
- **Babel** (if ever added): Would control JavaScript transpilation
- **Other build tools**: Many tools in the ecosystem read this file

### `next.config.ts`

Additional Next.js-specific optimizations:

```typescript
compiler: {
  // Remove React development properties in production
  reactRemoveProperties: true,

  // Strip console.log/console.info from production builds
  // Keeps console.error and console.warn for debugging
  removeConsole: {
    exclude: ['error', 'warn'],
  },
}
```

## Benefits

1. **Smaller Bundle Size**: Modern browsers need fewer polyfills and transformations
2. **Cleaner CSS**: Autoprefixer adds only necessary vendor prefixes
3. **Faster Builds**: Less transpilation = faster compilation
4. **Better Performance**: Native modern features are faster than polyfilled equivalents
5. **Cleaner Production Code**: Development-only React properties and console logs removed

## Testing

To verify the browser targets:

```bash
npx browserslist
```

To test the production build:

```bash
pnpm build
```

## Current Bundle Sizes

Based on the latest build:

- **First Load JS (shared)**: 102 kB
- **Home page**: 111 kB total
- **Blog post pages**: 112 kB total
- **Static pages**: 102-111 kB total

## Future Optimizations

Potential future improvements:

1. **Code splitting**: Further reduce initial page load
2. **Dynamic imports**: Load heavy components on demand
3. **Image optimization**: Ensure all images use Next.js Image component
4. **Bundle analysis**: Use `@next/bundle-analyzer` to identify opportunities

## Browser Support Policy

Our minimum browser versions represent:

- Modern ES2015+ JavaScript support
- Native CSS Grid and Flexbox
- Modern DOM APIs
- No IE11 or legacy browser support needed

This aligns with the vast majority of our target audience who use up-to-date browsers.
