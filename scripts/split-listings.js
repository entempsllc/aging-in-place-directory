#!/usr/bin/env node
/* Build one small listing payload per city so visitors do not download the full database. */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'listings-data.js'), 'utf8');
const context = {};
vm.createContext(context);
vm.runInContext(`${source}\nthis.__LISTINGS__ = LISTINGS;`, context);
const listings = context.__LISTINGS__;

const dataDir = path.join(root, 'data');
fs.mkdirSync(dataDir, { recursive: true });
for (const [slug, items] of Object.entries(listings)) {
  const payload = `/* Generated from listings-data.js. Edit the source file, then rerun scripts/split-listings.js. */\nconst LISTINGS = ${JSON.stringify({ [slug]: items })};\n`;
  fs.writeFileSync(path.join(dataDir, `${slug}.js`), payload);
}

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && !['.git', 'data', 'tests', 'scripts'].includes(entry.name)) return walk(full);
    return entry.isFile() && entry.name.endsWith('.html') ? [full] : [];
  });
}

let pagesChanged = 0;
const listingScriptPattern = /<script\b[^>]*\bsrc=["']\.\.\/(?:listings-data\.js|data\/[^"'<>]+\.js)["'][^>]*>\s*<\/script>/g;
for (const file of walk(root)) {
  if (path.basename(file) === 'admin.html') continue;
  let html = fs.readFileSync(file, 'utf8');
  const match = html.match(/data-city="([^"]+)"/);
  if (match) {
    const slug = match[1];
    if (!(slug in listings)) throw new Error(`No listing data for ${slug} in ${file}`);
    const payloadReferences = html.match(listingScriptPattern) || [];
    if (payloadReferences.length !== 1) {
      throw new Error(`Expected exactly one listing payload reference in ${file}; found ${payloadReferences.length}`);
    }
    const expectedReference = `<script src="../data/${slug}.js"></script>`;
    html = html.replace(listingScriptPattern, expectedReference);
    const rewrittenReferences = html.match(listingScriptPattern) || [];
    if (rewrittenReferences.length !== 1 || rewrittenReferences[0] !== expectedReference) {
      throw new Error(`Failed to set the expected listing payload for ${slug} in ${file}`);
    }
  } else {
    html = html.replace(/\n<script src="(?:\.\.\/)?listings-data\.js"><\/script>/, '');
  }
  fs.writeFileSync(file, html);
  pagesChanged += 1;
}

console.log(`Wrote ${Object.keys(listings).length} city payloads; checked ${pagesChanged} public pages.`);
