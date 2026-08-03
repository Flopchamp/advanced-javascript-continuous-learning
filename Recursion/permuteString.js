function permuteString (str,prefix ="",results=[]){
 
  if(str.length ===0){
    results.push(prefix)
    return results;
  }
  for(let i =0;i< str.length;i++){
    const c =str[i]
    const left = str.slice(0,i)
    const right =str.slice(i+1)
     permuteString(left+right,prefix + c,results)
  }
   return Array.from(new Set(results));
}