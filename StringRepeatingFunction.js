function repeatStringNumTimes(str,num){
  let repeatedStr = "";
  if(num <= 0){
    return repeatedStr;
  }else{
    for(let  i =1;i<=num;i++){
        repeatedStr += str;
    }
  }
  return repeatedStr;
}

// function repeatStringNumTimes(str, num) {
//   return num > 0 ? str.repeat(num) : "";
// }
