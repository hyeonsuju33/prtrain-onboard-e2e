import test from 'node:test';
import assert from 'node:assert/strict';
import { discount } from '../src/discount.js';

test('discount applies percent', () => {
  assert.equal(discount(200, 10), 180);
  assert.throws(() => discount(100, 120), RangeError);
});
