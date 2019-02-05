/**
 * Diff Two Arrays

	Compare two arrays and return a new array with any items
	only found in one of the two given arrays, but not both.

	In other words, return the symmetric difference of the two arrays.
*/

function diffArray(arr1 =[0], arr2=[0]) {
	let newArr = [...arr1, ...arr2];
	console.log("New Array", newArr);
	const freqObj = newArr.reduce((acc, cur) => {
		// if (acc.hasOwnProperty(cur)) {
		// 	acc[cur]++;
		// 	return acc;
		// }
		// acc[cur] = 0;
		// return acc;
		// console.log("acc", acc);
		if(acc.has(cur)){
			acc.set(cur, acc.get(cur)+1);
			return acc;
		}
		acc.set(cur, 0);
		return acc;
	}, new Map());
	console.log("FreqObj", freqObj);

	let resultArr = [];

	freqObj.forEach((value, key, map)=> {
		if(value === 0) {
			resultArr.push(key);
		}
	});
	console.log("Result Arr", resultArr);
	return resultArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);