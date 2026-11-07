const test = require('node:test');
const assert = require('node:assert');
const { f_h } = require('../src/bf_h');
test('f_h', () => assert.equal(f_h(1), 2));
