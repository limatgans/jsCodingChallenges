/*
Make a function that looks through an array of objects (first argument) 
and returns an array of all objects that have matching 
name and value pairs (second argument). 

Each name and value pair of the source object has to be 
present in the object from the collection if it is to be 
included in the returned array.

For example, if the first argument is 
[{ first: "Romeo", last: "Montague" }, 
{ first: "Mercutio", last: null }, 
{ first: "Tybalt", last: "Capulet" }], 
and the second argument is 
{ last: "Capulet" }, 
then you must return the third object from the array (the first argument), 
because it contains the name and its value, that was passed on 
as the second argument.
*/

function whatIsInAName(collection, source) {
	// What's in a name?
	var arr = [];
	// Only change code below this line
	const keysOfSource = Object.keys(source);
	collection.forEach((elem, index, array)=>{
		const keysOfElem = Object.keys(elem);
		console.log("Keys of Elem", keysOfElem);
		const matchKeysArr = [];
		if(keysOfSource.every((so) => {
			console.log("so", so);
			const tempIndex = keysOfElem.indexOf(so);
			console.log("Index", tempIndex);
			if(tempIndex === -1) {
				return false;
			}
			console.log("collection[index][so]", collection[index]);
			const cond = collection[index][so] === source[so];
			console.log("cond", cond);
			return cond;
		})){
			arr.push(elem);
		}
	});
	console.log("Arr", arr);
	// Only change code above this line
	return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });