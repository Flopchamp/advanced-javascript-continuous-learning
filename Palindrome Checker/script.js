const checkBtn = document.getElementById("check-btn");
const input = document.getElementById("text-input");

const results = document.getElementById("result");
function palindrome (str){
  const inputStr = str.toLowerCase()
  const regex = /[^a-z0-9]/gi;
  const inputStrCleaned = inputStr.replace(regex,"");
  let letterArray = inputStrCleaned.split('');
  let right = letterArray.length-1;
  let left = 0;
  while(left < right){
    let temp = letterArray[left];
    letterArray[left] = letterArray[right];
    letterArray[right]=temp
    left +=1;
    right -=1

  }
  let reverseletter = letterArray.join('')
  return inputStrCleaned === reverseletter;
}

checkBtn.addEventListener("click",()=>{
  if(input.value ===""){
    alert("Please input a value.");
    return;
  }
  const originalText = input.value;
  const checkResults=palindrome(originalText)
  if(checkResults){
   
    results.textContent = originalText + " is a palindrome."
  }else{
    results.textContent = originalText + " is not a palindrome."
  }
  input.value =""
})