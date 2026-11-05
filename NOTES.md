# Project notes: Ajmal Naizam portfolio

Static site (HTML + one stylesheet + small JS), deployed on Cloudflare Pages from GitHub. Case-sensitive file names matter. Style: off-white `#FAF8F4`, charcoal text, muted green accent `#4F6F5A`, Inter font, thin borders, no heavy shadows. Nothing has been committed or pushed in this work; all changes are uncommitted in the working tree.

## Standing rules from the owner
- Use only information the owner gives. Do not invent, embellish or reword claims, numbers or results.
- One H1 per page. Keep page titles and meta descriptions unchanged.
- No star ratings, Review or AggregateRating schema.
- Do not use the same picture for different slots.
- Profile photo (`ajmal-naizam-profile.webp`) appears exactly once: the home hero `<img>`.
- Images: width and height attributes, `object-fit: cover`, alt text that describes what is shown (never call stock images the owner's work), lazy-load below the fold.
- Do not commit or push; the owner reviews first.

## Done

### Content
- **Testimonials** (home page, all three; About page, compact version): Dhrisya (Sales Head, Cleanblast LLC), Parveen (Finance manager, Metadecor), Hanna (Owner, Kadavathu Cafe). Each has a "Client" label. Brackets, a stray opening quote mark and a trailing space were cleaned from the supplied text. The label typos "[client]" and "[Clinet]" became "Client".
- **Certifications** (home and About): provider names only, as text: Meta Blueprint, HubSpot Academy, Google Ads.
- **Tools and platforms** (home): AI and automation (Claude, ChatGPT, n8n, OpenClaw, Hermes) with the line "I use these to build CRM and AI automation workflows for small businesses."; Design and web (Figma, Canva, WordPress, Elementor); Analytics and reporting (Excel, Power BI). Nothing is marked "learning". Off-list tools were removed from all pages.
- **Service pages:** CRM Setup mentions n8n. AI Automation mentions Claude, ChatGPT and n8n ("tools such as...").
- **Off-list tool removals in body copy:** Analytics & Reporting FAQ now says "Mainly Excel and Power BI."; bullet changed to "Analytics setup and checks"; SEO service and SEO blog post no longer name Search Console or Analytics.

### Images (all in `assets/images/`)
- **Home hero:** profile photo right of the headline on desktop and below it on mobile, preloaded, eager, in a thin frame with a 6 px white mat and rounded corners. Dubai sunset strip below the hero (lazy, 16:5 desktop, 16:6 phone).
- **Service images (4:3):** SEO `service-seo-strategy.webp`; Analytics `service-analytics-charts.webp`; Content Writing `service-content-planner.webp`; CRM Setup `workperch-tRjfyx6KKKw-unsplash.webp`; AI Automation `ai-automation-setup.webp`; Website Audits `website-feed.webp`; Google Business Profile `google-business-profile.webp` (shown with `object-fit: contain` on white so the logo is not cropped).
- **Blog covers (1.91:1):** SEO post `blog-desk-setup.webp`; CRM post `crm-small-business-blog.webp`; AI automation post `ai-for-small-business-blog.webp`.
- Images appear on home cards, Services index cards, Blog index cards, service page tops and blog post tops.
- **Social image:** `assets/og-image.png` regenerated (1200x630 PNG from `uae-marina-night.webp` with overlay and the text "Ajmal Naizam" / "Digital Marketing Analyst in UAE" (old title; image not yet regenerated for the new one), no profile photo).
- About and Contact have no photos, by design.

### Design and mobile
- Header brand is now an "AN" logo badge (muted green rounded square), labelled "Ajmal Naizam, home" for screen readers. The footer still shows the full name.
- Hero: soft green-tinted background, "in UAE" in the green accent (no-wrap), second outline button "View services" next to "Get in touch", photo vertically centred and right-aligned.
- Phone block in `style.css` (max-width 699px): 44 px tap targets, tighter section spacing, smaller portrait, 16:10 service card images. No horizontal overflow on any of the 17 pages at 360 px.

### Theme update (dark charcoal + serif headings)
- Site is now dark: background `#1B1F1D`, cards `#242A27`, text `#ECEAE4`, light-green text accent `#8FB79E`; buttons and the "AN" logo keep the solid green `#4F6F5A` (`--accent-solid`). `theme-color` meta updated on all pages.
- Headings use Fraunces (Google Fonts, loaded on all 17 pages); body, nav, buttons and footer labels stay Inter.
- Home hero is edge to edge (content width limit removed, responsive side padding); every other section keeps the 1100 px width, so the header and hero edges no longer line up.
- Only the home, contact and CRM service pages were viewed after the change. Check About, blog posts, testimonials, certifications and the FAQ in the dark theme.

### Keywords
- Primary: "best digital marketing expert in UAE" appears 6 times as visible text on the home page (section heading and intro, FAQ question and answer, closing line, contact line), written as a "how to choose" guide so it makes no claim that Ajmal is the best. H1, titles and meta descriptions were NOT changed.
- Secondary, one natural sentence each: SEO = "SEO expert in UAE" / "local SEO"; Google Business Profile = "Google Business Profile optimisation in the UAE"; Content Writing = "SEO content writing in the UAE"; Analytics = "web analytics and reporting in the UAE"; Website Audits = "website SEO audits in the UAE"; CRM = "CRM setup for small businesses in the UAE"; AI Automation = "AI workflow automation in the UAE"; About = "digital marketing specialist in the UAE"; Contact = "digital marketing consultation in the UAE"; Services index = "digital marketing services for small businesses in the UAE"; Blog index = "digital marketing blog for UAE small businesses".
- E-E-A-T work: author meta on all pages, linked bylines and author boxes on blog posts, fuller Person schema on About, contact block on About.

## Key decisions
- Certification titles, years and verify links were never supplied, so only provider names are shown and there are no "Verify" links.
- Meta descriptions were kept unchanged even though the Analytics & Reporting description (and its social copies and structured data) still says "GA4 and Search Console". This conflicts with "remove off-list tools"; the owner has not yet decided which rule wins.
- Photo covers replaced the earlier SVG illustrations; repeats of one image across the card, index card and page header of the same item are allowed.
- The CRM blog image replaced the cover rather than going after the intro paragraph, because the owner did not say where; this can be moved.
- Blog post og:image / twitter:image still use the general `og-image.png`; they were not pointed at the new covers.

## Left to do / open questions
- Decide the Analytics & Reporting meta description conflict (GA4 / Search Console).
- Send certification titles, years and any verification URLs, then add them (with "Verify" links opening in a new tab, `rel="noopener noreferrer"`).
- Optionally point each blog post's og:image and twitter:image at its own cover, using the absolute URL format.
- Optionally make the favicon (`favicon.svg`) match the "AN" logo, and the footer name.
- Optionally shorten the home page on phones (about 9,000 px tall at 360 px): hide card images on phones or use a compact services list.
- Replace every `https://YOUR-DOMAIN.com` with the real domain (canonicals, og:url, og:image, JSON-LD, `sitemap.xml`, `robots.txt`). See `TODO-before-launch.md` for the full launch checklist (Web3Forms test, privacy wording, Search Console, Lighthouse, real-phone test).
- Unused files in `assets/images/` that can be deleted if not wanted: `ai-for-small-business.webp`, `blog-marketing-strategy.webp`, `service-crm-laptop.webp`, `workflow-setup.webp`, `uae-marina-night.webp` (kept only as the og-image source), and the five SVGs (`blog-ai-automation`, `blog-crm-pipeline`, `service-ai-automation`, `service-google-business-profile`, `service-website-audit`).
- Missing images the owner planned to add later: `contact-burj-dusk`, `service-audit-desk`.
- Review all changes, then commit and push (the owner does this).

## Start the next session with
"Read NOTES.md and continue from there."
