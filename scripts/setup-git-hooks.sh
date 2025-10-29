#!/bin/bash
# Setup git hooks for the project
# Run this after cloning: ./scripts/setup-git-hooks.sh

echo "🔧 Setting up git hooks..."

# Create pre-push hook for fast local checks
cat > .git/hooks/pre-push << 'EOF'
#!/bin/sh
# Pre-push hook for fast local checks
# Heavy tests (Lighthouse) run in GitHub Actions while you continue working
# This can be bypassed with: git push --no-verify

echo "🚀 Running fast pre-push checks..."
echo "   (Lighthouse tests will run in CI - you can keep working!)"
echo ""

# Run fast checks in parallel
echo "📝 Running TypeScript type checking..."
pnpm run build > /dev/null 2>&1 &
BUILD_PID=$!

echo "🔍 Running ESLint..."
pnpm run lint &
LINT_PID=$!

# Wait for both to complete
wait $BUILD_PID
BUILD_EXIT=$?

wait $LINT_PID
LINT_EXIT=$?

echo ""

# Check results
FAILED=0

if [ $BUILD_EXIT -ne 0 ]; then
  echo "❌ TypeScript build failed"
  FAILED=1
fi

if [ $LINT_EXIT -ne 0 ]; then
  echo "❌ ESLint failed"
  FAILED=1
fi

if [ $FAILED -eq 1 ]; then
  echo ""
  echo "Fix the issues above or use 'git push --no-verify' to bypass."
  echo ""
  exit 1
fi

echo "✅ All fast checks passed!"
echo "   → Lighthouse tests will run in GitHub Actions (check PR for results)"
echo ""

exit 0
EOF

# Make executable
chmod +x .git/hooks/pre-push

echo "✅ Git hooks installed successfully!"
echo ""
echo "Pre-push hook configured to run:"
echo "  • TypeScript type checking (build)"
echo "  • ESLint"
echo ""
echo "Lighthouse tests run in CI after push (non-blocking for engineer workflow)"
