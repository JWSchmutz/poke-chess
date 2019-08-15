import React, { Component } from "react";
import board from "./images/board.png";
import "./App.css";
// import deck from "./data/deck";
import Board from "./components/Board/Board";
import Hand from "./components/Hand/Hand";
import Bench from "./components/Bench/Bench";
import pokemonData from "./data/pokemonData";
import boardSpots from "./data/boardSpots";
import benchSpaces from "./data/bench";
class App extends Component {
  state = {
    hp: 100,
    boardSpots: boardSpots,
    benchSpaces: benchSpaces
  };

  checkToEvolve = (name, boardSpots) => {
    boardSpots = this.state.boardSpots;
    let preEvolutionCounter = 0;
    for (let i = 0; i < 18; i++) {
      if (boardSpots[i].character) {
        if (name === boardSpots[i].character.name) preEvolutionCounter++;
      }
    }
    for (let i = 0; i < 10; i++) {
      if (this.state.benchSpaces[i].pokemon) {
        if (name === this.state.benchSpaces[i].pokemon.name) {
          preEvolutionCounter++;
        }
      }
    }
    if (preEvolutionCounter === pokemonData[name].numRequired) {
      const newSpaces = this.state.benchSpaces;
      const newSpots = boardSpots;
      let replaced = false;
      for (let i = 0; i < 18; i++) {
        if (boardSpots[i].character) {
          if (name === boardSpots[i].character.name) {
            if (!replaced) {
              newSpots[i].character = {
                name: pokemonData[pokemonData[name].evolvesTo].name,
                height: {
                  height: pokemonData[pokemonData[name].evolvesTo].height
                }
              };
              replaced = true;
            } else {
              newSpots[i].character = null;
            }
          }
        }
      }
      for (let i = 0; i < 10; i++) {
        if (this.state.benchSpaces[i].pokemon) {
          if (name === this.state.benchSpaces[i].pokemon.name) {
            if (!replaced) {
              newSpaces[i].pokemon = pokemonData[pokemonData[name].evolvesTo];
              replaced = true;
            } else {
              newSpaces[i].pokemon = null;
            }
          }
        }
      }
      this.setState({ spaces: newSpaces, boardSpots: newSpots });
      return this.checkToEvolve(pokemonData[name].evolvesTo);
    }
  };

  // ============================ bench functions ===========================

  onDropOnBench = (e, num) => {
    const id = e.dataTransfer.getData("id");
    const newPokeBalls = this.state.pokeBalls - pokemonData[id].price;
    const newSpaces = this.state.benchSpaces.slice();
    newSpaces[num].pokemon = pokemonData[id.toLowerCase()];
    this.setState({ benchSpaces: newSpaces, pokeBalls: newPokeBalls });
    e.target.style.borderColor = "rgb(131, 83, 43)";
  };

  onDragEndFromBench = (e, counter) => {
    if (e.dataTransfer.dropEffect !== "none") {
      const newSpaces = this.state.benchSpaces.slice();
      newSpaces[counter].pokemon = null;
      this.setState({ benchSpaces: newSpaces });
    }
  };

  // ============================ board functions ===========================

  onDragEndFromBoard = (e, counter) => {
    if (e.dataTransfer.dropEffect !== "none") {
      const newSpots = this.state.boardSpots.slice();
      newSpots[counter].character = null;
      this.setState({ boardSpots: newSpots });
    }
  };

  onDropOnBoardSpot = (e, counter) => {
    const id = e.dataTransfer.getData("id");
    const newSpaces = this.state.boardSpots.slice();
    newSpaces[counter].character = {
      name: id,
      height: { height: pokemonData[id].height }
    };
    this.setState({ boardSpots: newSpaces });
    e.target.style.borderColor = "rgb(131, 83, 43,.3)";
    // this.props.checkToEvolve(id, this.state.boardSpots);
  };

  render() {
    return (
      <div className="App">
        <img src={board} className="board-bg" alt="logo" />
        <header className="App-header">
          <Board
            checkToEvolve={this.checkToEvolve}
            onDragOver={this.onDragOverBench}
            boardSpots={this.state.boardSpots}
            onDrop={this.onDropOnBoardSpot}
            onDragEnd={this.onDragEndFromBoard}
          />
        </header>
        <Bench
          spaces={this.state.benchSpaces}
          onDragOver={this.onDragOverBench}
          onDrop={this.onDropOnBench}
          onDragLeave={this.onDragLeaveBench}
          onDragStart={this.onDragStartFromBench}
          onDragEnd={this.onDragEndFromBench}
        />

        <Hand
          cards={this.state.cards}
          pokeBalls={this.state.pokeBalls}
          hp={this.state.hp}
          refreshHand={this.onRefreshClick}
          checkToEvolve={this.checkToEvolve}
        />
      </div>
    );
  }
}

export default App;
