function truthCheck(collection, prop) {
 const pre= collection.every((obj)=>obj[prop])
  return pre;
}

console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot"));