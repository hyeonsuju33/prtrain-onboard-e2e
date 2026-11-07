const test = require('node:test');
const assert = require('node:assert');
const { f_g } = require('../src/bf_g');
test('f_g', () => assert.equal(f_g(1), 3));
