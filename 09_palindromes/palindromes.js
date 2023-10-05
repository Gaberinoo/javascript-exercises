function palindromes(string) {
    let strArray = string.toLowerCase().split('');
    let newArray = [];
    for (let i = 0; i < strArray.length; i++) {
      if (strArray[i] != ' ' &&
         strArray[i] != '.' &&
         strArray[i] != '!' &&
         strArray[i] !=',') {
        newArray.push(strArray[i]);
      }
    }
    let copyArray = newArray.slice();
    let arrayReverse = copyArray.reverse();
    newString = newArray.join('');
    stringReversed = arrayReverse.join('');
    if (newString == stringReversed) {
      return true;
    } else {
      return false;
    }
  }

// Do not edit below this line
module.exports = palindromes;
