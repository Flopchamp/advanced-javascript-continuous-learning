function fibonacci(n) {
    if (n < 0) {
        throw new Error("Input cannot be negative");
    }
     const sequence = [0, 1]; // Base cases for Fibonacci sequence
    for (let i = 2; i <= n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2]; // Calculate Fibonacci number
    }
    return sequence[n]; // Return the nth Fibonacci number
}
console.log(fibonacci(10)); // Output: 55