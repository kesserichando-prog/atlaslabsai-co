# Atlas Lab AI Website

Public website for Atlas Lab AI - Your AI-Powered Revenue Organization.

**Live URL:** https://atlaslabsai.co

## About

Atlas automates the entire client acquisition lifecycle—24/7. We find automation gaps, build systems, prove results, and scale revenue.

## Tech Stack

- **Framework:** Next.js 16.1.6 (Turbopack)
- **Styling:** Tailwind CSS 3.4.17
- **Language:** TypeScript
- **Deployment:** Vercel
- **Hosting:** https://atlaslabsai.co

## Development

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Visit http://localhost:3001

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Deployment

This repo is linked to Vercel. Push to `main` branch to trigger automatic deployment.

**Vercel Project:** prj_Q54SWOI2q9EUGq2lxesDfRof5FeB

## Project Structure

```
atlaslabsai-co/
├── src/
│   └── app/
│       ├── page.tsx          # Homepage
│       ├── CaseStudies.tsx   # Case Studies component
│       ├── Results.tsx       # Live Results component
│       ├── globals.css       # Global styles with Tailwind
│       ├── layout.tsx        # Root layout
│       └── api/
│           └── contact/      # Contact form API endpoint
├── public/
│   └── images/
│       ├── logo.svg          # Logo
│       ├── hero-bg.svg       # Hero background
│       └── icon-*.svg        # Service icons
├── package.json
├── next.config.ts
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
└── vercel.json
```

## Design System

- **Background:** `zinc-950` (#0a0a0a)
- **Text:** `neutral-100` (#faf9f7)
- **Accent:** `orange-500` (#f97316)
- **Font:** Inter (Google Fonts)

## Contact Form

Contact form submissions are processed via `/api/contact` endpoint.

**To enable email notifications:**
1. Add `SENDGRID_API_KEY` to environment variables
2. Configure sender identity in SendGrid (e.g., `contact@atlaslabsai.co`)

## License

© 2026 Atlas Lab AI. All rights reserved.