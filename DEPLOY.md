# Deploying to goshtasbsh.github.io

This `production/` folder contains your finished single-page personal site. Four files, two folders. That is the whole site.

```
production/
├── index.html              # The page itself
├── shared/
│   └── data.js             # All your bio / projects / publications data
└── assets/
    ├── photo.jpeg          # Profile photo (used in nav chip + Profile section)
    ├── logo.jpg            # Used as favicon and OG card
    └── cv.pdf              # your CV (currently the Jan 2026 version)
```

---

## How to deploy

You already own `https://github.com/GoshtasbSh/goshtasbsh.github.io`. Replace its contents with this folder and push.

### Option A — Clone, replace, push (recommended)

From any working directory:

```bash
# 1. Clone your existing site repo to a fresh folder
cd ~/Desktop
git clone https://github.com/GoshtasbSh/goshtasbsh.github.io.git
cd goshtasbsh.github.io

# 2. Remove the old content (keep .git)
git rm -rf .
git clean -fxd -e .git

# 3. Copy everything from this production folder in
cp -R "/Users/goshtasbshahriari/UF Dropbox/Goshtasb Shahriari Mehr/Programming_projects/My_personal_webpage/production/." ./

# 4. Stage, commit, push
git add .
git commit -m "Redesign: spatial-AI portfolio with 4-reel hero, click-to-expand sections"
git push origin main      # or 'master' if that's the default for that repo
```

GitHub Pages auto-rebuilds within a minute. Visit `https://goshtasbsh.github.io/` and hard-refresh (Cmd+Shift+R) to see it.

### Option B — Drag and drop on github.com (zero-CLI)

1. Open `https://github.com/GoshtasbSh/goshtasbsh.github.io` in your browser.
2. For each old file in the repo: click it → "Delete file" → commit.
3. Click "Add file → Upload files" and drag the **contents** of this `production/` folder (not the folder itself — drag `index.html`, the `shared/` folder, and the `assets/` folder).
4. Commit at the bottom. GitHub Pages will redeploy.

---

## Updating the site later

Almost every change you will want to make is in **one file**:

- `shared/data.js` — bio, projects, publications, teaching, degrees, affiliations, research axes
- `index.html` — only touch when you want to change layout / styling

To swap your photo, drop a new file in `assets/photo.jpeg`.
To swap your CV, drop a new file in `assets/cv.pdf`.
No rebuild step. Push and you are live.

---

## Adding or editing a project

Projects live in `shared/data.js` under `projects: [...]`. Every project renders as a card and
opens a detail modal on click. Copy the shape of an existing entry:

```js
{
  key: "unique-slug",              // used by the modal, must be unique
  name: "Project Name",
  tag: "Short descriptor",         // shown above the title
  category: "AI / LLM",            // must match one of `projectCategories` (drives the filter chips)
  year: "2026",
  status: "Live - open source",    // a status containing live/deployed/playable gets the bright pill
  role: "Sole developer",
  summary: "Two or three sentences. This is the card text.",
  detail: ["Modal paragraph 1.", "Modal paragraph 2."],
  highlights: ["Bullet 1", "Bullet 2"],
  metrics: [{ k: "Tests", v: "800+" }],   // 2-4 of these; shown on the card AND in the modal
  stack: ["TypeScript", "DuckDB-WASM"],   // first 6 show on the card, all show in the modal
  url: "https://github.com/...",          // null if there is no public repo
  demoUrl: "https://...",                 // null if nothing is deployed
  demoLabel: "Live demo",
  links: [{ label: "Docs", url: "https://..." }],   // optional extra links
  note: "Honest scope caveat.",           // optional; renders as an amber 'Scope note' block
  featured: true
}
```

If `url` and `demoUrl` are both null, the modal shows "Code available on request" instead of link
buttons. To add a new filter category, add it to `projectCategories` and use it as a `category`.

Other things worth knowing:

- `heroStats` drives the four numbers under the hero. Keep them honest - they are the first thing
  a reader checks.
- `bio` drives the Profile paragraphs (no longer hardcoded in `index.html`).
- `interests` + `axisDetails` drive the Research axes cards and their modals. The `label` in
  `interests` must exactly match the key in `axisDetails`.
- Paper PDFs: set `pdfUrl` on a publication to activate its download button.

---

## What is in this build

- **Hero auto-cycles 4 reels every 7 seconds** (pauses on hover): spatial path, machine learning,
  agent-based modeling, agent AI + LLMs. Hero stats come from `heroStats`.
- **Profile** - bio from `data.js`, photo, and a Download CV button.
- **Research axes** (8) - click any card for the full record.
- **Education** (4 degrees) and **Affiliations** (3 labs) - click for a modal.
- **Projects** (21) - filter chips by category, cards with metrics, click for a full technical
  record with highlights, stack, scope caveats, and live/GitHub links.
- **Publications** and **Teaching**.
- Mobile responsive down to ~360 px; verified with zero horizontal overflow at 390 px.
- Plain ASCII text throughout so nothing renders as boxes regardless of font.

Everything else (Three.js, fonts) loads from a CDN. No build step. No node_modules.
