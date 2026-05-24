---
name: Cibuyy Portfolio
colors:
  surface: '#fdf8f8'
  surface-dim: '#ddd9d8'
  surface-bright: '#fdf8f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3f2'
  surface-container: '#f1edec'
  surface-container-high: '#ebe7e6'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#444748'
  inverse-surface: '#313030'
  inverse-on-surface: '#f4f0ef'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#545f72'
  on-secondary: '#ffffff'
  secondary-container: '#d5e0f7'
  on-secondary-container: '#586377'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1c1b1a'
  on-tertiary-container: '#868382'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#d8e3fa'
  secondary-fixed-dim: '#bcc7dd'
  on-secondary-fixed: '#111c2c'
  on-secondary-fixed-variant: '#3c475a'
  tertiary-fixed: '#e6e2df'
  tertiary-fixed-dim: '#cac6c4'
  on-tertiary-fixed: '#1c1b1a'
  on-tertiary-fixed-variant: '#484645'
  background: '#fdf8f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.7'
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.1em
spacing:
  unit: 8px
  margin-page: 40px
  margin-page-mobile: 20px
  gutter: 24px
  section-gap: 120px
---

## Brand & Style
The design system is rooted in **Minimalism** with an **Editorial** soul. It prioritizes clarity, whitespace, and a high degree of "breathing room" to let the work speak for itself. The brand personality is calm, human, and deliberate, moving away from the cold efficiency of corporate SaaS or the hyperactivity of modern tech trends.

The goal is to evoke the feeling of a high-end physical monograph or an art gallery catalog. This is achieved through a restrained color palette, crisp borders, and a stark contrast between classic serif and modern sans-serif typography. Interactions should feel intentional and quiet—no aggressive transitions or heavy shadows.

## Colors
The palette is intentionally limited to maintain a focused, editorial atmosphere. 

- **Background (#F9F9F8):** A soft, warm off-white that reduces eye strain and feels more organic than pure white.
- **Primary / Text (#1A1A1A):** A deep charcoal used for the majority of text and structural lines.
- **Accent (#4A5568):** A muted slate blue used sparingly for interactive cues, links, or subtle highlights.
- **Borders (#E2E2E1):** A light gray used for the thin, 1px rules that define sections without adding visual weight.

## Typography
The typographic system relies on a "Serif for Voice, Sans for Function" hierarchy.

- **Headlines:** Playfair Display provides a sophisticated, literary character. Large display sizes should use a tighter letter-spacing to emphasize the elegance of the letterforms.
- **Body:** Inter is used for its exceptional readability and neutral stance, ensuring that long-form descriptions are easy to digest.
- **Labels:** Use the `label-caps` style for section headers, breadcrumbs, or small metadata. The increased letter spacing and uppercase styling provide a clear visual distinction from body text.

## Layout & Spacing
This design system utilizes a **Fixed Grid** on desktop (max-width 1200px) and a **Fluid Grid** on mobile devices. 

- **The 8px Rhythm:** All spacing should be a multiple of 8px. 
- **Whitespace:** Use generous vertical spacing (`section-gap`) to separate major content blocks. This creates a sense of "pacing" similar to turning pages in a book.
- **Margins:** Desktop margins are set at 40px, scaling down to 20px on mobile to maximize screen real estate for content.
- **Alignment:** Prefer left-aligned text for readability, using the 12-column grid to create asymmetrical layouts that feel more editorial and less like a standard website template.

## Elevation & Depth
This design system avoids physical depth metaphors like shadows or blurs. 

- **Tonal Layers:** Depth is communicated strictly through color and layout. Elements "hovering" over the background are not used. Instead, use thin `1px solid #E2E2E1` borders to define containers.
- **No Shadows:** Shadows are entirely omitted to maintain a flat, printed-paper aesthetic.
- **Visual Hierarchy:** Hierarchy is established through scale (typography size) and density (amount of whitespace) rather than elevation.

## Shapes
The shape language is strictly **Sharp (0px)**. 

Every element, from buttons to image containers and input fields, must have square corners. This reinforces the professional, editorial feel and aligns with the structural grid lines used throughout the layout. Circles are only permitted for icons or specific decorative elements (like a small status indicator), but never for structural UI containers.

## Components
Consistent styling for core elements:

- **Buttons:** Rectangular with a 1px solid border of the primary color. No background fill by default. On hover, the background fills with the primary color and text flips to the background color. Transition should be a subtle `0.2s ease-out`.
- **Project Cards:** Defined by a single 1px top border and significant bottom padding. Images within cards should have no border, but should be slightly desaturated, returning to full color on hover.
- **Input Fields:** Simple bottom-border only (`1px solid #E2E2E1`). On focus, the border color changes to the accent color. Labels use the `label-caps` style.
- **Lists:** Unordered lists should use small, square bullets or simple dashes.
- **Navigation:** Text-based only. Use the `label-caps` typography for nav items. The active state is indicated by a simple underline.
- **Dividers:** Horizontal rules should be `1px solid #E2E2E1` and used sparingly to separate logical sections of a page.