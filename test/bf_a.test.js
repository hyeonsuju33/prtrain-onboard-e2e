const test = require('node:test');
const assert = require('node:assert');
const { f_a } = require('../src/bf_a');
test('f_a', () => assert.equal(f_a(1), 2));
