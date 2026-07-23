/* Aging in Place Directory — shared page logic */

const CAT_LABELS = {
  bathroom: "Grab Bars & Bathroom Safety",
  tubs: "Walk-In Tubs & Showers",
  stairs: "Stairlifts & Ramps",
  remodel: "Whole-Home Remodelers",
  homecare: "Home Care & Daily Living Help",
  transport: "Senior & Medical Transportation",
  social: "Senior Centers & Day Programs",
  legal: "Elder Law & Financial Help"
};

function escapeHtml(value) {
  return String(value == null ? "" : value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function safeWebsiteUrl(value) {
  if (!value) return "";
  try {
    const parsed = new URL(value, window.location.href);
    const hostname = parsed.hostname.toLowerCase().replace(/^www\./, "");
    const blockedHosts = ["chaturbate.com"];
    const isBlockedHost = blockedHosts.some(blocked => hostname === blocked || hostname.endsWith(`.${blocked}`));
    return (parsed.protocol === "http:" || parsed.protocol === "https:") && !isBlockedHost
      ? parsed.href
      : "";
  } catch (_) {
    return "";
  }
}

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

  injectItemListSchema(items);

  if (!items.length) {
    container.innerHTML =
      '<div class="empty-note"><strong>Listings coming soon for ' +
      escapeHtml(body.dataset.cityname) +
      '.</strong><br>Local providers: use the “Add Your Business” button above to request a free basic listing.</div>';
    return;
  }

  container.innerHTML = items.map(l => {
    // Public payloads omit third-party ratings until their source, retrieval date,
    // attribution, and refresh cadence can be verified.
    const websiteUrl = safeWebsiteUrl(l.website);
    const site = websiteUrl ? ' · <a href="' + escapeHtml(websiteUrl) + '" rel="nofollow noopener" target="_blank">Website</a>' : '';
    const phoneText = escapeHtml(l.phone || "");
    const phoneHref = String(l.phone || "").replace(/[^0-9+]/g, '');
    const tel = phoneHref ? '<a class="call" href="tel:' + phoneHref + '">' + phoneText + '</a>' : '';
    const cats = (l.cats || []).map(c => CAT_LABELS[c] || c).join(' · ');
    return '<article class="listing">' +
      '<h3>' + escapeHtml(l.name) + '</h3>' +
      '<div class="meta">' + escapeHtml(l.address || '') + '</div>' +
      '<div class="meta">' + tel + site + '</div>' +
      (cats ? '<div class="cats">' + escapeHtml(cats) + '</div>' : '') +
      '</article>';
  }).join('');
}

/* JSON-LD ItemList of directory organizations. Ratings are intentionally omitted:
   directory pages are not first-party review pages for the listed organizations. */
function injectItemListSchema(items) {
  const old = document.getElementById("itemlist-schema");
  if (old) old.remove();
  if (!items.length) return;

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": items.map((l, i) => {
      const websiteUrl = safeWebsiteUrl(l.website);
      return {
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "Organization",
          "name": String(l.name || ""),
          "address": l.address ? String(l.address) : undefined,
          "telephone": l.phone ? String(l.phone) : undefined,
          "url": websiteUrl || undefined
        }
      };
    })
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

/* Submit Your Business modal → mailto entempsllc@gmail.com */
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
  window.location.href = "mailto:entempsllc@gmail.com?subject=" + subject + "&body=" + bodyTxt;
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
