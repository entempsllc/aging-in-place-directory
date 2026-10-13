const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { prerenderPage, renderItems } = require('../scripts/prerender-listings.js');

const root = path.resolve(__dirname, '..');
const items = [
  { name: 'A & B <Co>', address: '1 Main St', phone: '(757) 555-0100', website: 'https://example.com/', cats: ['bathroom', 'remodel'] },
  { name: 'No Site', phone: '', website: 'javascript:alert(1)', cats: [] },
];

// Static markup must match what site.js renders in the browser.
const container = { innerHTML: '' };
const context = {
  document: {
    body: { dataset: { city: 't-tx', cityname: 'T', state: 'TX' } },
    head: { appendChild() {} },
    getElementById: id => (id === 'listings' ? container : null),
    querySelectorAll: () => [],
    createElement: () => ({ remove() {} }),
    addEventListener() {},
  },
  window: { location: { href: 'https://www.agingracefully.care/tx/t.html' } },
  URL,
  LISTINGS: { 't-tx': items },
};
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(root, 'site.js'), 'utf8'), context);
context.renderListings('all');
assert.strictEqual(renderItems(items, 'T').replace(/\n/g, ''), container.innerHTML, 'prerendered markup must match site.js');
assert(!renderItems(items, 'T').includes('javascript:'), 'unsafe URLs must be dropped');
assert(renderItems([], 'T').includes('Listings coming soon for T'), 'empty cities get the same note as site.js');

// Idempotent and injects one ItemList schema.
const page = '<html><head></head><body data-city="t-tx" data-cityname="T"><div class="listing-grid" id="listings"></div></body></html>';
const once = prerenderPage(page, items);
const twice = prerenderPage(once, items);
assert.strictEqual(once, twice, 'prerender must be idempotent');
assert.strictEqual((once.match(/id="itemlist-schema"/g) || []).length, 1);
assert.strictEqual((once.match(/<article class="listing">/g) || []).length, 2);

// Every real city page ships its listings in static HTML.
function cityPages(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => {
    const full = path.join(dir, e.name);
    if (e.isDirectory() && /^[a-z]{2}$/.test(e.name)) return cityPages(full);
    return e.isFile() && e.name.endsWith('.html') ? [full] : [];
  });
}
for (const file of cityPages(root)) {
  const html = fs.readFileSync(file, 'utf8');
  const m = html.match(/<body[^>]*data-city="([^"]+)"/);
  if (!m) continue;
  assert(html.includes('<!-- prerendered-listings:start -->'), `${file} is missing prerendered listings; run node scripts/split-listings.js`);
}

console.log('prerender-listings tests passed');
