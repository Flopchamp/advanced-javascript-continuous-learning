function smallestCommons(arr) {
  // 1. Find the min and max values to handle unsorted inputs
  const min = Math.min(arr[0], arr[1]);
  const max = Math.max(arr[0], arr[1]);

  // 2. Helper function to find Greatest Common Divisor (GCD) using the Euclidean Algorithm
  function getGCD(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  // 3. Helper function to find Least Common Multiple (LCM) of two numbers
  function getLCM(a, b) {
    return (a * b) / getGCD(a, b);
  }

  // 4. Start with the first number in the range as our running multiple
  let runningLCM = min;

  // 5. Loop sequentially through the rest of the numbers in the range
  for (let i = min + 1; i <= max; i++) {
    runningLCM = getLCM(runningLCM, i);
  }

  return runningLCM;
}


console.log(smallestCommons([1, 5])); // Outputs: 60
console.log(smallestCommons([5, 1])); // Outputs: 60 (Handles reverse order)
