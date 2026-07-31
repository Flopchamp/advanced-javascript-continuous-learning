function rangeOfNumbers (startNum,endNum){
  if(startNum > endNum){
    return [];
  } else {
    const numbers = rangeOfNumbers(startNum + 1, endNum);
    numbers.unshift(startNum);
    return numbers;
  }
  
}
console.log(rangeOfNumbers(1, 5));
console.log(rangeOfNumbers(6, 9));