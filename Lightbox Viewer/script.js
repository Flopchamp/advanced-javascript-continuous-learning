const galleryItem =document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox")
const lightboxImg = document.querySelector("#lightbox-image");
const closeBtn = document.getElementById("close-btn")

galleryItem.forEach((item) => {item.addEventListener("click",()=>{
  lightbox.style.display="flex";
  lightboxImg.src = item.src.replace("-thumbnail", "");
})})
 closeBtn.addEventListener("click",()=>{
  lightbox.style.display="none";
 })
 lightbox.addEventListener("click",()=>{
  lightbox.style.display="none";
 })