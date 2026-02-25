# Gunasekaran K – Portfolio Site

Single-page personal portfolio for **Gunasekaran K, Full Stack Developer (10+ years experience)**.

Built with plain **HTML, CSS, and JavaScript** for easy hosting (GitHub Pages, custom domain later).

---

## Files

- `index.html` – Main single-page site (Hero, About, Skills, Experience, Timeline, Contact).
- `styles.css` – Modern dark theme, responsive layout, typography, and section styling.
- `script.js` – Smooth scrolling, active navigation highlighting, dynamic footer year.
- `resume.pdf` – Placeholder for your resume file (optional, see below).

---

## How to view locally

1. Open the project folder:
   - On this machine, files are in `e:\CursorSession`.
2. Double-click `index.html` to open it in your browser (Chrome/Edge/etc).
3. Scroll through the sections to review your information.

If you see broken styles, ensure `styles.css` is in the same folder as `index.html`.

---

## Adding your resume and photo

- **Resume**:
  - Export your resume as a PDF (e.g. `resume.pdf`).
  - Place `resume.pdf` in the **same folder** as `index.html`.
  - The “Download CV” button in the hero section will start downloading it.

- **Profile photo**:
  - Prepare a square or vertical photo (e.g. `profile.jpg`).
  - You can replace the placeholder in `index.html` by editing the `.hero-photo` area to use an `<img>` tag instead of the current placeholder `div`.

---

## How to put this on GitHub Pages (for a resume URL)

1. **Create a GitHub account** (if you don’t have one yet).
2. **Create a new repository** named:
   - `yourusername.github.io` (replace `yourusername` with your GitHub username).
3. In that repository, add these files:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `resume.pdf` (optional)
4. Commit and push the files.
5. Go to the repository **Settings → Pages**:
   - Set **Source** to `Deploy from a branch`.
   - Choose the `main` branch and `/ (root)` folder.
6. After a minute, your site should be live at:
   - `https://yourusername.github.io`

You can now add this URL to your resume.

---

## Moving to a custom domain later

When you buy a domain (for example `gunasekaran.dev` or `gunasekarank.com`):

1. In your domain provider’s DNS settings, create records pointing to GitHub Pages IPs or a `CNAME` to `yourusername.github.io` (GitHub’s docs show the exact values).
2. In your GitHub repo, go to **Settings → Pages** and set the **Custom domain** to your new domain.
3. Wait for DNS to propagate (can take up to a few hours).

Your portfolio will then be available at your custom domain, but the GitHub Pages URL will still work.

---

## Customizing content

- Edit `index.html` to change text in:
  - Hero tagline
  - About paragraph
  - Skills bullets
  - Domain experience bullets
  - Timeline items
  - Contact note and any social links
- Edit `styles.css` to tweak:
  - Colors (change the `--accent` color, etc.)
  - Spacing and fonts

No build tools are needed; any change is immediately visible after refreshing the browser.

