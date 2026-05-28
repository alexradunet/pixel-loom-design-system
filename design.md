---
name: Pixel Loom · Design System
description: A woven aesthetic for local-first computing, inspired by Romanian scoarță
variants:
  - linen        # light warm  — alexradu.net
  - indigo       # light cool  — nazar.studio
  - linen-dark   # dark warm   — midnight workshop
---

## Brand & Style

Pixel Loom blends the ancient tactile heritage of Romanian woven carpets (*scoarță*) with the precision of local-first computing. Each variant transforms the system around a single dominant "thread color"—Madder Red in **Linen**, Indigo Dye in **Indigo**—while keeping the same secondary accents (ochre, occasional madder) so the sites feel like a family.

The aesthetic is a sophisticated fusion of **Minimalism** and **Tactile Pixel-Art**. It avoids the sterility of modern cloud interfaces in favor of grounded foundations and rhythmic structural elements. The UI feels constructed rather than rendered, using subtle pixel-level motifs on dividers and borders to simulate the "stitch" of a loom. It is designed for operators who value transparency, clarity, and the beauty of visible craftsmanship in their digital tools.

## Variants

### Linen (light, warm) — `tokens/linen.css`

The sun-drenched atelier. Bleached wool foundation, Madder Red as primary thread, ochre and teal as accents. The clarity of daylight illuminates the intricate "stitching" of the interface.

- Foundation: `#fff8f6` warm bleached wool
- Primary: Madder Red `#983f20`
- Secondary: Ochre `#775a03` / fixed-dim `#e9c267`
- Tertiary: Teal `#00656b`

### Indigo (light, cool) — `tokens/indigo.css`

The northern atelier. Cool bleached cotton foundation, Indigo Dye as primary thread, with **ochre and madder kept** from Linen as accents — so the two variants look like siblings rather than cousins.

- Foundation: `#f4f6fb` cool bleached cotton
- Primary: Indigo Dye `#1e3a8a`
- Secondary: Ochre `#7a6310` *(family resemblance)*
- Tertiary: Madder Red `#8a2c1b` *(family resemblance)*

### Linen Dark (dark, warm) — `tokens/linen-dark.css`

The midnight workshop. A digital loom where the deep tones of dyed wool create a focused, immersive environment for intricate work. Madder thread becomes a warm peach-blush against obsidian; ochre and teal stay legible.

- Foundation: `#1a110f` deep dyed wool
- Primary: Warm Peach `#ffb59d` (desaturated madder)
- Primary container: `#b85736` (full madder from Light)
- Secondary: Ochre `#e9c267` *(kept brighter for dark legibility)*
- Tertiary: Teal `#76d5dc` *(kept brighter for dark legibility)*

## Typography (shared across variants)

The typography strategy balances editorial elegance with technical precision.

- **Headings** — Newsreader (literary serif, weights 500/600). Authoritative, like a physical ledger or an ancestral loom's pattern book.
- **Interface** — Work Sans (grounded grotesque, weights 400/500). Swiss-inspired, highly legible.
- **Data, logs, metadata** — JetBrains Mono (weights 400/500). Technical "woven" rhythm for small-scale text.

All three fonts are self-hosted as `woff2` (latin + latin-ext subsets for Romanian glyphs). No external font calls when deployed locally.

## Layout & Spacing

A **Fixed Grid** philosophy that mimics the rigid yet organic structure of a woven textile.

- 12-column desktop grid with 24px gutters, max content width 1024px (1280px outer cap)
- Mobile: single column with 16px margins
- Vertical rhythm: every spacing value is a multiple of the 4px base unit
- Dividers use a "pixel-stitch" pattern (1px dashes with 4px gap), never solid hairlines

## Elevation & Depth

Pixel Loom rejects heavy shadows in favor of **Tonal Layers** and **Structural Outlines**.

- Depth is communicated through subtle background-tone shifts and crisp 1px outlines — never drop shadows
- Every surface uses a 1px solid border in `outline-variant`
- In Light variants: higher layers shift toward `surface-container-lowest` (clean white) against the textured base
- In Dark variants: higher layers shift toward `surface-container-highest` (lifted charcoal) against the deep base
- Active/focus states use the primary thread color as border

## Shape Language

Architectural and lean, prioritizing structural integrity with only minimal softening.

- **Corners:** 4px (0.25rem) radius — consistent across cards, buttons, inputs. Sharp-tactile, grid-aligned, but not perfectly square.
- **Icons:** Thick-stroke (2px) monolinear icons. Geometric or slightly pixelated.
- **Pixel motifs:** 4×4 ochre square notches in top-right corners of cards, buttons, and code blocks. Reads as a "weaving" mark.
- **Pixel-loom brand mark:** A 5×5 woven X-pattern (5 corner+center squares in primary, 4 cross-arm squares in `secondary-fixed-dim` ochre).

## Components (provided in components.css)

- **Card grid** — 2-column grid (1 column mobile)
- **Card** — bordered surface with ochre corner notch; variants for project, extension
- **Card status pill** — small uppercase mono badge
- **Tag list** — small mono pills for technologies, commands, etc.
- **Stitched list** — vertical list with dashed dividers and tiny primary squares as bullets
- **Primary button** — Madder/Indigo background, mono uppercase text, ochre corner notch
- **Code block** — soft container background, 1px border, ochre corner notch
- **Contact list** — labeled rows with dashed dividers
- **Experiments CTA** — centered call-to-action card
- **Pixel-stitch divider** — `<hr class="stitch">`
- **Colophon** — footer in mono, with dashed top border

## Heritage

The name and aesthetic draw from *scoarță* — the woven wool carpets traditional to Romanian households, characterized by deep natural-dye palettes (madder root, walnut, oak gall, indigo) and rhythmic structural patterns. The "Pixel Loom" naming preserves the *texture* of that tradition while making the system legible internationally.
