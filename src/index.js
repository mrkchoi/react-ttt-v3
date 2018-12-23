import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Square extends React.Component {
  render() {
    return <div>Square</div>;
  }
}

class Board extends React.Component {
  render() {
    return (
      <div>
        <div className="board-row">
          {/* {this.renderSquare(0)} */}
          {/* {this.renderSquare(1)} */}
          {/* {this.renderSquare(2)} */}
        </div>
        <div className="board-row">
          {/* {this.renderSquare(3)} */}
          {/* {this.renderSquare(4)} */}
          {/* {this.renderSquare(5)} */}
        </div>
        <div className="board-row">
          {/* {this.renderSquare(6)} */}
          {/* {this.renderSquare(7)} */}
          {/* {this.renderSquare(8)} */}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div>
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>Status</div>
            <div>Moves</div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Game />, document.querySelector("#root"));
