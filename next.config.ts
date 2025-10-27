import type { NextConfig } from 'next';
import { withContentlayer } from 'next-contentlayer';

const nextConfig: NextConfig = {
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
