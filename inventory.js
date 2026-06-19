const inventory =[{name: "laptop", price: 1000, quantity: 5},
  {name: "mouse", price: 20, quantity: 50},
  {name: "keyboard", price: 50, quantity: 20},
  {name: "monitor", price: 200, quantity: 10},
  {name: "printer", price: 150, quantity: 15},];
function findProductIndex(str){
  const productName = str.toLowerCase()
  for (const product of inventory ){
    if(product.name === productName){
      return inventory.indexOf(product)

    } 
  }
   return -1
};

function addProduct(product){
 
const index =findProductIndex(product.name)
if(index !== -1){
  inventory[index].quantity += product.quantity
  console.log(product.name.toLowerCase() +" "+"quantity updated")
}else{
  inventory.push({name: product.name.toLowerCase(), price: product.price, quantity: product.quantity})
  console.log(product.name.toLowerCase() +" "+"added to inventory")
}
  
};

function removeProduct(pName, pQuantity){
  const index = findProductIndex(pName)
  if(index === -1){
    console.log(pName.toLowerCase() + " not found")
    return
  }

  const currentQty = inventory[index].quantity
  if(currentQty < pQuantity){
    console.log(`Not enough ${pName.toLowerCase()} available, remaining pieces: ${currentQty}`)
    return
  }

  const updatedQuantity = currentQty - pQuantity
  if(updatedQuantity === 0){
    inventory.splice(index, 1)
    console.log(pName.toLowerCase() + " removed from inventory")
  } else {
    inventory[index].quantity = updatedQuantity
    console.log(`Remaining ${pName.toLowerCase()} pieces: ${updatedQuantity}`)
  }

}

console.log(removeProduct("laptop", 3));
// console.log(addProduct({name: "laptop", price: 1000, quantity: 5}));
// console.log(addProduct({name: "tablet", price: 300, quantity: 10}));

// console.log(findProductIndex("laptop"));
//  console.log(findProductIndex("mouse"));
//  console.log(findProductIndex("keyboard"));
//  console.log(findProductIndex("monitor"));
//  console.log(findProductIndex("printer"));
console.log(inventory)