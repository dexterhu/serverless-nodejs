var assert = require('assert');
var pair = require('./pair.js');

describe('Pair', function () {
  describe('Calculate number of mataching pairs from an array of numbers', function () {
    it('should return 0 for empty array', function () {
      assert.equal(pair.CalNoOfMatchingPairs([]), 0);
    });
    it('should return 0 for array with only one element', function () {
      assert.equal(pair.CalNoOfMatchingPairs([1]), 0);
    });
    it('should return 3 for sample input [10, 20, 20, 10, 10, 30, 50, 10, 20]', function () {
      assert.equal(pair.CalNoOfMatchingPairs([10, 20, 20, 10, 10, 30, 50, 10, 20]), 3);
    })
    it('should return 4 for an array of 8 of the same number', function () {
      assert.equal(pair.CalNoOfMatchingPairs([10, 10, 10, 10, 10, 10, 10, 10]), 4);
    })
    it('should return 4 for an array of 9 of the same number', function () {
      assert.equal(pair.CalNoOfMatchingPairs([10, 10, 10, 10, 10, 10, 10, 10, 10]), 4);
    })
    it('should work for an array with float numbers that have the same numeric value', function () {
      assert.equal(pair.CalNoOfMatchingPairs([1.1, 10, 10.00, 1.10]), 2);
    })
  });
});