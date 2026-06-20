# Afterglow

A scroll-driven photo gallery built with React, Lenis, and GSAP. Images drift and dissolve as you move through the page — smooth scrolling meets cinematic motion.

## Description

**Afterglow** is an interactive gallery experience where scroll is the primary input. A warm, amber-toned grid of photographs responds to your movement: each image drifts horizontally and scales away as it leaves the viewport, creating a sense of depth and flow.

The project pairs [Lenis](https://github.com/darkroomengineering/lenis) for buttery-smooth scrolling with [GSAP ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) for scroll-linked animations, all wrapped in a modern React + Vite stack.

## Features

- **Smooth scrolling** — Lenis handles inertial, frame-synced scroll via the GSAP ticker
- **Scroll-scrubbed animations** — images scale and translate in sync with scroll position
- **CSS grid layout** — custom row/column placement
- **Data-driven gallery** — image positions defined in a single config file

## Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Lenis](https://github.com/darkroomengineering/lenis) — smooth scroll
- [GSAP](https://gsap.com/) + [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) + [@gsap/react](https://gsap.com/docs/v3/HelperFunctions/helpers/react)

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Project Structure

```
src/
├── App.tsx              # Lenis setup + page layout
├── main.tsx             # React entry point
├── index.css            # Tailwind + grid positioning styles
├── components/
│   ├── Gallery.tsx      # GSAP scroll animations
│   ├── Image.tsx        # Single grid item
│   └── Footer.tsx       # Closing section
└── data/
    └── gallery.ts       # Image sources and grid positions

public/
└── assets/img/          # Gallery images (.webp)
```

## How It Works

1. **Lenis** wraps the app and provides smooth scroll. Its `raf` loop is driven by GSAP's ticker so scroll and animations stay in sync.
2. **Gallery** uses `useGSAP` to attach ScrollTrigger animations to each `.grid__item`:
   - Random horizontal drift (`xPercent`) as items enter and exit the viewport
   - Scale-to-zero shrink tied to scroll, with transform origin set based on drift direction
3. **Image** components receive `row` and `col` props, mapped to CSS custom properties that position each item in the grid.

## Customization

- **Add or rearrange images** — edit `src/data/gallery.ts`
- **Change animation behavior** — tweak ScrollTrigger values in `src/components/Gallery.tsx`
- **Adjust scroll feel** — pass options to `<ReactLenis>` in `src/App.tsx` (e.g. `lerp`, `duration`, `smoothWheel`)

## License

Private project.
