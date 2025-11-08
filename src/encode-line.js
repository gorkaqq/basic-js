const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  if (str === '') return '';

  let res = '';
  let currentChar = str[0];
  let count = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === currentChar) {
      count++;
    } else {
      res += (count > 1 ? count : '') + currentChar;
      currentChar = str[i];
      count = 1;
    }
  }

  return (res += (count > 1 ? count : '') + currentChar);
}

module.exports = {
  encodeLine,
};
