/*
Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.

Expected Output: 
convertToRoman(2) should return "II".
convertToRoman(3) should return "III".
convertToRoman(4) should return "IV".
convertToRoman(5) should return "V".
convertToRoman(9) should return "IX".
convertToRoman(12) should return "XII".
convertToRoman(16) should return "XVI".
convertToRoman(29) should return "XXIX".
convertToRoman(44) should return "XLIV".
convertToRoman(45) should return "XLV"
convertToRoman(68) should return "LXVIII"
convertToRoman(83) should return "LXXXIII"
convertToRoman(97) should return "XCVII"
convertToRoman(99) should return "XCIX"
convertToRoman(400) should return "CD"
convertToRoman(500) should return "D"
convertToRoman(501) should return "DI"
convertToRoman(649) should return "DCXLIX"
convertToRoman(798) should return "DCCXCVIII"
convertToRoman(891) should return "DCCCXCI"
convertToRoman(1000) should return "M"
convertToRoman(1004) should return "MIV"
convertToRoman(1006) should return "MVI"
convertToRoman(1023) should return "MXXIII"
convertToRoman(2014) should return "MMXIV"
convertToRoman(3999) should return "MMMCMXCIX"
*/

const romanMap = {
	"1": () => "I",
	"2": () => "II",
	"3": () => "III",
	"4": () => "IV",
	"5": () => "V",
	"6": () => "VI",
	"7": () => "VII",
	"8": () => "VIII",
	"9": () => "IX",
	"10": () => "X",
	"20": () => "XX",
	"30": () => "XXX",
	"40": () => "XL",
	"50": () => "L",
	"60": () => "LX",
	"70": () => "LXX",
	"80": () => "LXXX",
	"90": () => "XC",
	"100": () => "C",
	"200": () => "CC",
	"300": () => "CCC",
	"400": () => "CD",
	"500": () => "D",
	"600": () => "DC",
	"700": () => "DCC",
	"800": () => "DCCC",
	"900": () => "CM",
	"1000": () => "M"
};

function convertToRoman(num=0) {
	if (num <= 0) {
		throw new Error("No Roman Numerals exists for the number written")
	}

	// console.log(num);

	let romanNumeral="";
	let temp = num;

	for (let i=0; i<= String(num).length; i++) {
		// console.log(i);
		let mul = Math.pow(10, i);
		let rem = temp % mul;
		// console.log({rem});

		if (rem !== 0) {
			if ( i>= 4 && temp !== 1000) {
				const multi = temp/1000;
				const repeat = romanMap[1000]().repeat(multi);
				romanNumeral = repeat +romanNumeral;
			} else {
				romanNumeral = romanMap[rem]()+ romanNumeral;
				temp -= rem;
			}
		}
	}
	return romanNumeral;
}

console.log(convertToRoman(2)); // should return "II".
console.log(convertToRoman(3)); // should return "III".
console.log(convertToRoman(4)); // should return "IV".
console.log(convertToRoman(5)); // should return "V".
console.log(convertToRoman(9)); // should return "IX".
console.log(convertToRoman(12)); // should return "XII".
console.log(convertToRoman(16)); // should return "XVI".
console.log(convertToRoman(29)); // should return "XXIX".
console.log(convertToRoman(44)); // should return "XLIV".
console.log(convertToRoman(45)); // should return "XLV"
console.log(convertToRoman(68)); // should return "LXVIII"
console.log(convertToRoman(83)); // should return "LXXXIII"
console.log(convertToRoman(97)); // should return "XCVII"
console.log(convertToRoman(99)); // should return "XCIX"
console.log(convertToRoman(400)); // should return "CD"
console.log(convertToRoman(500)); // should return "D"
console.log(convertToRoman(501)); // should return "DI"
console.log(convertToRoman(649)); // should return "DCXLIX"
console.log(convertToRoman(798)); // should return "DCCXCVIII"
console.log(convertToRoman(891)); // should return "DCCCXCI"
console.log(convertToRoman(1000)); // should return "M"
console.log(convertToRoman(1004)); // should return "MIV"
console.log(convertToRoman(1006)); // should return "MVI"
console.log(convertToRoman(1023)); // should return "MXXIII"
console.log(convertToRoman(2014)); // should return "MMXIV"
console.log(convertToRoman(3999)); // should return "MMMCMXCIX"