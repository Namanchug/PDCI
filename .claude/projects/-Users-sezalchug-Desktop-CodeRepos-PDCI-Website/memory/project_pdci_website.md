---
name: PDCI Website Project
description: Next.js website for Police Dog Centre India – 4 pages built, Vercel-ready
type: project
---

Police Dog Centre India (PDCI) website built with Next.js 16 (TypeScript, Tailwind v4, App Router).

**Why:** User wants to host on Vercel, replicating their existing Wix site at policedogcentreindia.wixsite.com/policedogcentreindia

**Pages built:**
- `/` — Home (hero, stats, services overview, why PDCI, testimonials, CTA)
- `/about` — About (who we are, mission/vision, timeline, values, team, certifications)
- `/k9-security-services` — K9 Services (8 services detailed, process, dog breeds, CTA)
- `/contact` — Contact (form with submission state, office locations, map placeholder)

**Tech stack:** Next.js 16.2.4, TypeScript, Tailwind CSS v4, lucide-react icons

**Design:** Dark navy (`#0d1b2a`) + gold (`#c9a84c`) color scheme. Custom Tailwind v4 theme colors: `navy-*` and `gold-*`.

**Components:** `components/Navbar.tsx` (sticky, mobile menu), `components/Footer.tsx`

**Build status:** Clean build, all pages static. Run `npm run dev` to develop, deploy via `vercel` CLI or GitHub → Vercel.

**How to apply:** When continuing this project, all placeholder content (phone, addresses, team names) should be replaced with real PDCI data.
