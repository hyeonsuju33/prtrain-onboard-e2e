const test = require('node:test');
const assert = require('node:assert');
const { f_d } = require('../src/bf_d');
test('f_d', () => assert.equal(f_d(1), 2));
