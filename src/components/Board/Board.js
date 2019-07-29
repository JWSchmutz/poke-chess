import React from "react";
import "./Board.css";
import BoardSpot from "../BoardSpot/BoardSpot";
// this is not close to being finished

const Board = props => {
  return (
    <div className="board">
      {props.spaces.map(space => {
        return space.pokemon ? (
          <BenchSpot
            key={space.counter}
            name={space.pokemon.name}
            image={space.pokemon.image}
          />
        ) : (
          <BenchSpot
            key={space.counter}
            onDragOver={e => props.onDragOver(e)}
            onDrop={e => props.onDrop(e, space.counter)}
            onDragLeave={props.onDragLeave}
          />
        );
      })}
    </div>
  );
};

export default Board;
