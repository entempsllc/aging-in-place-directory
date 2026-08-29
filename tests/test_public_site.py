from pathlib import Path
import json
import re
import unittest

ROOT = Path(__file__).resolve().parents[1]
LEGAL_PAGES = ("about.html", "contact.html", "privacy.html", "terms.html", "editorial-policy.html", "corrections.html")


class PublicSitePolicyTests(unittest.TestCase):
    def public_html(self):
        return [p for p in ROOT.rglob("*.html") if p.name != "admin.html" and "tests" not in p.parts]

    def test_policy_pages_exist(self):
        for name in LEGAL_PAGES:
            self.assertTrue((ROOT / name).exists(), name)

    def test_all_public_pages_link_to_policies(self):
        for page in self.public_html():
            text = page.read_text(encoding="utf-8")
            for name in LEGAL_PAGES:
                self.assertIn(name, text, f"{page.relative_to(ROOT)} missing {name}")

    def test_local_fragment_links_target_existing_ids(self):
        for page in self.public_html():
            text = page.read_text(encoding="utf-8")
            for href in re.findall(r'href=["\']([^"\']+#[^"\']+)', text):
                if href.startswith(("http://", "https://", "mailto:", "tel:")):
                    continue
                path_part, fragment = href.split("#", 1)
                if not fragment:
                    continue
                if path_part:
                    target = (page.parent / path_part).resolve()
                    if target.is_dir():
                        target = target / "index.html"
                else:
                    target = page
                self.assertTrue(target.exists(), f"{page.relative_to(ROOT)} links to missing {href}")
                target_text = target.read_text(encoding="utf-8")
                self.assertRegex(
                    target_text,
                    rf'id=["\']{re.escape(fragment)}["\']',
                    f"{page.relative_to(ROOT)} links to missing fragment {href}",
                )

    def test_sitemap_includes_policy_pages(self):
        sitemap = (ROOT / "sitemap.xml").read_text(encoding="utf-8")
        for name in LEGAL_PAGES:
            self.assertIn(name, sitemap)

    def test_ads_txt_declares_the_configured_publisher(self):
        ads = (ROOT / "ads.txt").read_text(encoding="utf-8")
        self.assertEqual(
            ads.strip(),
            "google.com, pub-9251992510412646, DIRECT, f08c47fec0942fa0",
        )

    def test_unsupported_trust_claims_are_removed(self):
        for page in self.public_html():
            text = page.read_text(encoding="utf-8").lower()
            self.assertNotIn("find trusted local", text, page)
            self.assertNotIn("helping families find trusted", text, page)

    def test_public_admin_is_noindex(self):
        admin = (ROOT / "admin.html").read_text(encoding="utf-8").lower()
        self.assertIn('name="robots"', admin)
        self.assertIn("noindex", admin)
        self.assertIn("public-host-disabled", admin)
        self.assertNotIn("aip2026", admin)
        self.assertNotIn("836646a391205aefe9c2d93226e12192899477c982d7488d901d8844db6b7a11", admin)

    def test_readme_does_not_publish_default_password(self):
        readme = (ROOT / "README.md").read_text(encoding="utf-8").lower()
        self.assertNotIn("default password", readme)
        self.assertNotIn("aip2026", readme)

    def test_public_pages_do_not_ship_the_full_listing_database(self):
        for page in self.public_html():
            text = page.read_text(encoding="utf-8")
            self.assertNotIn('src="listings-data.js"', text, page)
            self.assertNotIn('src="../listings-data.js"', text, page)

        config = (ROOT / "_config.yml").read_text(encoding="utf-8")
        for excluded in ("admin.html", "audits", "listings-data.js", "scripts", "tests"):
            self.assertIn(f"  - {excluded}", config)

        for payload in (ROOT / "data").glob("*.js"):
            text = payload.read_text(encoding="utf-8")
            self.assertNotIn('"rating"', text, payload)
            self.assertNotIn('"reviews"', text, payload)

    def test_each_city_loads_only_its_own_listing_data(self):
        for page in self.public_html():
            text = page.read_text(encoding="utf-8")
            if "data-city=" not in text:
                continue
            slug = text.split('data-city="', 1)[1].split('"', 1)[0]
            expected = ROOT / "data" / f"{slug}.js"
            self.assertTrue(expected.exists(), expected)
            self.assertIn(f'../data/{slug}.js', text, page)

    def test_city_pages_explain_listing_methodology(self):
        for page in self.public_html():
            text = page.read_text(encoding="utf-8")
            if "data-city=" not in text:
                continue
            self.assertIn('class="directory-note"', text, page)
            self.assertIn('../editorial-policy.html', text, page)
            self.assertNotIn('Every listing includes ratings and direct contact details.', text, page)
            self.assertNotIn('"@type": "Service"', text, page)
            self.assertIn('"@type": "CollectionPage"', text, page)

    def test_search_console_priority_pages_include_official_local_resources(self):
        nashville = (ROOT / "tn" / "nashville.html").read_text(encoding="utf-8")
        for url in (
            "https://www.tn.gov/commerce/regboards/contractors.html",
            "https://search.cloud.commerce.tn.gov/",
            "https://www.tn.gov/disability-and-aging/services.html",
            "https://www.tn.gov/disability-and-aging/disability-aging-programs/housing-innovation.html",
            "https://www.tn.gov/disability-and-aging/about-us/contact-information/other-helpful-numbers.html",
            "https://www.nashville.gov/departments/codes/construction-and-permits",
        ):
            self.assertIn(url, nashville)
        wilmington = (ROOT / "nc" / "wilmington.html").read_text(encoding="utf-8")
        for url in (
            "https://portal.nclbgc.org/Public/Search",
            "https://capefearcog.gov/aging/",
            "https://www.nhcgov.com/191/Adult-Enhancement-Services-Division-AES",
        ):
            self.assertIn(url, wilmington)

    def test_nashville_search_visitors_can_reach_and_attribute_quote_requests(self):
        nashville = (ROOT / "tn" / "nashville.html").read_text(encoding="utf-8")
        self.assertIn('href="#get-quotes">Request local quotes</a>', nashville)
        self.assertIn('id="get-quotes"', nashville)
        self.assertIn(
            'name="source_page" value="https://www.agingracefully.care/tn/nashville.html"',
            nashville,
        )
        self.assertIn("We will review the request", nashville)
        self.assertNotIn("a local provider will reach out shortly", nashville)
        self.assertNotIn("usually within one business day", nashville)

    def test_wilmington_grab_bar_searchers_get_service_selection_guidance(self):
        wilmington = (ROOT / "nc" / "wilmington.html").read_text(encoding="utf-8")
        self.assertIn('id="choosing-grab-bar-installer"', wilmington)
        self.assertIn("Who installs grab bars for seniors?", wilmington)
        self.assertIn("straightforward installation", wilmington)
        self.assertIn("opening a tiled wall", wilmington)
        self.assertIn("occupational therapist", wilmington)
        self.assertIn(
            "https://www.aarp.org/livable-communities/housing/info-2020/homefit-guide.html",
            wilmington,
        )
        self.assertIn("https://portal.nclbgc.org/Public/Search", wilmington)
        self.assertIn("We will review the request", wilmington)
        self.assertNotIn("a local provider will reach out shortly", wilmington)
        self.assertNotIn("usually within one business day", wilmington)

    def test_las_vegas_grab_bar_searchers_get_local_selection_guidance(self):
        las_vegas = (ROOT / "nv" / "las-vegas.html").read_text(encoding="utf-8")
        self.assertIn("Grab Bar Installers for Seniors in Las Vegas, NV", las_vegas)
        self.assertIn('id="choosing-las-vegas-grab-bar-installer"', las_vegas)
        self.assertIn("Who installs grab bars for seniors in Las Vegas?", las_vegas)
        self.assertIn("same wall material", las_vegas)
        self.assertIn("occupational therapist", las_vegas)
        for url in (
            "https://app.nvcontractorsboard.com/Clients/NVSCB/Public/ContractorLicenseSearch/ContractorLicenseSearch.aspx",
            "https://www.nvcontractorsboard.com/resources/handyman-exemptions/",
            "https://adsd.nv.gov/",
        ):
            self.assertIn(url, las_vegas)
        self.assertIn(
            'name="source_page" value="https://www.agingracefully.care/nv/las-vegas.html"',
            las_vegas,
        )
        self.assertIn("We will review the request", las_vegas)
        self.assertNotIn("a local provider will reach out shortly", las_vegas)
        self.assertNotIn("usually within one business day", las_vegas)

    def test_daily_living_guide_has_real_decision_support_not_fake_shop_links(self):
        guide = (ROOT / "guides" / "daily-living.html").read_text(encoding="utf-8")
        self.assertNotIn('href="#" rel="nofollow sponsored"', guide)
        self.assertIn('id="choosing-help"', guide)
        self.assertIn("Match the task to the right kind of help", guide)
        self.assertIn("Questions to ask before hiring daily-living help", guide)

    def test_homepage_describes_current_directory_scope_accurately(self):
        home = (ROOT / "index.html").read_text(encoding="utf-8")
        self.assertIn("35 U.S. cities", home)
        self.assertNotIn("across Texas and North Carolina", home)
        self.assertNotIn("Nearly 9 in 10", home)
        self.assertNotIn("Every city page lists", home)

    def test_sponsored_profile_pilot_is_available_across_all_locations(self):
        offer = (ROOT / "sponsored-profile.html").read_text(encoding="utf-8")
        home = (ROOT / "index.html").read_text(encoding="utf-8")
        city_hrefs = re.findall(r'class="city-link" href="([^"]+\.html)"', home)
        self.assertEqual(len(city_hrefs), 35)
        self.assertIn('href="sponsored-profile.html"', home)
        for href in city_hrefs:
            self.assertIn(f'href="{href}"', offer, href)
        self.assertIn("all 35 supported locations", offer)

    def test_every_city_page_links_to_the_sponsored_profile_pilot(self):
        city_pages = [p for p in self.public_html() if "data-city=" in p.read_text(encoding="utf-8")]
        self.assertEqual(len(city_pages), 35)
        for page in city_pages:
            self.assertIn('href="../sponsored-profile.html"', page.read_text(encoding="utf-8"), page)

    def test_sponsored_profile_pilot_terms_are_explicit_and_non_misleading(self):
        offer = (ROOT / "sponsored-profile.html").read_text(encoding="utf-8")
        for term in (
            "$75 one-time pilot price",
            "30 consecutive days",
            "first three qualified providers",
            "No automatic renewal",
            "does not guarantee impressions, clicks, inquiries, leads, rankings, appointments, or sales",
            "Payment affects presentation and prominence",
            "does not imply endorsement, verification, availability, or guaranteed results",
            "Basic listings and factual corrections remain free",
        ):
            self.assertIn(term, offer)
        self.assertIn("<code>nofollow sponsored</code>", offer)
        self.assertNotIn("verified provider", offer.lower())
        self.assertNotIn("guaranteed leads", offer.lower())

    def test_sponsored_profile_inquiry_has_privacy_minimal_source_attribution(self):
        offer = (ROOT / "sponsored-profile.html").read_text(encoding="utf-8")
        self.assertIn("Pilot%20source%3A%20all-35-cities", offer)
        self.assertIn("Sponsored%20Enhanced%20Profile%20Pilot%20Inquiry", offer)
        self.assertIn("No payment is collected on this page", offer)
        self.assertNotIn("utm_", offer.lower())

    def test_public_pages_have_no_dead_sponsored_product_links(self):
        for page in self.public_html():
            text = page.read_text(encoding="utf-8")
            self.assertNotIn('href="#" rel="nofollow sponsored"', text, page)
            self.assertNotIn('class="ad-slot"', text, page)
            self.assertNotIn("pagead2.googlesyndication.com", text, page)
            self.assertNotIn("CAPS-certified", text, page)
            self.assertNotIn("CAPS remodelers", text, page)

    def test_guides_show_provenance_and_authoritative_sources(self):
        for page in (ROOT / "guides").glob("*.html"):
            text = page.read_text(encoding="utf-8")
            self.assertIn('class="byline"', text, page)
            self.assertIn('"author":', text, page)
            self.assertIn('"datePublished": "2026-07-09"', text, page)
            self.assertIn('"dateModified": "2026-07-20"', text, page)
            self.assertIn("Sources and review notes", text, page)
            self.assertIn("../about.html", text, page)
            self.assertGreaterEqual(text.count('rel="noopener" target="_blank"'), 4, page)

    def test_city_pages_show_review_and_hiring_guidance(self):
        unsupported_phrases = (
            "fastest-growing retirement",
            "lowest aging-in-place modification costs",
            "one of America's strongest stairlift markets",
            "most generous home-modification",
            "provider pool is deep",
            "competition here works in your favor",
        )
        for page in self.public_html():
            text = page.read_text(encoding="utf-8")
            if "data-city=" not in text:
                continue
            self.assertIn('class="data-freshness"', text, page)
            self.assertIn("Five checks before hiring", text, page)
            self.assertRegex(text, r'"dateModified": "2026-(07-(20|25)|08-(26|29))"', page)
            self.assertIn("Treat each listing as a research lead", text, page)
            self.assertNotIn("generally track national ranges", text, page)
            self.assertNotIn("yearly home-safety allowance", text, page)
            for phrase in unsupported_phrases:
                self.assertNotIn(phrase, text, page)

    def test_only_curated_city_pages_are_indexed(self):
        curated = {"nc/wilmington.html", "tn/nashville.html"}
        sitemap = (ROOT / "sitemap.xml").read_text(encoding="utf-8")
        city_pages = [p for p in self.public_html() if "data-city=" in p.read_text(encoding="utf-8")]
        self.assertEqual(len(city_pages), 35)
        for page in city_pages:
            rel = page.relative_to(ROOT).as_posix()
            text = page.read_text(encoding="utf-8")
            url = f"https://www.agingracefully.care/{rel}"
            if rel in curated:
                self.assertNotIn('content="noindex,follow"', text, page)
                self.assertNotIn("pagead2.googlesyndication.com", text, page)
                self.assertIn(url, sitemap)
            else:
                self.assertIn('<meta name="robots" content="noindex,follow">', text, page)
                self.assertIn("Aging-in-Place Services and Planning", text, page)
                self.assertIn("Research leads and practical planning guidance", text, page)
                self.assertNotIn("Aging in Place Contractors in", text, page)
                self.assertNotIn("pagead2.googlesyndication.com", text, page)
                self.assertNotIn('class="ad-slot"', text, page)
                self.assertNotIn(url, sitemap)

    def test_custom_404_is_non_monetized_and_not_indexable(self):
        text = (ROOT / "404.html").read_text(encoding="utf-8")
        self.assertIn('<meta name="robots" content="noindex,follow">', text)
        self.assertNotIn("pagead2.googlesyndication.com", text)
        self.assertNotIn("https://www.agingracefully.care/404.html", (ROOT / "sitemap.xml").read_text(encoding="utf-8"))

    def test_publisher_identity_and_ads_txt_are_present(self):
        about = (ROOT / "about.html").read_text(encoding="utf-8")
        self.assertIn("operated by EnTemps LLC", about)
        self.assertIn("How directory information is handled", about)
        self.assertIn("How guides are prepared", about)
        self.assertIn("entempsllc@gmail.com", about)
        for page in self.public_html():
            self.assertNotIn("info@entempsllc.com", page.read_text(encoding="utf-8"), page)
        ads = (ROOT / "ads.txt").read_text(encoding="utf-8").strip()
        self.assertEqual(ads, "google.com, pub-9251992510412646, DIRECT, f08c47fec0942fa0")

    def test_all_json_ld_is_valid_json(self):
        pattern = re.compile(
            r'<script[^>]*type="application/ld\+json"[^>]*>(.*?)</script>',
            re.IGNORECASE | re.DOTALL,
        )
        block_count = 0
        for page in self.public_html():
            for block in pattern.findall(page.read_text(encoding="utf-8")):
                block_count += 1
                try:
                    json.loads(block)
                except json.JSONDecodeError as exc:
                    self.fail(f"{page.relative_to(ROOT)} has invalid JSON-LD: {exc}")
        self.assertGreaterEqual(block_count, 80)


if __name__ == "__main__":
    unittest.main()
