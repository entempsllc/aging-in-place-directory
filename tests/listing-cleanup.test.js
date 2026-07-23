const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'listings-data.js'), 'utf8');
const context = {};
vm.createContext(context);
vm.runInContext(`${source}\nthis.__LISTINGS__ = LISTINGS;`, context);
const listings = context.__LISTINGS__;
const audit = JSON.parse(fs.readFileSync(path.join(root, 'audits', 'listing-removals-2026-07-18.json'), 'utf8'));
const secondAudit = JSON.parse(fs.readFileSync(path.join(root, 'audits', 'proposed-listing-removals-2026-07-19.json'), 'utf8'));
const quarantine = JSON.parse(fs.readFileSync(path.join(root, 'audits', 'quarantined-listings-2026-07-19.json'), 'utf8'));
const qualityAudit = JSON.parse(fs.readFileSync(path.join(root, 'audits', 'listing-quality-corrections-2026-07-20.json'), 'utf8'));

assert.strictEqual(audit.before_count, 2690);
assert.strictEqual(audit.after_count, 2645);
assert.strictEqual(audit.removed_count, 45);
assert.strictEqual(audit.removals.length, 45);
assert.strictEqual(secondAudit.applied_summary.active_before, 2645);
assert.strictEqual(secondAudit.applied_summary.active_after, 2606);
assert.strictEqual(secondAudit.applied_summary.removed, 38);
assert.strictEqual(secondAudit.applied_summary.quarantined, 1);
assert.strictEqual(secondAudit.proposed_removals.length, 39);
assert.strictEqual(quarantine.records.length, 1);
assert.strictEqual(quarantine.records[0].record.name, 'Columbus Adult Daycare');
assert.strictEqual(qualityAudit.active_before, 2606);
assert.strictEqual(qualityAudit.active_after, 2528);
assert.strictEqual(qualityAudit.removed_count, 78);
assert.strictEqual(qualityAudit.reclassified_count, 10);
assert.strictEqual(Object.values(listings).reduce((sum, items) => sum + items.length, 0), 2528);

for (const removal of audit.removals) {
  const remains = listings[removal.city_slug].some(item =>
    item.name === removal.record.name && item.address === removal.record.address
  );
  assert(!remains, `${removal.record.name} still exists in ${removal.city_slug}`);
  assert(Number.isInteger(removal.original_index) && removal.original_index >= 0,
    `${removal.record.name} must retain a non-negative original_index`);
  assert(removal.reason && removal.evidence,
    `${removal.record.name} must retain removal reason and evidence`);
}

for (const removal of secondAudit.proposed_removals) {
  const remains = listings[removal.city_slug].some(item =>
    item.name === removal.record.name && item.address === removal.record.address
  );
  assert(!remains, `${removal.record.name} still exists in ${removal.city_slug}`);
  assert(['removed', 'quarantined'].includes(removal.action), `${removal.record.name} lacks an applied action`);
  assert(removal.reason && removal.evidence, `${removal.record.name} must retain reason and evidence`);
}

for (const removal of qualityAudit.removals) {
  const remains = listings[removal.city_slug].some(item =>
    item.name === removal.record.name && item.address === removal.record.address
  );
  assert(!remains, `${removal.record.name} still exists in ${removal.city_slug}`);
  assert(removal.reason, `${removal.record.name} must retain its removal reason`);
}

for (const correction of qualityAudit.reclassifications) {
  const current = listings[correction.city_slug].find(item =>
    item.name === correction.record.name && item.address === correction.record.address
  );
  assert(current, `${correction.record.name} must remain in ${correction.city_slug}`);
  assert.deepStrictEqual(
    JSON.parse(JSON.stringify(current.cats)),
    correction.new_categories,
    `${correction.record.name} categories differ from the correction audit`
  );
}

for (const [slug, items] of Object.entries(listings)) {
  const payloadContext = {};
  vm.createContext(payloadContext);
  vm.runInContext(`${fs.readFileSync(path.join(root, 'data', `${slug}.js`), 'utf8')}\nthis.__PAYLOAD__ = LISTINGS;`, payloadContext);
  const publicItems = items.map(({ rating, reviews, ...item }) => item);
  assert.deepStrictEqual(
    JSON.parse(JSON.stringify(payloadContext.__PAYLOAD__[slug])),
    JSON.parse(JSON.stringify(publicItems)),
    `${slug} payload differs from listings-data.js`
  );
}

assert(listings['san-diego-ca'].some(item => item.name === 'Aging-In-Place Remodeling'), 'local San Diego record must be retained');
assert(listings['houston-tx'].some(item => item.name === 'Lone Star Stairlifts - Greater Houston'), 'local Houston record must be retained');
assert(listings['mckinney-tx'].some(item => item.name === 'DFW Grab Bars'), 'local DFW record must be retained');

console.log('listing cleanup audit tests passed');
