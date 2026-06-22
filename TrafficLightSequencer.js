const config1 = {
  fault: false,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 4 }
  ]
};

const config2 = {
  fault: false,
  phases: [
    { color: "red", duration: 3 },
    { color: "yellow", duration: -2 },
    { color: "green", duration: 6 }
  ]
};

const config3 = {
  fault: true,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 6 }
  ]
};

const config4 = {
  fault: false,
  phases: []
};

function runSequence(config, cycles){
  if(config.phases.length===0){
    console.log("No phases found")
    return []
  }
  for (let c = 0; c < cycles; c++){
    for(const phase of config.phases){
      if(config.fault === true){
      console.log("Faulted phase!");
      return;
    }else if (phase.duration <= 0){
      console.log("Invalid phase detected")
    }else{
      console.log(`Switching to ${phase.color} for ${phase.duration} s`)
    }
    }
  }
}

function generateTimeline(config,cycles){
  let totalTime = 0;
  let timeline = [];
  for(let c=0;c < cycles;c++){
    for(const phase of config.phases){
      totalTime += phase.duration;
      timeline.push(totalTime)
    }
  }
  return timeline;
}
console.log(runSequence(config1, 2));
console.log(runSequence(config2, 2));
console.log(runSequence(config3, 2));
console.log(runSequence(config4, 2));