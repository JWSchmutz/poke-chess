import React from "react";
import "./Bench.css";
import BenchSpot from "../BenchSpot/BenchSpot";

const Bench = props => {
  return (
    <div className="bench">
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

export default Bench;
