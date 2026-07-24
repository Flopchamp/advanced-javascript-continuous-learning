const poll = new Map();
const addOption = option =>{
  if(option ===""){
    return `Option cannot be empty.`;
  }else if(poll.has(option)){
    return `Option "${option}" already exists.`
  }else{
    poll.set(option,new Set())
    return `Option "${option}" added to the poll.`
  }
}
const vote =(option,voterId)=>{
  if(!poll.has(option)){
  return `Option "${option}" does not exist.`
  }
  const voterSet = poll.get(option);
  const voted=voterSet.has(voterId)
  if(voted){
    return `Voter ${voterId} has already voted for "${option}".`
  }else{
    voterSet.add(voterId)
    return `Voter ${voterId} voted for "${option}".`
  } 
}
const displayResults =()=>{
  let resultText = "Poll Results:\n"
  poll.forEach((voteSet,option)=>{
   resultText += `${option}: ${voteSet.size} votes\n`
  })
  return resultText.trim()
}
addOption("optionA")
addOption("optionB")
addOption("optionC")
vote("optionA","User1")
vote("optionB","User2")
vote("optionC","User3")
console.log(displayResults())