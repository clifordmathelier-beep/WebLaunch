---
name: Vista Psychologist Design System
colors:
  surface: '#fff8f6'
  surface-dim: '#e4d7d4'
  surface-bright: '#fff8f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fef1ed'
  surface-container: '#f8ebe8'
  surface-container-high: '#f3e5e2'
  surface-container-highest: '#ede0dd'
  on-surface: '#201a18'
  on-surface-variant: '#53433f'
  inverse-surface: '#362f2d'
  inverse-on-surface: '#fbeeeb'
  outline: '#85736e'
  outline-variant: '#d8c2bc'
  surface-tint: '#8b4e3c'
  primary: '#8b4e3c'
  on-primary: '#ffffff'
  primary-container: '#f5a791'
  on-primary-container: '#733a2a'
  inverse-primary: '#ffb5a0'
  secondary: '#6f5d13'
  on-secondary: '#ffffff'
  secondary-container: '#fbe18a'
  on-secondary-container: '#766319'
  tertiary: '#1e6960'
  on-tertiary: '#ffffff'
  tertiary-container: '#81c7bc'
  on-tertiary-container: '#00544c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbd1'
  primary-fixed-dim: '#ffb5a0'
  on-primary-fixed: '#380d03'
  on-primary-fixed-variant: '#6e3727'
  secondary-fixed: '#fbe18a'
  secondary-fixed-dim: '#dec571'
  on-secondary-fixed: '#231b00'
  on-secondary-fixed-variant: '#554500'
  tertiary-fixed: '#a9f0e4'
  tertiary-fixed-dim: '#8dd3c8'
  on-tertiary-fixed: '#00201c'
  on-tertiary-fixed-variant: '#005048'
  background: '#fff8f6'
  on-background: '#201a18'
  surface-variant: '#ede0dd'
  vista-coral: '#F5A791'
  vista-yellow: '#FCE28B'
  vista-lavender: '#B6A7C0'
  vista-aqua: '#93D1C8'
  vista-blue: '#7795B1'
  vista-beige: '#EBE1CA'
typography:
  h1:
    fontFamily: Newsreader
    fontSize: 3.5rem
    fontWeight: '600'
    lineHeight: '1.2'
  h2:
    fontFamily: Newsreader
    fontSize: 2.25rem
    fontWeight: '400'
    lineHeight: '1.3'
  h3:
    fontFamily: Newsreader
    fontSize: 1.75rem
    fontWeight: '400'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Manrope
    fontSize: 1.125rem
    fontWeight: '300'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.6'
  button:
    fontFamily: Manrope
    fontSize: 0.875rem
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.025em
  label:
    fontFamily: Manrope
    fontSize: 0.75rem
    fontWeight: '500'
    lineHeight: '1'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  xs: 0.5rem
  sm: 1rem
  md: 2rem
  lg: 3rem
  xl: 6rem
  section: 8rem
---

# Psychologist Website Design System (Astro.js Optimized)

## Brand Persona: "Vista"
**Keywords:** Calm, Reflection, Healing, Transition, Professional, Warm.

---

## Color Palette (Astro.js / Tailwind Config)

The palette is inspired by a soft sunset ("Vista"). Use these hex codes in your `tailwind.config.mjs`.

| Token | Hex | Visual Description | Usage |
| :--- | :--- | :--- | :--- |
| `primary-coral` | `#F5A791` | Warm, muted pinkish-orange. | Hero buttons, accent icons, "Hope" elements. |
| `secondary-yellow` | `#FCE28B` | Pale, soft yellow. | Subtle highlights, "Sunlight" accents in illustrations. |
| `accent-lavender` | `#B6A7C0` | Soft, greyed-purple. | Borders, secondary backgrounds, transitional elements. |
| `surface-aqua` | `#93D1C8` | Gentle, pale blue-green. | Section backgrounds, calming blocks. |
| `depth-blue` | `#7795B1` | Muted, grey-blue. | Text (primary), footers, deep water shadows. |
| `base-beige` | `#EBE1CA` | Warm, sandy tan. | Page background, card backgrounds. |

---

## Typography (Google Fonts)

For Astro, import these in your layout component.

- **Primary Heading (Serif):** *Playfair Display*
  - Weights: 400 (Body Headings), 600 (Main Hero)
  - Purpose: Conveys authority, empathy, and classic professionalism.
- **Body & UI (Sans-Serif):** *Montserrat* or *Inter*
  - Weights: 300 (Light Body), 400 (Regular), 500 (Medium/Buttons)
  - Purpose: Modern, clean, and highly readable.

---

## Astro Component Guidelines

### 1. Hero Section (`Hero.astro`)
- **Background:** Soft gradient from `base-beige` to `surface-aqua`.
- **Imagery:** Use high-quality, blurred nature photography (ocean/horizon) to evoke the "Vista" feel.
- **CTA:** Large button in `primary-coral` with `depth-blue` text.

### 2. Service Cards (`ServiceCard.astro`)
- **Layout:** Subtle borders using `accent-lavender`.
- **Background:** `base-beige` with a slight 0.5 opacity white overlay on hover.
- **Icons:** Line-art icons in `depth-blue`.

### 3. Contact Form (`Contact.astro`)
- **Inputs:** `base-beige` background with `accent-lavender` focus rings.
- **Button:** `primary-coral` with a subtle lift shadow on hover.

---

## Interaction & Accessibility
- **Transitions:** Use `transition: all 0.3s ease-in-out` for a calm, non-jarring experience.
- **Contrast:** Ensure all text in `depth-blue` on `base-beige` meets WCAG AA standards.
- **Spacing:** Generous whitespace (using Tailwind's `p-8`, `p-12`, `p-24`) to give the content "room to breathe," mirroring the open horizon of the Vista palette.

---

## Tailwind Configuration Snippet
```js
// tailwind.config.mjs
export default {
  theme: {
    extend: {
      colors: {
        vista: {
          coral: '#F5A791',
          yellow: '#FCE28B',
          lavender: '#B6A7C0',
          aqua: '#93D1C8',
          blue: '#7795B1',
          beige: '#EBE1CA',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      }
    }
  }
}
```
