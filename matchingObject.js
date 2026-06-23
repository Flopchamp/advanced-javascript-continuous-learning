function whatIsInAName(arr,source){
  const sourceKeys = Object.keys(source)
  const newArray =arr.filter(obj => sourceKeys.every(key => (obj.hasOwnProperty(key))&& (obj[key] === source[key])));
return newArray
}
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })); // Output: [{ first: "Tybalt", last: "Capulet" }]
console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 })); // Output: [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }]