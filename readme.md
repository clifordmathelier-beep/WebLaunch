# Multi Clarity - Parenting Support Portal

**Multi Clarity** is a professional parent-support and consultation portal based in Orlando, Florida. It is built with a serene, modern "beach vibes" aesthetic.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- [pnpm](https://pnpm.io/) (recommended) — install with `npm install -g pnpm`

### Clean Install

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd WebLaunch

# 2. Install dependencies
pnpm install

# 3. Start the development server
pnpm dev
```

The site will be available at **<http://localhost:4321>**.

### Build for Production

```bash
pnpm build      # Outputs to dist/
pnpm preview    # Preview the built site locally
```

> **Note:** Astro's Content Security Policy (CSP) is only active in the production build, not the dev server. Run `pnpm build && pnpm preview` to test CSP behaviour.

<img width="1910" height="915" alt="PageSpeed Insights" src="https://github.com/user-attachments/assets/8b3bd9cf-6e91-4624-bda5-aa5cf71e950b" />

**Features**

- Astro 6.0 Ready:
  - Native Font Optimization
  - Pre-configured CSP (Content Security Policy) and security headers (optimized for Cloudflare, easily adaptable for Vercel or Netlify).
    <img width="1910" height="915" alt="HTTP Observatory" src="https://github.com/user-attachments/assets/4a38f8c3-c851-4239-a0b5-73f80fe8be57" />
- Responsive: mobile, tablet, and desktop devices.
- Stack: Astro (HTML, CSS, and JS) with minimal dependencies.

## Deployment

You will find a `_headers `file located in the `/public` folder. This file handles the Content Security Policy (CSP) and XSS protections mainly for Cloudflare.

If you are deploying to Vercel or Netlify, simply move these rules to a `vercel.json` or `netlify.toml` file respectively.

## Media & Image Optimization

### Local Optimization (Default)

By default, the template uses Astro’s built-in `<Image />` component for automatic optimization (WebP/AVIF conversion, resizing).

```astro
import consultationImage from '/src/assets/images/consultation.jpg';

<div class="process-step-image-wrapper">
   <Image
     src={consultationImage}
     alt="Interior Design Consultation"
     class="media"
   />
</div>
```

### Cloudinary Integration (Optional)

For top-tier loading speeds and high-resolution assets, you can easily swap to [Astro-Cloudinary](https://docs.astro.build/en/guides/media/cloudinary/).

```
pnpm add astro-cloudinary
```

```astro
import { CldImage } from 'astro-cloudinary';

<CldImage
  src="your-public-id"
  width="800"
  height="600"
  alt="Project Transformation"
/>
```

## Fonts & Theming

The site uses a serene "beach vibes" color palette configured in `src/styles/_variables.css`.

Typography is powered by Google Fonts:
- **Newsreader** (Serif) for headings to provide an elegant, established feel.
- **Manrope** (Sans-Serif) for body text and buttons for clean readability.

These fonts are loaded securely via `src/layouts/BaseLayout.astro`, and the Astro Content Security Policy in `astro.config.mjs` is configured to whitelist `https://fonts.googleapis.com`.

## Technical Details

Carousels: Powered by **Swiper.js.** Initialization logic is in `utils/initSwiper.ts`.
