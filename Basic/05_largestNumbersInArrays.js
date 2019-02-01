/**
 * Return Largest Numbers in Arrays
 * Return an array consisting of the largest number 
 * from each provided sub-array.
*/

function largestOfFour(arr) {
	console.log("Given Array", arr);
	let resultArr = [];
	arr.forEach((sub)=> {
		const largest = sub.reduce((acc, cur) => 
			(cur > acc) ? cur : acc
		, -Infinity);
		console.log("Largest in SubArray" , sub , " is ", largest);
		resultArr.push(largest);
	});
	return resultArr;
}

largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);