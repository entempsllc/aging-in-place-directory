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

const centralOhioAgency = listings['columbus-oh'].find(item =>
  item.name === 'Central Ohio Area Agency on Aging' &&
  item.address === '3776 S High St, Columbus, OH 43207, USA'
);
assert(centralOhioAgency, 'Central Ohio Area Agency on Aging must remain as a Columbus resource');
assert(!centralOhioAgency.cats.includes('remodel'), 'a public resource agency must not be presented as a direct remodeler');
assert(centralOhioAgency.cats.includes('social'), 'the resource agency must retain its defensible community-resource category');
assert.strictEqual(centralOhioAgency.website, 'https://www.coaaa.org/', 'the resource agency must use its current secure canonical URL');

const mobilityColumbus = listings['columbus-oh'].find(item =>
  item.name === '101 Mobility of Columbus' &&
  item.address === '4706 Trabue Rd, Columbus, OH 43228, USA'
);
assert(mobilityColumbus, '101 Mobility of Columbus must remain as a local stairlift provider');
assert.deepStrictEqual(JSON.parse(JSON.stringify(mobilityColumbus.cats)), ['stairs'], '101 Mobility of Columbus must remain only in Stairlifts & ramps');
assert.strictEqual(mobilityColumbus.phone, '(740) 520-8026', '101 Mobility of Columbus must retain its first-party public phone');
assert.strictEqual(mobilityColumbus.website, 'https://www.101mobility.com/columbus/', '101 Mobility of Columbus must use its first-party canonical URL without tracking parameters');

const mobilityWilmington = listings['wilmington-nc'].find(item =>
  item.name === '101 Mobility of Wilmington' &&
  item.address === '5221 Oleander Dr, Wilmington, NC 28403, USA'
);
assert(mobilityWilmington, '101 Mobility of Wilmington must remain as a local stairlift provider');
assert.deepStrictEqual(JSON.parse(JSON.stringify(mobilityWilmington.cats)), ['stairs'], '101 Mobility of Wilmington must remain only in Stairlifts & ramps');
assert.strictEqual(mobilityWilmington.phone, '(910) 469-4815', '101 Mobility of Wilmington must retain its first-party public phone');
assert.strictEqual(mobilityWilmington.website, 'https://www.101mobility.com/wilmington/', '101 Mobility of Wilmington must use its first-party canonical URL without tracking parameters');

const mobilityDenver = listings['denver-co'].find(item =>
  item.name === '101 Mobility of Denver' &&
  item.address === '7346 S Alton Way #10k, Centennial, CO 80112, USA'
);
assert(mobilityDenver, '101 Mobility of Denver must remain as a local stairlift provider');
assert.deepStrictEqual(JSON.parse(JSON.stringify(mobilityDenver.cats)), ['stairs'], '101 Mobility of Denver must remain only in Stairlifts & ramps');
assert.strictEqual(mobilityDenver.phone, '(303) 529-7077', '101 Mobility of Denver must retain its first-party public phone');
assert.strictEqual(mobilityDenver.website, 'https://www.101mobility.com/denver/', '101 Mobility of Denver must use its first-party canonical URL without tracking parameters');

console.log('listing cleanup audit tests passed');
