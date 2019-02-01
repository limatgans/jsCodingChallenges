/**
 * Check if a string (first argument, str) ends with the given target string (second argument, target).
 * This challenge can be solved with the .endsWith() method, 
 * which was introduced in ES2015. But for the purpose of this challenge, 
 * we would like you to use one of the JavaScript substring methods instead.
*/
function confirmEnding(str, target) {
	console.log("Given String", str);
	console.log("Given Target String", target);
	
	const confirm = str.substring(str.length - target.length, str.length) === target;
	console.log(str,"ends with", target, "?", confirm);
	return confirm;
}

confirmEnding("Bastian", "n"); // true