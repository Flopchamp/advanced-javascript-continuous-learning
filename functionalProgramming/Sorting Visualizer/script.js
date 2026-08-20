function generateElement(){
  const randomInt = Math.floor(Math.random() * 100) + 1;
  return randomInt
}

function generateArray(){
  const randomNumbers = [];
  for(let i = 0; i < 5; i++){
    randomNumbers.push(generateElement())

  }
  return randomNumbers
} 
 function generateContainer(){
  return document.createElement("div")
 }

 function fillArrContainer(element,arr){
  element.innerHTML =""
  for(let num of arr){
    const span= document.createElement("span")
    span.textContent = num

    element.appendChild(span)
  }
 }

 function isOrdered(a,b){
  if( a <= b){
    return true
  }
  return false
 }

 function swapElements(arr,index){
  if(!isOrdered(arr[index],arr[index+1])){
    let temp = arr[index]
    arr[index] = arr[index + 1]
    arr[index + 1]= temp
  }
 }

 function highlightCurrentEls(element,index){
  const firstChild = element.children[index];
  const secondChild = element.children[index + 1];
  firstChild.style.border = "2px dashed red";secondChild.style.border = "2px dashed red";
 }
 const generateBtn = document.getElementById("generate-btn");
 const startingArray = document.getElementById("starting-array");
 const arrayContainer = document.getElementById("array-container");
 const sortBtn = document.getElementById("sort-btn");
let numbersToSort=[];
generateBtn.addEventListener("click", () => {
  arrayContainer.innerHTML = "";
  arrayContainer.appendChild(startingArray);
  numbersToSort = generateArray();
  fillArrContainer(startingArray, numbersToSort);
});
function bubbleSort(arr) {
  let isFirstStep = true;
  let swapped = true;

  while (swapped) {
    swapped = false;

    for (let i = 0; i < arr.length - 1; i++) {
      if (isFirstStep) {
        // #starting-array already shows this first comparison
        isFirstStep = false;
      } else {
        const stepDiv = generateContainer();
        fillArrContainer(stepDiv, arr);
        highlightCurrentEls(stepDiv, i);
        arrayContainer.appendChild(stepDiv);
      }

      if (!isOrdered(arr[i], arr[i + 1])) {
        swapped = true;
      }
      swapElements(arr, i);
    }
  }

  const finalStepDiv = generateContainer();
  fillArrContainer(finalStepDiv, arr);
  arrayContainer.appendChild(finalStepDiv);
}

sortBtn.addEventListener("click", () => {
  if (numbersToSort.length < 2) {
    return;
  }

  arrayContainer.innerHTML = "";
  arrayContainer.appendChild(startingArray);

  const arr = [...numbersToSort];
  fillArrContainer(startingArray, arr);
  highlightCurrentEls(startingArray, 0);

  bubbleSort(arr);
});
