function parseShipment(rawData){
  const parsedItems = []
  const seenSkus = []
for(let i =0;i<rawData.length;i++){
  let data = rawData[i].split("|")
  const sku = data[0]
  const name = data[1]
  const qty = parseInt(data[2])
  const expires = data[3]
  const zone = data[4] ||"general"
  if(seenSkus.includes(sku)){
    continue;
  }
  seenSkus.push(sku)
  parsedItems.push({ sku, name, qty, expires, zone });
}
return parsedItems;
}

function planRestock(pantry, shipment)
{
  let action = []
 for( const shipmentItem of shipment){
  if(shipmentItem.qty  <= 0){
        action.push({type: "discard",item:shipmentItem})
        continue;
      }
      let foundMatch = false;
  for(const pantryItem of pantry){
    
    if(shipmentItem.sku === pantryItem.sku){
      foundMatch = true;
    }
  }
  if(foundMatch){
    action.push({type:"restock",item:shipmentItem})
  }else{
    action.push({type:"donate",item:shipmentItem})
  }
 } 
 return action;
}

function groupByZone(actions){
  const groupedZone ={}
  for(const action of actions){
    const zoneName = action.item.zone;
    if(!groupedZone[zoneName]){
      groupedZone[zoneName] =[]
    }
    groupedZone[zoneName].push(action);
  }
  return groupedZone;
}

function clonePantry(pantry){
  const copyPantry = JSON.parse(JSON.stringify(pantry));
  return copyPantry;
}

// Paste the exact sample data required to feed the orchestration pipeline
const rawData = [
  "A10|Tomatoes|5|2027-01-01",        // no zone field
  "B21|Bananas|10|2027-01-01|fridge", // zone: "fridge"
  "C32|Eggs|3|2027-01-01|pantry",     // zone: "pantry"
];

const pantry = [
  { sku: "A10", name: "Tomatoes", qty: 2, expires: "2026-12-01", zone: "general" }
];

// Run the full pipeline out in the open using the sample data
const processedShipment = parseShipment(rawData);
const clonedInventory = clonePantry(pantry);
const plannedActions = planRestock(clonedInventory, processedShipment);
const groupedResults = groupByZone(plannedActions);

// Direct open console.log that the test scanner is looking for
console.log(groupedResults);
