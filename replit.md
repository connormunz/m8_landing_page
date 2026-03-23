# Connor Munz — Personal Landing Page

Personal professional landing page for Connor Munz (BAIS:3300, Module 8 assignment). Targets recruiters and hiring managers at financial services firms and consulting shops in Chicago.

## Project Structure

```
/
├── index.html          — Single-page site (all sections)
├── PRD.md              — Product requirements document
├── STANDARDS.md        — Technical and design standards (source of truth)
├── css/
│   └── stylesheet.css  — All styles (no inline styles anywhere)
├── js/
│   └── scripts.js      — Smooth scroll with sticky nav offset
└── images/
    └── headshot.jpeg   — Professional headshot
```

## Tech Stack

- Plain HTML5 / CSS3 / JavaScript (no frameworks)
- Bootstrap 5.3 via CDN
- Bootstrap Icons via CDN
- Google Fonts: Inter

## Design Standards (from STANDARDS.md)

| Role | Hex |
|---|---|
| Background | `#F8F9FA` |
| Primary text | `#212529` |
| Teal accent | `#0D6E6E` |
| Navy | `#0A2342` |
| Secondary bg | `#E9ECEF` |
| White | `#FFFFFF` |

- Max content width: 800px
- Section padding: 60px top/bottom
- Alternating white/secondary section backgrounds
- Fully responsive (320px+)

## Sections

Hero → About → Skills → Projects → Experience → Contact → Footer

## Development

Served via Python's built-in HTTP server on port 5000.

**Workflow:** `Start application` — `python3 -m http.server 5000 --bind 0.0.0.0`

## Deployment

Configured as a static site (public directory: `.`).
