# AGENTS.md

## Project intent

Portfolio website for a mechanical engineer (Kristin). Showcases projects,
background/about, and contact info. Deployed as a free static site on Vercel.

## Tech stack

- **Vite** — build tool / dev server
- **React 19** + **TypeScript** — UI and types
- **React Router (react-router-dom)** — multi-page client-side routing
- **Tailwind CSS v4** (via `@tailwindcss/vite` plugin) — styling, using
  `@theme` in `src/index.css` (no `tailwind.config.js` needed for v4)
- **lucide-react** — icon set
- **framer-motion** — animations (introduced incrementally, not everywhere yet)
- **pnpm** — package manager
- **Vercel** — static hosting/deployment (see `vercel.json` for SPA rewrites)

## Design

- Primary color: white / near-white (`--color-primary*` tokens)
- Accent/secondary color: soft green `#647d5c` (`--color-accent*` tokens)
- Color tokens defined in `src/index.css` under `@theme`

## Structure

- `src/pages/` — route-level pages (Home, Projects, About, Contact)
- `src/components/` — shared UI (Navbar, Footer, Layout, ImagePlaceholder)
- `src/App.tsx` — route definitions
- `src/main.tsx` — app entry, wraps `App` in `BrowserRouter`

## Images

Real images are not yet available. Use `src/components/ImagePlaceholder.tsx`
as a stand-in wherever an image is needed; swap in real assets later without
changing layout code.

## Conventions

- Keep pages simple and content-focused; avoid premature animation — add
  framer-motion transitions incrementally once content/layout is stable.
- Use Tailwind utility classes; prefer the `accent-*` palette for CTAs,
  links, and highlights, and neutral grays for body text.
