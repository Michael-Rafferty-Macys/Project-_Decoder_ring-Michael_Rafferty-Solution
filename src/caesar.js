// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
	//check for valid input values and return false
	//if any criteria are violated
    if(shift === 0) return false;
    if(shift > 25) return false;
    if(shift < -25) return false;

    //define the letter matrix and the base index.
    //the matrix has three copies of the alphabet
    //the base index points to the first letter of the second set.
    //adding the shift, the letter position, and the base index gives us the replacement letter

	const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const letterMatrix = alphabet + alphabet + alphabet;
	const baseIndex = alphabet.length;

    //convert the input string to all upper case to remove any case sensitivity
	const upperCaseInput = input.toUpperCase();

    //initialize the return string to an empty string
    let returnString = "";

    //directional shift is the combination of the shift and the encoding
    //for encoding, the shift is used as is
    //for decoding, the shift has to be negated
    const directionalShift = encode? shift: -shift;

    //walk through the string one letter at a time
    //alpahbetic characters (A-Z, a-z) are mapped
    //other characters are left alone
    for(letterIndex = 0; letterIndex < upperCaseInput.length; letterIndex ++)
      {
		//next letter to process
        let letter = upperCaseInput.substr(letterIndex, 1);

        //determine index of letter in the alphbet
		let letterPosition = alphabet.indexOf(letter);

        if (letterPosition >= 0)
          //alphabetic character - map it
          returnString = returnString + letterMatrix.substr((baseIndex + directionalShift + letterPosition), 1);
        else
          //non-alphabetic character - use it as is
          returnString = returnString + letter;
      }
    //return the string as lower case
    return returnString.toLowerCase();
}

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
