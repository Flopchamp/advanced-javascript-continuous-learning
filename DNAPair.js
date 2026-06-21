function pairElement(str){
  const elements= str.split('');
  let result =[]
  for (const element of elements){
    let pair =''
    switch(true){
      case (element ==='A'):
      pair = "T";
      break;
      case (element ==="C"):
      pair ="G";
      break;
      case (element ==="T"):
      pair ="A";
      break;
      case (element ==='G'):
      pair ='C'
      break;
      default:
      "invalid"
    }
   result.push([element,pair])
  }
  return result;
}

console.log(pairElement("GCG"));
console.log(pairElement("ATCGA"));
console.log(pairElement("TTGAG"));
console.log(pairElement("CTCTA"));