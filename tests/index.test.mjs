import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('formats initial byte range', () => {
  assert.equal(api.formatByteRange(0, 499), 'bytes=0-499');
});
test('formats one byte', () => {
  assert.equal(api.formatByteRange(4, 4), 'bytes=4-4');
});
test('formats large safe offsets', () => {
  assert.equal(api.formatByteRange(1000, 1999), 'bytes=1000-1999');
});
test('requires inclusive ordering', () => {
  assert.throws(() => api.formatByteRange(5, 4), RangeError);
});
test('rejects negative offset', () => {
  assert.throws(() => api.formatByteRange(-1, 4), RangeError);
});
test('rejects fractional offset', () => {
  assert.throws(() => api.formatByteRange(1.2, 4), RangeError);
});
