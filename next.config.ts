import type { NextConfig } from 'next';
import { withContentlayer } from 'next-contentlayer';

const nextConfig: NextConfig = {
  // Enable React Compiler for automatic memoization (Next.js 16+)
  reactCompiler: true,

  // Turbopack is default in Next.js 16 - empty config acknowledges webpack usage from Contentlayer
  turbopack: {},

  // Target modern browsers only - reduces bundle size
  compiler: {
    // Remove React properties for production
    reactRemoveProperties: true,
    // Remove console.* in production
    removeConsole: {
      exclude: ['error', 'warn'],
    },
  },
};

export default withContentlayer(nextConfig);
