import React, { Component } from "react";
import board from "./images/board.png";
import "./App.css";
import Hand from "./components/Hand/Hand";
import Bench from "./components/Bench/Bench";
import pokemonData from "./pokemonData";
import { __values } from "tslib";

class App extends Component {
  state = {
    oppBoardSpots: [
      {
        x: 0,
        y: 5,
        character: null,
        counter: 0
      },
      {
        x: 1,
        y: 5,
        character: null,
        counter: 1
      },
      {
        x: 2,
        y: 5,
        character: null,
        counter: 2
      },
      {
        x: 3,
        y: 5,
        character: null,
        counter: 3
      },
      {
        x: 4,
        y: 5,
        character: null,
        counter: 4
      },
      {
        x: 5,
        y: 5,
        character: null,
        counter: 5
      },
      {
        x: 0,
        y: 4,
        character: null,
        counter: 6
      },
      {
        x: 1,
        y: 4,
        character: null,
        counter: 7
      },
      {
        x: 2,
        y: 4,
        character: null,
        counter: 8
      },
      {
        x: 3,
        y: 4,
        character: null,
        counter: 9
      },
      {
        x: 4,
        y: 4,
        character: null,
        counter: 10
      },
      {
        x: 5,
        y: 4,
        character: null,
        counter: 11
      },
      {
        x: 0,
        y: 3,
        character: null,
        counter: 12
      },
      {
        x: 1,
        y: 3,
        character: null,
        counter: 13
      },
      {
        x: 2,
        y: 3,
        character: null,
        counter: 14
      },
      {
        x: 3,
        y: 3,
        character: { name: "blastoise", height: { height: "100%" } },
        counter: 15
      },
      {
        x: 4,
        y: 3,
        character: null,
        counter: 16
      },
      {
        x: 5,
        y: 3,
        character: null,
        counter: 17
      }
    ],
    boardSpots: [
      {
        x: 0,
        y: 2,
        character: null,
        counter: 0
      },
      {
        x: 1,
        y: 2,
        character: null,
        counter: 1
      },
      {
        x: 2,
        y: 2,
        character: null,
        counter: 2
      },
      {
        x: 3,
        y: 2,
        character: null,
        counter: 3
      },
      {
        x: 4,
        y: 2,
        character: null,
        counter: 4
      },
      {
        x: 5,
        y: 2,
        character: null,
        counter: 5
      },
      {
        x: 0,
        y: 1,
        character: null,
        counter: 6
      },
      {
        x: 1,
        y: 1,
        character: null,
        counter: 7
      },
      {
        x: 2,
        y: 1,
        character: null,
        counter: 8
      },
      {
        x: 3,
        y: 1,
        character: null,
        counter: 9
      },
      {
        x: 4,
        y: 1,
        character: null,
        counter: 10
      },
      {
        x: 5,
        y: 1,
        character: null,
        counter: 11
      },
      {
        x: 0,
        y: 0,
        character: null,
        counter: 12
      },
      {
        x: 1,
        y: 0,
        character: null,
        counter: 13
      },
      {
        x: 2,
        y: 0,
        character: null,
        counter: 14
      },
      {
        x: 3,
        y: 0,
        character: null,
        counter: 15
      },
      {
        x: 4,
        y: 0,
        character: null,
        counter: 16
      },
      {
        x: 5,
        y: 0,
        character: null,
        counter: 17
      }
    ],
    cards: [
      {
        name: "pikachu",
        image: require("./images/pikachu.png"),
        type: require("./images/electric.jpg"),
        numRequired: 4,
        counter: 0
      },
      {
        name: "charmander",
        image: require("./images/charmander.png"),
        type: require("./images/fire.jpg"),
        numRequired: 3,
        counter: 1
      },
      {
        name: "bulbasaur",
        image: require("./images/bulbasaur.png"),
        type: require("./images/grass.jpg"),
        numRequired: 3,
        counter: 2
      },
      {
        name: "squirtle",
        image: require("./images/squirtle.png"),
        type: require("./images/water.jpg"),
        numRequired: 3,
        counter: 3
      },
      {
        name: "rattata",
        image: require("./images/rattata.png"),
        type: require("./images/normal.jpg"),
        numRequired: 2,
        counter: 4
      }
    ],
    spaces: [
      {
        pokemon: null,
        counter: "0"
      },
      {
        pokemon: null,
        counter: "1"
      },
      {
        pokemon: null,
        counter: "2"
      },
      {
        pokemon: null,
        counter: "3"
      },
      {
        pokemon: null,
        counter: "4"
      },
      {
        pokemon: null,
        counter: "5"
      },
      {
        pokemon: null,
        counter: "6"
      },
      {
        pokemon: null,
        counter: "7"
      },
      {
        pokemon: null,
        counter: "8"
      },
      {
        pokemon: null,
        counter: "9"
      }
    ]
  };

  onDragStartFromHand(ev, id) {
    console.log(id);
    console.log(ev);
    ev.dataTransfer.setData("id", id);
  }

  onDragStartFromBoard(ev, id) {
    console.log(id);
    console.log(ev);
    ev.dataTransfer.setData("id", id);
  }

  onDragStartFromBench(ev, id) {
    console.log(id);
    console.log(ev);
    ev.dataTransfer.setData("id", id);
  }

  onDragOverBench(event) {
    event.preventDefault();
    event.target.style.borderColor = "yellow";
  }

  onDropOnBench = (e, num) => {
    console.log(num, e);
    const id = e.dataTransfer.getData("id");
    const newSpaces = this.state.spaces.slice();
    newSpaces[num].pokemon = pokemonData[id.toLowerCase()];
    this.setState({ spaces: newSpaces });
    e.target.style.borderColor = "rgb(131, 83, 43)";
  };

  onDragLeaveBench(e) {
    e.target.style.borderColor = "rgb(131, 83, 43)";
  }

  onDragLeaveBoard(e) {
    e.target.style.borderColor = "rgb(131, 83, 43, .3)";
  }

  onDropOnBoardSpot = (e, counter) => {
    const id = e.dataTransfer.getData("id");
    const newSpaces = this.state.boardSpots.slice();
    newSpaces[counter].character = {
      name: id,
      height: { height: pokemonData[id].height }
    };
    this.setState({ boardSpots: newSpaces });
    e.target.style.borderColor = "rgb(131, 83, 43,.3)";
  };

  onDragEndFromBoard = (e, counter) => {
    console.log(e.dataTransfer.dropEffect);
    if (e.dataTransfer.dropEffect !== "none") {
      const newSpots = this.state.boardSpots.slice();
      newSpots[counter].character = null;
      this.setState({ boardSpots: newSpots });
    }
  };

  onDragEndFromBench = (e, counter) => {
    console.log(e, counter);
    if (e.dataTransfer.dropEffect !== "none") {
      const newSpaces = this.state.spaces.slice();
      newSpaces[counter].pokemon = null;
      this.setState({ spaces: newSpaces });
    }
  };

  onDragEndFromHand = (e, counter) => {
    console.log(e.dataTransfer.dropEffect);
    if (e.dataTransfer.dropEffect !== "none") {
      const newCards = this.state.cards.slice();
      newCards[counter].name = null;
      this.setState({ cards: newCards });
    }
  };
  onDropOnHand(e) {
    console.log("did it!");
    e.preventDefault();
    e.target.style.borderColor = null;
    e.target.parentNode.style.borderColor = null;
  }

  onDragOverHand(e) {
    console.log("did it!");
    e.preventDefault();
    e.target.style.borderColor = "yellow";
    if (e.target.classList.contains("shadow"))
      e.target.parentNode.style.borderColor = "yellow";
  }

  onDragLeaveHand(e) {
    console.log("did it!");
    e.preventDefault();
    e.target.style.borderColor = null;
  }

  render() {
    return (
      <div className="App">
        <img src={board} className="board-bg" alt="logo" />
        <header className="App-header">
          <div className="board">
            {this.state.oppBoardSpots.map(boardSpot => {
              return boardSpot.character ? (
                <div
                  className="board-spot"
                  data-x={boardSpot.x}
                  data-y={boardSpot.y}
                  key={boardSpot.counter}
                >
                  <img
                    style={boardSpot.character.height}
                    className="board-piece"
                    src={require(`./images/${
                      boardSpot.character.name
                    }-front.gif`)}
                  />
                </div>
              ) : (
                <div
                  className="board-spot"
                  data-x={boardSpot.x}
                  data-y={boardSpot.y}
                  key={boardSpot.counter}
                />
              );
            })}
            {this.state.boardSpots.map(boardSpot => {
              return boardSpot.character ? (
                <div
                  className="board-spot"
                  data-x={boardSpot.x}
                  data-y={boardSpot.y}
                  key={boardSpot.counter}
                >
                  <img
                    style={boardSpot.character.height}
                    className="board-piece"
                    src={require(`./images/${
                      boardSpot.character.name
                    }-back.gif`)}
                    onDragStart={e =>
                      this.onDragStartFromBoard(e, boardSpot.character.name)
                    }
                    onDragEnd={e =>
                      this.onDragEndFromBoard(e, boardSpot.counter)
                    }
                  />
                </div>
              ) : (
                <div
                  className="board-spot"
                  data-x={boardSpot.x}
                  data-y={boardSpot.y}
                  onDrop={e => this.onDropOnBoardSpot(e, boardSpot.counter)}
                  onDragOver={this.onDragOverBench}
                  onDragLeave={this.onDragLeaveBoard}
                  key={boardSpot.counter}
                />
              );
            })}
          </div>
        </header>
        <Bench
          spaces={this.state.spaces}
          onDragOver={this.onDragOverBench}
          onDrop={this.onDropOnBench}
          onDragLeave={this.onDragLeaveBench}
          onDragStart={this.onDragStartFromBench}
          onDragEnd={this.onDragEndFromBench}
        />
        <Hand
          cards={this.state.cards}
          onDragStart={this.onDragStartFromHand}
          onDragEnd={this.onDragEndFromHand}
          onDragOver={this.onDragOverHand}
          onDrop={this.onDropOnHand}
          onDragLeave={this.onDragLeaveHand}
        />
      </div>
    );
  }
}

export default App;
