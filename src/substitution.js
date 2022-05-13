// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
	//check for valid input values and return false
	//if any criteria are violated
    if(!alphabet) return false;
    if(alphabet.length != 26) return false;
    if(!input) return false;
    if(!isUnique(alphabet)) return false;

    //define the standard letter matrix
	const standardAlphabet = "abcdefghijklmnopqrstuvwxyz";

    //initialize the return string to an empty string
    let returnValue = "";
    let returnString = "";

    //convert the input string to all lower case to remove any case sensitivity
    const lowerCaseInput = input.toLowerCase();

    if (encode)
    {
    //walk through the string one character at a time
    //alphabetic characters (A-Z, a-z) are mapped
    //from the standard alphabet to the alternate / substitute alphabet
    //characters not in the standard alphabet are left alone
    for(index = 0; index < lowerCaseInput.length; index ++)
      {
		//next character to process
        let nextCharacter = lowerCaseInput.substr(index, 1);

        //determine index of next character in the alphabet
		let characterPosition = standardAlphabet.indexOf(nextCharacter);

        returnValue = standardAlphabet.includes(nextCharacter)? alphabet[characterPosition] : nextCharacter;
        returnString = returnString + returnValue;
      }
    }
    else
    {
    //walk through the string one letter at a time
    //characters are mapped from the alternate / substitute alphabet
    //including, possibly, special characters or numbers
    //to the standard alphabet
    //characters not in the alternate / substitute alphabet are left alone
    for(index = 0; index < lowerCaseInput.length; index ++)
      {
		//next letter to process
        let nextCharacter = lowerCaseInput.substr(index, 1);

        //determine index of letter in the alphbet
		let characterPosition = alphabet.indexOf(nextCharacter);

        returnValue = alphabet.includes(nextCharacter)? standardAlphabet[characterPosition] : nextCharacter;
        returnString = returnString + returnValue;
      }
    }

    //return the string
    return returnString;

  }

//Create a helper function to check and see if the characters in a string are unique
//Sets let you store unique values of any type
//If all characters in the input string are unique, the size of the set will be
//equal to the length of the string
function isUnique(str) {
  return new Set(str).size == str.length;
}

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
