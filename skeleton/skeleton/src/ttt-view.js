class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.board = this.setupBoard(el)
  }
  
  setupBoard(el){
    let ul = document.createElement("ul");
    el.appendChild(ul)

    let li1 = document.createElement("li");
    li1.setAttribute("data-pos", [0, 0]);
    ul.appendChild(li1);

    let li2 = document.createElement("li");
    li2.setAttribute("data-pos", [0, 1])
    ul.appendChild(li2);

    let li3 = document.createElement("li");
    li3.setAttribute("data-pos", [0, 2])
    ul.appendChild(li3);

    let li4 = document.createElement("li");
    li4.setAttribute("data-pos", [1, 0])
    ul.appendChild(li4);

    let li5 = document.createElement("li");
    li5.setAttribute("data-pos", [1, 1])
    ul.appendChild(li5);

    let li6 = document.createElement("li");
    li6.setAttribute("data-pos", [1, 2])
    ul.appendChild(li6);

    let li7 = document.createElement("li");
    li7.setAttribute("data-pos", [2, 0])
    ul.appendChild(li7);

    let li8 = document.createElement("li");
    li8.setAttribute("data-pos", [2, 1])
    ul.appendChild(li8);

    let li9 = document.createElement("li");
    li9.setAttribute("data-pos", [2, 2]) //JSON.stringify()
    ul.appendChild(li9);

    this.bindEvents();
  }
  
  bindEvents() {
    this.el.addEventListener("click", (e)=>this.handleClick(e)) 
  }

  handleClick(e) {
    e.stopPropagation();
    let t = e.target;
    this.makeMove(t)
  }

  makeMove(t) {
    t.classList.add(`${this.game.currentPlayer}`)
    let pos = t.dataset.pos.split(",").map(x => parseInt(x));
    this.game.playMove(pos)
    if (this.game.isOver() && this.game.winner() !== null){
      let h1 = document.createElement("h1");
      h1.innerHTML = `Player ${this.game.winner()} has won!`
      const body = document.querySelector("body");
      body.appendChild(h1)
      if(this.game.winner() === 'x'){
        this.el.classList.add("game-over", "winner-x")
      };
      if(this.game.winner() === 'o'){
        this.el.classList.add("game-over", "winner-o")
      };
    } else if (this.game.isOver() && this.game.winner() === null){
      let h1 = document.createElement("h1");
      h1.innerHTML = "Tie!"
      const body = document.querySelector("body");
      body.appendChild(h1)
      this.el.classList.add("game-over")
    }
  }
  

}


module.exports = View;
