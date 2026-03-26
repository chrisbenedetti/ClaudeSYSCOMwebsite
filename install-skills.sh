#!/bin/bash
# ============================================================
# SYSCOM Website — Claude Code Skills Installer
# ============================================================
# Run this FIRST in Claude Code to install the skills that will
# produce agency-quality website output instead of generic AI slop.
#
# Usage: bash install-skills.sh
# ============================================================

set -e

echo ""
echo "╔══════════════════════════════════════════════════════════╗"
echo "║   SYSCOM Website — Installing Claude Code Skills        ║"
echo "╚══════════════════════════════════════════════════════════╝"
echo ""

# ------------------------------------------------------------------
# 1. Anthropic Official: Frontend Design
#    The single most important skill for this project.
#    277K+ installs. Forces bold aesthetic direction, distinctive
#    typography, purposeful color palettes. Prevents "AI slop."
# ------------------------------------------------------------------
echo "📦 [1/6] Installing Anthropic frontend-design skill..."
npx skills add anthropics/claude-code --skill frontend-design 2>/dev/null || \
  echo "   ⚠️  frontend-design may already be installed or unavailable via npx. Will use built-in version."

# ------------------------------------------------------------------
# 2. Vercel Labs: React Best Practices
#    Official Vercel skill for React patterns, hooks best practices,
#    performance optimization, and component architecture.
# ------------------------------------------------------------------
echo "📦 [2/6] Installing Vercel react-best-practices skill..."
npx skills add vercel-labs/agent-skills --skill react-best-practices 2>/dev/null || \
  echo "   ⚠️  react-best-practices install failed. Continuing..."

# ------------------------------------------------------------------
# 3. Vercel Labs: Web Design Guidelines
#    Official Vercel skill for web design standards, layout patterns,
#    responsive design, and accessibility.
# ------------------------------------------------------------------
echo "📦 [3/6] Installing Vercel web-design-guidelines skill..."
npx skills add vercel-labs/agent-skills --skill web-design-guidelines 2>/dev/null || \
  echo "   ⚠️  web-design-guidelines install failed. Continuing..."

# ------------------------------------------------------------------
# 4. Vercel Labs: Composition Patterns
#    React component composition and reusable patterns. Critical for
#    our shared component library across 3 variants.
# ------------------------------------------------------------------
echo "📦 [4/6] Installing Vercel composition-patterns skill..."
npx skills add vercel-labs/agent-skills --skill composition-patterns 2>/dev/null || \
  echo "   ⚠️  composition-patterns install failed. Continuing..."

# ------------------------------------------------------------------
# 5. Web Quality Skills (Lighthouse / Core Web Vitals)
#    Ensures output meets performance, accessibility, SEO, and
#    best practice standards. We're targeting Lighthouse 90+.
# ------------------------------------------------------------------
echo "📦 [5/6] Installing web-quality-skills..."
npx skills add anthropics/claude-code --skill web-quality-skills 2>/dev/null || \
  echo "   ⚠️  web-quality-skills install failed. Continuing..."

# ------------------------------------------------------------------
# 6. UI/UX Pro Max
#    Professional UI/UX design intelligence — full design schemes
#    for colors, fonts, layouts. Especially useful for our three
#    distinct visual identities.
# ------------------------------------------------------------------
echo "📦 [6/6] Installing ui-ux-pro-max skill..."
uipro init --ai claude 2>/dev/null || \
  npx skills add guanyang/antigravity-skills --skill ui-ux-pro-max 2>/dev/null || \
  echo "   ⚠️  ui-ux-pro-max install failed. Continuing..."

echo ""
echo "✅ Skills installation complete."
echo ""
echo "Installed skills summary:"
echo "  • frontend-design      — Bold aesthetics, anti-AI-slop design direction"
echo "  • react-best-practices — React patterns, hooks, performance"
echo "  • web-design-guidelines — Layout, responsive, accessibility standards"
echo "  • composition-patterns — Shared component architecture"
echo "  • web-quality-skills   — Lighthouse & Core Web Vitals optimization"
echo "  • ui-ux-pro-max        — Professional UI/UX design intelligence"
echo ""
echo "📋 Next step: Run 'bash bootstrap.sh' to scaffold the monorepo."
echo ""
