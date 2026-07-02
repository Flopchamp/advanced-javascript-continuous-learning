const footballTeam = {
  team: "Kenya",
  year: 2020,
  headCoach: "Jacob 'Ghost' Mulee",
  players: [
    {
      name: "Victor Wanyama",
      position: "midfielder",
      isCaptain: true
    },
    {
      name: "Michael Olunga",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Joseph Okumu",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Ian Otieno",
      position: "goalkeeper",
      isCaptain: false
    }
  ]
};

const teamNameElement =document.getElementById("team");
const yearElement = document.getElementById("year");
const headCoachElement = document.getElementById("head-coach");
const playersSelectElement = document.getElementById("players");
 const playersCardElements = document.getElementById("player-cards");

teamNameElement.textContent = footballTeam.team
yearElement.textContent = footballTeam.year
headCoachElement.textContent = footballTeam.
headCoach


playersSelectElement.addEventListener("change",(event)=>{
  const selectedPosition = event.target.value
   displayPlayers(selectedPosition)
})
function  displayPlayers(position){
let playerList;
  if(position ==="all"){
    footballTeam.players
    playerList = footballTeam.players
  }else{
    playerList=footballTeam.players.filter(player => player.position === position)
    
  }
 playersCardElements.innerHTML = playerList.map(({ name, position, isCaptain }) => {
  return `<div class="player-card">
    <h2>${isCaptain ? `(Captain) ${name}` : name}</h2>
    <p>Position: ${position}</p>
  </div>`;
}).join("");

}
