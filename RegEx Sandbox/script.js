const regexPattern = document.getElementById("pattern");
const stringToTest =document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");
const caseInsensitiveFlag =document.getElementById("i");
const globalFlag = document.getElementById("g");
function getFlags(){
  let flag ="";
  if(caseInsensitiveFlag.checked){
    flag +="i";
  } if(globalFlag.checked){
    flag += "g";
  }
 return flag;
}

testButton.addEventListener("click",()=>{
  const pattern = regexPattern.value;
  const flags = getFlags();
  const regex = new RegExp(pattern, flags);
  const text = stringToTest.textContent
   stringToTest.innerHTML=stringToTest.textContent.replace(regex,"<span class='highlight'>$&</span>")
   const matches = text.match(regex) || [];
    
   if(matches.length >0){
    testResult.textContent =matches.join(", ");
   }else{
    testResult.textContent = "no match";
   }
})