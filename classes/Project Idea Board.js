const projectStatus={
  PENDING:{description:"Pending Execution"},
  SUCCESS:{description:"Executed Successfully"},
  FAILURE:{description:"Execution Failed"},
}

class ProjectIdea{
  constructor(title,description){
    this.title=title;
    this.status =projectStatus.PENDING;
    this.description = description
  }
  updateProjectStatus(newStatus){
    this.status =newStatus
  }
 
   
  }
   class ProjectIdeaBoard{
    constructor(title){
      this.title = title;
      this.ideas =[];
    }
    pin(idea){
      this.ideas.push(idea);
    }
    unpin(idea){
      const index = this.ideas.indexOf(idea)
      if(index!==-1){
        this.ideas.splice(index,1)
      }
    }
    count(){
      return this.ideas.length;
    }
    formatToString(){
      const header = `${this.title} has ${this.count()} idea(s)\n`;
  const listLines = this.ideas.map((idea) => {
    return `${idea.title} (${idea.status.description}) - ${idea.description}\n`;
  }).join("");
  return header + listLines;;
    }
   }
   