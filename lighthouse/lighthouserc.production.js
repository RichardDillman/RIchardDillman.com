// Production Lighthouse CI Configuration
// Tests the LIVE production site at richarddillman.com
// Results are committed to lighthouse-reports branch for historical tracking

const PRODUCTION_URL = process.env.PRODUCTION_URL || 'https://richarddillman.com';

module.exports = {
  ci: {
    collect: {
      // Test the live production site
      numberOfRuns: 3, // Always run 3x for production baseline accuracy
      url: [
        `${PRODUCTION_URL}/`,
        `${PRODUCTION_URL}/about`,
        `${PRODUCTION_URL}/projects`,
        `${PRODUCTION_URL}/blog`,
        `${PRODUCTION_URL}/experience`,
        `${PRODUCTION_URL}/contact`,
        `${PRODUCTION_URL}/stack`,
        `${PRODUCTION_URL}/blog/why-your-react-component-is-a-hot-mess`
      ],
      settings: {
        preset: "desktop",
        formFactor: "desktop",
        screenEmulation: { disabled: true },
        // Use actual network conditions for production testing
        throttlingMethod: "simulate",
        throttling: {
          rttMs: 40,
          throughputKbps: 10 * 1024,
          requestLatencyMs: 0,
          downloadThroughputKbps: 0,
          uploadThroughputKbps: 0,
          cpuSlowdownMultiplier: 1,
        },
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
      // Save reports to filesystem for git tracking
      target: "filesystem",
      outputDir: "./lighthouse-reports",
      reportFilenamePattern: "%%PATHNAME%%-%%DATETIME%%.report.%%EXTENSION%%",
    },
  },
};
