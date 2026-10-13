#!/usr/bin/env node
/* Bake each city's listings into its static HTML so crawlers that do not run
   JavaScript (Bing, Pinterest, AI crawlers, slow Google renders) see the
   providers. site.js still re-renders on load for the category filters and
   produces identical markup, so visitors see no change.

   Runs automatically at the end of scripts/split-listings.js. Can also be run
   on its own: node scripts/prerender-listings.js */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');

// Keep in sync with CAT_LABELS in site.js.
const CAT_LABELS = {
  bathroom: 'Grab Bars & Bathroom Safety',
  tubs: 'Walk-In Tubs & Showers',
  stairs: 'Stairlifts & Ramps',
  remodel: 'Whole-Home Remodelers',
  homecare: 'Home Care & Daily Living Help',
  transport: 'Senior & Medical Transportation',
  social: 'Senior Centers & Day Programs',
  legal: 'Elder Law & Financial Help',
};

const START = '<!-- prerendered-listings:start -->';
const END = '<!-- prerendered-listings:end -->';
const SCHEMA_RE = /<script type="application\/ld\+json" id="itemlist-schema">[\s\S]*?<\/script>\n/;

function escapeHtml(value) {
  return String(value == null ? '' : value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Mirrors safeWebsiteUrl in site.js (absolute URLs only at build time).
function safeWebsiteUrl(value) {
  if (!value) return '';
  try {
    const parsed = new URL(value, 'https://www.agingracefully.care/');
    const hostname = parsed.hostname.toLowerCase().replace(/^www\./, '');
    const blocked = ['chaturbate.com'];
    const isBlocked = blocked.some(b => hostname === b || hostname.endsWith(`.${b}`));
    return (parsed.protocol === 'http:' || parsed.protocol === 'https:') && !isBlocked ? parsed.href : '';
  } catch (_) {
    return '';
  }
}

function renderItems(items, cityName) {
  if (!items.length) {
    return '<div class="empty-note"><strong>Listings coming soon for ' + escapeHtml(cityName) +
      '.</strong><br>Local providers: use the “Add Your Business” button above to request a free basic listing.</div>';
  }
  return items.map(l => {
    const websiteUrl = safeWebsiteUrl(l.website);
    const site = websiteUrl ? ' · <a href="' + escapeHtml(websiteUrl) + '" rel="nofollow noopener" target="_blank">Website</a>' : '';
    const phoneText = escapeHtml(l.phone || '');
    const phoneHref = String(l.phone || '').replace(/[^0-9+]/g, '');
    const tel = phoneHref ? '<a class="call" href="tel:' + phoneHref + '">' + phoneText + '</a>' : '';
    const cats = (l.cats || []).map(c => CAT_LABELS[c] || c).join(' · ');
    return '<article class="listing">' +
      '<h3>' + escapeHtml(l.name) + '</h3>' +
      '<div class="meta">' + escapeHtml(l.address || '') + '</div>' +
      '<div class="meta">' + tel + site + '</div>' +
      (cats ? '<div class="cats">' + escapeHtml(cats) + '</div>' : '') +
      '</article>';
  }).join('\n');
}

function itemListSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((l, i) => {
      const url = safeWebsiteUrl(l.website);
      return {
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Organization',
          name: String(l.name || ''),
          address: l.address ? String(l.address) : undefined,
          telephone: l.phone ? String(l.phone) : undefined,
          url: url || undefined,
        },
      };
    }),
  };
}

function loadPayload(slug) {
  const file = path.join(root, 'data', `${slug}.js`);
  const context = {};
  vm.createContext(context);
  vm.runInContext(`${fs.readFileSync(file, 'utf8')}\nthis.__L__ = LISTINGS;`, context);
  return context.__L__[slug] || [];
}

function prerenderPage(html, items) {
  const cityName = (html.match(/data-cityname="([^"]*)"/) || [])[1] || '';
  const inner = `${START}\n${renderItems(items, cityName)}\n${END}`;

  let out;
  if (html.includes(START)) {
    const s = html.indexOf(START);
    const e = html.indexOf(END, s);
    if (e < 0) throw new Error('Unterminated prerendered listings block');
    out = html.slice(0, s) + inner + html.slice(e + END.length);
  } else {
    const emptyDiv = /(<div class="listing-grid" id="listings">)\s*(<\/div>)/;
    if (!emptyDiv.test(html)) throw new Error('No empty #listings container found');
    out = html.replace(emptyDiv, `$1\n${inner}\n$2`);
  }

  out = out.replace(SCHEMA_RE, '');
  if (items.length) {
    const json = JSON.stringify(itemListSchema(items)).replace(/</g, '\\u003c');
    out = out.replace('</head>', `<script type="application/ld+json" id="itemlist-schema">${json}</script>\n</head>`);
  }
  return out;
}

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && !['.git', 'data', 'tests', 'scripts', 'audits', 'outreach', '.project-agent'].includes(entry.name)) return walk(full);
    return entry.isFile() && entry.name.endsWith('.html') ? [full] : [];
  });
}

function prerenderAll() {
  let pages = 0;
  let total = 0;
  for (const file of walk(root)) {
    if (path.basename(file) === 'admin.html') continue;
    const html = fs.readFileSync(file, 'utf8');
    const match = html.match(/<body[^>]*data-city="([^"]+)"/);
    if (!match) continue;
    const items = loadPayload(match[1]);
    fs.writeFileSync(file, prerenderPage(html, items));
    pages += 1;
    total += items.length;
  }
  return { pages, total };
}

module.exports = { prerenderPage, renderItems, prerenderAll };

if (require.main === module) {
  const { pages, total } = prerenderAll();
  console.log(`Prerendered ${total} listings into ${pages} city pages.`);
}
