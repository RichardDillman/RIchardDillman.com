# Lighthouse Performance Reports

This directory contains historical Lighthouse CI performance reports for regression tracking.

## Purpose

Reports are automatically generated and committed when changes are merged to the `main` branch. This creates a permanent historical record of:
- Performance scores
- Accessibility compliance
- JavaScript bundle sizes
- HTML document sizes
- Core Web Vitals (LCP, FCP, TBT, CLS)

## Report Structure

Reports are saved as HTML and JSON files with timestamps, allowing you to:
- Track performance trends over time
- Identify when regressions were introduced
- Compare metrics before and after optimizations
- Document performance improvements

## Automated Updates

- **Trigger:** Merge to `main` branch
- **Frequency:** 3 runs per URL (for statistical accuracy)
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

See `.github/workflows/lighthouse-ci.yml` for the automated workflow that:
1. Runs Lighthouse CI on merge to main (3 runs per URL)
2. Saves reports to this directory
3. Auto-commits using `stefanzweifel/git-auto-commit-action`

## Notes

- PR builds use temporary public storage (7-day retention) for fast feedback
- Main branch builds create permanent reports for long-term tracking
- Reports include all tested URLs: home, about, projects, blog, experience, contact, stack
- `[skip ci]` prevents recursive workflow runs
