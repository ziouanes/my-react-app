import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import './appgame.css';

const socket = io("http://localhost:3001");

const Appgame2 = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  useEffect(() => {
    socket.on("update", (data) => {
      setSquares(data.squares);
      setIsXNext(data.isXNext);
    });
  }, []);

  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) return;

    const newSquares = squares.slice();
    newSquares[i] = isXNext ? "X" : "O";
    
    socket.emit("move", { squares: newSquares, isXNext: !isXNext });
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], 
      [0, 3, 6], [1, 4, 7], [2, 5, 8], 
      [0, 4, 8], [2, 4, 6]
    ];
    for (let [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const renderSquare = (i) => {
    return (
      <button className="square" onClick={() => handleClick(i)}>
        {squares[i]}
      </button>
    );
  };

  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every(square => square !== null);
  const status = winner ? `Winner: ${winner}` : isDraw ? "Draw" : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <div className="board">
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)} {renderSquare(1)} {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)} {renderSquare(4)} {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)} {renderSquare(7)} {renderSquare(8)}
      </div>
      <button onClick={() => socket.emit("reset")}>Restart Game</button>
    </div>
  );
};

export default Appgame2;
