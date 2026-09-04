# goshtasbsh.github.io

Personal site for Goshtasb Shahriari Mehr. Static, framework-free, served straight from
GitHub Pages at the repository root. No build step — edit and push.

## Layout

```
index.html            page shell and section markup
shared/data.js        the single source of truth for all content (window.PROFILE)
shared/site.css       design system ("Spatial Cinema"): tokens, layout, responsive rules
shared/site.js        runtime: hero reels, project grid + filters, dialogs, theme, reveals
shared/img/           hero and chapter photography (webp)
shared/media/         project hover previews — <key>.webm + <key>.mp4 + <key>-poster.webp
shared/fonts/         Inter Tight + JetBrains Mono subsets (woff2)
assets/               CV, papers, portrait, degree certificate
```

## Editing content

Almost everything on the page is rendered from `shared/data.js`. To change a project
description, add a publication, or update an appointment, edit that file — no HTML changes
needed. Keys that matter:

- `projects[]` — `featured`, `category` (drives the filter chips), `media` (the basename in
  `shared/media/`, or `null` for a card with no hover preview), `headline`, `metrics`,
  `highlights`, `note`, `previewSource`.
- `reels[]` — the four rotating hero stories.
- `affiliationsDetailed[]`, `degreesDetailed[]`, `axisDetails{}` — the records behind the
  Labs / Education / Methods dialogs.

## Project hover previews

Each preview is a silent 9–10 s clip at 960×540, 20 fps, shipped as both VP9 (`.webm`) and
H.264 (`.mp4`) with a `.webp` poster. They use `preload="none"` and only fetch when a
pointer enters the card, so they cost nothing on first paint. On touch devices there is no
hover, so `site.js` plays a card's clip while it is the one on screen.

To replace one, drop new files into `shared/media/` using the same basename and keep the
three-file set (`X.webm`, `X.mp4`, `X-poster.webp`).

## Local preview

```bash
python3 -m http.server 8899
# then open http://localhost:8899
```

## Deploy

Push to `main`. GitHub Pages serves the repository root.
