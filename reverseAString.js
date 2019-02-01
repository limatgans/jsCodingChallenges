/**
 * Reverse a String
 * Reverse the provided string.
 */

function reverseString(str="") {
	console.log("Given String : ", str);
	const reverseString = str.split("").reverse().join("");
	console.log("Given String in reverse : ", reverseString);
	return reverseString;
}

reverseString("hello");