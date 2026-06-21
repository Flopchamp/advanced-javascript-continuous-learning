function convertHTML(str){
  const elements = str.split('')
  let convertedStr=''
  for (const element  of elements){
    let char =""
    switch(true){
      case (element ==='&'):
      char ='&amp;';
      break;
      case(element ==='<'):
      char = '&lt;';
      break;
      case(element ==='>'):
      char='&gt;';
      break;
      case (element==='"'):
      char='&quot;';
      break;
      case(element==="'"):
      char ='&apos;';
      break;
      default:
      char = element
    }
    convertedStr = convertedStr + char
    }
    return convertedStr;
}
console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log(convertHTML("Sixty > twelve"));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("Schindler's List"));