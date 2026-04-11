# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn dev        # Start development server
yarn build      # Production build
yarn start      # Start production server
yarn lint       # Run ESLint (also runs automatically on pre-commit via Husky)
```

There is no test suite — only linting.

## Architecture

Single-page Next.js 15 portfolio site with bilingual support (EN/IT). All content lives on one route (`/`).

### Content is data-driven from one file

`/contents/home.js` exports a `sectionsItems` array — the single source of truth for all skills, projects, jobs, and certifications. To add or change displayed content, edit this file only.

### Component hierarchy

```
pages/index.js
  └── Hero          — name, tagline
  └── Sections      — maps sectionsItems → Section components
        └── Section — labelled section with horizontal-scroll card row
              └── TopicCard[]  — individual skill/project/job card
                    └── TopicIcon  — icon registry (SVG assets + react-feather)
  └── Contacts      — email, CV, social links
  └── Footer
```

### Design system

**Two-tone panna palette** — all colours defined in `tailwind.config.js`:

| Token           | Hex       | Use                        |
|-----------------|-----------|----------------------------|
| `panna`         | `#FAF8F3` | Page background            |
| `panna-2`       | `#F0EAE0` | Card background            |
| `panna-border`  | `#DDD4C8` | Borders, dividers          |
| `ink`           | `#3A2E25` | Primary text               |
| `ink-muted`     | `#8A7D72` | Secondary text, icons      |

Flat 2D design — no gradients, no animations, no shadows beyond the border.

### Key patterns

- **No API/database** — all data is static JS objects.
- **Styling**: Tailwind utility classes only. No CSS modules.
- **No animations**: framer-motion, Spline, and frame-based PNG animations have been removed.
- **State**: Local `useState` only — no Context, Redux, or Zustand.
- **Icons**: SVG files in `/assets/` are imported as React components via `@svgr/webpack`. `react-feather` icons cover GitHub, Mail, etc. Both are registered in `TopicIcon.js`.
- **i18n**: `next-translate` with `useTranslation('index')` hook. Translation keys live in `/locales/en/index.json` and `/locales/it/index.json`.

### Adding a new icon

1. Place the `.svg` in `/assets/`
2. Import it in `components/TopicIcon.js` and add an entry to the `icons` map.

SVG files are transformed into React components by `@svgr/webpack` (configured in `next.config.js`), so `import MyIcon from '../assets/myicon.svg'` renders as `<MyIcon className="..." />`.
