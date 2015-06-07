'use strict';

var number = require('../../util/number');

function factory (type, config, load, typed) {
  var collection = load(require('../../type/matrix/collection'));

  /**
   * Test whether a value is positive: larger than zero.
   * The function supports types `number`, `BigNumber`, `Fraction`, and `Unit`.
   *
   * The function is evaluated element-wise in case of Array or Matrix input.
   *
   * Syntax:
   *
   *     math.isPositive(x)
   *
   * Examples:
   *
   *    math.isPositive(3);                     // returns true
   *    math.isPositive(-2);                    // returns false
   *    math.isPositive(0);                     // returns false
   *    math.isPositive(-0);                    // returns false
   *    math.isPositive(0.5);                   // returns true
   *    math.isPositive(math.bignumber(2));     // returns true
   *    math.isPositive(math.fraction(-2, 5));  // returns false
   *    math.isPositive(math.fraction(1,3));    // returns false
   *    math.isPositive('0');                   // returns false
   *    math.isPositive([2, 0, -3]');           // returns [true, false, false]
   *
   * @param {number | BigNumber | Fraction | Unit | Array | Matrix} x  Value to be tested
   * @return {boolean}  Returns true when `x` is larger than zero.
   *                    Throws an error in case of an unknown data type.
   */
  var isPositive = typed('isPositive', {
    'number': function (x) {
      return x > 0;
    },

    'BigNumber': function (x) {
      return !x.isNeg() && !x.isZero() && !x.isNaN();
    },

    'Fraction': function (x) {
      return x.s > 0 && x.n > 0;
    },

    'Unit': function (x) {
      return x.value > 0;
    },

    'Array | Matrix': function (x) {
      return collection.deepMap(x, isPositive);
    }
  });

  return isPositive;
}

exports.name = 'isPositive';
exports.factory = factory;