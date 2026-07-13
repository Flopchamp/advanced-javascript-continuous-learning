function myReplace(str,word1,word2){
  if(word1[0] === word1[0].toUpperCase()){
    word2 = word2[0].toUpperCase() + word2.slice(1);
  }else{
word2 = word2[0].toLowerCase() + word2.slice(1);
  }
  const updatedStr = str.replace(word1,word2)
  return updatedStr;
}