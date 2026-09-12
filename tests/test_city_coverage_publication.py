from pathlib import Path
import re
import unittest

ROOT = Path(__file__).resolve().parents[1]
EXPECTED_NEW = {
    "chesapeake-va": "va/chesapeake.html",
    "virginia-beach-va": "va/virginia-beach.html",
    "norfolk-va": "va/norfolk.html",
    "suffolk-va": "va/suffolk.html",
    "richmond-va": "va/richmond.html",
    "alexandria-va": "va/alexandria.html",
    "roanoke-va": "va/roanoke.html",
    "saint-paul-mn": "mn/saint-paul.html",
}
EXISTING_HIDDEN = {
    "miami-fl": "fl/miami.html",
    "atlanta-ga": "ga/atlanta.html",
    "detroit-mi": "mi/detroit.html",
    "minneapolis-mn": "mn/minneapolis.html",
    "portland-or": "or/portland.html",
}


class CityCoveragePublicationTests(unittest.TestCase):
    def test_homepage_links_every_canonical_city_once(self):
        source = (ROOT / "listings-data.js").read_text(encoding="utf-8")
        city_keys = re.findall(r'^  "([a-z0-9-]+)": \[$', source, re.MULTILINE)
        self.assertEqual(len(city_keys), 48)

        home = (ROOT / "index.html").read_text(encoding="utf-8")
        links = re.findall(r'<a class="city-link" href="([^"]+)">', home)
        self.assertEqual(len(links), 48)
        self.assertEqual(len(set(links)), 48)
        for rel in {**EXPECTED_NEW, **EXISTING_HIDDEN}.values():
            self.assertEqual(links.count(rel), 1, rel)

    def test_new_city_pages_and_payloads_are_complete(self):
        sitemap = (ROOT / "sitemap.xml").read_text(encoding="utf-8")
        for key, rel in EXPECTED_NEW.items():
            page = ROOT / rel
            payload = ROOT / "data" / f"{key}.js"
            self.assertTrue(page.exists(), rel)
            self.assertTrue(payload.exists(), payload.name)
            text = page.read_text(encoding="utf-8")
            self.assertIn(f'data-city="{key}"', text)
            self.assertIn(f'../data/{key}.js', text)
            self.assertIn('<meta name="robots" content="noindex,follow">', text)
            self.assertNotIn(f"https://www.agingracefully.care/{rel}", sitemap)
            self.assertNotIn('href="#faq"', text)

    def test_new_city_records_exclude_stale_or_misclassified_entries(self):
        source = (ROOT / "listings-data.js").read_text(encoding="utf-8")
        for rejected in (
            "Home Instead Roanoke",
            "Sentara Obici Hospital - Senior Services",
            "Reico Kitchen & Bath Norfolk",
        ):
            self.assertNotIn(f'"name": "{rejected}"', source)
        self.assertIn('"website": "https://www.alexandriava.gov/older-adult-services/program/transportation"', source)
        self.assertIn('"phone": "(703) 746-5222"', source)
        self.assertIn('"website": "https://www.lifewaymobility.com/minneapolis/"', source)
        self.assertIn('"address": "1528 Cliff Rd E, Burnsville, MN 55337"', source)
        self.assertIn('"phone": "(952) 808-3646"', source)


if __name__ == "__main__":
    unittest.main()
