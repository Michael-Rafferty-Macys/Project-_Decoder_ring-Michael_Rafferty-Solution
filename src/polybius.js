// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
 // you can add any code you want within this function scope

  function polybius(input, encode = true) {
	//check for an even number of numeric digits in the input string if decoding
	if(!encode)
	{
		let numberOfDigits = input.replace(" ", "").length;
		if(numberOfDigits % 2 != 0) return false;
	}

    //define the encoding and decoding matrices.
    const encodeMatrix = {
      "a": "11",
      "b": "21",
      "c": "31",
      "d": "41",
      "e": "51",
      "f": "12",
      "g": "22",
      "h": "32",
      "i": "42",
      "j": "42",
      "k": "52",
      "l": "13",
      "m": "23",
      "n": "33",
      "o": "43",
      "p": "53",
      "q": "14",
      "r": "24",
      "s": "34",
      "t": "44",
      "u": "54",
      "v": "15",
      "w": "25",
      "x": "35",
      "y": "45",
      "z": "55"
    };

    const decodeMatrix = {
      "11": "a",
      "21": "b",
      "31": "c",
      "41": "d",
      "51": "e",
      "12": "f",
      "22": "g",
      "32": "h",
      "42": "(i/j)",
      "52": "k",
      "13": "l",
      "23": "m",
      "33": "n",
      "43": "o",
      "53": "p",
      "14": "q",
      "24": "r",
      "34": "s",
      "44": "t",
      "54": "u",
      "15": "v",
      "25": "w",
      "35": "x",
      "45": "y",
      "55": "z"
    };

	const alphabet = "abcdefghijklmnopqrstuvwxyz";
	const numbers = "0123456789";

    //convert the input string to all lower case to remove any case sensitivity
    const lowerCaseInput = input.toLowerCase();

    //initialize the return string to an empty string
    let returnValue = "";
    let returnString = ""

    if (encode)
    {
    //walk through the string one letter at a time
    //alpahbetic characters (A-Z, a-z) are mapped
    //other characters are left alone
    for(letterIndex = 0; letterIndex < lowerCaseInput.length; letterIndex ++)
      {
		//next letter to process
        let letter = lowerCaseInput.substr(letterIndex, 1);
        returnValue = alphabet.includes(letter)? encodeMatrix[letter] : letter;
        returnString = returnString + returnValue;
      }
    }
    else
    {
    //walk through the string two characters at a time
    //number pairs (i.e.: 21, 53) are mapped
    //other characters are left alone
    for(index = 0; index < lowerCaseInput.length; index ++)
      {
		//next character to process
        let nextCharacter = lowerCaseInput.substr(index, 1);
        if (numbers.includes(nextCharacter))
        {
			returnString = returnString + decodeMatrix[lowerCaseInput.substr(index, 2)];
			index += 1;
		}
		else
		{
			returnString = returnString + nextCharacter;
		}
      }
    }

    //return the string
    return returnString;

  }

 return {
 polybius,
 };
})();

module.exports = { polybius: polybiusModule.polybius };
