function sym(...args) {
	// let temparr = [];
	let temparr = args[0];
	// Removing duplicate values
	const filtertemp = temparr.filter((element, index, arr) => arr.findIndex((el) => el === element) === index);
	console.log("filtertemp", filtertemp);
	args.forEach((arg) => {
		arg.forEach((ele) => {
			const index = filtertemp.findIndex((temp) => temp === ele);
			if ( index === -1) {
				filtertemp.push(ele);
			} else {
				filtertemp.splice(index, 1)
			}
		});
	});
	console.log("Temp Array", filtertemp);
	return filtertemp;
	/* return temparr.reduce((acc, cur) => {
		console.log("curr", cur);
		console.log("index of cur", temparr.findIndex((temp) => temp === cur));
		if(temparr.findIndex((temp) => temp === cur) === -1) {
			console.log("acc", acc);
			acc.push(cur)
		}
	}, []); */
	// return temparr;
}

console.log(sym([1, 2, 3, 3], [5, 2, 1, 4])); // [3, 4, 5]
// console.log(sym([1, 2, 3], [5, 2, 1, 4])); // [3, 4, 5].
// console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5])); //[1, 4, 5]
// console.log(sym([1, 2, 3], [5, 2, 1, 4, 5])); // [3, 4, 5]