from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]
LEGAL_PAGES = ("privacy.html", "terms.html", "editorial-policy.html", "corrections.html")


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

    def test_sitemap_includes_policy_pages(self):
        sitemap = (ROOT / "sitemap.xml").read_text(encoding="utf-8")
        for name in LEGAL_PAGES:
            self.assertIn(name, sitemap)

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
            "https://www.tn.gov/disability-and-aging.html",
            "https://www.nashville.gov/departments/codes/construction-and-permits",
        ):
            self.assertIn(url, nashville)
        wilmington = (ROOT / "nc" / "wilmington.html").read_text(encoding="utf-8")
        for url in (
            "https://www.nclbgc.org/",
            "https://capefearcog.gov/aging/",
            "https://www.nhcgov.com/191/Adult-Enhancement-Services-Division-AES",
        ):
            self.assertIn(url, wilmington)

    def test_homepage_describes_current_directory_scope_accurately(self):
        home = (ROOT / "index.html").read_text(encoding="utf-8")
        self.assertIn("35 U.S. cities", home)
        self.assertNotIn("across Texas and North Carolina", home)
        self.assertNotIn("Nearly 9 in 10", home)
        self.assertNotIn("Every city page lists", home)


if __name__ == "__main__":
    unittest.main()
