function diffArray(arr1,arr2){
  const combinedArrays = arr1.concat(arr2);
  const result = combinedArrays.filter(item =>(!arr1.includes(item) || !arr2.includes(item)))
return result
}
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); // Output: [4]
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])); // Output: ["pink wool"]
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])); // Output: ["diorite"]
console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])); // Output: ["diorite"]
console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"])); // Output: []