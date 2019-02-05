/*
Perform a search and replace on the sentence using the arguments provided 
and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note
Preserve the case of the first character in the original word 
when you are replacing it. 
For example if you mean to replace the word "Book" with the word "dog", 
it should be replaced as "Dog"


Expected Outputs:
myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall".
myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return "He is Sitting on the couch".
myReplace("This has a spellngi error", "spellngi", "spelling") should return "This has a spelling error".
myReplace("His name is Tom", "Tom", "john") should return "His name is John".
myReplace("Let us get back to more Coding", "Coding", "algorithms") should return "Let us get back to more Algorithms".

*/


function myReplace(str="", before="", after="") {
	let splitArr = "".concat(str).split(" ");
	console.log("splitArr", splitArr);
	splitArr.forEach((word, index)=> {
		if(word === before) {
			if((/^[A-Z]/g).test(word)){
				let afterUpper = after[0].toUpperCase() + after.slice(1);
				splitArr.splice(index, 1, afterUpper);
			} else {
				splitArr.splice(index, 1, after);
			}
		}
	});
	console.log("result", splitArr.join(" "));
	return splitArr.join(" ");
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("His name is Tom", "Tom", "john")