import React, { Component } from "react";
// import board from "../../images/board.png";
import pokemonData from "../../data/pokemonData";
import dragOver from "../../lib/utils";
class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oppBoardSpots: [
        {
          x: 0,
          y: 5,
          character: null,
          counter: 0
        },
        {
          x: 1,
          y: 5,
          character: null,
          counter: 1
        },
        {
          x: 2,
          y: 5,
          character: null,
          counter: 2
        },
        {
          x: 3,
          y: 5,
          character: null,
          counter: 3
        },
        {
          x: 4,
          y: 5,
          character: null,
          counter: 4
        },
        {
          x: 5,
          y: 5,
          character: null,
          counter: 5
        },
        {
          x: 0,
          y: 4,
          character: null,
          counter: 6
        },
        {
          x: 1,
          y: 4,
          character: null,
          counter: 7
        },
        {
          x: 2,
          y: 4,
          character: null,
          counter: 8
        },
        {
          x: 3,
          y: 4,
          character: null,
          counter: 9
        },
        {
          x: 4,
          y: 4,
          character: null,
          counter: 10
        },
        {
          x: 5,
          y: 4,
          character: null,
          counter: 11
        },
        {
          x: 0,
          y: 3,
          character: null,
          counter: 12
        },
        {
          x: 1,
          y: 3,
          character: null,
          counter: 13
        },
        {
          x: 2,
          y: 3,
          character: null,
          counter: 14
        },
        {
          x: 3,
          y: 3,
          character: null,
          counter: 15
        },
        {
          x: 4,
          y: 3,
          character: null,
          counter: 16
        },
        {
          x: 5,
          y: 3,
          character: null,
          counter: 17
        }
      ]
    };
  }

  onDragStartFromBoard(ev, id) {
    ev.dataTransfer.setData("id", id);
  }

  onDragLeaveBoard(e) {
    e.target.style.borderColor = "rgb(131, 83, 43, .3)";
  }

  render() {
    return (
      <div className="board">
        {this.state.oppBoardSpots.map(boardSpot => {
          return boardSpot.character ? (
            <div
              className="board-spot"
              data-x={boardSpot.x}
              data-y={boardSpot.y}
              key={boardSpot.counter}
            >
              <img
                className="board-piece"
                src={require(`../../images/${boardSpot.character}-front.gif`)}
                alt={`${boardSpot.character}`}
              />
            </div>
          ) : (
            <div
              className="board-spot"
              data-x={boardSpot.x}
              data-y={boardSpot.y}
              key={boardSpot.counter}
            />
          );
        })}
        {this.props.boardSpots.map(boardSpot => {
          return boardSpot.character ? (
            <div
              className="board-spot"
              data-x={boardSpot.x}
              data-y={boardSpot.y}
              key={boardSpot.counter}
            >
              <img
                style={boardSpot.character.height}
                alt={boardSpot.character}
                className="board-piece"
                src={require(`../../images/${
                  boardSpot.character.name
                }-back.gif`)}
                onDragStart={e =>
                  this.onDragStartFromBoard(e, boardSpot.character.name)
                }
                onDragEnd={e => this.props.onDragEnd(e, boardSpot.counter)}
              />
            </div>
          ) : (
            <div
              className="board-spot"
              data-x={boardSpot.x}
              data-y={boardSpot.y}
              onDrop={e => this.props.onDrop(e, boardSpot.counter)}
              onDragOver={dragOver}
              onDragLeave={this.onDragLeaveBoard}
              key={boardSpot.counter}
            />
          );
        })}
      </div>
    );
  }
}

export default Board;
