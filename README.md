# Pixel Loom

A small, self-contained design system that feels woven rather than rendered. Used across [alexradu.net](https://alexradu.net), [nazar.studio](https://nazar.studio), and [forge.dance](https://forge.dance).

> *The UI feels constructed rather than rendered, using subtle pixel-level motifs on dividers and borders to simulate the "stitch" of a loom.*

Inspired by Romanian woven wool carpets dyed with madder, ochre, and indigo — translated into a precise, local-first computing aesthetic.

## What's in the box

```
pixel-loom-design-system/
├── tokens/
│   ├── linen.css         # Warm palette — light + dark in one file
│   └── indigo.css        # Cool palette — light + dark in one file
├── fonts/                # Self-hosted woff2 (Newsreader · Work Sans · JetBrains Mono)
├── fonts.css             # @font-face declarations
├── base.css              # Reset, typography, layout, dividers, theme-toggle button
├── components.css        # Cards, buttons, lists, code blocks
├── theme-toggle.js       # Vanilla light ⇄ dark toggle (~20 lines)
├── design.md             # Full design specification
└── example/              # Live swatch demos — try the toggle
    ├── index.html        # Linen (light + dark via toggle)
    └── indigo.html       # Indigo (light + dark via toggle)
```

## Quick usage (via jsDelivr CDN)

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/alexradunet/pixel-loom-design-system@main/fonts.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/alexradunet/pixel-loom-design-system@main/tokens/linen.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/alexradunet/pixel-loom-design-system@main/base.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/alexradunet/pixel-loom-design-system@main/components.css">
<script src="https://cdn.jsdelivr.net/gh/alexradunet/pixel-loom-design-system@main/theme-toggle.js"></script>
```

Swap `tokens/linen.css` for `tokens/indigo.css` to flip palette family. Both files include light **and** dark mode in a single load.

For full sovereignty (no CDN), copy the files into your project locally — every file is small and standalone.

## Light ⇄ Dark

Each palette file includes both light and dark variants in a single load:

- **Default** — light tokens apply.
- **System prefers dark** — dark tokens apply automatically (`@media (prefers-color-scheme: dark)`).
- **User explicitly toggles** — `.theme-dark` or `.theme-light` on `<html>` overrides the system preference; the choice is persisted in `localStorage`.

The included `theme-toggle.js` handles all of this in ~20 lines. To add a toggle button anywhere on your page:

```html
<button class="theme-toggle" onclick="PixelLoom.toggleTheme()" aria-label="Toggle light/dark mode">
  <svg class="theme-toggle-moon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
  <svg class="theme-toggle-sun" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="4"/>
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
  </svg>
</button>
```

The two SVGs swap visibility automatically based on the active theme. `base.css` styles the button to match the rest of the system.

The toggle script also exposes `PixelLoom.isDark()` (read current mode) and `PixelLoom.setTheme('light' | 'dark' | null)` for programmatic control (`null` clears the manual preference and returns to system-following).

## A 2×2 family

Pixel Loom is organized as a small family of variants. All variants share:

- The **same typography**: Newsreader (serif headlines) · Work Sans (body) · JetBrains Mono (metadata)
- The **same structural tokens**: spacing, radii, layout grid
- The **same pixel-stitch motifs**: 1px-dash dividers, 4×4 ochre corner notches
- A **kept ochre + warm accent** so the variants visibly belong together

What changes is the **dominant thread color**:

| Variant | Primary (Light) | Primary (Dark) | Used by |
|---|---|---|---|
| **Linen** | Madder red `#983f20` | Warm peach `#ffb59d` | [alexradu.net](https://alexradu.net) |
| **Indigo** | Indigo dye `#1e3a8a` | Lifted indigo `#a8c0f0` | [nazar.studio](https://nazar.studio) |

In dark mode, the primary thread softens to its desaturated form (peach for Linen's madder, lifted indigo for Indigo's deep dye). The ochre and warm-peach accents stay roughly consistent across modes so the family resemblance holds.

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
