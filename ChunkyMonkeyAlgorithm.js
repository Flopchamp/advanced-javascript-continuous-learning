function chunkArrayInGroups(arr,num){
  const result = [];
  for(let i = 0;i < arr.length;i += num){
    result.push(arr.splice(i,i+num));
  }
  return result;
}