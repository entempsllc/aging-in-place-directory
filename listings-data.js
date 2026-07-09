/* =========================================================
   AGING IN PLACE DIRECTORY — CENTRAL LISTINGS DATA
   =========================================================
   HOW TO POPULATE:
   1. Open admin.html in your browser (password protected).
   2. Enter your Google Places API key and pick a city.
   3. Click "Fetch listings" — the tool runs all category
      searches and outputs a ready-to-paste block.
   4. Paste that block into the matching city array below.
   5. Commit + push. Every city page reads from this file.

   Categories used across the site:
   "bathroom"  = Grab bars & bathroom safety
   "tubs"      = Walk-in tubs & showers
   "stairs"    = Stairlifts, ramps & lifts
   "remodel"   = CAPS / whole-home remodelers
   ========================================================= */

const LISTINGS = {
  "anna-tx": [],
  "melissa-tx": [],
  "fate-tx": [],
  "rockwall-tx": [],
  "mckinney-tx": [],
  "frisco-tx": [],
  "fulshear-tx": [],
  "katy-tx": [],
  "leland-nc": [],
  "wilmington-nc": [],
  "new-york-ny": [],
  "los-angeles-ca": [],
  "chicago-il": [],
  "houston-tx": [],
  "phoenix-az": [],
  "philadelphia-pa": [],
  "san-antonio-tx": [],
  "san-diego-ca": [],
  "dallas-tx": [],
  "jacksonville-fl": [],
  "fort-worth-tx": [],
  "columbus-oh": [],
  "charlotte-nc": [],
  "indianapolis-in": [],
  "san-francisco-ca": [],
  "austin-tx": [],
  "seattle-wa": [],
  "denver-co": [],
  "oklahoma-city-ok": [],
  "nashville-tn": [],
  "washington-dc": [],
  "el-paso-tx": [],
  "las-vegas-nv": [],
  "boston-ma": [],
  "san-jose-ca": []
};

/* ---------------------------------------------------------
   LISTING OBJECT FORMAT (what admin.html outputs):
   {
     name: "Business Name",
     address: "123 Main St, City, TX 75409",
     phone: "(972) 555-0100",
     website: "https://example.com",
     rating: 4.8,          // Google rating, or null
     reviews: 42,          // review count, or null
     cats: ["bathroom", "stairs"]   // one or more category keys
   }
   --------------------------------------------------------- */
