import React from "react";
import "./Card.css";

const Card = props => {
  const cardStyle = {
    background: `url(${props.type}) no-repeat center center`,
    backgroundSize: `cover`,
    width: "20%",
    height: "calc(100% - 10px)",
    border: "black 2px solid",
    marginTop: "2px",
    color: "white",
    position: "relative"
  };

  return (
    <div
      style={cardStyle}
      onClick={props.onClick}
      onDragStart={props.onDragStart}
    >
      <h4 className="card-title-header">
        {props.name}{" "}
        <span className="top-span">
          {props.hp} {props.numRequired} {props.role}
        </span>
      </h4>
      <img className="bench-pkmn-img" src={props.image} alt={props.name} />
    </div>
  );
};

export default Card;
