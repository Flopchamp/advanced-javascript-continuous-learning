function pyramid(str,num,bool){
  const rows = []
  for(let i = 1;i <= num;i++){
    let rowStr = " ".repeat(num - i) + str.repeat(2 * i - 1);
    if(bool ===false){
      rows.push(rowStr)
  }else{
    rows.unshift(rowStr)
  }

}
return "\n" + rows.join("\n") + "\n";
}