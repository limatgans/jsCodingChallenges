/*
Title Case a Sentence
Return the provided string with the first letter of each word capitalized. 
Make sure the rest of the word is in lower case.
*/

function titleCase(str = "") {
	const titleCaseString = str.split(" ").map(elem => {
		let lower = elem.toLowerCase();
		let title = lower[0].toUpperCase() + lower.substring(1,lower.length);
		return title;
	});
	return titleCaseString.join(" ");
}

console.log(titleCase("I'm a little tea pot"));