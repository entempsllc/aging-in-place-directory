from pathlib import Path
import re
import unittest


ROOT = Path(__file__).resolve().parents[1]
STRIPE_URL = "https://buy.stripe.com/5kQ9AT9ouaj8g4p8tq38401"


class MonetizationFunnelTests(unittest.TestCase):
    def city_pages(self):
        pages = []
        for page in ROOT.rglob("*.html"):
            if "templates" in page.parts or "tests" in page.parts:
                continue
            text = page.read_text(encoding="utf-8")
            if re.search(r'<body[^>]+data-city="[^"]+"', text):
                pages.append((page, text))
        return pages

    def test_existing_city_monetization_is_preserved(self):
        pages = self.city_pages()
        self.assertEqual(len(pages), 48)
        for page, text in pages:
            self.assertEqual(text.count(STRIPE_URL), 1, page.relative_to(ROOT))
            self.assertEqual(text.count('<link rel="canonical"'), 1, page.relative_to(ROOT))

    def test_supported_quote_pages_have_one_attributable_truthful_funnel(self):
        pages = self.city_pages()
        supported = [(page, text) for page, text in pages if 'class="lead-form"' in text]
        unsupported = [(page, text) for page, text in pages if 'class="lead-form"' not in text]

        self.assertEqual(len(supported), 35)
        self.assertEqual(len(unsupported), 13)

        for page, text in supported:
            rel = page.relative_to(ROOT).as_posix()
            canonical = f"https://www.agingracefully.care/{rel}"
            self.assertEqual(text.count('href="#get-quotes"'), 1, rel)
            self.assertEqual(text.count('id="get-quotes"'), 1, rel)
            self.assertEqual(text.count('name="source_page"'), 1, rel)
            self.assertIn(f'name="source_page" value="{canonical}"', text, rel)
            self.assertIn(
                "Submission does not guarantee provider availability, contact, or a response.",
                text,
                rel,
            )
            self.assertNotIn("usually within one business day", text, rel)
            self.assertNotIn("a local provider will reach out shortly", text, rel)

        for page, text in unsupported:
            rel = page.relative_to(ROOT).as_posix()
            self.assertNotIn('href="#get-quotes"', text, rel)
            self.assertNotIn('id="get-quotes"', text, rel)
            self.assertNotIn('name="source_page"', text, rel)


if __name__ == "__main__":
    unittest.main()
