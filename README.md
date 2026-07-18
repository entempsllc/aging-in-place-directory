# Aging Gracefully (agingracefully.care) — Deploy & Launch Guide

One national site, city pages. Same engine as your five directory sites, inverted: one niche, many cities.

---

## What's in this folder

| File | Purpose |
|---|---|
| `index.html` | National homepage — room navigator, city grid, family guide, affiliate section |
| `tx/*.html`, `nc/*.html` | 35 city pages: your 10 launch cities plus the 25 largest US metros (NYC, LA, Chicago, Houston, Phoenix, Philadelphia, San Antonio, San Diego, Dallas, Jacksonville, Fort Worth, Columbus, Charlotte, Indianapolis, San Francisco, Austin, Seattle, Denver, OKC, Nashville, DC, El Paso, Las Vegas, Boston, San Jose) |
| `listings-data.js` | Canonical provider-data source edited by maintainers; `node scripts/split-listings.js` generates the smaller `data/<city-slug>.js` payload loaded by each public city page |
| `site.js` | Renders listings safely, injects neutral Organization ItemList schema, and handles the submit modal |
| `styles.css` | Shared stylesheet (senior-accessible: large type, high contrast, Atkinson Hyperlegible font) |
| `admin.html` | Internal Places API data-preparation tool. The public page is marked `noindex`; do not store a working password or unrestricted API key in this repository. Prefer running the tool locally with a restricted key. |
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

1. Work from a local clone; the tool intentionally disables itself on the public website.
2. In an uncommitted local copy of `admin.html`, set `PW_HASH` to the SHA-256 hash of a private password. Never commit the password or working hash.
3. Open the local `admin.html`, enter that password, then paste a **restricted Google Places API key**. Enable "Places API (New)" and restrict the key to only the APIs and origins needed for this local workflow.
4. Pick a city → **Fetch listings**. It runs 11 searches (grab bars, walk-in tubs, stairlifts, ramps, remodeling, home health, senior home care, senior transportation, senior centers, adult day care, elder law), de-duplicates, and outputs a paste-ready block.
5. Review every result for category relevance, service area, duplicates, and current contact details before replacing the matching array in `listings-data.js`.
6. Run `node scripts/split-listings.js`, then run the tests before committing.

The tool makes approximately 11 Places API requests per city. Review current Google Maps Platform pricing, quotas, and billing controls before running a batch; free usage and prices can change.

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

To add a city: copy an existing city page, update the city/county/slug, add genuinely useful local information and sources (not just city-name substitutions), add the slug to `listings-data.js` and the dropdown in `admin.html`, add links on `index.html` + footer + `sitemap.xml`, review the provider data for relevance and accuracy, then push. Do not publish a city page until it offers material value beyond a generic template.

Priority expansion targets: Prosper, Celina, Plano TX; Southport, Hampstead NC — all adjacent to cities already covered, so providers overlap and pages interlink naturally.
