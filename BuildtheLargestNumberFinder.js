function largestOfAll(arr){
  let ArrayWithLagestNumber =[]
  
  for(let i=0; i <arr.length;i++){
    let LagestNumberInArray = arr[i][0]
    for(let j = 0; j< arr[i].length;j++){
      if(LagestNumberInArray < arr[i][j] ){
        LagestNumberInArray = arr[i][j]
      }
      
    }
    ArrayWithLagestNumber.push(LagestNumberInArray)
  } 


  return ArrayWithLagestNumber;
}