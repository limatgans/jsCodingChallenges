/*
Caesar cipher / shift Cipher
A common modern use is the ROT13 cipher, where the values of the letters 
are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character 
(i.e. spaces, punctuation), but do pass them on. 
*/

function rot13(cipherText = "") {
	const cipherShift = 13;
	const alphaUpper = Array(26).fill()
		.map((_, i) => String.fromCharCode('A'.charCodeAt(0) + i));
	// console.log("alphaUpper", alphaUpper);
	const alphaRegex = /[a-zA-Z]/i;
	const orginalTextArray = Array.from(cipherText).map((cipher) => {

		// If Cipher is not an alphabet
		if (!(alphaRegex.test(cipher))) {
			// console.log(cipher+" is not an alphabet");
			return cipher;
		}

		const index = alphaUpper.findIndex(alpha => alpha === cipher.toUpperCase());
		if (index === -1) {
			// console.log("Cipher is not an upperCase alphabet");
			return cipher;
		}
		const tempShift = index + cipherShift;
		if (tempShift >= alphaUpper.length) {
			return alphaUpper[(tempShift % alphaUpper.length)];
		} else {
			return alphaUpper[tempShift];
		}

	});

	const orginalText = orginalTextArray.reduce((acc, cur) => 
		acc += cur
	, "");

	console.log("Cipher Text: ", cipherText);
	console.log("Original Text: ", orginalText);
	return orginalText;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!");
rot13("SERR YBIR?");
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");