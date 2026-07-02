 const charCount = document.getElementById("char-count")
const text = document.getElementById("text-input");
  text.addEventListener("input",(event)=>{
    let count=(event.target.value).length
    if(count > 50){
      event.target.value = (event.target.value).slice(0,50);
      count = 50

    }
    if(count ===50){
      charCount.style.color = "red"
    }
    charCount.textContent=`Character Count: ${count}/50`
  }) 
  