const assert = require("assert");

const { initializeApp, displayStory } = require("./StorytellingApp");

assert.doesNotThrow(() => initializeApp(), "initializeApp should run in Node without a browser document");

const logs = [];
const originalLog = console.log;
console.log = (...args) => logs.push(args.join(" "));

try {
  displayStory("funny");
  assert.ok(logs.some((entry) => entry.includes("funny")), "displayStory should log the selected story genre");
} finally {
  console.log = originalLog;
}
