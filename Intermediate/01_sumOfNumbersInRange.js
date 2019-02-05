/*
Sum All Numbers in a Range

We'll pass you an array of two numbers. 
Return the sum of those two numbers plus the sum of all the numbers between them.

The lowest number will not always come first.
 */
function sumAll(arr) {

	if (arr.length !== 2) {
		return console.log("Array should have only two values");
	}

	// Empty strings are coerced to zero.... Might not work
	if (arr.some(isNaN)) {
		return console.log("Array should have only numberic values");
	}
	const sortArr = [...arr].sort((a, b) => a - b);
	let sum = 0; 
	for (let i = sortArr[0]; i<=sortArr[1]; i++) {
		sum +=i;
	}
	// console.log("Entered Range", arr);
	// console.log("Sum of Numbers in Range", sum);
	return sum;
}

sumAll([1, 4]);
sumAll([4, 1]);
sumAll([5, 10]);
sumAll([10, 5]);