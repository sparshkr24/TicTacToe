import React, {useState} from "react";
import Board from "./Components/Board/Board";
import {calculateWinner} from "./calculateWinner"
import History from './Components/History/History'
import WinnerMsg from './Components/WinnerMsg/WinnerMsg'

const App = () => {

  const NEW_GAME = [
    { board : Array(9).fill(null), isXNext: true }
  ];

  // state of board
  const [history, setHistory] = useState(NEW_GAME); 

  const[currentMove, setCurrentMove] = useState(0);
  let current = history[currentMove];

  //Calculating winner
  const {winner, winningSquares} = calculateWinner(current.board);

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

  function moveTo(move){
    setCurrentMove(move)
  }

  function onNewGame()  {
    setHistory(NEW_GAME);
    setCurrentMove(0);
  }
  
  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <WinnerMsg current={current} winner={winner} />
      <Board board={current.board} handleBoardClick={handleBoardClick} winningSquares={winningSquares} />
      <br />
      <button type="button" onClick={onNewGame}>Start new Game</button>
      <br />
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
};
export default App;
