/*
Missing letters

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Expected Outputs:

fearNotLetter("abce") should return "d".
fearNotLetter("abcdefghjklmno") should return "i".
fearNotLetter("stvwx") should return "u".
fearNotLetter("bcdf") should return "e".
fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.

*/

function fearNotLetter(str = "") {
	const alphabets = Array(26).fill(0).map((_, i) => String.fromCharCode(97 + i));
	const splitArr = str.toLowerCase().split("");
	console.log("splitArr", splitArr.length);
	console.log("alpha", alphabets);

	const index = alphabets.indexOf(splitArr[0]);
	console.log("Index", index);
	if (index === -1) {
		console.log("Index is Negative");
		return undefined;
	}
	const end = index + splitArr.length + 1;
	console.log("End Index", end);
	const alphaSlice = alphabets.slice(index, end);
	console.log("alphaSlice", alphaSlice);

	const freqObj = [...alphaSlice, ...splitArr].reduce((acc, cur) => {
		// console.log("cur", cur);
		if (acc.hasOwnProperty(cur)) {
			acc[cur]++;
			return acc;
		}
		acc[cur] = 0;
		return acc;
	}, {});

	console.log("Freq Obj", freqObj);

	let missedLetter;
	for (let prop in freqObj) {
		if(freqObj.hasOwnProperty(prop)) {
			if(freqObj[prop] === 0) {
				missedLetter = prop;
			}
		}
	}
	console.log("Missing Letter", missedLetter);
	return missedLetter;
}

// fearNotLetter("abce");
fearNotLetter("stvwx")