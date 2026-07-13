function spinalCase (str){
  const regex = /([a-z])([A-Z])/g;
  const replaced = str.replace(regex,"$1 $2")
  const regex1 =/[ _]+/g;
  const replaced1 = replaced.replace(regex1,"-")
  return replaced1.toLowerCase();
}