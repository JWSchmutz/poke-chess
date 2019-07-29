import React from "react";
import "./Hand.css";
import Card from "../Card/Card";

const Hand = props => {
  let i = 0;
  return (
    <div className="hand">
      {props.cards.map(card => {
        i++;
        return (
          <Card
            name={card.name}
            hp={card.hp}
            image={card.image}
            type={card.type}
            role={card.role}
            numRequired={card.numRequired}
            key={i.toString()}
            onDragStart={e => props.onDragStart(e, card.name)}
          />
        );
      })}
    </div>
  );
};

export default Hand;
