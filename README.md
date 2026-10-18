# MahanISH website

Persian, right-to-left company homepage built with **Vite 7 + Tailwind CSS 4**. The design follows `DESIGN.md`, imports the supplied `theme.css` tokens, and uses `MAHANISH_MAINPAGE_CONTENT.md` as the content source.

## Development

Requires Node.js 20.19+ (or 22.12+).

```sh
npm install
npm run dev
```

Open http://127.0.0.1:5173.

```sh
npm run build
npm run preview
```

The deployable static output is `dist/`. Fonts are bundled locally; the page does not require a font CDN, image service, or backend.

## Editing

- `src/main.js`: page sections and accessible interactions.
- `src/content.js`: all 16 service descriptions, six FAQs, collaboration steps, benefits, and contact details.
- `src/style.css`: responsive layout, component styles, and Persian typography.
- `src/icons.js`: inline SVG icons.
- `theme.css`, `variables.css`, `tokens.json`, `DESIGN.md`: original supplied design assets, preserved.

Noto Naskh Arabic provides the editorial Persian headings, Vazirmatn provides readable Persian UI and copy, and IBM Plex Mono provides technical Latin captions. This adapts the original serif/monospace pairing to Persian, which the specified Latin fonts do not cover.

Service cards open native modal dialogs with keyboard focus handling and Escape support. FAQs use native details/summary elements. The mobile menu supports keyboard interaction and closes after navigation. Reduced-motion preferences are respected. Contact actions use real `tel:` and `mailto:` links; there is no simulated form submission.

## Content to connect later

The supplied source requires real, approved CMS data for projects and articles. Those sections are intentionally withheld until records and images are available. Add actual team/CEO photographs when supplied; the current page uses original abstract diagrams and a monogram.

Before public launch, verify the supplied 15+ years claim, official English company name, CEO details, office address, phone number, and free-consultation offer. General response hours are seven days a week, 08:00–16:00; no 24/7 support claim is displayed.
