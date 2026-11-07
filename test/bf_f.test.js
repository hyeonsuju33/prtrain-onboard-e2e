const test = require('node:test');
const assert = require('node:assert');
const { f_f } = require('../src/bf_f');
test('f_f', () => assert.equal(f_f(1), 2));
