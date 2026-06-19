function generatePassword(len){
let pwd =""
const allowedChar ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"

for(let i =0;i<len;i++){
  pwd += allowedChar[Math.floor(Math.random() * allowedChar.length)]
}
return pwd
}

const password =generatePassword(78)

console.log(`Generated password: ${password}`)