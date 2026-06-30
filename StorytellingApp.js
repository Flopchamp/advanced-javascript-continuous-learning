const storyObj = {
  scary: {
    story: `In the dark woods, a group of friends stumbled upon an old, abandoned cabin. They enter the cabin and awaken something malevolent that had been dormant for centuries.`,
    borderColor: "#ee4b2b"
  },
  funny: {
    story: `During a camping trip, Mark decided to show off his culinary skills by cooking dinner over an open fire. However, his attempt caused him to burn the dinner as well as his eyebrows off.`,
    borderColor: "#f1be32"
  },
  adventure: {
    story: `Lost in the heart of the Amazon rain forest, Sarah and Jake stumbled upon an ancient temple. They braved deadly traps and encountered strange wildlife, all while deciphering cryptic clues left behind by a mysterious civilization.`,
    borderColor: "#acd157"
  }
};

function displayStory(genre) {
  if (!Object.prototype.hasOwnProperty.call(storyObj, genre)) {
    return;
  }

  const resultParagraph = typeof document !== "undefined" ? document.getElementById("result") : null;
  const storyContainer = typeof document !== "undefined" ? document.querySelector(".story-container") : null;

  if (resultParagraph) {
    resultParagraph.textContent = storyObj[genre].story;
  }

  if (storyContainer) {
    storyContainer.style.borderColor = storyObj[genre].borderColor;
  }

  console.log(`Story displayed (${genre}): ${storyObj[genre].story}`);
}

function initializeApp() {
  if (typeof document === "undefined") {
    console.log("Storytelling App running in console mode.");
    displayStory("scary");
    return;
  }

  const storyContainer = document.querySelector(".story-container");
  const scaryStoryBtn = document.getElementById("scary-btn");
  const funnyStoryBtn = document.getElementById("funny-btn");
  const adventureStoryBtn = document.getElementById("adventure-btn");
  const resultParagraph = document.getElementById("result");

  if (resultParagraph && storyContainer) {
    displayStory("scary");
  }

  if (scaryStoryBtn) {
    scaryStoryBtn.addEventListener("click", () => displayStory("scary"));
  }

  if (funnyStoryBtn) {
    funnyStoryBtn.addEventListener("click", () => displayStory("funny"));
  }

  if (adventureStoryBtn) {
    adventureStoryBtn.addEventListener("click", () => displayStory("adventure"));
  }

  console.log("Storytelling App is running!");
}

initializeApp();

if (typeof module !== "undefined") {
  module.exports = { storyObj, displayStory, initializeApp };
}