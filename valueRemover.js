// Remove values from an array
// The destroyer function takes an initial array and one or more additional arguments. It removes all elements from the initial array that match any of the additional arguments and returns a new array with the remaining elements.
function destroyer(arr,...arg){
  
    const newArr = arr.filter(item =>(!arg.includes(item)));


  return newArr
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // Output: [1, 1]
console.log(destroyer(["tree", "hamburger", 53], "tree", 53)); // Output: ["hamburger"]
