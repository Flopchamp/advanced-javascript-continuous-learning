function getIndexToIns(arr,num){
  if(arr.length === 0){
    return 0
  }
  const IndexOfNumber = arr.sort((a,b) => a-b).findIndex(number => number >= num )
return  IndexOfNumber === -1 ? arr.length : IndexOfNumber;
}
console.log(getIndexToIns([40, 60], 50)); // Output: 1
console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); // Output: 3
console.log(getIndexToIns([10, 20, 30, 40, 50], 30)); // Output: 2