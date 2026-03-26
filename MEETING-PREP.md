# SYSCOM Website Redesign — Meeting Prep
**Date:** March 26, 2026  
**Attendees:** Ted Bayer, Mark Anzmann, Chris Benedetti

---

## Agenda

### 1. Demo the Three Variants (10 min)
Walk through each variant live in browser. Let Ted and Mark react.

| Variant | Positioning | Best For |
|---------|------------|----------|
| **Tech-Forward** | Modern, AI-forward, innovation-led | Attracting new business, RFP differentiation, signaling AI capability |
| **Government-Friendly** | Clean, accessible, WCAG-compliant, trustworthy | State/federal clients, compliance-sensitive prospects |
| **Premium Dark** | High-end, sophisticated, boutique | Financial services, premium positioning, executive audience |

### 2. Recommendation: Step 1 Now, Step 2 in Parallel (5 min)

**Proposed approach:**
- **Immediately:** Pick a variant, point syscom.com DNS to it
- **Kill the current hosting contract** — saves money, eliminates "negative value" provider
- **In parallel:** Begin the broader go-to-market strategy work Ted outlined (IBIG rebrand, integrated product suite positioning)
- **Later (Step 3):** Rebuild the site incorporating Step 2 outcomes — the modular architecture makes this straightforward

**Why not wait:** The current site is actively hurting us. Every day it's live is a missed opportunity with prospects who Google "SYSCOM Inc" before a meeting.

### 3. Hosting & Cost Discussion (5 min)

| Option | Monthly Cost | Pros | Cons |
|--------|-------------|------|------|
| **GitHub Pages** (current) | $0 | Free, reliable, auto-deploy on git push | Static only, no backend |
| **Vercel** | $0 (free tier) | Free, better for dynamic features, analytics built-in | Vendor dependency |
| **Custom hosting (AWS/Azure)** | $20-50/mo | Full control, backend for chatbot API | More to manage |

**Recommendation:** Start on GitHub Pages or Vercel (free). Move to custom hosting only when we're ready to wire up the Claude chatbot backend.

### 4. What's Already Built Into the Sites (5 min)
- **AI Chatbot UI** — Ready for Claude API integration (just needs API key + backend)
- **ROI Calculator** — Interactive tool for prospect engagement
- **Product Pages** — ASM, AIS Bridge, IBIG, Content Services with animated diagrams
- **Responsive** — Works on desktop, tablet, mobile
- **SEO-ready** — Meta tags, semantic HTML, sitemap

### 5. Next Steps & Decisions Needed

**Decisions for Ted/Mark:**
1. Which variant direction? (or hybrid elements?)
2. Green light to kill current hosting contract?
3. Timeline for DNS cutover to new site?
4. Any content/messaging changes before go-live?

**Chris will handle:**
- DNS configuration for syscom.com
- Final content polish based on feedback
- Chatbot backend integration (Phase 2)
- Begin Step 2 strategic planning with Ted

---

## Talking Points if Asked

**"What does this cost?"**
Zero for hosting. Built entirely in-house using AI-assisted development tools. The only future cost would be Claude API usage for the chatbot (~$50-100/month depending on traffic).

**"How long to go live?"**
DNS change takes 24-48 hours to propagate. Site is ready now. Could be live by end of week.

**"What about the IBIG rebrand?"**
The site architecture is modular — product pages can be renamed, restructured, or expanded without rebuilding the whole site. That's the beauty of the Step 1/Step 2 parallel approach.

**"Who maintains it?"**
Chris, using the same AI-assisted tools that built it. Updates are push-to-deploy via GitHub. No external vendor dependency.
