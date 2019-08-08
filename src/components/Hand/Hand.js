import React from "react";
import "./Hand.css";
import Card from "../Card/Card";
import Image from "../../images/release.jpg";

const Hand = props => {
  return (
    <div className="hand">
      <div className="handSpot" onDrop={e => props.onDrop(e)}>
        <h4 className="info">₱:100</h4>
        <h4 className="info"> Energy:100</h4>
      </div>
      {props.cards.map(card => {
        return card.name ? (
          <Card
            className="handSpot"
            name={card.name}
            image={card.image}
            type={card.type}
            numRequired={card.numRequired}
            key={card.counter}
            onDragStart={e => props.onDragStart(e, card.name)}
            onDragEnd={e => props.onDragEnd(e, card.counter)}
          />
        ) : (
          <Card className="handSpot" type={card.type} />
        );
      })}
      <div
        className="handSpot release"
        onDrop={e => props.onDrop(e)}
        onDragLeave={e => props.onDragLeave(e)}
        onDragOver={e => props.onDragOver(e)}
      >
        <h3 className="info shadow">Release Pokemon</h3>
      </div>
    </div>
  );
};

export default Hand;
