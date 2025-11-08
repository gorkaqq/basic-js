const { NotImplementedError } = require('../lib');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(inputString) {
  const validChars = new Set('0123456789ABCDEF-');

  for (let i = 0; i < inputString.length; i++) {
    if (!validChars.has(inputString[i])) return false;
  }

  for (let i = 2; i < 15; i += 3) {
    if (inputString[i] !== '-') return false;
  }

  return true;
}

module.exports = {
  isMAC48Address,
};
