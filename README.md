# Pixel Loom

A small, self-contained design system that feels woven rather than rendered. Used across [alexradu.net](https://alexradu.net), [nazar.studio](https://nazar.studio), and [forge.dance](https://forge.dance).

> *The UI feels constructed rather than rendered, using subtle pixel-level motifs on dividers and borders to simulate the "stitch" of a loom.*

Inspired by Romanian woven wool carpets dyed with madder, ochre, and indigo — translated into a precise computing aesthetic.

## What's in the box

```
pixel-loom/
├── tokens/
│   ├── linen.css         # Light warm  (alexradu.net)
│   ├── linen-dark.css    # Dark warm — the midnight workshop
│   └── indigo.css        # Light cool  (nazar.studio)
├── fonts/                # Self-hosted woff2 (Newsreader · Work Sans · JetBrains Mono)
├── fonts.css             # @font-face declarations
├── base.css              # Reset, typography, layout, dividers
├── components.css        # Cards, buttons, lists, code blocks
├── design.md             # Full design specification
└── example/              # Live swatch demos per variant
    ├── index.html        # Linen
    ├── indigo.html       # Indigo
    └── linen-dark.html   # Linen Dark
```

## Quick usage (via jsDelivr CDN)

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/alexradunet/pixel-loom-design-system@main/fonts.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/alexradunet/pixel-loom-design-system@main/tokens/linen.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/alexradunet/pixel-loom-design-system@main/base.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/alexradunet/pixel-loom-design-system@main/components.css">
```

Swap `tokens/linen.css` for `tokens/indigo.css` or `tokens/linen-dark.css` to flip palette.

For full sovereignty (no CDN), copy the files into your project locally — every file is small and standalone.

## A 2×n family

Pixel Loom is organized as a small family of variants. All variants share:

- The **same typography**: Newsreader (serif headlines) · Work Sans (body) · JetBrains Mono (metadata)
- The **same structural tokens**: spacing, radii, layout grid
- The **same pixel-stitch motifs**: 1px-dash dividers, 4×4 ochre corner notches
- A **kept ochre + warm accent** so the variants visibly belong together

What changes is the **dominant thread color** and the **lighting**:

| Variant | Mode | Primary | Used by |
|---|---|---|---|
| **Linen** | Light | Madder red `#983f20` | [alexradu.net](https://alexradu.net) |
| **Linen Dark** | Dark | Warm peach `#ffb59d` (desaturated madder) | future console / operator UIs |
| **Indigo** | Light | Indigo dye `#1e3a8a` | [nazar.studio](https://nazar.studio) |

The Indigo Dark variant is not yet defined — it'll arrive when a project actually needs it.

## Typography

- **Headlines:** [Newsreader](https://fonts.google.com/specimen/Newsreader) (editorial serif, 500/600)
- **Interface:** [Work Sans](https://fonts.google.com/specimen/Work+Sans) (grounded grotesque, 400/500)
- **Data & metadata:** [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (technical mono, 400/500)

All three are self-hosted as `woff2` in `fonts/` — no calls to Google when deployed locally. Latin + latin-ext subsets included for Romanian glyphs (ș, ț, ă, î, â).

## Design principles

1. **Tactile, not rendered.** Pixel-stitch dividers, 4×4 ochre corner notches, no drop shadows.
2. **Tonal layers over elevation.** Crisp 1px borders and background-tone shifts instead of shadows.
3. **4px radius corners.** Sharp-tactile, grid-aligned, never perfectly square.
4. **4px spacing base.** All vertical rhythm is a multiple.
5. **Editorial serif headlines, grotesque sans body, mono for labels.** No mixing within a layer.

Full design spec: [design.md](./design.md).

## Sites in the family

- 🟢 [alexradu.net](https://alexradu.net) — personal site & CV (Linen)
- 🔵 [nazar.studio](https://nazar.studio) — Pi.Dev extension suite (Indigo)
- 🟡 [forge.dance](https://forge.dance) — *coming soon* (palette TBD)

## License

MIT. Use it, fork it, swap colors — keep the credit.

Built by [Alex Radu](https://alexradu.net).
