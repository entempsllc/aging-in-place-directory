const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const childProcess = require('child_process');

const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'listings-data.js'), 'utf8');
const context = {};
vm.createContext(context);
vm.runInContext(`${source}\nthis.__LISTINGS__ = LISTINGS;`, context);
const listings = context.__LISTINGS__;
const originalSource = childProcess.execFileSync('git', ['show', 'origin/main:listings-data.js'], {
  cwd: root,
  encoding: 'utf8',
  maxBuffer: 5 * 1024 * 1024
});
const originalContext = {};
vm.createContext(originalContext);
vm.runInContext(`${originalSource}\nthis.__LISTINGS__ = LISTINGS;`, originalContext);
const originalListings = originalContext.__LISTINGS__;
const audit = JSON.parse(fs.readFileSync(path.join(root, 'audits', 'listing-removals-2026-07-18.json'), 'utf8'));

assert.strictEqual(audit.before_count, 2690);
assert.strictEqual(audit.after_count, 2645);
assert.strictEqual(audit.removed_count, 45);
assert.strictEqual(audit.removals.length, 45);
assert.strictEqual(Object.values(listings).reduce((sum, items) => sum + items.length, 0), 2645);

for (const removal of audit.removals) {
  const remains = listings[removal.city_slug].some(item =>
    item.name === removal.record.name && item.address === removal.record.address
  );
  assert(!remains, `${removal.record.name} still exists in ${removal.city_slug}`);
  const originalRecord = JSON.parse(JSON.stringify(originalListings[removal.city_slug][removal.original_index]));
  assert.deepStrictEqual(originalRecord, removal.record, `${removal.record.name} original_index is inaccurate in ${removal.city_slug}`);
}

for (const [slug, items] of Object.entries(listings)) {
  const payloadContext = {};
  vm.createContext(payloadContext);
  vm.runInContext(`${fs.readFileSync(path.join(root, 'data', `${slug}.js`), 'utf8')}\nthis.__PAYLOAD__ = LISTINGS;`, payloadContext);
  assert.deepStrictEqual(
    JSON.parse(JSON.stringify(payloadContext.__PAYLOAD__[slug])),
    JSON.parse(JSON.stringify(items)),
    `${slug} payload differs from listings-data.js`
  );
}

assert(listings['san-diego-ca'].some(item => item.name === 'Aging-In-Place Remodeling'), 'local San Diego record must be retained');
assert(listings['houston-tx'].some(item => item.name === 'Lone Star Stairlifts - Greater Houston'), 'local Houston record must be retained');
assert(listings['mckinney-tx'].some(item => item.name === 'DFW Grab Bars'), 'local DFW record must be retained');

console.log('listing cleanup audit tests passed');
