/*
Problem:
Flatten a nested array. You must account for varying levels of nesting.

Expected Output:

steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
*/

function steamrollArray(arr) {
	return arr.reduce((acc, val) => Array.isArray(val) 
	? acc.concat(steamrollArray(val)) : acc.concat(val), []);
}

console.log("Result", steamrollArray([1, [2], [3, [[4]]]]));