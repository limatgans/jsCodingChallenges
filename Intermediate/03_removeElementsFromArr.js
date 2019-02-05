/*
You will be provided with an initial array (the first argument in the destroyer function),
followed by one or more arguments. 

Remove all elements from the initial array that are of the same value as 
these arguments.
*/

function uniQArrFn(arr = [], ...args) {
	return arr.filter((elem, index, array) => {
		if (args.indexOf(elem) !==-1) {
			return array.indexOf(elem) === index;
		}
		return elem;
	});
}

function destroyer(arr = [], ...args) {
	console.log("Arguements", args);
	if (arr.length === 0 || args.length === 0) {
		return arr;
	}

	const uniqArr = uniQArrFn(arr, ...args);
	const uniqArg = uniQArrFn(args);

	uniqArg.forEach((arg) => {
		const index = uniqArr.indexOf(arg);
		if (index !== -1) {
			uniqArr.splice(index, 1);
		}
	});

	console.log("unique Arr", uniqArr);

	return uniqArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3); // should return [1, 1].