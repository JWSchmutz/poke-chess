import React from "react";
import "./BenchSpot.css";
// fix later
const style = {
  width: "100%",
  height: "100%"
};

const BenchSpot = props => {
  if (props.name) {
    return (
      <div className="bench-spot">
        <img src={props.image} alt={props.name} style={style} />
      </div>
    );
  } else {
    return (
      <div
        className="bench-spot"
        onDrop={props.onDrop}
        onDragOver={props.onDragOver}
        onDragLeave={props.onDragLeave}
      />
    );
  }
};

export default BenchSpot;
