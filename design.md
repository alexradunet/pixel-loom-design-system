---
name: Pixel Loom · Design System
description: A woven aesthetic for local-first computing, inspired by Romanian scoarță
palettes:
  - linen    # warm — alexradu.net (light + dark in one file)
  - indigo   # cool — nazar.studio (light + dark in one file)
---

## Brand & Style

Pixel Loom blends the ancient tactile heritage of Romanian woven carpets (*scoarță*) with the precision of local-first computing. Each palette has a single dominant "thread color"—Madder Red in **Linen**, Indigo Dye in **Indigo**—while keeping the same secondary accents (ochre, warm peach) so the sites feel like a family. Each palette ships with both **light** and **dark** modes in a single file.

The aesthetic is a sophisticated fusion of **Minimalism** and **Tactile Pixel-Art**. It avoids the sterility of modern cloud interfaces in favor of grounded foundations and rhythmic structural elements. The UI feels constructed rather than rendered, using subtle pixel-level motifs on dividers and borders to simulate the "stitch" of a loom. It is designed for operators who value transparency, clarity, and the beauty of visible craftsmanship in their digital tools — in any lighting environment.

## Palettes

### Linen — `tokens/linen.css`

**Light** — The sun-drenched atelier. Bleached wool foundation, Madder Red as primary thread, ochre and teal as accents.
- Foundation: `#fff8f6` warm bleached wool
- Primary: Madder Red `#983f20`
- Secondary: Ochre `#775a03` / fixed-dim `#e9c267`
- Tertiary: Teal `#00656b`

**Dark** — The midnight workshop. Deep dyed-wool foundation, warm peach (desaturated madder) thread, ochre and teal kept brighter for low-light legibility.
- Foundation: `#1a110f` deep dyed wool
- Primary: Warm Peach `#ffb59d`
- Primary container: `#b85736` (full madder from Light)
- Secondary: Ochre `#e9c267` *(kept bright)*
- Tertiary: Teal `#76d5dc` *(kept bright)*

### Indigo — `tokens/indigo.css`

**Light** — The northern atelier. Cool bleached cotton foundation, Indigo Dye as primary thread, with **ochre and madder kept** from Linen as accents.
- Foundation: `#f4f6fb` cool bleached cotton
- Primary: Indigo Dye `#1e3a8a`
- Secondary: Ochre `#7a6310` *(family resemblance)*
- Tertiary: Madder Red `#8a2c1b` *(family resemblance)*

**Dark** — The midnight harbour. Deep navy foundation, lifted indigo thread, ochre and warm peach kept bright as accents (warm peach = the dark form of madder, so the family resemblance carries through dark mode too).
- Foundation: `#0f1729` deep navy
- Primary: Lifted Indigo `#a8c0f0`
- Primary container: `#1e3a8a` (full indigo from Light)
- Secondary: Ochre `#e9c267` *(kept bright)*
- Tertiary: Warm Peach `#ffb59d` *(family resemblance with Linen Dark)*

## Mode-switching mechanics

Each palette file defines tokens three times:

```css
:root {
  /* light tokens — default */
}
:root.theme-dark {
  /* dark tokens — manual override */
}
@media (prefers-color-scheme: dark) {
  :root:not(.theme-light) {
    /* dark tokens — system preference, unless user picked light */
  }
}
```

This yields three behaviors:

1. **First visit, no class on `<html>`:** the page follows the user's system preference automatically.
2. **User clicks the toggle button:** `.theme-dark` or `.theme-light` is added to `<html>` and persisted to `localStorage`. The system preference is overridden until cleared.
3. **`PixelLoom.setTheme(null)`:** clears the manual override, returns to system-following.

The duplication of dark tokens between the explicit-override block and the media-query block is intentional — pure CSS cannot deduplicate them without preprocessor steps, and the cost is paid only once per page load.

## Typography (shared across palettes & modes)

The typography strategy balances editorial elegance with technical precision.

- **Headings** — Newsreader (literary serif, weights 500/600). Authoritative, like a physical ledger or an ancestral loom's pattern book.
- **Interface** — Work Sans (grounded grotesque, weights 400/500). Swiss-inspired, highly legible.
- **Data, logs, metadata** — JetBrains Mono (weights 400/500). Technical "woven" rhythm for small-scale text.

All three fonts are self-hosted as `woff2` (latin + latin-ext subsets for Romanian glyphs).

## Layout & Spacing

A **Fixed Grid** philosophy that mimics the rigid yet organic structure of a woven textile.

- 12-column desktop grid with 24px gutters, max content width 1024px
- Mobile: single column with 16px margins
- Vertical rhythm: every spacing value is a multiple of the 4px base unit
- Dividers use a "pixel-stitch" pattern (1px dashes with 4px gap), never solid hairlines

## Elevation & Depth

Pixel Loom rejects heavy shadows in favor of **Tonal Layers** and **Structural Outlines**.

- Depth comes from subtle background-tone shifts and crisp 1px outlines — never drop shadows
- Every surface uses a 1px solid border in `outline-variant`
- In Light modes: higher layers shift toward `surface-container-lowest` (clean white) against the textured base
- In Dark modes: higher layers shift toward `surface-container-highest` (lifted charcoal/navy) against the deep base
- Active/focus states use the primary thread color as border

## Shape Language

Architectural and lean, prioritizing structural integrity with only minimal softening.

- **Corners:** 4px (0.25rem) radius — consistent across cards, buttons, inputs.
- **Icons:** Thick-stroke (2px) monolinear icons. Geometric or slightly pixelated.
- **Pixel motifs:** 4×4 ochre square notches in top-right corners of cards, buttons, and code blocks.
- **Pixel-loom brand mark:** A 5×5 woven X-pattern (5 corner+center squares in primary, 4 cross-arm squares in `secondary-fixed-dim` ochre).

## Components (provided in components.css)

- **Card grid** — 2-column grid (1 column mobile)
- **Card** — bordered surface with ochre corner notch; variants for project, extension
- **Card status pill** — small uppercase mono badge
- **Tag list** — small mono pills for technologies, commands, etc.
- **Stitched list** — vertical list with dashed dividers and tiny primary squares as bullets
- **Primary button** — Madder/Indigo background, mono uppercase text, ochre corner notch
- **Theme toggle button** — small icon button (sun/moon swap), styled in base.css
- **Code block** — soft container background, 1px border, ochre corner notch
- **Contact list** — labeled rows with dashed dividers
- **Experiments CTA** — centered call-to-action card
- **Pixel-stitch divider** — `<hr class="stitch">`
- **Colophon** — footer in mono, with dashed top border

## Heritage

The name and aesthetic draw from *scoarță* — the woven wool carpets traditional to Romanian households, characterized by deep natural-dye palettes (madder root, walnut, oak gall, indigo) and rhythmic structural patterns. The "Pixel Loom" naming preserves the *texture* of that tradition while making the system legible internationally.
