/**
 * Convert Celsius to Fahrenheit
 * The algorithm to convert from
 * Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
 */

function convertToF(celsius) {
	console.log("Temp in Celsius", celsius);
	const CONVERSION_CONST = 9/5;
	let fahrenheit = (celsius * CONVERSION_CONST) + 32;
	console.log("Temp in fahrenheit", fahrenheit);
	return fahrenheit;
}

convertToF(30);