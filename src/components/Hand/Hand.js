import React, { Component } from "react";
import "./Hand.css";
import Card from "../Card/Card";
import pokemonData from "../../data/pokemonData";
import deck from "../../data/deck";

class Hand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allowDrop: true,
      cards: [],
      pokeBalls: 100
    };
  }
  onRefreshClick = () => {
    if (this.state.pokeBalls < 2) return;
    for (let j = 0; j < 5; j++) {
      if (this.state.cards[j].occupied) {
        deck.push(this.state.cards[j].name);
      }
    }
    this.setState({ pokeBalls: this.state.pokeBalls - 2 });
    this.getNewCards();
  };
  getNewCards = () => {
    deck.sort((a, b) => 0.5 - Math.random());
    const newCards = [];
    for (var i = 0; i < 5; i++) {
      newCards.push({
        name: deck[i],
        occupied: true,
        counter: i
      });
      deck.shift();
    }
    this.setState({ cards: newCards });
  };

  componentDidMount() {
    this.getNewCards();
  }

  onDragStartFromHand = (ev, id) => {
    ev.dataTransfer.setData("id", id);
    this.setState({ allowDrop: false });
  };

  onDragLeaveHand(e) {
    e.preventDefault();
    e.target.style.borderColor = null;
  }
  onDragOverHand(e) {
    e.preventDefault();
    e.target.style.borderColor = "yellow";
    if (e.target.classList.contains("shadow"))
      e.target.parentNode.style.borderColor = "yellow";
  }

  onDragEndFromHand = (e, counter, name) => {
    this.setState({ allowDrop: true });
    if (e.dataTransfer.dropEffect !== "none") {
      const newCards = this.state.cards.slice();
      newCards[counter].occupied = false;
      this.setState({
        cards: newCards,
        pokeBalls: this.state.pokeBalls - pokemonData[name].price
      });
      this.props.checkToEvolve(name);
    }
  };

  onDropOnHand(e) {
    const id = e.dataTransfer.getData("id");
    const newPokeBalls = this.state.pokeBalls + pokemonData[id].price;
    this.setState({ pokeBalls: newPokeBalls });
    e.preventDefault();
    e.target.style.borderColor = null;
    e.target.parentNode.style.borderColor = null;
  }
  render() {
    return (
      <div className="hand">
        <div className="handSpot" onDrop={e => this.props.onDrop(e)}>
          <div className="image-holder">
            <img
              className="refresh-image"
              src={require("../../images/refresh.png")}
              onClick={this.onRefreshClick}
              alt="refresh shop"
            />
          </div>

          <h5 className="info">
            <img
              className="pokeball"
              width="20"
              src={require("../../images/Pokeball.png")}
              alt="pokeball"
            />{" "}
            : {this.state.pokeBalls}
            <br />
            Hp: {this.props.hp}
          </h5>
        </div>
        {this.state.cards.map(card => {
          return card.occupied ? (
            <Card
              className="handSpot"
              name={card.name}
              image={pokemonData[card.name].image}
              type={pokemonData[card.name].type}
              numRequired={pokemonData[card.name].numRequired}
              price={pokemonData[card.name].price}
              key={card.counter}
              onDragStart={e => this.onDragStartFromHand(e, card.name)}
              onDragEnd={e =>
                this.onDragEndFromHand(e, card.counter, card.name)
              }
            />
          ) : (
            <Card className="handSpot" type={pokemonData[card.name].type} />
          );
        })}
        {this.state.allowDrop ? (
          <div
            className="handSpot release"
            onDrop={e => this.onDropOnHand(e)}
            onDragLeave={e => this.onDragLeaveHand(e)}
            onDragOver={e => this.onDragOverHand(e)}
          >
            <h3 className="info shadow">Release Pokemon</h3>
          </div>
        ) : (
          <div className="handSpot release">
            <h3 className="info shadow">Release Pokemon</h3>
          </div>
        )}
      </div>
    );
  }
}
export default Hand;
