# Google publisher-quality audit — agingracefully.care

**Audit date:** July 19, 2026  
**Remediation updated:** July 20, 2026  
**Repository:** `entempsllc/aging-in-place-directory`  
**Scope:** public site content, directory data, navigation, trust signals, privacy disclosures, structured data, and AdSense-facing inventory quality.

## Important limitation

No site owner can guarantee AdSense approval. Google makes the final decision and may consider account history, traffic, ad implementation, content, and signals unavailable in the public site or repository. This audit is designed to address observable risks before a review request.

The Search Console and AdSense account dashboards were not accessible in the audit browser because it was not signed in. The exact policy notice, affected URLs, consent-message status, and Search Console performance/indexing reports still need authenticated review.

## Current official Google requirements used

1. [Google Publisher Policies](https://support.google.com/adsense/answer/10502938) — Google-served ads are not allowed on screens without publisher content, with low-value content, on under-construction/navigation-only screens, or on screens with copied content that lacks added commentary, curation, or value. Pages must not contain more ads or paid promotion than publisher content.
2. [AdSense Program policies](https://support.google.com/adsense/answer/48182) — sites must be easy to navigate; deceptive navigation includes links to content that does not exist and redirects to irrelevant or misleading pages.
3. [Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) — content should benefit people, make authorship clear, explain how it was produced, provide a good page experience, and establish trust. Google says trust is the most important E-E-A-T element and gives stronger weight to trust for health, financial, and safety topics (YMYL).
4. [Google Publisher privacy disclosures](https://support.google.com/adsense/answer/10502938) — publishers must disclose data collection, sharing, and use caused by Google products, including cookies and other identifiers.

Google does not publish a universal minimum word count or page-count threshold. Quality, originality, usefulness, trust, navigation, and inventory value matter more than an arbitrary length.

## High-impact improvements implemented in the working branch

- Added a substantive `about.html` page identifying EnTemps LLC, the editorial team, directory methodology, limitations, correction process, and funding model.
- Added accurate authorship, review dates, and authoritative source sections to all five educational guides.
- Rewrote unsupported or overconfident medical, financial, legal, transportation, and safety claims into cautious, actionable guidance that directs readers to qualified professionals and official programs.
- Replaced dead `href="#"` sponsored/product buttons with real authoritative resources. This directly addresses deceptive links to nonexistent content.
- Replaced unsupported city-market superlatives and pseudo-local claims with an honest explanation of what the directory contains and how listings should be used.
- Added a five-point provider-screening checklist and official consumer/senior-service resources to all 35 city pages.
- Replaced unsupported generic price claims with a practical written-quote comparison process and cautious benefit guidance.
- Added visible content-review notes and `dateModified` structured data to city pages.
- Added `ads.txt` for publisher `pub-9251992510412646`.
- Added a runtime block for the discovered adult-content domain so the unsafe link is not rendered even before the underlying record is removed.
- Updated the public contact address to `entempsllc@gmail.com` throughout the site.
- Added automated tests for policy links, publisher identity, dead sponsored links, guide provenance, city-page review guidance, `ads.txt`, blocked unsafe URLs, and valid JSON-LD.

## Applied directory-risk controls

### Irrelevant and unsafe records

The owner approved the second-pass cleanup. **38 high-confidence category mismatches were removed from active listings**, and the Columbus Adult Daycare record was **quarantined** because its stored website pointed to an adult-content domain. The quarantined record is preserved in `audits/quarantined-listings-2026-07-19.json` pending identity and legitimate-website verification. Active listing count changed from 2,645 to 2,606.

A subsequent three-way review examined all 2,606 remaining active records city by city. It removed **78 additional high-confidence mismatches** and corrected the categories of **10 legitimate organizations** instead of deleting them. The final active count is **2,528**. The full record-level evidence is preserved in `audits/listing-quality-corrections-2026-07-20.json`.

### Rating provenance and freshness

Third-party ratings and review counts remain only in the canonical repository dataset, which Jekyll excludes from the deployed site. Generated public city payloads omit those fields entirely. They should remain unpublished unless a future workflow supplies the source, retrieval date, required attribution, source-profile link, and reliable refresh cadence.

### Scaled city-page inventory

Only the locally enriched Nashville and Wilmington city pages remain indexable. The other 33 city pages now use `noindex,follow` and are excluded from the sitemap. They remain available to users and can be reintroduced individually after substantive local research and provider verification. AdSense loaders and empty ad placeholders are disabled site-wide until publisher approval and certified-CMP requirements are verified.

## Remaining blockers before requesting an AdSense review

### 1. EEA/UK/Switzerland consent-message status

The repository contains advertising privacy disclosures but no active AdSense loader or locally implemented consent-management platform. A Google-certified CMP may be configured and injected from the AdSense account, which cannot be verified from this repository alone. Confirm the site’s European regulations message/CMP status before enabling ads.

### 2. Authenticated Google account review

Before submitting, inspect:

- the exact AdSense policy-center notice and affected URLs;
- consent-message status;
- Search Console indexing, manual actions, security issues, Core Web Vitals, and top landing pages;
- whether Google has recrawled the corrected pages and sitemap.

## Recommended review sequence

1. Deploy and confirm `https://www.agingracefully.care/ads.txt`, `about.html`, `contact.html`, guides, curated city pages, and sitemap return HTTP 200.
2. Confirm the 33 withheld city pages return HTTP 200 with `noindex,follow` and do not load AdSense.
3. Inspect key mobile and desktop pages and confirm no JavaScript errors or broken navigation.
4. Verify the certified CMP/European regulations message in AdSense.
5. Request indexing for the homepage, About and Contact pages, five guides, Nashville, and Wilmington; resubmit the reduced sitemap.
6. Wait for recrawl signals, then request the AdSense review from the Policy Center.
