import React, {useState} from "react";
import Board from "./Components/Board/Board";
import {calculateWinner} from "./calculateWinner"

const App = () => {

  // state of board
  const [board, setBoard] = useState(Array(9).fill(null)); 
  // whose chance is next?
  const [isXNext, setisXNext] = useState(true);

  const handleBoardClick = (position) => {
    // game stops when the clicked square already has value or winner is decided
    if(board[position] || winner){
      return;
    }

    // setting new state of board with callback function
    // prev->value
    setBoard((prev)=>{
      return prev.map((value, idx)=>{
        if(idx === position){
          setisXNext(isXNext?false: true)
          return isXNext? 'X': 'O';
        }
        else{
          return value;
        }
      })
    })
  }

  // Calculate winner by combinations
  const winner = calculateWinner(board);

  // display message
  let message = winner? `Winner ${winner}` : `Next Turn ${isXNext? 'X': 'O'}`;

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <h3>{message}</h3>
      <Board board={board} handleBoardClick={handleBoardClick} />
    </div>
  );
};
export default App;
