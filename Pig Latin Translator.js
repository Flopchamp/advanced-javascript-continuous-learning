function translatePigLatin(str){
  const vawel = /[aeiou]/;
  const searched =str.search(vawel);
  if(searched < 0){
    return str + "ay"
  }else if(searched ===0){
    return str + "way"
  }else{
    return str.slice(searched)+str.slice(0,searched) + "ay"
  }
}