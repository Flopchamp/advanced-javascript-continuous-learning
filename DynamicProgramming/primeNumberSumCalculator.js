function primeNumberSumCalculator(n) {
    if (n < 2) {
        return 0; // There are no prime numbers less than 2
    }
    let sum = 0;
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            sum += i; // Add prime number to sum
        }
    }   
    return sum; // Return the sum of prime numbers
}
function isPrime(num) {
    if (num < 2) {
        return false; // Numbers less than 2 are not prime
    }  
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // Found a divisor, not prime
        }
    }
    return true; // No divisors found, number is prime
}
console.log(primeNumberSumCalculator(10)); // Output: 17