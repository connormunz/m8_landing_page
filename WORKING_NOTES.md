# Working Notes — Connor Munz Personal Landing Page

> **Internal document — not intended for public audiences.**
> This file is for developer and AI assistant reference only.
> Update at the end of every working session before pushing to GitHub.

---

## 1. How to Use This File (For AI Assistants)

1. Read this entire file before suggesting changes or writing any code
2. Read `README.md` for the public-facing project description
3. Read `PRD.md` for content requirements and scope boundaries
4. Read `STANDARDS.md` for all technical and design rules — follow them exactly
5. Do **not** change the folder structure or file naming conventions without discussion
6. Do **not** suggest approaches listed in "What Was Tried and Rejected"
7. Follow all conventions listed in the Conventions section exactly
8. Ask clarifying questions before making large structural changes
9. This project was built with AI assistance (Claude + Replit). Refactor conservatively — do not restructure working code without a specific reason.

---

## 2. Current State

**Last Updated:** 2026-03-23

This is a personal professional landing page for Connor Munz, built as part of BAIS:3300 at the University of Iowa. The initial build has been completed in Replit, pushed to GitHub, and deployed to Azure Static Web Apps. The custom domain is configured but may still be propagating.

### ✅ What Is Working
- [x] `index.html` built with all major sections
- [x] `stylesheet.css` linked and applying styles
- [x] Hero section with name, tagline, and CTA button
- [x] About / Bio section with academic background
- [x] Skills section with grouped pill badges
- [x] Projects section with Spotify SQL project featured
- [x] Experience section with RSM, Accertify, OV Solutions
- [x] Contact section with LinkedIn, GitHub, and email links
- [x] Bootstrap 5.3 loaded via CDN
- [x] Responsive layout (mobile + desktop)
- [x] Sticky navigation bar with anchor links
- [x] Deployed to Azure Static Web Apps
- [x] GitHub repository connected to Azure (auto-deploy on push)
- [x] `PRD.md` in repo root
- [x] `STANDARDS.md` in repo root
- [x] `README.md` in repo root
- [x] Headshot stored at `images/headshot.jpg`

### 🔲 What Is Partially Built
- [ ] Custom domain — configured in Azure but DNS propagation may not be complete across all servers
- [ ] Projects section — only 1 project (Spotify) fully detailed; 2 placeholder slots remain

### 🔲 What Is Not Started
- [ ] Contact form (out of scope for this iteration)
- [ ] Dark mode toggle (out of scope for this iteration)
- [ ] Scroll animations (out of scope for this iteration)
- [ ] Google Analytics / visitor tracking setup
- [ ] `WORKING_NOTES.md` committed to repo

---

## 3. Current Task

**What I was working on when I last stopped:**
The initial landing page build is complete and deployed. The main outstanding issue is DNS propagation for the custom domain — the Azure `.azurestaticapps.net` URL shows the correct updated page but the custom domain is still showing an older or cached version. This is expected behavior and should resolve within 24–48 hours.

**The very next step is:**
Confirm the custom domain is fully propagated and showing the correct page, then review the live site and prompt Replit to make any visual or content adjustments needed before final submission.

---

## 4. Architecture and Tech Stack

| Technology | Version | Why It Was Chosen |
|---|---|---|
| HTML5 | Current | Required by STANDARDS.md; semantic elements for accessibility |
| CSS3 | Current | Required by STANDARDS.md; all styles in external stylesheet |
| Bootstrap | 5.3 (CDN) | Rapid responsive layout; no build step required for static site |
| Vanilla JavaScript | ES6 | Minimal interactivity needed; no framework overhead justified |
| Google Fonts — Inter | Current | Clean, modern, highly readable; specified in STANDARDS.md |
| GitHub | N/A | Version control and CI/CD trigger for Azure deployment |
| Azure Static Web Apps | N/A | Free tier hosting; auto-deploys from GitHub main branch |
| Replit | N/A | Browser-based dev environment used for building and iterating |

---

## 5. Project Structure Notes

```
/connor-munz-landing-page (Root)
├── index.html              ← Single page; all sections here
├── PRD.md                  ← Product requirements; do not delete
├── STANDARDS.md            ← Technical/design rules; do not delete
├── README.md               ← Public-facing repo description
├── WORKING_NOTES.md        ← This file
├── /css
│    └── stylesheet.css     ← All styles here; no inline styles anywhere
├── /js
│    └── scripts.js         ← Minimal JS; smooth scroll behavior
├── /images
│    └── headshot.jpg       ← Referenced as images/headshot.jpg (relative path)
```

**Important notes:**
- `PRD.md` and `STANDARDS.md` must remain in the repo root — Replit reads them from there
- Never link to external image URLs — all images must be in `images/`
- Do not add a resume download link anywhere on the site (per PRD)
- Do not add a `<style>` tag or inline `style=""` attributes to any HTML file

---

## 6. Data / Database

This project has no persistent data or database. It is a fully static site. All content is hard-coded in `index.html`.

---

## 7. Conventions

**File naming:**
- All lowercase, hyphen-separated (e.g., `stylesheet.css`, `headshot.jpg`)
- No spaces in file or folder names

**CSS:**
- All styles in `css/stylesheet.css` — no exceptions
- Bootstrap utility classes used for layout; custom CSS for colors, typography, and component overrides
- CSS custom properties (variables) used for color palette where possible

**HTML:**
- Semantic elements throughout (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`)
- All `<img>` tags include descriptive `alt` attributes
- External links use `target="_blank" rel="noopener noreferrer"`
- Heading hierarchy: `<h1>` (hero name) → `<h2>` (section headings) → `<h3>` (card titles)

**Git commit messages:**
- Short, lowercase, imperative style (e.g., `add spotify project card`, `fix mobile nav spacing`, `update bio copy`)

---

## 8. Decisions and Tradeoffs

- **Bootstrap 5.3 chosen over vanilla CSS:** Speeds up responsive layout significantly for a class project timeline. Trade-off is a CDN dependency, acceptable for a static site.
- **Single `index.html` file:** Keeps deployment simple and matches the static site architecture requirement in STANDARDS.md. No routing needed.
- **No resume download link:** Per PRD guidance — resumes go stale and a live URL pointing to an outdated PDF does more harm than good.
- **Inter font via Google Fonts CDN:** Clean and professional; minor external dependency acceptable given no offline requirement.
- **Navy + teal color palette:** Chosen to feel professional and finance-appropriate for the target audience of recruiters at financial services firms.

---

## 9. What Was Tried and Rejected

- **Linking to resume PDF on the page:** Rejected per PRD — do not suggest this again.
- **Dark mode:** Out of scope for this iteration — do not suggest implementing it unless Connor explicitly asks.
- **Multi-page layout:** Rejected in favor of single-page with anchor navigation per STANDARDS.md architecture rules.

---

## 10. Known Issues and Workarounds

- **Custom domain DNS propagation delay:** The custom domain is not yet showing updated content while the Azure `.azurestaticapps.net` URL is correct. This is normal DNS propagation behavior — no workaround needed, will resolve within 24–48 hours. Do not attempt to change DNS settings to fix this.

---

## 11. Browser / Environment Compatibility

| Browser | Status |
|---|---|
| Chrome | Expected to work — primary development browser |
| Safari | Expected to work — Bootstrap 5.3 supports Safari |
| Firefox | Expected to work — Bootstrap 5.3 supports Firefox |
| Mobile (375px+) | Responsive layout implemented via Bootstrap grid |

---

## 12. Open Questions

- What is the final GitHub profile URL? (placeholder used in README and contact section — needs to be updated)
- Are there 2 additional projects Connor wants to feature beyond the Spotify SQL project?
- Is the headshot displaying correctly at the circular crop size (160px) in the hero section?

---

## 13. Session Log

### 2026-03-23
- Completed PRD interview and generated `PRD.md`
- Generated `STANDARDS.md` based on template and PRD
- Generated initial Replit build prompt and kicked off page build
- Page built in Replit with all 6 sections (Hero, About, Skills, Projects, Experience, Contact)
- Pushed to GitHub via Replit Git tool
- Deployed to Azure Static Web Apps — Azure URL showing correct content
- Custom domain configured — DNS propagation in progress
- Generated `README.md` with all required sections
- Generated `WORKING_NOTES.md` (this file)
- Left incomplete: custom domain propagation, 2 additional project slots, final GitHub URL in README/contact section
- Next step: confirm custom domain, review live site, iterate on design/content as needed

---

## 14. Useful References

- [Bootstrap 5.3 Docs](https://getbootstrap.com/docs/5.3/) — grid, components, utilities
- [Google Fonts — Inter](https://fonts.google.com/specimen/Inter) — font import and usage
- [Azure Static Web Apps Docs](https://learn.microsoft.com/en-us/azure/static-web-apps/) — deployment and custom domain setup
- [DNS Checker](https://dnschecker.org) — verify custom domain propagation status
- [WCAG 2.2 Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/) — accessibility standards reference
- **Claude (Anthropic)** — used throughout this project to conduct the PRD interview, generate PRD.md, STANDARDS.md, README.md, and this WORKING_NOTES.md file, and to craft the initial Replit build prompt. All content reviewed and approved by Connor Munz.
