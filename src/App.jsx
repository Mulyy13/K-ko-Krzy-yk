import "../src/App.css";
import React, { useState } from "react";

function App({ value, onClick }) {
  const [fields, setFields] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);
  const handleClick = (i) => {
    if (Result(fields) || fields[i]) {
      return;
    }
    fields[i] = isX ? "X" : "O";
    setFields(fields);
    setIsX(!isX);
  };
  const winner = Result(fields);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${isX ? "X" : "O"}`;
  }
  const resetgame = () => {
    setIsX(true);
    setFields(Array(9).fill(null));
  };

  return (
    <div className="app">
      <div className="board">
        <div className="1" value={fields[0]} onClick={() => handleClick(0)}>
          {fields[0]}
        </div>
        <div className="2" value={fields[1]} onClick={() => handleClick(1)}>
          {fields[1]}
        </div>
        <div className="3" value={fields[2]} onClick={() => handleClick(2)}>
          {fields[2]}
        </div>
        <div className="4" value={fields[3]} onClick={() => handleClick(3)}>
          {fields[3]}
        </div>
        <div className="5" value={fields[4]} onClick={() => handleClick(4)}>
          {fields[4]}
        </div>
        <div className="6" value={fields[5]} onClick={() => handleClick(5)}>
          {fields[5]}
        </div>
        <div className="7" value={fields[6]} onClick={() => handleClick(6)}>
          {fields[6]}
        </div>
        <div className="8" value={fields[7]} onClick={() => handleClick(7)}>
          {fields[7]}
        </div>
        <div className="9" value={fields[8]} onClick={() => handleClick(8)}>
          {fields[8]}
        </div>
      </div>
      <div className="result">{status}</div>
      <button onClick={resetgame}>RESET</button>
    </div>
  );
}
function Result(fields) {
  const winningLanes = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winningLanes.length; i++) {
    const [a, b, c] = winningLanes[i];
    if (fields[a] && fields[a] === fields[b] && fields[a] === fields[c]) {
      console.log(fields[a]);
      console.log(fields[b]);
      console.log(winningLanes[i]);
      return fields[a];
    }
  }

  return null;
}

export default App;
