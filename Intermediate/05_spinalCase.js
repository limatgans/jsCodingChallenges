/*
Problem: 
Convert a string to spinal case. 
Spinal case is all-lowercase-words-joined-by-dashes.
*/

/* Expected Output:
spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things") should return "all-the-small-things"
*/

function spinalCase(str) {

	return str.replace(/([A-Z])/g,' $1') /*Find all UpperCase and add space at the start*/
	.replace(/[^A-Za-z0-9]/g,' ') /*Find all non alpha numeric and replace it with space. Might not be a very good way*/
	.replace(/\s{1,}/g,"-") /*Convert all spaces to dashes*/
	.replace(/^\-|[\-]$/g,'') /*Slice - at the start and end*/
	.toLowerCase(); 
}

spinalCase('This Is Spinal Tap');