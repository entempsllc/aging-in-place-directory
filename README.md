# Aging Gracefully (agingracefully.care) — Deploy & Launch Guide

One national site, city pages. Same engine as your five directory sites, inverted: one niche, many cities.

---

## What's in this folder

| File | Purpose |
|---|---|
| `index.html` | National homepage — room navigator, city grid, family guide, affiliate section |
| `tx/*.html`, `nc/*.html` | 35 city pages: your 10 launch cities plus the 25 largest US metros (NYC, LA, Chicago, Houston, Phoenix, Philadelphia, San Antonio, San Diego, Dallas, Jacksonville, Fort Worth, Columbus, Charlotte, Indianapolis, San Francisco, Austin, Seattle, Denver, OKC, Nashville, DC, El Paso, Las Vegas, Boston, San Jose) |
| `listings-data.js` | ONE central data file — every city page reads from it |
| `site.js` | Renders listings, injects LocalBusiness ItemList schema, submit modal |
| `styles.css` | Shared stylesheet (senior-accessible: large type, high contrast, Atkinson Hyperlegible font) |
| `admin.html` | Password-protected admin with the Places API fetch tool. Default password: `aip2026!` — change the PW_HASH (instructions in the file) |
| `sitemap.xml`, `robots.txt` | Update the domain if you pick a different one |

**Domain:** all canonical URLs, schema, sitemap, and robots.txt are set to **www.agingracefully.care**. No find-and-replace needed.

---

## Deploy (your standard clone-copy-push pattern)

In Git Bash from `C:\Users\jaspa\OneDrive\Desktop`:

```bash
# 1. Create a new repo "aging-in-place-directory" under entempsllc on github.com first, then:
git clone https://github.com/entempsllc/aging-in-place-directory.git
cd aging-in-place-directory

# 2. Copy the contents of this folder into the repo folder (File Explorer is fine)

git add .
git commit -m "Launch aging in place directory"
git push
```

Then on GitHub: **Settings → Pages → Deploy from branch → main → root.**
At Namecheap, point the domain with the same A records / CNAME you used for the other five sites, and set the custom domain in GitHub Pages settings.

---

## Populate listings (no Python needed)

1. Open `admin.html` on the live site (or double-click it locally).
2. Enter password, paste your **Google Places API key** (enable "Places API (New)" in Google Cloud Console — it's a separate toggle from the old Places API. Add your domain to the key's website restrictions).
3. Pick a city → **Fetch listings**. It runs 11 searches (grab bars, walk-in tubs, stairlifts, ramps, remodeling, home health, senior home care, senior transportation, senior centers, adult day care, elder law), de-duplicates, and outputs a paste-ready block.
4. Paste the block over the matching empty array in `listings-data.js` (e.g. replace `"anna-tx": [],`).
5. Skim the results and delete anything that isn't a real provider. Commit + push.

Cost: ~11 API calls per city, ~385 total for all 35 cities — well inside Google's free monthly credit.

City pages show a "listings coming soon + add your business" note until their array is filled, so the site is safe to deploy immediately.

---

## Launch checklist (same playbook as the five directories)

1. **Google Search Console** — verify the domain, submit `sitemap.xml`.
2. **Populate all 10 cities** via admin.html (one sitting, ~30 minutes).
3. **AdSense** — apply once listings are in. Replace the two `.ad-slot` divs per page with your ad unit code.
4. **Amazon Associates** — the four product cards on the homepage have `href="#"` placeholders. Point them at Amazon search/category links with your tag: grab bars, non-slip bath mats, raised toilet seats, motion-sensor night lights. (Stairlifts and walk-in tubs are lead-gen plays later, not Amazon.)
5. **Backlinks (the easy ones for this niche):**
   - Area Agencies on Aging resource pages for Collin, Rockwall, Fort Bend, Brunswick, New Hanover counties
   - Senior center + council on aging resource lists in each city
   - Caregiver blogs and church senior-ministry pages (they link to local resource lists readily)
   - Cross-link from your five city directory sites (add an "Aging in Place Resources" link in their city services widget)
6. **Outreach flywheel** — email every fetched business: "You've been listed free at [URL] — reply to confirm your details." Confirmed businesses become your future paid/featured tier and often link back.

---

## Expansion

To add a city: copy any city page, find-and-replace the city/county/slug, write a unique 2-sentence intro (never duplicate — Google punishes it), add the slug to `listings-data.js` and the dropdown in `admin.html`, add links on `index.html` + footer + `sitemap.xml`, fetch listings, push. ~15 minutes per city once you've done one.

Priority expansion targets: Prosper, Celina, Plano TX; Southport, Hampstead NC — all adjacent to cities already covered, so providers overlap and pages interlink naturally.
