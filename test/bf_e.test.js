const test = require('node:test');
const assert = require('node:assert');
const { f_e } = require('../src/bf_e');
test('f_e', () => assert.equal(f_e(1), 2));
