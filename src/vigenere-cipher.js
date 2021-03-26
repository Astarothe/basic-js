"use strict";
const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(reverse = true) {
    this._reverseFlag = !reverse;
  }
  encrypt(message, key) {
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H","I", 
                      "J", "K", "L", "M", "N", "O", "P", "Q", "R", 
                      "S","T", "U", "V", "W", "X", "Y", "Z"];
    let numMessage = [];
    let numKey = [];
    let keys = 0;

    numAlphabet(message, numMessage);
    numAlphabet(key, numKey);
    equalize(numMessage, numKey);

    numMessage = numMessage.map(numberses);

    message = message.toUpperCase().split("").map(messag).join("");
    
    if(this._reverseFlag === true){
      return message.split("").reverse().join("");
    }
    return message;

    function numAlphabet(str, arr) {
      str.toUpperCase().split("").forEach(item => {
        if (alphabet.indexOf(item) !== -1) {
          arr.push(alphabet.indexOf(item));
        }
      });
    }

    function equalize(numMessage, numKey) {
      let raznec = numMessage.length - numKey.length;
      if (numMessage.length > numKey.length) {
        for (let i = 0; i < raznec; i++) {
          numKey.push(numKey[i]);
        }
      }
    }

    function numberses(elem, index) {
      if (elem + numKey[index] > 26) {
        return alphabet[((elem + numKey[index]) - 26)];

      } else if (elem + numKey[index] === 26) {
        return alphabet[0];

      } else {
        return alphabet[(elem + numKey[index])];
      }
    }

    function messag(elem, index) {
      if (alphabet.indexOf(elem) !== -1) {
        return numMessage[index - keys];
      } else {
        keys++;
        return elem;
      }
    }
  }
  decrypt(message, key) {
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H","I", 
                      "J", "K", "L", "M", "N", "O", "P", "Q", "R", 
                      "S","T", "U", "V", "W", "X", "Y", "Z"];
    let numMessage = [];
    let numKey = [];
    let keys = 0;

    numAlphabet(message, numMessage);
    numAlphabet(key, numKey);
    equalize(numMessage, numKey);

    numMessage = numMessage.map(numberses);

    message = message.toUpperCase().split("").map(messag).join("");

    if(this._reverseFlag === true){
      return message.split("").reverse().join("");
    }
    return message;

    function numAlphabet(str, arr) {
      str.toUpperCase().split("").forEach(item => {
        if (alphabet.indexOf(item) !== -1) {
          arr.push(alphabet.indexOf(item));
        }
      });
    }

    function equalize(numMessage, numKey) {
      let raznec = numMessage.length - numKey.length;
      if (numMessage.length > numKey.length) {
        for (let i = 0; i < raznec; i++) {
          numKey.push(numKey[i]);
        }
      }
    }

    function numberses(elem, index) {
      if (elem - numKey[index] < 0) {
        return alphabet[((elem - numKey[index]) + 26)];

      } else if (elem - numKey[index] === 26) {
        return alphabet[0];

      } else {
        return alphabet[(elem - numKey[index])];
      }
    }

    function messag(elem, index) {
      if (alphabet.indexOf(elem) !== -1) {
        return numMessage[index - keys];
      } else {
        keys++;
        return elem;
      }
    }
  }
}

module.exports = VigenereCipheringMachine;


