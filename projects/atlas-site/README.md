# Atlas Lab AI Website

**Professional B2B automation platform website** — Designed and built with modern web technologies and design principles.

---

## 🚀 Stack

- **Framework:** Next.js 16 (App Router) with Turbopack
- **Styling:** Tailwind CSS 4 with custom design system
- **Language:** TypeScript
- **Animations:** CSS animations with smooth transitions
- **Deployment:** Vercel (ready)

---

## ✨ Design Features

### Color System
- **Primary:** Orange-to-amber gradients (`from-orange-500 to-amber-500`)
- **Background:** Neutral zinc palette (`neutral-950`, `neutral-900`)
- **Accents:** Emerald for success, blue/cyan for information, teal for secondary
- **Accessible contrast ratios throughout**

### Typography
- **Font family:** Inter (sans-serif) + JetBrains Mono (code)
- **Hierarchy:**
  - Hero H1: `text-5xl md:text-7xl` (48-72px)
  - Section H2: `text-4xl md:text-5xl` (36-48px)
  - Body: `text-xl` (20px) for headers, `text-neutral-400` (16px) for paragraphs

### Animations & Microinteractions
- **Scroll-triggered:** Fade-in and slide-up animations
- **Hover effects:** Scale, shadow, and border transitions
- **Gradient animations:** `animate-gradient-x` for text gradients
- **Pulse effects:** Trust indicators, hot badges
- **Bounce:** Scroll indicator
- **Ping:** Alert notifications

### CSS Illustrations
- **Geometric patterns:** Hexagonal grid background
- **Gradient orbs:** Animated blur circles for depth
- **Icons:** Emojis with colored backgrounds
- **Shapes:** Rounded cards with gradients

### Responsive Design
- **Mobile-first approach**
- **Breakpoints:** `md:` (768px), `lg:` (1024px)
- **Flexible grids:** `grid-cols-1 md:grid-cols-3 lg:grid-cols-4`
- **Flex layouts:** Horizontal nav, centered hero

---

## 📁 Project Structure

```
atlas-site/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main homepage (hero, stats, services, case studies, results, contact, footer)
│   │   ├── CaseStudies.tsx   # Case study cards with industry icons
│   │   ├── Results.tsx       # Live metrics dashboard
│   │   ├── layout.tsx        # Root layout with metadata
│   │   └── globals.css       # Global styles, animations, theme
│   └── [other pages]
├── next.config.ts            # Next.js config
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript config
└── package.json              # Dependencies
```

---

## 🎨 Sections

### 1. Hero Section
- Full-screen with gradient background and CSS patterns
- Animated badge with pulse indicator
- Gradient headline with `animate-gradient-x`
- Two CTA buttons (primary gradient, secondary neutral)
- Trust indicators (avatars, status)

### 2. Stats Section
- 4-column grid with gradient backgrounds
- Gradient text for numbers (`text-transparent bg-clip-text`)
- Hover effects revealing additional info

### 3. Services Section
- 3-step engine (Scout → Solve → Scale)
- Individual cards with gradient icons
- Feature lists with animated bullets
- "HOT" badge on featured service

### 4. Case Studies Section
- 3 case study cards with industry icons
- Before/after metrics
- Industry-specific color coding
- Hover lift effects

### 5. Results Section
- 4-column dashboard
- Live metrics icons
- Animated counters (client-side)
- Change indicators

### 6. Contact Section
- Centered form card with backdrop blur
- Gradient button
- Form validation focus states

### 7. Footer
- Logo with gradient
- Copyright text
- Navigation links

---

## 🎯 Design Principles Applied

### From New Skills
- **responsive-design-pro:** Mobile-first breakpoints, fluid layouts
- **css-illustration:** Icons, gradients, geometric patterns (no images needed)
- **animation-with-purpose:** Scroll, hover, and pulse animations with clear purpose
- **scroll-driven-animation:** Intersection Observer for reveal animations
- **hover-microinteractions:** Scale, shadow, brightness transitions on interactive elements
- **color-as-language:** Orange/amber for CTAs, emerald for success, neutral for structure

### Visual Hierarchy
- Clear distinction between headings, subheadings, body text, and metadata
- Consistent spacing using Tailwind's scale (p-8, py-32, gap-8, etc.)
- Visual weight through font size, color, and background

### Accessibility
- High contrast ratios (WCAG AA compliant)
- Focus-visible styles
- Semantic HTML (`<main>`, `<nav>`, `<section>`, `<footer>`)
- Screen reader friendly (no `role="button"` on divs)

---

## 🚀 Local Development

```bash
# Install dependencies
cd /Users/atlas/.openclaw/workspace/projects/atlas-site
npm install

# Start dev server (port 3001)
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

**Visit:** http://localhost:3001

---

## 🌐 Deployment

### Vercel (Current)

The site is deployed to Vercel with automatic deployments from GitHub.

**Live URL:** https://atlaslabsai.co

**Build command:** `next build`
**Output directory:** `.next`

### Manual Deploy

```bash
# Build
npm run build

# Deploy to Vercel
vercel --prod
```

---

## 📦 Key Dependencies

```json
{
  "next": "^16.1.6",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "tailwindcss": "^4",
  "typescript": "^5"
}
```

---

## 🎨 Custom CSS Classes

### Animations
- `animate-gradient-x`: Gradient text animation
- `background-pattern`: Hexagonal grid background
- `animate-in fade-in`: Fade-in animations with delays
- `interactive`: Smooth hover transitions

### Custom Colors
- `--gradient-x`: 200% for gradient text width

---

## 🔧 Customization

### Update Brand Colors
Edit `tailwind.config.ts`:
```typescript
theme: {
  extend: {
    colors: {
    orange: {
      500: '#f97316', // Primary accent
    },
    amber: {
      500: '#f59e0b', // Secondary accent
    }
  }
}
}
```

### Update Meta Data
Edit `src/app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "Atlas Lab AI | We Build Systems That Scale",
  description: "Your description here",
};
```

---

## 📝 Future Enhancements

- [ ] Add actual images (hero, case studies, team)
- [ ] Integrate contact form backend
- [ ] Add analytics (Vercel Analytics, Plausible)
- [ ] Internationalization (i18n)
- [ ] Dark/light mode toggle
- [ ] 3D illustrations (Three.js)

---

**Built with ❤️ using modern web standards and design principles**

*Skills Applied: responsive-design-pro, css-illustration, animation-with-purpose, scroll-driven-animation, hover-microinteractions, color-as-language*