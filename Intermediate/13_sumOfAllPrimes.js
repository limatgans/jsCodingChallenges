/*
Sum All Primes

Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only
two divisors, one and itself.

For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.

Expected Output:

sumPrimes(10) should return a number.
sumPrimes(10) should return 17.
sumPrimes(977) should return 73156.

*/

function sumPrimes(num) {
	let sum = 0;
	for (j = 2; j <= num; j++) {
		let flag = false;
		for (let i = 2; i = num / 2; i++) {
			if (j % i === 0 && i!=j) {
				flag = true;
				break;
			}
		}
		if(flag === false) {
			console.log("j",j)
			sum +=j; 
		}
	}
	console.log("Sum", sum);
	return sum;
}

sumPrimes(10);

