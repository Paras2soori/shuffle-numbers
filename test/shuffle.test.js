const assert = require('assert');
const { generateShuffledNumbers } = require('../shuffle');
const { validateShuffledArray } = require('./helper');

function runTests() {
  console.log('Running unit tests for shuffle.js...');

  const n = 10000;
  const arr = generateShuffledNumbers(n);

  assert.strictEqual(arr.length, n, 'Generated array should have length n');

  const validation = validateShuffledArray(arr);
  assert.strictEqual(validation.valid, true, `Validation failed: ${validation.message}`);

  const setSize = new Set(arr).size;
  assert.strictEqual(setSize, n, 'Generated array should contain unique values');

  const hasAll = arr.every((value) => value >= 1 && value <= n);
  assert.strictEqual(hasAll, true, 'All values should be in range 1..n');

  console.log('✓ All tests passed');
}

runTests();
