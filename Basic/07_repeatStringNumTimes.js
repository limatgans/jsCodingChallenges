/**
* Repeat a String
* Repeat a given string str (first argument) for num times (second argument).
* Return an empty string if num is not a positive number.
*/

// While One Can use String.prototype.repeat(), 
// this is another solution 

/*
SIMPLE SOLUTION using String.prototype.repeat()

function repeatStringNumTimes(str, num) {
	if(num > 0) {
		return str.repeat(num);
	} else {
		return "";
	}
}

*/

function repeatStringNumTimes(str="", num) {

	if (num < 0) {
		return "";
	}

	let resultStr = "";

	// Ensuring num is a 31-bit integer allows us to heavily optimize the
	// main part. But anyway, most current (August 2014) browsers can't handle
	// strings 1 << 28 chars or longer, so:

	num |= 0; // floors and rounds-down it.
	if (str.length * num >= (1 << 28)) {
		throw new RangeError('repeat num must not overflow maximum string size');
	}
	let i = num;
	while (i > 0) { 
		resultStr += str;
		i--;
	}
	console.log("Result String", resultStr);
	return resultStr;
}

repeatStringNumTimes("abc", 3);