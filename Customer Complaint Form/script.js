const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const orderNo = document.getElementById("order-no");
const productCode = document.getElementById("product-code");
const quantity = document.getElementById("quantity");
const complaintsGroup = document.getElementById("complaints-group");
const complaintDescription = document.getElementById("complaint-description");
const solutionsGroup = document.getElementById("solutions-group");
const solutionsDescription =document.getElementById("solution-description");
const otherCheckbox = document.getElementById("other-complaint");
const otherRadio =(document.getElementById("other-solution"));
const form = document.querySelector("form")

function validateForm(){
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const orderRegex = /^2024\d{6}$/;
  const productRegex = /^[a-zA-Z]{2}\d{2}-[a-zA-Z]\d{3}-[a-zA-Z]{2}\d$/gi;
  return {"full-name": fullName.value.trim().length > 0,
  "email":emailRegex.test(email.value),
  "order-no":orderRegex.test(orderNo.value),
  "product-code":productRegex.test(productCode.value),
  "quantity":Number.isInteger(Number(quantity.value)) && Number(quantity.value) > 0,
  "complaints-group":document.querySelectorAll('input[name="complaint"]:checked').length > 0,
  "complaint-description":!otherCheckbox.checked || complaintDescription.value.length >= 20,
  "solutions-group": document.querySelectorAll('input[name="solutions"]:checked').length > 0,
  "solution-description": !otherRadio.checked || solutionsDescription.value.length >= 20
  }
};
function isValid(formStatus){
  return Object.values(formStatus).every(status => status === true)
}

form.addEventListener("submit",(e) => {
  e.preventDefault();
  const statusObj=validateForm();
  if (!isValid(statusObj)) {
    
    {fullName.style.borderColor = "red";}
  }
})
form.addEventListener("change", (e) => {
  const status =validateForm()
if(status["full-name"]){
  fullName.style.borderColor ="green";
}else{
  fullName.style.borderColor ="red";
}
if(status["email"]){
  email.style.borderColor ="green"
}else{
  email.style.borderColor ="red"
}
if(status["order-no"]){
  orderNo.style.borderColor ="green"
}else{
  orderNo.style.borderColor ="red"
}
if(status["product-code"]){
  productCode.style.borderColor ="green"
}else{
  productCode.style.borderColor ="red"
}
if(status["quantity"]){
  quantity.style.borderColor ="green"
}else{
  quantity.style.borderColor ="red"
}
if(status["complaints-group"]){
  complaintsGroup.style.borderColor = "green";
}else{
  complaintsGroup.style.borderColor = "red";
}
if(status["complaint-description"]){
   complaintDescription.style.borderColor="green"
}else{
   complaintDescription.style.borderColor="red"
}
if(status["solutions-group"]){
 solutionsGroup.style.borderColor = "green";
}else{
  solutionsGroup.style.borderColor = "red";
}
if(status["solution-description"]){
  solutionsDescription.style.borderColor ="green"
}else{
  solutionsDescription.style.borderColor ="red"
}

});