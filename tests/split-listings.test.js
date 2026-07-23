const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawnSync } = require('child_process');

const sourceRoot = path.resolve(__dirname, '..');
const generatorSource = fs.readFileSync(path.join(sourceRoot, 'scripts', 'split-listings.js'), 'utf8');

function makeFixture(pageHtml) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'split-listings-test-'));
  fs.mkdirSync(path.join(root, 'scripts'));
  fs.mkdirSync(path.join(root, 'tx'));
  fs.writeFileSync(path.join(root, 'scripts', 'split-listings.js'), generatorSource);
  fs.writeFileSync(
    path.join(root, 'listings-data.js'),
    'const LISTINGS = {"new-city-tx":[{"name":"New Provider","rating":4.9,"reviews":88}],"old-city-tx":[{"name":"Old Provider"}]};\n'
  );
  fs.writeFileSync(path.join(root, 'tx', 'new-city.html'), pageHtml);
  return root;
}

function runGenerator(root) {
  return spawnSync(process.execPath, [path.join(root, 'scripts', 'split-listings.js')], {
    cwd: root,
    encoding: 'utf8',
  });
}

const copiedPage = '<body data-city="new-city-tx"><script src="../data/old-city-tx.js"></script><script src="../site.js"></script></body>\n';
const copiedRoot = makeFixture(copiedPage);
let result = runGenerator(copiedRoot);
assert.strictEqual(result.status, 0, result.stderr);
let rewritten = fs.readFileSync(path.join(copiedRoot, 'tx', 'new-city.html'), 'utf8');
assert(rewritten.includes('src="../data/new-city-tx.js"'), 'copied split page must use the payload derived from data-city');
assert(!rewritten.includes('old-city-tx.js'), 'copied split page must not retain the prior city payload');
assert.strictEqual((rewritten.match(/\.\.\/data\/new-city-tx\.js/g) || []).length, 1, 'expected payload must occur exactly once');
const publicPayload = fs.readFileSync(path.join(copiedRoot, 'data', 'new-city-tx.js'), 'utf8');
assert(!publicPayload.includes('"rating"'), 'public payload must omit unsupported rating fields');
assert(!publicPayload.includes('"reviews"'), 'public payload must omit unsupported review-count fields');

result = runGenerator(copiedRoot);
assert.strictEqual(result.status, 0, result.stderr);
assert.strictEqual(fs.readFileSync(path.join(copiedRoot, 'tx', 'new-city.html'), 'utf8'), rewritten, 'generator reruns must be idempotent');

const missingRoot = makeFixture('<body data-city="new-city-tx"><script src="../site.js"></script></body>\n');
result = runGenerator(missingRoot);
assert.notStrictEqual(result.status, 0, 'a city page with no listing payload reference must fail closed');
assert(result.stderr.includes('exactly one listing payload'), result.stderr);

const duplicateRoot = makeFixture('<body data-city="new-city-tx"><script src="../data/old-city-tx.js"></script><script src="../data/new-city-tx.js"></script></body>\n');
result = runGenerator(duplicateRoot);
assert.notStrictEqual(result.status, 0, 'a city page with multiple listing payload references must fail closed');
assert(result.stderr.includes('found 2'), result.stderr);

console.log('split-listings.js generator tests passed');
