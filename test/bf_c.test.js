const test = require('node:test');
const assert = require('node:assert');
const { f_c } = require('../src/bf_c');
test('f_c', () => assert.equal(f_c(1), 2));
