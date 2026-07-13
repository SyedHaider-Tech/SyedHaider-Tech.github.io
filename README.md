# Dr. Syed Haider — Deep-Tech Advisor website

A static site structured like a real, growing website. No build step, no framework.
Each article is its own HTML page; shared styling and chrome live in one place.

## Folder structure

```
├── index.html                 Home (hero, key metrics, featured theses)
├── about.html                 About + the 4-stage evaluation framework
├── venture.html               Investment thesis, advisory menu, deal-flow form
├── insights.html              Intelligence Hub — filterable article grid
├── articles/                  ONE HTML PAGE PER ARTICLE (grows over time)
│   ├── _TEMPLATE.html         Copy this to start a new article
│   ├── liquid-metal-batteries.html
│   ├── enzymatic-carbon-capture.html
│   └── … one file per post
├── assets/
│   ├── css/
│   │   └── styles.css         ALL design tokens + component styles
│   ├── js/
│   │   ├── site.js            Shared navbar + footer (edit nav links once, here)
│   │   ├── insights.js        Builds the Insights grid + filter pills
│   │   └── articles-index.js  Article REGISTRY (metadata only — drives the grid)
│   └── images/
│       └── <slug>.png         One hero image per article (1600×900)
└── .nojekyll                  Tells GitHub Pages to serve files as-is
```

## ➕ Publishing a new article (3 steps)

1. **Create the page.** Copy `articles/_TEMPLATE.html` to `articles/my-new-slug.html`.
   Edit the `<title>`, meta description, header block (tag pill, date, title), and
   write the article body in plain HTML inside `<div class="prose">`.
2. **Register it.** Add one entry at the **top** of `assets/js/articles-index.js`:
   ```js
   {
     slug: "my-new-slug",              // must match the filename in articles/
     category: "thesis",               // "thesis" or "technical"
     tag: "Investment Thesis",         // pill label on the card
     date: "2026-07-13",               // YYYY-MM-DD — grid sorts newest first
     title: "Your Article Title",
     summary: "Two-sentence preview shown on the card."
   },
   ```
3. **Add the image.** Drop a 1600×900 image at `assets/images/my-new-slug.png`.
   (Replace the placeholder schematics the same way — keep the filename.)

The Insights grid, filter counts, and the home-page Featured block all update
automatically from the registry. Existing pages are never touched.

## 🎨 Changing the look
All colors, fonts, spacing are CSS variables at the top of `assets/css/styles.css`
(`--gold`, `--navy`, `--bg`, …). Change once, updates site-wide.

## 🔗 Changing navigation
Edit `NAV_LINKS` at the top of `assets/js/site.js` — navbar and footer update on
every page, including all article pages.

## ▶️ Preview locally
Open `index.html` in your browser — double-click works, no server needed.

## 🚀 Deploy to GitHub Pages
1. Upload the contents of this folder to the root of a repo (`index.html` at top level).
2. Settings → Pages → Deploy from a branch → `main` / `/(root)`.
3. Live at `https://<username>.github.io/<repo>/`.
