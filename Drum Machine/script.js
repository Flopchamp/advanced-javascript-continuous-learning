const drumPad = document.querySelectorAll(".drum-pad");
const display = document.getElementById("display");

drumPad.forEach((pad)=>{
  pad.addEventListener("click",()=>{
    const selectedAudio =pad.querySelector("audio")
    selectedAudio .currentTime=0;
    selectedAudio.play();
    display.textContent =pad.id
  })
})
document.addEventListener("keydown",(e)=>{
  const keyLetter= e.key.toUpperCase();
  const audioEl = document.getElementById(keyLetter)
  if(audioEl){
    audioEl.currentTime=0;
    audioEl.play()
    display.textContent = audioEl.parentElement.id;
  }
})