const View = require("./ttt-view")
const Game = require('../ttt_node/game.js')

const g = new Game ()

document.addEventListener("DOMContentLoaded", () => {
  const el = document.querySelector(".ttt");
  const views = new View(g, el)
});


