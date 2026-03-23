# Product Requirement Document
**Product:** Personal Professional Landing Page
**Author:** Connor Munz
**Course:** BAIS 3300 — Digital Product Management
**Date:** March 2026

---

## 01 — Problem Statement

Connor Munz is a Business Analytics and Information Systems student at the University of Iowa (Tippie College of Business), graduating December 2026. He is targeting roles in financial services risk consulting, fraud analytics, and data analytics — primarily at mid-to-large firms in the Chicago area.

A résumé communicates what Connor has done, but it cannot convey who he is or how he thinks. It can't show his creativity, his love of building solutions, or the personality behind his accomplishments. A static PDF also can't be updated in real time, doesn't surface well in searches, and gives recruiters no easy path to explore his work or reach out.

The landing page solves this by giving Connor a live, curated professional presence — a "digital home" that tells his story, showcases his projects, and makes it easy for recruiters, hiring managers, and his personal network to connect with him in a way a résumé simply cannot.

---

## 02 — Target Audience

| Audience Segment | Description |
|---|---|
| **Primary** | Recruiters and hiring managers at mid-to-large financial services firms, consulting shops (e.g., RSM, Deloitte, Accenture), and fintech companies — primarily in the Chicago metro area |
| **Secondary** | Analytics and risk-focused roles at companies seeking data-driven talent (fraud detection, risk assessment, business intelligence) |
| **Tertiary** | Friends, family, and personal network members who want to follow Connor's professional journey |

**What visitors are looking for when they arrive:**
- A quick, confident sense of who Connor is and what he's good at
- Evidence of real, hands-on technical work (projects with tools and outcomes)
- Easy ways to connect — LinkedIn, GitHub, and email all readily accessible
- A professional but personable impression that makes them want to reach out

---

## 03 — Goals & Success Metrics

| Goal | How We Measure It |
|---|---|
| Establish a professional online presence | Page is live, indexed, and accessible at a custom domain within 1 week of launch |
| Drive recruiter and hiring manager outreach | 3+ recruiter messages or LinkedIn connection requests referencing the page within 60 days |
| Support active job applications | Page URL included in 100% of job applications submitted after launch |
| Grow personal network awareness | Shared with 20+ personal/professional contacts within the first 2 weeks |
| Demonstrate technical credibility | At least 1 project with tools, process, and outcome clearly described on the page |

---

## 04 — Required Content

### Hero Section
- **Must** display Connor's full name: **Connor Munz**
- **Must** display a professional tagline (e.g., *"Business Analytics student turning data into decisions — and loving the creative process along the way."*)
- **Must** include a call-to-action button linking to LinkedIn or a contact section

### Profile Photo
- **Must** include a professional headshot
- Photo will be stored locally in the `images/` folder of the repository

### Bio
- **Must** include: University of Iowa, Tippie College of Business, BBA in Business Analytics and Information Systems, graduating December 2026
- **Must** mention GPA (3.81) and Dean's List recognition
- **Must** convey Connor's enthusiasm for creative problem-solving and building data-driven solutions
- **Should** reference his upcoming role at RSM US LLP as a Financial Services Risk Consultant Intern

### Skills
- **Must** include all confirmed technical skills:
  - **Programming:** Python, SQL, HTML, JSON
  - **Technical:** Data Analysis, Risk Assessment, Machine Learning, Microsoft 365
  - **Techniques:** Regression Analysis, Forecasting, Data Visualization, Time-Series Analysis, Correlation Analysis
- **Should** be visually grouped by category for scannability

### Projects
- **Must** feature at least 1 fully described project with title, tools, and outcome:
  - **Spotify Data Analysis** *(Group Project)*
    - Sourced and cleaned a Spotify database; wrote SQL queries to identify top artists across playlists, most common genres, and listening trends; visualized findings and published results to an Oracle webpage
    - Tools: SQL, Oracle, Data Visualization
- **Should** feature 2 additional projects (to be added as Connor completes or identifies them)
- **Must** include tools used and a clear outcome or result for each project featured

### Experience Highlights
- **Should** briefly reference:
  - **Accertify, Inc.** — Fraud Analyst Intern; prevented $200,111.51 in fraudulent activity; won 2025 Intern Fraud Champion award
  - **RSM US LLP** — Incoming Financial Services Risk Consultant Intern (June 2026)
  - **OV Solutions** — Product Analyst
  - **Tippie Technology & Innovation Association** — VP of Marketing

### Contact Section
- **Must** include LinkedIn URL: [linkedin.com/in/connormunz](https://linkedin.com/in/connormunz)
- **Must** include GitHub URL *(to be confirmed and added)*
- **Must** include email: connormunz18@gmail.com
- **Should** include a brief friendly prompt inviting visitors to reach out

---

## 05 — Scope

| In Scope This Week | Out of Scope |
|---|---|
| Hero section with name, tagline, and CTA | Blog or articles section |
| Bio / About section | Dark mode toggle |
| Skills section grouped by category | Animations or scroll effects (beyond basic) |
| Projects section (1 fully detailed + 2 placeholders) | Resume download link |
| Experience highlights | CMS or dynamic content management |
| Contact section with LinkedIn, GitHub, email | Multi-language support |
| Responsive design (mobile + desktop) | Analytics dashboard or visitor tracking setup |
| Deployment to Azure Static Web App with custom domain | Portfolio case study deep-dives |

---

## 06 — Assumptions & Constraints

| Item | Status / Notes |
|---|---|
| Professional headshot | Available — to be placed in `images/` folder |
| GitHub repository | To be created as part of assignment infrastructure setup |
| Replit connected to GitHub | To be configured per assignment instructions |
| Azure Static Web App | To be configured and linked to GitHub repo |
| Custom domain | To be configured and pointed to Azure Static Web App |
| Tech stack | HTML, CSS, JavaScript — no frameworks required |
| Time constraint | Class assignment timeline; page must be complete within the week |
| Budget | Free tier tools only (GitHub, Azure Student, Replit free tier) |
| Skill level | Comfortable with HTML/CSS/SQL; open to guided JS and deployment steps |
| LinkedIn content | LinkedIn profile assumed to match resume content; not scraped directly |

---

> **Next step:** Save this file as `PRD.md` in your GitHub repo root. Then open your `STANDARDS.md` template and use your PRD to fill in Section 1 (Project Overview) and Section 3 (Design Standards). Both files must be in your repository root before your first coding session.
