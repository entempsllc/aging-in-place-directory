/* Aging in Place Directory — shared page logic */

const CAT_LABELS = {
  bathroom: "Grab Bars & Bathroom Safety",
  tubs: "Walk-In Tubs & Showers",
  stairs: "Stairlifts & Ramps",
  remodel: "Whole-Home Remodelers",
  homecare: "Home Care & Daily Living Help",
  transport: "Senior & Medical Transportation",
  social: "Senior Centers & Day Programs",
  legal: "Elder Law & Financial Help",
  medicalequipment: "Medical Equipment",
  seniorliving: "Senior Living"
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

/* Render listings on a city page. Supports both attribute styles:
   - Old: <body data-city="anna-tx" data-cityname="Anna" data-state="TX">
   - New: <body data-city-slug="miami" data-state-slug="fl" data-city-display-name="Miami" data-state-display-name="Florida">
   Both use the same object-based LISTINGS["city-slug"] format. */
function renderListings(filterCat) {
  const body = document.body;
  const slug = body.dataset.city || (body.dataset.citySlug && body.dataset.stateSlug
    ? body.dataset.citySlug + "-" + body.dataset.stateSlug
    : null);
  if (!slug || typeof LISTINGS === "undefined") return;

  let items = LISTINGS[slug] || [];
  if (filterCat && filterCat !== "all") {
    items = items.filter(l => (l.cats || []).includes(filterCat));
  }

  const cityDisplayName = body.dataset.cityname || body.dataset.cityDisplayName || "";
  injectItemListSchema(items, cityDisplayName, slug);

  const container = document.getElementById("listings");
  if (!container) return;

  if (!items.length) {
    container.innerHTML =
      '<div class="empty-note"><strong>Listings coming soon for ' +
      escapeHtml(cityDisplayName) +
      '.</strong><br>Local providers: use the “Add Your Business” button above to request a free basic listing.</div>';
    return;
  }

  container.innerHTML = items.map(l => {
    const websiteUrl = safeWebsiteUrl(l.website);
    const isSponsored = l.is_sponsored || false;
    let relAttributes = "nofollow noopener";
    let sponsoredLabel = '';

    if (isSponsored) {
      relAttributes += " sponsored";
      sponsoredLabel = '<span class="sponsored-label">Sponsored</span>';
    }

    const site = websiteUrl ? ' · <a href="' + escapeHtml(websiteUrl) + '" rel="' + relAttributes + '" target="_blank">Website</a>' : '';
    const phoneText = escapeHtml(l.phone || "");
    const phoneHref = String(l.phone || "").replace(/[^0-9+]/g, '');
    const tel = phoneHref ? '<a class="call" href="tel:' + phoneHref + '">' + phoneText + '</a>' : '';
    const cats = (l.cats || []).map(c => CAT_LABELS[c] || c).join(' · ');

    return '<article class="listing">' +
      '<h3>' + escapeHtml(l.name) + (isSponsored ? ' ' + sponsoredLabel : '') + '</h3>' +
      '<div class="meta">' + escapeHtml(l.address || '') + '</div>' +
      '<div class="meta">' + tel + site + '</div>' +
      (cats ? '<div class="cats">' + escapeHtml(cats) + '</div>' : '') +
      '</article>';
  }).join('');
}

/* JSON-LD ItemList of directory organizations. Ratings are intentionally omitted:
   directory pages are not first-party review pages for the listed organizations. */
function injectItemListSchema(items, cityName, slug) {
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
    ? document.body.dataset.cityname + ", " + (document.body.dataset.state || "")
    : (document.body.dataset.cityDisplayName && document.body.dataset.stateDisplayName
      ? document.body.dataset.cityDisplayName + ", " + document.body.dataset.stateDisplayName
      : g("sb-city"));
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

/* ---- Lead capture form (homeowner quote requests) ---- */
var LEAD_ENDPOINT = "https://formspree.io/f/xykrakar";

function trackLeadFormSubmission() {
  if (typeof gtag === 'function') {
    gtag('event', 'lead_form_submission', {
      'event_category': 'engagement',
      'event_label': 'homeowner_quote_request'
    });
  }
}

function ensureLeadReference(form) {
  var input = form.querySelector('input[name="lead_reference"]');
  if (!input) {
    input = document.createElement("input");
    input.type = "hidden";
    input.name = "lead_reference";
    form.appendChild(input);
  }
  if (!input.value) {
    input.value = "ag-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 10);
  }
  return input.value;
}

document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector(".lead-form");
  if (!form) return;
  var card = form.closest(".lead-form-card");
  if (!card) return;
  var success = card.querySelector(".lead-success");
  var errorMsg = card.querySelector(".lead-error");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (errorMsg) errorMsg.hidden = true;
    ensureLeadReference(form);
    var data = new FormData(form);
    if (!LEAD_ENDPOINT) {
      var subject = "New lead - agingracefully.care (" + (data.get("city") || "") + ")";
      var lines = ["New quote request from agingracefully.care", ""];
      data.forEach(function (v, k) { if (v) lines.push(k + ": " + v); });
      window.location.href = "mailto:entempsllc@gmail.com?subject=" +
        encodeURIComponent(subject) + "&body=" + encodeURIComponent(lines.join("\n"));
      trackLeadFormSubmission();
      form.hidden = true; if (success) success.hidden = false; return;
    }
    var btn = form.querySelector(".lead-submit");
    btn.disabled = true; btn.textContent = "Sending...";
    fetch(LEAD_ENDPOINT, { method: "POST", body: data, headers: { "Accept": "application/json" } })
      .then(function (r) { if (!r.ok) throw 0; form.hidden = true; if (success) success.hidden = false; trackLeadFormSubmission(); })
      .catch(function () { if (errorMsg) errorMsg.hidden = false; btn.disabled = false; btn.textContent = "Request my free quotes"; });
  });
});

/* ---- Lead form: reveal a text box when "Something else" is chosen ---- */
document.addEventListener("DOMContentLoaded", function () {
  var proj = document.getElementById("lead-project");
  var wrap = document.getElementById("lead-other-wrap");
  var other = document.getElementById("lead-other");
  if (!proj || !wrap || !other) return;
  function sync() {
    var show = proj.value === "Something else";
    wrap.hidden = !show;
    other.required = show;
    if (!show) other.value = "";
  }
  proj.addEventListener("change", sync);
  sync();
});
