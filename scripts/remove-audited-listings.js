#!/usr/bin/env node
/* Remove only individually documented, high-confidence provider mismatches.
   Default mode is a dry run. Pass --apply to update listings-data.js and write the audit record. */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const sourcePath = path.join(root, 'listings-data.js');
const auditPath = path.join(root, 'audits', 'listing-removals-2026-07-18.json');
const source = fs.readFileSync(sourcePath, 'utf8');
const previousAudit = fs.existsSync(auditPath) ? JSON.parse(fs.readFileSync(auditPath, 'utf8')) : null;
const context = {};
vm.createContext(context);
vm.runInContext(`${source}\nthis.__LISTINGS__ = LISTINGS;`, context);
const listings = context.__LISTINGS__;
const originalListings = JSON.parse(JSON.stringify(listings));

const rules = [
  {
    name: 'Gar Hole',
    address: '106 Houston St, Anna, TX 75409, USA',
    slugs: ['anna-tx'],
    reason: 'Official site describes a live-music and food venue, not a bathroom-safety installer.',
    evidence: 'https://garhole.net/'
  },
  {
    name: 'Flying J Travel Center',
    address: '1700 N US Hwy 75, Anna, TX 75409, USA',
    slugs: ['anna-tx'],
    reason: 'Official location page describes a travel center offering fuel, restrooms, food, and truck parking, not home modification services.',
    evidence: 'https://locations.pilotflyingj.com/us/tx/anna/1700-n-us-hwy-75'
  },
  {
    name: 'Aging-In-Place Remodeling',
    address: '620 Venture St D, Escondido, CA 92029, USA',
    slugs: ['mckinney-tx','fulshear-tx','new-york-ny','los-angeles-ca','phoenix-az','fort-worth-tx','columbus-oh','indianapolis-in','san-francisco-ca','austin-tx','seattle-wa','denver-co','nashville-tn','washington-dc','boston-ma'],
    reason: 'The listing address and 858 telephone area identify a San Diego County provider; the San Diego page record is retained.',
    evidence: 'http://aipremodeling.com/'
  },
  {
    name: 'Better Place Design & Build',
    address: '4655 Cass St, San Diego, CA 92109, USA',
    slugs: ['los-angeles-ca','phoenix-az','indianapolis-in','san-francisco-ca','austin-tx','seattle-wa','denver-co','nashville-tn','boston-ma'],
    reason: 'Official homepage title and description identify a San Diego ADU company; these records were attached to non-San-Diego city pages.',
    evidence: 'https://betterplacedesignbuild.com/'
  },
  {
    name: 'Independent Home Walk-in Tubs',
    address: '59 Hempstead Gardens Dr, West Hempstead, NY 11552, USA',
    slugs: ['fate-tx'],
    reason: 'Official homepage targets New York walk-in tubs and New Jersey designer showers, not Fate, Texas.',
    evidence: 'https://independenthome.com/'
  },
  {
    name: 'Southern Stairlifts',
    address: '13 Farringdon Dr, Greenville, SC 29615, USA',
    slugs: ['mckinney-tx'],
    reason: 'Official location page identifies this as a Greenville, South Carolina installer.',
    evidence: 'https://southernstairlifts.com/greenville/'
  },
  {
    name: 'IE Grab Bars-Grab Bar Installers',
    address: '134 Pueblo Rd, Corona, CA 92882, USA',
    slugs: ['phoenix-az','san-diego-ca','san-jose-ca'],
    reason: 'Official homepage states that installations serve California’s Inland Empire; the records were on Phoenix, San Diego, and San Jose pages.',
    evidence: 'https://iegrabbars.com/'
  },
  {
    name: 'Affordable Stairlifts',
    address: '639 Lofstrand Ln, Rockville, MD 20850, USA',
    slugs: ['las-vegas-nv'],
    reason: 'Official homepage identifies a Washington, DC-area stairlift provider, not a Las Vegas provider.',
    evidence: 'https://www.affordablestairlifts.com/'
  },
  {
    name: 'Mr. Grab Bar Sarasota',
    address: '6151 Lake Osprey Dr rm 300, Sarasota, FL 34240, USA',
    slugs: ['boston-ma'],
    reason: 'Official installation page specifically states that this service covers Sarasota-area communities.',
    evidence: 'https://mrgrabbar.com/collections/installation/products/sarasota-grab-bars'
  },
  {
    name: 'Clean Hands Pure Hearts LLC',
    address: '1421 Kempsville Rd D, Chesapeake, VA 23320, USA',
    slugs: ['nashville-tn'],
    reason: 'Chesapeake, Virginia in-home-care provider was placed in Nashville’s social-program category.',
    evidence: 'https://cleanhandspureheartsllc.com/'
  },
  {
    name: 'Next Day Access Memphis',
    address: '2979 Kate Bond Rd, Bartlett, TN 38133, USA',
    slugs: ['nashville-tn'],
    reason: 'Official location page states that this provider serves the Memphis area.',
    evidence: 'https://www.nextdayaccess.com/memphis-tn/'
  },
  {
    name: 'Knoxville Aging In Place',
    address: '320 Nancy Lynn Ln #9, Knoxville, TN 37919, USA',
    slugs: ['nashville-tn'],
    reason: 'Official homepage and address identify a Knoxville provider, not a Nashville provider.',
    evidence: 'https://www.knoxvilleaginginplace.com/'
  },
  {
    name: 'Lone Star Stairlifts - Greater Houston',
    address: '16250 State Hwy 3 Ste A3, Webster, TX 77598, USA',
    slugs: ['mckinney-tx','dallas-tx'],
    reason: 'Business name, address, and official domain identify Greater Houston service; Houston-area page records are retained.',
    evidence: 'https://www.greaterhoustonstairlifts.com/'
  },
  {
    name: 'DFW Grab Bars',
    address: '1812 Amber Ln, Carrollton, TX 75007, USA',
    slugs: ['fulshear-tx','san-antonio-tx'],
    reason: 'Business name, Carrollton address, and official domain identify Dallas–Fort Worth service; the McKinney record is retained.',
    evidence: 'https://www.dfwgrabbars.com/'
  },
  {
    name: 'Texas Senior Safety',
    address: '21077 Kingsland Blvd, Katy, TX 77450, USA',
    slugs: ['san-antonio-tx'],
    reason: 'Official service URL and Katy address identify Houston-area service; Fulshear and Katy records are retained.',
    evidence: 'https://txseniorsafety.com/services/houston/'
  },
  {
    name: 'Texas Senior Care Transport',
    address: '9550 Spring Green Blvd Ste 408 2, Katy, TX 77494, USA',
    slugs: ['frisco-tx'],
    reason: 'Katy address identifies a Houston-area transportation provider; Fulshear, Katy, and Houston records are retained.',
    evidence: 'https://www.texasseniorcaretransport.com/'
  },
  {
    name: 'Bromlow Law, PLLC',
    address: '24285 Katy Fwy Ste 300, Katy, TX 77494, USA',
    slugs: ['fate-tx'],
    reason: 'Katy address identifies a Houston-area firm; Fulshear and Katy records are retained.',
    evidence: 'https://bromlowlaw.com/'
  },
  {
    name: '101 Mobility of Charlotte',
    address: '126-A Statesville Blvd, Salisbury, NC 28144, USA',
    slugs: ['leland-nc'],
    reason: 'Official Charlotte location record was attached to the Leland/Wilmington-area page.',
    evidence: 'https://www.101mobility.com/charlotte/'
  },
  {
    name: 'Amramp Accessibility of Charlotte',
    address: '4004B Sardis Church Rd, Monroe, NC 28110, USA',
    slugs: ['leland-nc'],
    reason: 'Official Charlotte location record was attached to the Leland/Wilmington-area page.',
    evidence: 'https://amramp.com/charlotte/'
  }
];

const removals = [];
const alreadyAbsent = [];
for (const rule of rules) {
  for (const slug of rule.slugs) {
    const items = listings[slug];
    if (!items) throw new Error(`Unknown city slug in cleanup rule: ${slug}`);
    const matches = items
      .map((item, index) => ({ item, index }))
      .filter(({ item }) => item.name === rule.name && item.address === rule.address);
    if (matches.length === 0) {
      const audited = previousAudit && previousAudit.removals.some(entry =>
        entry.city_slug === slug &&
        entry.record.name === rule.name &&
        entry.record.address === rule.address
      );
      if (!audited) throw new Error(`No current or previously audited match for ${rule.name} in ${slug}`);
      alreadyAbsent.push({ city_slug: slug, name: rule.name, address: rule.address });
      continue;
    }
    if (matches.length !== 1) {
      throw new Error(`Expected exactly one match for ${rule.name} in ${slug}; found ${matches.length}`);
    }
    const originalMatches = originalListings[slug]
      .map((item, originalIndex) => ({ item, originalIndex }))
      .filter(({ item }) => item.name === rule.name && item.address === rule.address);
    if (originalMatches.length !== 1) {
      throw new Error(`Expected exactly one original-index match for ${rule.name} in ${slug}; found ${originalMatches.length}`);
    }
    const { item, index } = matches[0];
    removals.push({ city_slug: slug, original_index: originalMatches[0].originalIndex, record: item, reason: rule.reason, evidence: rule.evidence });
    items.splice(index, 1);
  }
}

const beforeCount = Object.values(context.__LISTINGS__).reduce((sum, items) => sum + items.length, 0) + removals.length;
const afterCount = Object.values(listings).reduce((sum, items) => sum + items.length, 0);
if (beforeCount - afterCount !== removals.length) throw new Error('Removal count invariant failed');

const audit = {
  generated_at: new Date().toISOString(),
  scope: 'High-confidence irrelevant or out-of-service-area records explicitly authorized by the site owner; ambiguous records retained.',
  before_count: beforeCount,
  after_count: afterCount,
  removed_count: removals.length,
  removals
};

if (process.argv.includes('--apply')) {
  if (!removals.length && alreadyAbsent.length === rules.reduce((sum, rule) => sum + rule.slugs.length, 0)) {
    console.log(`Cleanup already applied; ${alreadyAbsent.length} audited records remain absent.`);
    process.exit(0);
  }
  if (previousAudit) throw new Error('Refusing to overwrite an existing cleanup audit with a partial second run');
  const marker = 'const LISTINGS = ';
  const markerIndex = source.indexOf(marker);
  if (markerIndex < 0) throw new Error('Could not locate LISTINGS assignment');
  const prefix = source.slice(0, markerIndex);
  fs.writeFileSync(sourcePath, `${prefix}${marker}${JSON.stringify(listings, null, 2)};\n`);
  const auditDir = path.dirname(auditPath);
  fs.mkdirSync(auditDir, { recursive: true });
  fs.writeFileSync(auditPath, `${JSON.stringify(audit, null, 2)}\n`);
  console.log(`Applied ${removals.length} documented removals: ${beforeCount} -> ${afterCount} listings.`);
} else {
  console.log(JSON.stringify({ before_count: beforeCount, after_count: afterCount, removed_count: removals.length, already_absent_count: alreadyAbsent.length }, null, 2));
}
