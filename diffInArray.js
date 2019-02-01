/**
 * Diff Two Arrays

	Compare two arrays and return a new array with any items
	only found in one of the two given arrays, but not both.

	In other words, return the symmetric difference of the two arrays.
*/

function diffArray(arr1, arr2) {
	let newArr = [...arr1, ...arr2];
	console.log("New Array", newArr);
	const diffArr = newArr.reduce((acc, cur, elem, index) => {
		if(acc.hasOwnProperty(cur)) {
			return acc[cur]++;
		}
		return acc[cur] = 0;
	}, {});
	return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);