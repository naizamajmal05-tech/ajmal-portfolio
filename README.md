# Ajmal Naizam – Portfolio Website

A minimalist multi-page portfolio for a Digital Marketing Analyst in UAE. Plain HTML, CSS and a little vanilla JavaScript. No frameworks, no build step.

## Folder structure

```
/                          index.html            Home
about/index.html
services/index.html        Services overview
services/<slug>/index.html seo, google-business-profile, content-writing,
                           analytics-reporting, website-audits, crm-setup, ai-automation
blog/index.html            Blog index
blog/<slug>/index.html     3 starter posts
contact/index.html         Web3Forms contact form
privacy/index.html
404.html                   Cloudflare Pages serves this automatically
assets/css/style.css       The only stylesheet
assets/js/main.js          Mobile menu + contact form handling (deferred)
assets/og-image.png        1200x630 social preview (replace with your own design)
favicon.svg
sitemap.xml  robots.txt
TODO-before-launch.md      Every placeholder to replace
```

Each page is a folder with an `index.html`, so URLs are clean (`/about/`, not `/about.html`).

## Preview locally

Links are root-relative (`/about/`), so open the site through a local server rather than double-clicking the files:

```
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Replacing placeholders

See [TODO-before-launch.md](TODO-before-launch.md) for the full checklist. The main ones:

1. **Domain.** Find and replace `https://YOUR-DOMAIN.com` with your real domain in every file (VS Code: Ctrl/Cmd+Shift+H, search across the whole folder). It appears in canonicals, Open Graph tags, JSON-LD, `sitemap.xml` and `robots.txt`.
2. **Web3Forms key.** Already set in `contact/index.html`. To change it, replace the `access_key` value with a key from https://web3forms.com.
3. **Optional content.** The site currently has no Selected work, Certifications or personal background sections, because none were supplied. Add them when you have real content.

## Adding a page or blog post

Copy an existing folder (for example `blog/what-a-crm-does-for-a-small-business/`), edit the title, description, canonical URL, JSON-LD and body, then add the new URL to `sitemap.xml` and link to it from a related page. Remember every page needs a unique title (under 60 characters) and description (under 160).

## Deploy on Cloudflare Pages

1. Push this repository to GitHub.
2. In Cloudflare: **Workers & Pages → Create → Pages → Connect to Git**, then choose this repository.
3. Build settings:
   - **Framework preset:** None
   - **Build command:** *(leave empty)*
   - **Build output directory:** `/`
4. Click **Save and Deploy**. Every push to `main` redeploys automatically.
5. Add your custom domain under **Custom domains**, then make sure the domain you put in the files matches it.
6. After launch, submit `https://your-domain/sitemap.xml` in Google Search Console.
