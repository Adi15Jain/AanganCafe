# ☕ Aangan Café

> **"Where every sip feels like home."**
>
> A nostalgic-modern Indian neighbourhood courtyard café in Faridabad — built as a premium, fully responsive frontend web experience.

---

## Brand Concept & Personality

**Aangan** (आँगन) means _courtyard_ in Hindi — that open, sun-dappled space at the heart of traditional Indian homes where family gathers, chai is poured, and stories are told. The brand is:

| Trait                        | Expression                                                               |
| ---------------------------- | ------------------------------------------------------------------------ |
| **Warm & Familiar**          | Copy written in first person, uses words like "Amma Ji", "ghar ka khana" |
| **Premium, not pretentious** | Dark glassmorphic UI with orange warmth — aspirational but never cold    |
| **Heritage-forward**         | Playfair Display serif headings; hand-crafted feel throughout            |
| **Community-rooted**         | Real Faridabad address, local milestones, neighbourhood personality      |

The café was founded in 2020 with 5 tables and Amma Ji's family recipes. By 2024 it had served 50,000+ guests and won Faridabad's Best Café award.

---

## Tech Stack

| Layer         | Technology                                                          |
| ------------- | ------------------------------------------------------------------- |
| Framework     | **React 18** + **TypeScript**                                       |
| Build tool    | **Vite 6**                                                          |
| Styling       | **Tailwind CSS v4** (via `@import "tailwindcss"`)                   |
| Routing       | **React Router v7**                                                 |
| Animation     | **Framer Motion v11**                                               |
| 3D / Canvas   | **React Three Fiber** + **@react-three/drei** + **Three.js**        |
| 3D Tilt cards | **react-parallax-tilt**                                             |
| Icons         | **Lucide React**                                                    |
| SEO           | **react-helmet-async**                                              |
| Fonts         | **Playfair Display** (headings) + **Inter** (body) via Google Fonts |

---

## Getting Started

### Prerequisites

- **Node.js ≥ 18** (`node -v` to check)
- **npm ≥ 9** (`npm -v` to check)

### Setup & Run

```bash
# 1. Clone the repository
git clone https://github.com/Adi15Jain/AanganCafe.git
cd AanganCafe

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open **http://localhost:5173** in your browser.

### Build for Production

```bash
npm run build     # Outputs to /dist
npm run preview   # Preview the production build locally
```

### Type Check

```bash
npx tsc --noEmit  # Zero errors expected
```

---

## Project Structure

```
src/
├── components/
│   ├── CanvasBackground.tsx   # Three.js animated particle field
│   ├── Footer.tsx
│   ├── MenuCard.tsx           # 3D tilt menu item card
│   ├── Navbar.tsx             # Fixed nav with reading progress bar
│   ├── PageMeta.tsx           # Per-page SEO (react-helmet-async)
│   └── SectionHeading.tsx
├── data/
│   ├── menuData.ts            # All menu categories & items
│   └── siteData.ts            # ← Single source of truth for ALL site content
├── pages/
│   ├── Home.tsx
│   ├── Menu.tsx               # Live search + category tabs with count badges
│   ├── About.tsx
│   ├── Contact.tsx            # Form submits via mailto: link
│   └── NotFound.tsx           # Branded 404 page
├── App.tsx                    # Routes + AnimatePresence page transitions
├── main.tsx                   # HelmetProvider root
└── index.css                  # Tailwind v4 theme tokens + global styles
```

> **Data-driven architecture:** All website content (text, links, images, hours, team, testimonials, menu) lives in `src/data/siteData.ts` and `src/data/menuData.ts`. Pages and components contain only layout and rendering logic. To update content, **edit these two files only**.

---

## Design Decisions

### Colour Palette

| Token                  | Hex       | Usage                                       |
| ---------------------- | --------- | ------------------------------------------- |
| `--color-primary`      | `#ff6b35` | Brand orange — CTAs, active states, accents |
| `--color-primary-dark` | `#e55a2b` | Gradient deepener, hover states             |
| `--color-accent`       | `#14b8a6` | Teal — secondary highlights, tags           |
| `--color-highlight`    | `#fbbf24` | Amber — awards, stars, steam                |
| `--color-bg`           | `#0c0e13` | Near-black canvas background                |
| `--color-bg-card`      | `#161920` | Glass card base                             |

**Rationale:** The orange (`#ff6b35`) is warm and appetising — the hue of tandoor flame and masala — without being aggressive. Paired against near-black it creates high contrast without the harshness of pure white. Teal provides a cooling, modern counterpoint. The amber echoes jaggery and saffron.

### Typography

- **Playfair Display** (serif, variable weight 400–700): Used exclusively for headings. Evokes the handwritten menus, heritage notices, and warm nostalgia of old Indian cafés. The italic variant adds elegance.
- **Inter** (sans-serif, variable 300–700): Used for all body text. Clean, highly legible at small sizes on mobile, and at `font-weight: 300` base it gives a refined, airy feel against the dark background.

### Animation Philosophy

- All heading text uses a **3D word-flip** entrance (`rotateX: 80 → 0, y: 40 → 0`) at `0.9s` with a `[0.16, 1, 0.3, 1]` spring-like ease — slow enough to feel soothing, not sluggish.
- `prefers-reduced-motion` is globally respected via CSS.
- Three.js canvas background is throttled on mobile (reduced particle count, no continuous render loop) to protect battery/CPU.
- Tilt effects on `MenuCard` are disabled on mobile (`window.innerWidth < 768`).

### Layout

- **Mobile-first** breakpoints throughout (`sm:`, `lg:` as progressive enhancements).
- `clamp()` for fluid typography so type scales naturally between 375px and 1440px.
- `svh` units for hero sections to handle mobile browser chrome correctly.
- Horizontal overflow locked at `html`, `body`, and `#root` levels.

---

## Pages

| Route      | Page      | Key Features                                                                     |
| ---------- | --------- | -------------------------------------------------------------------------------- |
| `/`        | Home      | Hero with 3D canvas, achievement bar, rotating specials, testimonials, map embed |
| `/menu`    | Menu      | Live search across all categories, count badges per tab, dietary guide           |
| `/about`   | Our Story | Milestone timeline, team cards, core values, parallax hero                       |
| `/contact` | Contact   | `mailto:` form submit, interactive Google Maps embed                             |
| `/*`       | 404       | Branded not-found page with Back to Home CTA                                     |

---

## Assumptions

1. **No backend required** — This is a pure frontend showcase. The contact form uses `mailto:` to open the user's email client; no server-side handling exists.
2. **Unsplash images** — All food photography sourced from Unsplash (free tier). Images are referenced by URL and require an active internet connection; they are not bundled locally.
3. **Google Maps embed** — The map iframe uses a coordinate-based embed URL that works without a Google Maps API key. If Google changes this policy, the map may stop rendering (the "Open in Maps" link will still work).
4. **Google Fonts** — Loaded via CDN in `index.css`. Requires internet connection; offline use will fall back to Georgia (headings) and system-ui (body).
5. **Dummy contact details** — Phone (`+91 98765 43210`) and email (`hello@aangancafe.in`) are placeholder values. The WhatsApp and call links are functional in format but point to a non-existent number.
6. **Faridabad address** — The address and Google Maps pin point to Hudda Market, Sector 21C, Faridabad as specified. This is treated as the real-world location of the café for the purpose of this project.

---

## Known Limitations

1. **No backend / CMS** — Reservations, contact form data, and dynamic menu changes all require manual code edits to `siteData.ts` / `menuData.ts`. Production deployment would benefit from a headless CMS (e.g. Sanity, Contentful).
2. **Three.js on low-end devices** — The canvas background (`CanvasBackground.tsx`) is already throttled on mobile, but very low-end Android devices may still experience frame drops. The `prefers-reduced-motion` query disables it entirely on accessibility-configured devices.
3. **Google Maps embed CSP** — Some corporate or locked-down networks block `maps.google.com` iframes via Content Security Policy. The map will not load in those environments; the "Open in Maps →" link remains functional.
4. **No image optimisation** — Images are loaded from Unsplash CDN at fixed sizes. A production build would benefit from `<picture>` / `srcset` or a service like Cloudinary/Imgix for responsive image delivery and WebP conversion.
5. **SEO — dynamic meta only** — `react-helmet-async` injects meta tags client-side. Server-side rendering (SSR) or static generation (SSG) via a framework like Next.js would be needed for search engine indexability of dynamic content.
6. **Single language (English)** — No i18n support. A Hindi-language version would significantly improve accessibility for Faridabad's primary demographic.

---

## Local Dev Notes

- `vite.config.ts` has `allowedHosts: true` — allows ngrok or any tunnel for on-device mobile testing without CORS issues.
- `position: relative` on `#root` is required to silence framer-motion's layout projection warning; do not remove it.
- The `siteData.ts` file is fully typed with TypeScript interfaces — your editor will autocomplete all content fields.

---
