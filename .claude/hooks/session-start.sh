#!/bin/bash
set -euo pipefail

# Only run in Claude Code remote (web) sessions
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

echo "Setting up math-app development environment..."

# Verify ESLint is available
if ! command -v eslint &>/dev/null; then
  echo "ESLint not found, installing globally..."
  npm install -g eslint
fi

echo "ESLint version: $(eslint --version)"
echo "Node version: $(node --version)"
echo "Environment ready."
