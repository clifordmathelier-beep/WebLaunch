# Gemini Agent Context — One Space Away (WebLaunch)

> This file provides context for Google Gemini agents (Gemini CLI, Gemini Code Assist, etc.) working on this project. For Claude Code context see `CLAUDE.md`.

## What This Project Is

**One Space Away** is a static marketing website for an interior design service. It is built with **Astro 6** (static output, no server-side rendering), uses **pnpm**, and deploys to **Cloudflare Pages**.

## Tech Stack at a Glance

| Layer | Choice |
|-------|--------|
| Framework | Astro 6.0 |
| Language | TypeScript + Astro (`.astro` JSX-like syntax) |
| Styling | Vanilla CSS + CSS custom properties |
| Carousel | Swiper.js 11 |
| Images | Astro `<Image>` (local) or Cloudinary CDN (optional) |
| Fonts | Local WOFF2 via Astro font provider |
| Deployment | Cloudflare Pages |
| Package manager | pnpm |

## Repository Layout

```
WebLaunch/
├── src/
│   ├── pages/           # index.astro, 404/500/503, legal/[id].astro
│   ├── components/      # Header, Footer, HeroSection, PortfolioSection,
│   │                    # TestimonialsSection, HowItWorksSection, AboutSection,
│   │                    # FAQ, ContactUsSection, BaseSwiper
│   ├── layouts/         # BaseLayout.astro, ErrorLayout.astro
│   ├── styles/          # global.css, _variables.css, _reset.css
│   ├── assets/          # fonts/, images/, socialIcons.ts
│   ├── content/legal/   # privacy.md, terms.md (content collection)
│   ├── utils/           # initSwiper.ts
│   ├── consts.ts        # SITE metadata object
│   ├── types.ts
│   └── content.config.ts
├── public/
│   ├── _headers         # Cloudflare CSP + security headers
│   ├── favicon.svg
│   ├── og-image.webp
│   └── *.webp           # Static public assets
├── astro.config.mjs     # Build config, CSP, integrations, font provider
├── tsconfig.json        # Strict TS + path aliases (@components/*, etc.)
├── pnpm-lock.yaml
└── package.json
```

## Path Aliases (tsconfig.json)

Use these instead of relative imports:

```ts
@assets/*       → src/assets/*
@components/*   → src/components/*
@layouts/*      → src/layouts/*
@pages/*        → src/pages/*
@styles/*       → src/styles/*
@utils/*        → src/utils/*
@consts         → src/consts.ts
```

## Running Locally

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # production build → dist/
pnpm preview    # preview built site
```

## Site Configuration

All site-wide constants (name, contact, canonical URL, social links) live in `src/consts.ts` as the `SITE` export. Edit there first before touching individual components.

## Design Tokens

`src/styles/_variables.css` is the design system:
- `--color-primary`, `--color-bg`, `--color-text-*` — color palette
- `--text-*` — type scale (xs 14px → xxl 64px)
- `--spacing-*` — 16px-unit spacing scale
- `--transition-*`, `--shadow-*`, `--radius-*`

## Content Security Policy

CSP is **build-time only** (Astro injects it at build; dev server has no CSP). The runtime CSP for Cloudflare is in `public/_headers`. If you add a new external resource (CDN, font, embed), update both:
1. The `security.csp.directives` array in `astro.config.mjs`
2. The corresponding header line in `public/_headers`

## Swiper Carousel Pattern

```ts
// src/utils/initSwiper.ts
import { initSwiper } from '@utils/initSwiper';
initSwiper('.my-swiper', { loop: true, speed: 700 });
```

Each carousel component calls this in a `<script>` tag scoped to that component.

## Gemini-Specific Notes

- `.astro` files mix HTML, CSS (`<style>`), and TypeScript (`<script>`). The frontmatter fence (`---`) is TypeScript executed at build time; everything below is the template.
- Astro components are **not** React. There is no virtual DOM, hooks, or JSX runtime. Props are passed via `Astro.props`.
- `content.config.ts` defines the schema for the `legal` content collection — required fields are `title` (string) and `lastUpdated` (string).
- The `<ClientRouter />` in `BaseLayout.astro` enables Astro's View Transitions API for page navigation.
