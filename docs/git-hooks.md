# Git Hooks Setup

This project uses git hooks to ensure code quality without slowing down engineer workflow.

## Philosophy

**Fast local checks, expensive tests in CI**

- ✅ **Local pre-push**: Fast checks only (TypeScript + ESLint) - seconds
- ✅ **GitHub Actions**: Expensive Lighthouse tests (8+ pages) - runs while you work
- ✅ **PR blocking**: Failed Lighthouse tests block merge, not push
- ✅ **Engineer efficiency**: Push immediately, get notified later

## Setup

After cloning, run:

```bash
./scripts/setup-git-hooks.sh
```

This installs a pre-push hook that runs:

- TypeScript type checking (`pnpm run build`)
- ESLint (`pnpm run lint`)

Both run in parallel for speed (~5-10 seconds total).

## What Runs Where

### Local (pre-push hook)

- ⚡ TypeScript build (~3-5s)
- ⚡ ESLint (~2-5s)
- **Total**: ~5-10 seconds

### GitHub Actions (after push)

- 🐌 Lighthouse CI (8 URLs × 1 run = ~2-3 minutes)
- 🐌 Build time check
- **Engineer continues working while these run**

## Bypassing Hooks

In emergencies, bypass with:

```bash
git push --no-verify
```

**Note**: The PR will still be blocked if CI tests fail.

## Why Not Run Lighthouse Locally?

Running Lighthouse locally before every push would:

- Block engineer for 2-3 minutes per push
- Scale poorly (32+ pages = 10+ minutes)
- Waste expensive engineer time on tasks CI can do

Instead:

1. Engineer pushes immediately (after fast checks)
2. Lighthouse runs in CI (parallel, while engineer works)
3. Engineer gets notified if tests fail
4. PR is blocked from merging until fixed

This keeps engineers productive and moving fast.
