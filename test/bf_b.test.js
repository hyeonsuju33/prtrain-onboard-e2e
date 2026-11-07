const test = require('node:test');
const assert = require('node:assert');
const { f_b } = require('../src/bf_b');
test('f_b', () => assert.equal(f_b(1), 2));
