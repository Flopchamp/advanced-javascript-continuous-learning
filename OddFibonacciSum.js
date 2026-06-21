function sumFibs(num){
  let result =0
  let start =0
  let current = 1
  while(current <= num){
    if(current % 2 !== 0){
      result += current;
    }
    let temp = current;
    current = start + current;
    start = temp
  } 
  return result;
}
console.log(sumFibs(4));
console.log(sumFibs(10));
console.log(sumFibs(1000));
console.log(sumFibs(4000000));
console.log(sumFibs(75025));
console.log(sumFibs(75026));