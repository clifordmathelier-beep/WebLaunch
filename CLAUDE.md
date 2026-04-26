# CLAUDE.md — One Space Away (WebLaunch)

## Project Overview

**One Space Away** is a static Astro 6 website template for interior designers. It is a single-page site with anchor-nav sections, Swiper carousels, a contact form, and Cloudflare-optimized security headers.

- **Framework:** Astro 6.0 (static output)
- **Package manager:** pnpm
- **Deployment target:** Cloudflare Pages
- **Language:** TypeScript + Astro components
- **Styling:** Vanilla CSS with a custom design-system variable layer (no Tailwind)

---

## Directory Structure

```
src/
├── pages/          # File-based routes (index, 404, 500, 503, legal/[id])
├── components/     # Astro UI components
├── layouts/        # BaseLayout (SEO, CSP) + ErrorLayout
├── styles/         # global.css, _variables.css, _reset.css
├── assets/         # fonts/, images/, socialIcons.ts
├── content/        # legal/ markdown collection (privacy, terms)
├── utils/          # initSwiper.ts
├── consts.ts       # Site metadata & contact info
├── types.ts        # TypeScript types
└── content.config.ts
public/             # Static assets, _headers (Cloudflare CSP/security)
```

---

## Key Files

| File | Purpose |
|------|---------|
| `src/consts.ts` | Site name, contact info, social links, canonical URL |
| `src/styles/_variables.css` | Design tokens: colors, spacing, type scale |
| `astro.config.mjs` | Build config, fonts, CSP directives, integrations |
| `public/_headers` | Cloudflare security headers (CSP, HSTS, etc.) |
| `src/utils/initSwiper.ts` | Factory for Swiper carousel instances |

---

## Common Tasks

### Dev server
```bash
pnpm dev
# runs on http://localhost:4321
```

### Build & preview
```bash
pnpm build
pnpm preview
```

### Add a new page section
1. Create `src/components/NewSection.astro`
2. Import and add it to `src/pages/index.astro`

### Update site metadata
Edit `src/consts.ts` — the `SITE` object is the single source of truth for name, contact, social, and canonical URL.

### Update design tokens
Edit `src/styles/_variables.css` for colors, spacing, and type scale.

### Add/swap fonts
1. Drop `.woff2` into `src/assets/fonts/`
2. Update the `fonts` array in `astro.config.mjs`
3. Update `font-family` in `src/styles/_reset.css`

### Add Cloudinary images
```bash
pnpm add astro-cloudinary
```
Then swap `<Image>` imports for `<CldImage src="your-public-id" ... />`.

---

## Architecture Notes

- **CSP** is configured in `astro.config.mjs` (dev is CSP-free; CSP is injected at build time). The `public/_headers` file is the runtime enforcement layer on Cloudflare.
- **Swiper** is initialized lazily per-component via `initSwiper.ts`. Each carousel component calls `initSwiper(selector, config)` in a `<script>` tag.
- **Content collections** power the `/legal/[id]` dynamic route (privacy + terms markdown).
- **View transitions** are enabled via `<ClientRouter />` in `BaseLayout.astro`.
- Image optimization uses Astro's built-in `<Image>` component (WebP/AVIF) for local assets; Cloudinary is the optional CDN path for hosted video and high-res images.

---

## Style Conventions

- No Tailwind — all styles use CSS custom properties from `_variables.css`.
- BEM-like class naming (no strict enforcement).
- Responsive breakpoints: `64rem` (desktop), `59.375rem` (wide tablet), `48rem` (mobile).
- No comments unless the WHY is non-obvious.

---

## Deployment

**Cloudflare Pages** (primary):
- Push to `main` triggers a build via `pnpm build`.
- Security headers live in `public/_headers`.

**Vercel / Netlify**:
- Move `_headers` rules to `vercel.json` or `netlify.toml`.
- No other changes needed.
