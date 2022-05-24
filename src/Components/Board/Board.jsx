import React,  { useState } from "react";
import Square from "./Square";

export default function Board({board, handleBoardClick, winningSquares}) {
  
  const renderSquare = position => {

    // When onClick is invoked, the callback function will run every time and will return handleBoardClick function
    // which will be set as the onClick function
    return (
    <Square value={board[position]} winningSquare={winningSquares.includes(position)} 
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

// Board system
// 0 1 2
// 3 4 5
// 6 7 8
