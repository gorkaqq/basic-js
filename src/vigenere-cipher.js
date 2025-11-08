const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.isDirect = direct;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    return this._processText(message, key, 'encrypt');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    return this._processText(encryptedMessage, key, 'decrypt');
  }

  _processText(text, key, mode) {
    const upperText = text.toUpperCase();
    const upperKey = key.toUpperCase();
    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < upperText.length; i++) {
      const currentChar = upperText[i];

      if (this._isLatinLetter(currentChar)) {
        const textCode = currentChar.charCodeAt(0) - 65;
        const keyCode = upperKey[keyIndex % upperKey.length].charCodeAt(0) - 65;

        let processedCode;
        if (mode === 'encrypt') {
          processedCode = (textCode + keyCode) % 26;
        } else {
          processedCode = (textCode - keyCode + 26) % 26;
        }

        result += String.fromCharCode(processedCode + 65);
        keyIndex++;
      } else {
        result += currentChar;
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }

  _isLatinLetter(char) {
    return char >= 'A' && char <= 'Z';
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
