const themes =[{name:"light",message:"Hello sunshine — Light theme is on!"},
{name:"dark",
message:"The night is yours — Dark theme is on!"}]

const themeSwitcher = document.getElementById("theme-switcher-button");
const themeDropDown = document.getElementById("theme-dropdown");
const lightTheme = document.getElementById("theme-light");
const darkTheme = document.getElementById("theme-dark");
const statusEl = document.getElementById("status");

themeSwitcher.addEventListener("click",()=>{
  if(themeDropDown.hidden){
    themeDropDown.hidden = false;
  themeSwitcher.setAttribute("aria-expanded", "true")
  }else{
    themeDropDown.hidden = true;
  themeSwitcher.setAttribute("aria-expanded", "false")
  }
})
lightTheme.addEventListener("click",()=>{
  document.body.className=""
  document.body.classList.add("theme-light");
  statusEl.textContent = themes[0].message
})
darkTheme.addEventListener("click",()=>{
  document.body.className=""
  document.body.classList.add("theme-dark");
  statusEl.textContent = themes[1].message
})