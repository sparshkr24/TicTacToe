import React, {useState} from "react";
import Board from "./Components/Board/Board";
import {calculateWinner} from "./calculateWinner"
import History from './Components/History/History'
import WinnerMsg from './Components/WinnerMsg/WinnerMsg'

const App = () => {

  // state of board
  const [history, setHistory] = useState([
    { board : Array(9).fill(null), isXNext: true }
  ]); 

  const[currentMove, setCurrentMove] = useState(0);
  let current = history[currentMove];

  const handleBoardClick = (position) => {
    // game stops when the clicked square already has value or winner is decided
    if(history[history.length - 1].board[position] || winner){
      return;
    }

    //storing game history in state variable -> history
    setHistory((prev)=>{
      const last = prev[prev.length - 1];

      const newBoard = last.board.map((value, idx)=>{
        if(idx === position){
          return last.isXNext? 'X': 'O';
        }
        else{
          return value;
        }
      })
      return prev.concat({board: newBoard, isXNext: !last.isXNext});
    }) ;

    setCurrentMove(prev => prev+1);
  }
  console.log(history);
  // Calculate winner by combinations
  const winner = calculateWinner(current.board);
 

  // display message
  let message = winner? `Winner ${winner}` : `Next Turn ${current.isXNext? 'X': 'O'}`;
  let myStyle = {}

  function moveTo(move){
    setCurrentMove(move)
  }
  
  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <WinnerMsg current={current} winner={winner} />
      <Board board={current.board} handleBoardClick={handleBoardClick} />
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
};
export default App;
