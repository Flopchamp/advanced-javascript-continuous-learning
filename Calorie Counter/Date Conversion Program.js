const currentDate = new Date();
const currentDateFormat =`Current Date and Time: ${currentDate}`
console.log(currentDateFormat)

function formatDateMMDDYYYY(date){
  const formatedDate = date.toLocaleDateString("en-US")
  return `Formatted Date (MM/DD/YYYY): ${formatedDate}`

}

function formatDateLong(date){
  const options={
    month:"long",
    day:"numeric",
    year:"numeric"
  }
const formatedDate = date.toLocaleDateString("en-US",options)
return `Formatted Date (Month Day, Year): ${formatedDate}`
}