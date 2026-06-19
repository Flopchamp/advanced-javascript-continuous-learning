function uniteUnique(...arg){
  const newArray =[]
  for(const arr of arg){
    for(const item of arr){
      if(!newArray.includes(item)){
        newArray.push(item)
      }
    }
  }
  return newArray
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));