/* Aging in Place Directory — shared page logic */

const CAT_LABELS = {
  bathroom: "Grab Bars & Bathroom Safety",
  tubs: "Walk-In Tubs & Showers",
  stairs: "Stairlifts & Ramps",
  remodel: "CAPS & Whole-Home Remodelers",
  homecare: "Home Care & Daily Living Help",
  transport: "Senior & Medical Transportation",
  social: "Senior Centers & Day Programs",
  legal: "Elder Law & Financial Help"
};

/* Render listings on a city page. Expects:
   - <body data-city="anna-tx" data-cityname="Anna" data-state="TX">
   - a #listings container
   - optional category filter buttons with data-cat attributes */
function renderListings(filterCat) {
  const body = document.body;
  const slug = body.dataset.city;
  if (!slug || typeof LISTINGS === "undefined") return;

  const container = document.getElementById("listings");
  if (!container) return;

  let items = LISTINGS[slug] || [];
  if (filterCat && filterCat !== "all") {
    items = items.filter(l => (l.cats || []).includes(filterCat));
  }

  if (!items.length) {
    container.innerHTML =
      '<div class="empty-note"><strong>Verified listings coming soon for ' +
      body.dataset.cityname +
      '.</strong><br>Local providers: use the “Add Your Business” button above to be included free while the directory grows.</div>';
    return;
  }

  container.innerHTML = items.map(l => {
    const stars = l.rating ? '<span class="rating">★ ' + l.rating.toFixed(1) +
      (l.reviews ? ' (' + l.reviews + ' reviews)' : '') + '</span> · ' : '';
    const site = l.website ? ' · <a href="' + l.website + '" rel="nofollow noopener" target="_blank">Website</a>' : '';
    const tel = l.phone ? '<a class="call" href="tel:' + l.phone.replace(/[^0-9+]/g, '') + '">' + l.phone + '</a>' : '';
    const cats = (l.cats || []).map(c => CAT_LABELS[c] || c).join(' · ');
    return '<article class="listing">' +
      '<h3>' + l.name + '</h3>' +
      '<div class="meta">' + stars + (l.address || '') + '</div>' +
      '<div class="meta">' + tel + site + '</div>' +
      (cats ? '<div class="cats">' + cats + '</div>' : '') +
      '</article>';
  }).join('');

  injectItemListSchema(items);
}

/* JSON-LD ItemList of LocalBusiness — injected from live data */
function injectItemListSchema(items) {
  const old = document.getElementById("itemlist-schema");
  if (old) old.remove();
  if (!items.length) return;

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": items.map((l, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "HomeAndConstructionBusiness",
        "name": l.name,
        "address": l.address || undefined,
        "telephone": l.phone || undefined,
        "url": l.website || undefined,
        "aggregateRating": l.rating ? {
          "@type": "AggregateRating",
          "ratingValue": l.rating,
          "reviewCount": l.reviews || 1
        } : undefined
      }
    }))
  };
  const s = document.createElement("script");
  s.type = "application/ld+json";
  s.id = "itemlist-schema";
  s.textContent = JSON.stringify(schema);
  document.head.appendChild(s);
}

/* Category filter buttons */
function initFilters() {
  document.querySelectorAll("[data-cat]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-cat]").forEach(b => b.classList.remove("btn"));
      document.querySelectorAll("[data-cat]").forEach(b => b.classList.add("btn-outline", "btn"));
      btn.classList.remove("btn-outline");
      renderListings(btn.dataset.cat);
    });
  });
}

/* Submit Your Business modal → mailto info@entempsllc.com */
function openSubmit() {
  document.getElementById("submit-modal").classList.add("open");
}
function closeSubmit() {
  document.getElementById("submit-modal").classList.remove("open");
}
function sendSubmit() {
  const g = id => (document.getElementById(id) || {}).value || "";
  const city = document.body.dataset.cityname
    ? document.body.dataset.cityname + ", " + document.body.dataset.state
    : g("sb-city");
  const subject = encodeURIComponent("Directory Listing Request — " + g("sb-name"));
  const bodyTxt = encodeURIComponent(
    "Business name: " + g("sb-name") +
    "\nCity: " + city +
    "\nPhone: " + g("sb-phone") +
    "\nWebsite: " + g("sb-web") +
    "\nServices: " + g("sb-services") +
    "\n\nSubmitted via agingracefully.care"
  );
  window.location.href = "mailto:info@entempsllc.com?subject=" + subject + "&body=" + bodyTxt;
  closeSubmit();
}

document.addEventListener("DOMContentLoaded", () => {
  renderListings("all");
  initFilters();
  const backdrop = document.getElementById("submit-modal");
  if (backdrop) backdrop.addEventListener("click", e => {
    if (e.target === backdrop) closeSubmit();
  });
});
