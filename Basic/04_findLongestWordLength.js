/**
 * Find the Longest Word in a String
 * Return the length of the longest word in the provided sentence.
 * Your response should be a number.
*/

function findLongestWordLength(str="") {
	console.log("Given String", str);
	const words = str.split(" ");
	let wordLength = words.map((elem) => elem.length);
	wordLength.sort((a,b) => a-b);
	const temp = wordLength.length - 1;
	console.log("temp", temp);
	console.log("Length of Longest Word is ", wordLength[temp]);
	return wordLength[temp];
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");