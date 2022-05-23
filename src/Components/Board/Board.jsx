import React,  { useState } from "react";
import Square from "./Square";

export default function Board() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setisXNext] = useState(true);

  const handleBoardClick = (position) => {
    if(board[position]){
      return;
    }

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

  const renderSquare = position => {
    return (
    <Square value={board[position]} 
      onclick={ () =>{return handleBoardClick(position);
    }} />
    );
  }

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}
