import React, { Component } from "react";
import board from "./images/board.png";
import "./App.css";
import Hand from "./components/Hand/Hand";
import Bench from "./components/Bench/Bench";
import pokemonData from "./pokemonData";

class App extends Component {
  state = {
    cards: [
      {
        name: "Pikachu",
        hp: 35,
        image: require("./images/pikachu.png"),
        type: require("./images/electric.jpg"),
        role: "A",
        numRequired: 4
      },
      {
        name: "Charmander",
        hp: 39,
        image: require("./images/charmander.png"),
        type: require("./images/fire.jpg"),
        role: "SA",
        numRequired: 3
      },
      {
        name: "Bulbasaur",
        hp: 45,
        image: require("./images/bulbasaur.png"),
        type: require("./images/grass.jpg"),
        role: "AA",
        numRequired: 3
      },
      {
        name: "Squirtle",
        hp: 44,
        image: require("./images/squirtle.png"),
        type: require("./images/water.jpg"),
        role: "D",
        numRequired: 3
      },
      {
        name: "Rattata",
        hp: 30,
        image: require("./images/rattata.png"),
        type: require("./images/normal.jpg"),
        role: "PA",
        numRequired: 2
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

  onDragStart(ev, id) {
    ev.dataTransfer.setData("id", id);
  }

  onDragOver(event) {
    event.preventDefault();
    event.target.style.borderColor = "yellow";
  }

  onDrop = (e, num) => {
    const id = e.dataTransfer.getData("id");
    const newSpaces = this.state.spaces.slice();
    newSpaces[num].pokemon = pokemonData[id.toLowerCase()];
    this.setState({ spaces: newSpaces });
    e.target.style.borderColor = "rgb(131, 83, 43)";
  };

  onDragLeave(e) {
    e.target.style.borderColor = "rgb(131, 83, 43)";
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={board} className="board" alt="logo" />
        </header>
        <Bench
          spaces={this.state.spaces}
          onDragOver={this.onDragOver}
          onDrop={this.onDrop}
          onDragLeave={this.onDragLeave}
        />

        <Hand cards={this.state.cards} onDragStart={this.onDragStart} />
      </div>
    );
  }
}

export default App;
