function steamrollArray(arr){
  const flattened = [];
  for(const item of arr){
    if(!Array.isArray(item)){
      flattened.push(item)
    }else{
      const result =steamrollArray(item)
      flattened.push(...result)
    }
  }
  return flattened
}
console.log(steamrollArray([1, [2], [3, [[4]]]])); // Output: [1, 2, 3, 4]  
console.log(steamrollArray([1, [], [3, [[4]]]])); // Output: [1, 3, 4]