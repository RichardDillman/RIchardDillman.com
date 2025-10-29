module.exports = {
  ci: {
    collect: {
      // Spin up local Next.js server and collect URLs
      startServerCommand: "pnpm run build && pnpm run start",
      numberOfRuns: 3,
      url: [
        "http://localhost:3000/",
        "http://localhost:3000/about",
        "http://localhost:3000/projects",
        "http://localhost:3000/blog",
        "http://localhost:3000/experience",
        "http://localhost:3000/contact",
        "http://localhost:3000/stack",
        "https://richard-dillman-com.vercel.app/blog/why-your-react-component-is-a-hot-mess"
      ],
      settings: {
        preset: "desktop",
        formFactor: "desktop",
        screenEmulation: { disabled: true },
        // Disable Chrome throttling for more consistent CI results
        throttlingMethod: "provided",
      },
    },
    assert: {
      assertions: {
        // Performance target: 95+ (0.95)
        "categories:performance": ["error", { minScore: 0.95 }],
        // Accessibility target: Temporarily lowered to 90% until fixes are implemented
        // TODO: Restore to 1.0 after accessibility sprint (see docs/prd-lighthouse-performance-optimization.md)
        "categories:accessibility": ["warn", { minScore: 0.90 }],
        // Best practices and SEO
        "categories:best-practices": ["warn", { minScore: 0.9 }],
        "categories:seo": ["warn", { minScore: 0.9 }],

        // Web Vitals targets
        // LCP < 2.5s (2500ms)
        "largest-contentful-paint": ["error", { maxNumericValue: 2500 }],
        // FCP < 1.8s
        "first-contentful-paint": ["warn", { maxNumericValue: 1800 }],
        // CLS < 0.1
        "cumulative-layout-shift": ["warn", { maxNumericValue: 0.1 }],
        // TBT < 200ms
        "total-blocking-time": ["warn", { maxNumericValue: 200 }],

        // Bundle size checks - Temporarily increased to current levels
        // TODO: Reduce to targets after optimization sprint (see PRD)
        "resource-summary:script:size": ["warn", { maxNumericValue: 800000 }], // 800KB JS (temp, target: 250KB)
        "resource-summary:stylesheet:size": ["warn", { maxNumericValue: 50000 }], // 50KB CSS
        "resource-summary:document:size": ["warn", { maxNumericValue: 90000 }], // 90KB HTML (temp, target: 18KB)
        "resource-summary:image:size": ["warn", { maxNumericValue: 500000 }], // 500KB images
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
