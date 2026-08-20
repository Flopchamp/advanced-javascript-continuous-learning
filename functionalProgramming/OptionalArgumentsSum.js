function addTogether(n,m){
  if( typeof n !== "number"){
    return undefined
  }
  if(arguments.length=== 1){
    return function (newNum){
      if(typeof newNum === "number"){
        return n + newNum
      }
    }
  }
  if(typeof m === "number"){
    return n + m
  }
  
}