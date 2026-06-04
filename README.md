# TRACE-AI 2026 — Workshop Website

Static site for the TRACE-AI 2026 NeurIPS workshop proposal (draft).

## Files

| File | Purpose |
|------|---------|
| `index.html` | Main page (all sections) |
| `style.css` | Stylesheet |
| `script.js` | Mobile nav toggle |
| `img/` | Add organiser / speaker photos here (square, ~200×200 px, JPG or PNG) |

Search `index.html` for `<!-- TODO` to find every placeholder that needs filling in (dates, speaker names, OpenReview link, photo paths, contact email).

## How to publish on GitHub Pages

1. Create a **new public repository** on GitHub (e.g. `trace-ai-2026`).

2. Push this directory to its `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial workshop site"
   git remote add origin https://github.com/<your-org>/trace-ai-2026.git
   git push -u origin main
   ```

3. In the repository on GitHub: **Settings → Pages → Source** — select  
   _Deploy from a branch_, branch **main**, folder **/ (root)**.

4. GitHub Pages will serve the site at  
   `https://<your-org>.github.io/trace-ai-2026/`  
   (usually live within a minute or two of each push).

## Adding photos

Create an `img/` folder and drop in square JPG or PNG files (~200 × 200 px).  
Each organiser card in `index.html` has a comment showing exactly where to swap in the `<img>` tag.
