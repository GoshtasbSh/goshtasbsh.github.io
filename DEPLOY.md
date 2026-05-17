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
    └── cv.pdf              # PLACEHOLDER - replace with your real CV PDF before deploying
```

---

## Before you push: upload your real CV PDF

The "Download CV" button on the Profile section points to `assets/cv.pdf`. Replace the placeholder file with your real PDF:

```bash
cp /path/to/your/GoshtasbShahriariMehr_CV.pdf production/assets/cv.pdf
```

The file in `assets/cv.pdf` right now is a tiny placeholder — if you forget to replace it, the download button will give the viewer a broken file.

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

## Adding things you said are coming

A few placeholders are wired up already. Just edit `shared/data.js`:

- **Project dashboards** — find a project (e.g. GeoChatBot) and replace `dashboardUrl: "#dashboard-coming-soon"` with your Vercel URL. The "View Dashboard" button activates automatically.
- **Paper PDFs** — find a publication and replace `pdfUrl: "#pdf-coming-soon"` with the PDF URL. The "PDF ↓" button activates.

You can also add lab websites or new affiliations the same way — copy the shape of an existing entry.

---

## What is in this build

- **Hero auto-cycles 4 reels every 7 seconds** (pauses on hover):
  1. Spatial path — 3D wireframe globe (zooms in and pans right after 2 s)
  2. Machine Learning — embedding clusters morph: scatter → 6 clusters → Florida outline
  3. Agent-Based Modeling — discrete agents flow on a network to food hubs and respawn
  4. Agent AI + LLMs — a central LLM core with orbiting tool nodes; queries fire out and answers come back
- **Top nav** — avatar chip (only photo at the top of the page), six section links, mobile hamburger
- **Profile** — bio + the second photo + a **Download CV** button on the right
- **Research axes** (7) — each is a glass card, click for the full record
- **Education** (4 degrees) — each click opens a modal with thesis, advisor, status, highlights
- **Affiliations** (3 labs) — each click opens a modal with role, project, and a link to the lab's UF site
- **Projects** — every featured project has "View Code on GitHub"; GeoChatBot and Keystone also have "View Dashboard"
- **Publications** — each has a PDF download button (placeholder until you upload PDFs)
- **Mobile responsive** down to ~360 px; tested at 980 px and 640 px breakpoints
- **Plain ASCII text** throughout so no characters render as boxes regardless of font

Everything else (Three.js, fonts) loads from a CDN. No build step. No node_modules. One HTML, one JS data file, three asset files.
