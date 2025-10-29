# Lighthouse Performance Reports

This directory contains historical Lighthouse CI performance reports from **LIVE PRODUCTION** tests.

## Purpose

These reports serve as performance baselines for continuous improvement. After each merge to `main`, we test the **live production site** (richard-dillman-com.vercel.app) and store results here. This creates a permanent historical record of:

- Performance scores
- Accessibility compliance
- JavaScript bundle sizes
- HTML document sizes
- Core Web Vitals (LCP, FCP, TBT, CLS)

**Goal**: Be better than former me. Every PR compares against these real production metrics.

## Report Structure

Reports are saved as HTML and JSON files with timestamps, allowing you to:

- Track performance trends over time
- Identify when regressions were introduced
- Compare metrics before and after optimizations
- Document performance improvements

## The Continuous Improvement Cycle

1. **PR Phase**: Run Lighthouse on build (fast feedback, 1 run)
2. **Merge to main**: Vercel deploys to production
3. **Production Testing**: Lighthouse tests the LIVE site (3 runs for accuracy)
4. **Report PR Created**: Results committed to `lighthouse-reports` branch, PR opened to main
5. **Historical Baseline**: Merged reports become the new baseline
6. **Next PR**: Compares against latest production baseline

### Automated Updates

- **Trigger:** Successful Vercel production deployment (after merge to main)
- **What's Tested:** Live production site at richard-dillman-com.vercel.app
- **Frequency:** 3 runs per URL (for statistical accuracy)
- **Workflow:** Creates PR from `lighthouse-reports` branch to `main`
- **Committer:** `github-actions[bot]`
- **Retention:** Permanent (part of git history)

## Viewing Reports

Open any `.report.html` file in your browser to see the full Lighthouse audit with:

- Overall scores (Performance, Accessibility, Best Practices, SEO)
- Detailed metrics and opportunities
- Screenshots and filmstrip views
- Diagnostic information

## Compare Reports

To track regressions:

```bash
# View report filenames with dates
ls -la lighthouse-reports/

# Compare two reports
diff lighthouse-reports/[timestamp-1].report.json lighthouse-reports/[timestamp-2].report.json
```

## CI/CD Integration

### PR Testing (`.github/workflows/lighthouse-ci.yml`)

- Tests the build (not production)
- 1 run per URL for fast feedback
- Results uploaded to temporary storage (7-day retention)
- Visible in GitHub Actions logs

### Production Baseline (`.github/workflows/lighthouse-production.yml`)

- Triggered by successful Vercel deployment to production
- Tests the LIVE site at richard-dillman-com.vercel.app
- 3 runs per URL for statistical accuracy
- Saves reports to `lighthouse-reports` branch
- Creates PR back to main for review and tracking

## Why This Matters

**Production testing reveals the truth.** Building locally and deploying to production can have different performance characteristics due to:

- CDN caching and edge optimization
- Vercel's build optimizations
- Real network conditions
- Third-party script loading
- Font and image CDN performance

By testing production, we measure what users actually experience.

## Notes

- Reports include all tested URLs: home, about, projects, blog, experience, contact, stack, sample blog post
- The production workflow uses `workflow_dispatch` for manual testing if needed
- Each report includes a timestamp for chronological tracking
- View the full Lighthouse report by opening the `.report.html` files in your browser
