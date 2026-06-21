function sumAll(arr){
  let result = 0;
  const maxNum = Math.max(...arr)
  const minNum = Math.min(...arr)
  for(let i = minNum;i<= maxNum; i++){
    result += i
  }
  return result
  }

  console.log(sumAll([1, 4]));
  console.log(sumAll([4, 1]));