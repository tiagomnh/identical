module.exports = Identical;

function Identical(alphabet) {
  this.alphabet = alphabet || '0123456789abcdefghijklmnoprstuvxwyz';
}

Identical.prototype.stringify = function(numericID) {

  var stringID = '';

  while (numericID > 0) {
      stringID = this.alphabet[numericID % this.alphabet.length] + stringID;
      numericID = Math.floor(numericID / this.alphabet.length);
  }

  return stringID;
};

Identical.prototype.numerify = function(stringID) {

  var numericID = 0;

  for (var i = 0; i < stringID.length; i++) {
      numericID += Math.pow(this.alphabet.length, stringID.length - i - 1) * this.alphabet.indexOf(stringID[i]);
  }

  return numericID;
};