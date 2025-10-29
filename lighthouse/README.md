# Lighthouse CI Setup

This directory contains the Lighthouse CI configuration for monitoring web vitals and performance metrics.

## Targets

- **Performance**: 95+ (Lighthouse score)
- **Accessibility**: 100 (Lighthouse score)
- **LCP (Largest Contentful Paint)**: < 2.5s
- **Build Time on Vercel**: < 60s

## Local Testing

### Run Lighthouse CI locally

```bash
pnpm run test:lhci
```

This will:
1. Build the Next.js application
2. Start a local server
3. Run Lighthouse audits on multiple pages
4. Report scores and any failures

### Emergency bypass for git push

If you need to push without running Lighthouse checks:

```bash
git push --no-verify
```

**Use sparingly!** This should only be used in true emergencies when:
- Production is down and you need a hotfix
- Lighthouse CI is failing due to infrastructure issues
- Time-sensitive deployment is required

## GitHub Actions

The Lighthouse CI runs automatically on:
- **Pull Requests** to `main` branch
- **Pushes** to `main` branch

### Two jobs run:

1. **lighthouse**: Runs Lighthouse audits and enforces thresholds
2. **vercel-build-check**: Monitors build time (target: <60s)

### GitHub App Integration (Optional)

To get PR status checks and comments:

1. Install the [Lighthouse CI GitHub App](https://github.com/apps/lighthouse-ci)
2. Add repository secret: `LHCI_GITHUB_APP_TOKEN`
3. The app will comment on PRs with performance scores

## Configuration

### lighthouserc.js

The configuration file defines:

**Audited URLs:**
- Home: `/`
- About: `/about`
- Projects: `/projects`
- Blog: `/blog`
- Experience: `/experience`
- Contact: `/contact`

**Error-level assertions:**
- Performance score ≥ 95
- Accessibility score = 100
- LCP ≤ 2500ms

**Warning-level assertions:**
- Best Practices score ≥ 90
- SEO score ≥ 90
- FCP (First Contentful Paint) ≤ 1800ms
- CLS (Cumulative Layout Shift) ≤ 0.1
- TBT (Total Blocking Time) ≤ 200ms
- Bundle size limits (JS: 250KB, CSS: 50KB)

## Troubleshooting

### Local lighthouse fails to start server

Make sure no other process is using port 3000:

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### Scores fluctuate between runs

This is normal. The config runs 3 audits per URL and averages the results. For more stable scores:

- Close other applications
- Disable browser extensions
- Use desktop preset (already configured)
- Run on consistent hardware

### GitHub Action fails but local passes

CI environments may have:
- Different CPU/memory resources
- Network latency differences
- Different Chrome versions

If CI consistently fails while local passes, consider adjusting thresholds slightly or using Vercel preview URLs instead of localhost.

## Continuous Improvement

Monitor trends over time:
- Review Lighthouse artifacts in GitHub Actions
- Use temporary public storage URLs to compare reports
- Track Core Web Vitals in Vercel Analytics
- Set up alerts for performance regressions

## Resources

- [Lighthouse CI Documentation](https://github.com/GoogleChrome/lighthouse-ci)
- [Web Vitals](https://web.dev/vitals/)
- [Next.js Performance](https://nextjs.org/docs/app/building-your-application/optimizing)
