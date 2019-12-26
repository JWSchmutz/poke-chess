import React from "react";
import "./Bench.css";
import BenchSpot from "../BenchSpot/BenchSpot";
// import pokemonData from "../../data/pokemonData";
import dragOver from "../../lib/utils";

const onDragStartFromBench = (ev, id) => {
  ev.dataTransfer.setData("id", id);
};

const onDragLeaveBench = e => {
  e.target.style.borderColor = "rgb(131, 83, 43)";
};

const Bench = props => {
  return (
    <div className="bench">
      {props.spaces.map(space => {
        return space.pokemon ? (
          <BenchSpot
            key={space.counter}
            name={space.pokemon.name}
            image={space.pokemon.image}
            onDragStart={onDragStartFromBench}
            onDragEnd={props.onDragEnd}
            counter={space.counter}
          />
        ) : (
          <BenchSpot
            key={space.counter}
            onDragOver={e => dragOver(e)}
            onDrop={e => props.onDrop(e, space.counter)}
            onDragLeave={onDragLeaveBench}
          />
        );
      })}
    </div>
  );
};

export default Bench;
