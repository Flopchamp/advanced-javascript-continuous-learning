function rangeOfNumbers (startNum,endNum){
  if(startNum > endNum){
    return [];
  } else {
    // Recursive case: generate the range of numbers from startNum to endNum
    const numbers = rangeOfNumbers(startNum + 1, endNum);
    // Add the current startNum to the beginning of the array
    numbers.unshift(startNum);
    return numbers;
  }
  
}
console.log(rangeOfNumbers(1, 5));
console.log(rangeOfNumbers(6, 9));