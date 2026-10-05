from pathlib import Path
import re
import unittest


ROOT = Path(__file__).resolve().parents[1]
NMAC_URL = "https://nevermissacall757.com/audit/"
RELEVANT_757 = {
    "va/chesapeake.html": "chesapeake-va",
    "va/norfolk.html": "norfolk-va",
    "va/suffolk.html": "suffolk-va",
    "va/virginia-beach.html": "virginia-beach-va",
}
LEGAL_PAGES = {
    "privacy.html",
    "terms.html",
    "editorial-policy.html",
    "corrections.html",
    "removal-policy.html",
}


class MonetizationHardeningTests(unittest.TestCase):
    def city_pages(self):
        pages = []
        for page in ROOT.rglob("*.html"):
            if "templates" in page.parts or "tests" in page.parts:
                continue
            text = page.read_text(encoding="utf-8")
            if re.search(r'<body[^>]+data-city="[^"]+"', text):
                pages.append((page.relative_to(ROOT).as_posix(), text))
        return pages

    def test_fake_analytics_placeholder_is_disabled(self):
        for page in ROOT.rglob("*.html"):
            text = page.read_text(encoding="utf-8")
            self.assertNotIn("G-XXXXXXXXXX", text, page.relative_to(ROOT))
        offer = (ROOT / "sponsored-profile.html").read_text(encoding="utf-8")
        self.assertNotIn("googletagmanager.com/gtag", offer)
        self.assertIn("typeof gtag === 'function'", offer)

    def test_sponsorship_offer_distinguishes_directory_and_pilot_coverage(self):
        offer = (ROOT / "sponsored-profile.html").read_text(encoding="utf-8")
        self.assertIn("48-city directory", offer)
        self.assertIn("35 sponsorship markets", offer)
        self.assertIn("Payment is requested only after qualification", offer)
        self.assertIn("Apply for a Sponsored Profile", offer)
        self.assertIn("$75 one-time pilot price", offer)

    def test_never_miss_a_call_is_limited_and_attributed_to_757_city_pages(self):
        pages = self.city_pages()
        self.assertEqual(len(pages), 48)
        for rel, text in pages:
            if rel in RELEVANT_757:
                self.assertEqual(text.count(NMAC_URL), 1, rel)
                self.assertIn("utm_source=agingracefully", text, rel)
                self.assertIn("utm_medium=directory_banner", text, rel)
                self.assertIn("utm_campaign=missed_lead_audit", text, rel)
                self.assertIn(f"utm_content={RELEVANT_757[rel]}", text, rel)
            else:
                self.assertNotIn(NMAC_URL, text, rel)
                self.assertIn("provider-business-cta", text, rel)
                self.assertIn("Learn about business listings and sponsored profiles", text, rel)
        city_template = (ROOT / "templates" / "city_page_template.html").read_text(encoding="utf-8")
        self.assertNotIn(NMAC_URL, city_template)
        self.assertIn("provider-business-cta", city_template)

    def test_legal_and_offer_pages_have_no_cross_promotion(self):
        for rel in LEGAL_PAGES | {"sponsored-profile.html"}:
            text = (ROOT / rel).read_text(encoding="utf-8")
            self.assertNotIn("nmac757-banner", text, rel)
            self.assertNotIn(NMAC_URL, text, rel)

    def test_homepage_has_quiet_paths_for_both_audiences(self):
        home = (ROOT / "index.html").read_text(encoding="utf-8")
        self.assertIn("For families", home)
        self.assertIn("Find Aging-in-Place Help Near You", home)
        self.assertIn("For businesses", home)
        self.assertIn("List or promote your aging-in-place business", home)
        self.assertNotIn("Home Modification Quote Comparison Kit", home)


if __name__ == "__main__":
    unittest.main()
