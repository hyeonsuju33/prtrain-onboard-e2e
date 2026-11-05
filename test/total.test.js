const test = require('node:test');
const assert = require('node:assert');
const { total } = require('../src/total');

test('total sums price*qty', () => {
  assert.strictEqual(total([{ price: 100, qty: 2 }, { price: 50, qty: 1 }]), 250);
});
