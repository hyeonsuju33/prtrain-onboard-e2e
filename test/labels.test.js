const test = require('node:test');
const assert = require('node:assert/strict');
const { cleanLabels } = require('../src/labels');

test('cleanLabels removes empty labels after trimming', () => {
  assert.deepEqual(cleanLabels([' alpha ', ' ', '', 'beta']), ['alpha', 'beta']);
});
