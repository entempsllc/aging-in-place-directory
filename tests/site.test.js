const fs = require('fs');
const vm = require('vm');
const assert = require('assert');

const container = { innerHTML: '' };
let injectedSchema = null;
const documentStub = {
  body: { dataset: { city: 'test-city', cityname: 'Test City', state: 'TX' } },
  head: { appendChild(node) { injectedSchema = node; } },
  getElementById(id) {
    if (id === 'listings') return container;
    if (id === 'itemlist-schema') return injectedSchema;
    return null;
  },
  querySelectorAll() { return []; },
  createElement() {
    return {
      type: '',
      id: '',
      textContent: '',
      remove() { if (injectedSchema === this) injectedSchema = null; },
    };
  },
  addEventListener() {},
};

const context = {
  document: documentStub,
  window: { location: { href: '' } },
  LISTINGS: {
    'test-city': [{
      name: '<img src=x onerror=alert(1)>',
      address: '<script>alert(2)</script>',
      phone: '(555) 123-4567',
      website: 'https://example.com/?q=<unsafe>',
      rating: 4.9,
      reviews: 100,
      cats: ['legal', '<img src=x onerror=alert(3)>'],
    }, {
      name: 'No Rating Provider',
      address: '1 Main St',
      phone: '',
      website: '',
      rating: null,
      reviews: null,
      cats: ['legal'],
    }],
  },
  console,
};
vm.createContext(context);
vm.runInContext(fs.readFileSync('site.js', 'utf8'), context);
context.renderListings('all');

assert(!container.innerHTML.includes('<img'), 'listing names must be escaped');
assert(!container.innerHTML.includes('<script'), 'listing addresses must be escaped');
assert(container.innerHTML.includes('&lt;img'), 'escaped listing text should remain visible');
assert(!container.innerHTML.includes('★ 0.0'), 'a missing rating must not render as a zero-star rating');
assert.strictEqual((container.innerHTML.match(/class="rating"/g) || []).length, 1, 'only listings with real ratings should show rating badges');
assert(injectedSchema, 'an ItemList schema should be injected');
const schema = JSON.parse(injectedSchema.textContent);
assert.strictEqual(schema['@type'], 'ItemList');
assert.strictEqual(schema.itemListElement[0].item['@type'], 'Organization');
assert(!('aggregateRating' in schema.itemListElement[0].item), 'directory must not claim review rich-result markup');
assert(!container.innerHTML.includes('<img'), 'unknown category text must be escaped');
assert.strictEqual(context.safeWebsiteUrl('javascript:alert(1)'), '', 'javascript URLs must be blocked');
assert.strictEqual(context.safeWebsiteUrl('data:text/html,<script>alert(1)</script>'), '', 'data URLs must be blocked');

context.renderListings('bathroom');
assert.strictEqual(injectedSchema, null, 'an empty category filter must remove stale ItemList schema');
assert(container.innerHTML.includes('empty-note'), 'an empty category filter should show the empty state');

console.log('site.js behavior tests passed');
