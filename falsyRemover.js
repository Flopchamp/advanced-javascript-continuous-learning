function bouncer(arr){
  const arrayToBeFiltered = arr.slice()
  const filteredArray =[]
  for(const element of arrayToBeFiltered){
    if(element){
      filteredArray.push(element)
    }
  }
  return filteredArray
}
console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer(["a", "b", "c"]));