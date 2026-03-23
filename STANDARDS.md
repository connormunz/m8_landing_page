# STANDARDS.md

## BAIS:3300 - Digital Product Management · Module 8 | Personal Landing Page Project

_This file contains technical instructions for this project. Every time you
begin a coding session, ask your LLM to read this file before writing any code.
The LLM will follow these standards automatically without you needing to repeat
them in every prompt._

_To start a session, paste this into your LLM:_
_"Please read my STANDARDS.md file before we begin. I will be asking you to build
and modify my personal landing page."_

---

## 1. Project Overview

This site is a personal professional landing page for Connor Munz, a Business Analytics and Information Systems student at the University of Iowa (Tippie College of Business), graduating December 2026. It is designed for recruiters, hiring managers at financial services and consulting firms in the Chicago area, and Connor's personal network. A successful outcome is a live, polished page that conveys Connor's technical skills, creative approach to problem-solving, and professional accomplishments — giving visitors a reason to reach out that a résumé alone cannot.

---

## 2. Technical Standards

These rules apply to every file in this project without exception.

**Languages and versions:**

- HTML5 — use semantic elements throughout: `<header>`, `<main>`, `<section>`,
  `<article>`, `<footer>`, `<nav>`
- CSS3 — all styles must be written in `css/stylesheet.css`; no inline `style=""`
  attributes; no `<style>` tags in any HTML file
- HTML5 and CSS3 code must pass validation

**Folder structure:**

<pre>
/connor-munz-landing-page (Root Folder)
├── index.html
├── PRD.md
├── STANDARDS.md
├── /css
│    └── stylesheet.css
├── /js
│    └── scripts.js
├── /images
│    └── headshot.jpg
</pre>

**Framework:**

- Bootstrap 5.3 loaded via CDN in the `<head>` of `index.html`

**Architecture:**

- Static site — no server-side code, no database, no back-end
- Single `index.html` file in the project root
- External stylesheet: `stylesheet.css` in the css folder and referenced by relative path
- All images stored in the `images/` subfolder and referenced by relative path
  (e.g., `src="images/headshot.jpg"`) — never link to external image URLs
- Do not link to or embed a resume anywhere on the site

**Responsiveness:**

- Fully responsive at all screen widths from 320px and wider
- No horizontal scrolling on any viewport

**Accessibility — WCAG 2.2 Level AA (non-negotiable):**

- All `<img>` elements must have a descriptive `alt` attribute
- Color contrast ratio: minimum 4.5:1 for normal text, 3:1 for large text
- Heading hierarchy must be logical: `<h1>` → `<h2>` → `<h3>`, no levels skipped
- All link text must be descriptive — no "click here", "read more", or bare URLs
- Page `<title>` element must be descriptive (not "Untitled" or "index")
- All interactive elements (links, buttons) must be keyboard navigable

**Compatibility:**

- Must render correctly on Chrome, Safari, and Firefox; must be mobile-responsive (works on screens 375px and wider)

**Security:**

- Links to external sites should open in a new tab (`target="_blank"` with `rel="noopener noreferrer"`)

---

## 3. Design Standards

These visual rules apply to the entire site. Claude must follow them on every
build and every revision.

**Color palette:**

| Role                 | Hex Code  | Usage                                          |
| -------------------- | --------- | ---------------------------------------------- |
| Background           | `#F8F9FA` | Page background                                |
| Primary text         | `#212529` | Body copy, paragraphs                          |
| Accent (Teal)        | `#0D6E6E` | Section headings, links, skill tags, CTA button|
| Navy                 | `#0A2342` | Hero background, nav bar                       |
| Secondary background | `#E9ECEF` | Alternating section backgrounds, card backgrounds |
| White                | `#FFFFFF` | Hero text, nav links, card text on dark bg     |

**Typography:**

- Heading font: **Inter** — import from Google Fonts
- Body font: **Inter**
- Body size: 16px, line height: 1.6
- H1 (page name / hero): 2.5rem, bold, white (on dark hero background)
- H2 (section headings): 1.5rem, bold, accent teal (`#0D6E6E`)
- H3 (card/project titles): 1.1rem, bold, navy (`#0A2342`)

**Imagery:** Professional headshot only. No stock photos or clip art. No emojis.

**Layout:**

- Maximum content width: 800px, centered on the page
- Navigation: sticky top bar (navy background) with anchor links to each section
- Section spacing: 60px top and bottom padding on each section
- Sections alternate between white (`#FFFFFF`) and secondary background (`#E9ECEF`)
- Single column on mobile, two-column grid on desktop for project cards
- Generous whitespace throughout

**Component styles:**

_Profile photo:_

- Circular crop, 160px diameter, centered in the hero section
- Thin white border (3px) to separate from the navy hero background

_Skill tags:_

- Rounded pill badges
- Technical skills (Python, SQL, etc.): teal (`#0D6E6E`) background with white text
- Techniques (Regression, Forecasting, etc.): navy (`#0A2342`) background with white text
- Tools (Microsoft 365, etc.): secondary background (`#E9ECEF`) with dark text

_Project cards:_

- White card with subtle box shadow
- H3 project title, tools listed as small badges, 1–2 sentence outcome description
- Two-column grid on desktop, single column on mobile

_Contact links:_

- Displayed as labeled icon badges opening in a new tab
- Include: LinkedIn, GitHub, and Email
- Teal accent color, hover underline

_Navigation links:_

- White text on navy bar, teal on hover, no underline by default
- Smooth scroll to anchor sections

_CTA Button (Hero):_

- Teal background (`#0D6E6E`), white text, rounded corners
- Hover: slightly darker teal (`#0A5858`)
- Label: "Let's Connect" linking to the contact section

**Tone:**

- **Three words that describe the desired feel:** Professional, Approachable, Data-driven
- Clean and minimal. Not a corporate brochure, not a creative portfolio. Connor's personality and creativity come through in the writing, not in flashy visuals.
- **Writing tone:** First person, direct, and confident. Avoid buzzwords like "passionate" or "synergy." Highlight real outcomes and specific tools.

**Reference sites:**

- [read.cv](https://read.cv) — overall simplicity and whitespace
- [brittanychiang.com](https://brittanychiang.com) — section hierarchy (light background treatment only, not dark mode)

---

_Remember: this document is a living artifact. Update it as you learn more._
