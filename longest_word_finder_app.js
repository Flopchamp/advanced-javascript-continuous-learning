function findLongestWordLength(str){
  let wordInStr =str.split(" ")
  let maxLength=0
  for(let i =0;i < wordInStr.length;i++){
    if(wordInStr[i].length > maxLength ){
      maxLength = wordInStr[i].length
    }
    }
    return maxLength
  }