import React from "react";
import "./Card.css";

const Card = props => {
  const cardStyle = {
    background: `url(${props.type}) no-repeat center center / cover`,
    width: "14.2%",
    height: "100%",
    border: "black 2px solid",
    color: "white",
    position: "relative"
  };
  return (
    <div
      style={cardStyle}
      onClick={props.onClick}
      onDragStart={props.onDragStart}
      onDragEnd={props.onDragEnd}
      onDrop={props.onDrop}
    >
      <h4 className="card-title-header">
        <div>{props.numRequired}</div>
        <div>
          {props.price}{" "}
          {props.price && (
            <img
              className="pokeball"
              width="20"
              src={require("../../images/Pokeball.png")}
              alt="pokeball"
            />
          )}
        </div>
      </h4>
      <img className="bench-pkmn-img" src={props.image} alt={props.name} />
    </div>
  );
};

export default Card;
