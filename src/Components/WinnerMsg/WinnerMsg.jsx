import React from 'react'

export default function WinnerMsg({winner, current}) {

    let noMovesLeft = current.board.every((val)=> val!==null);

  return (
    <div>
      <h3>{winner && `Winner ${winner}`}
      {!winner && !noMovesLeft && `Next Turn ${current.isXNext? 'X': 'O'}`}
      {!winner && noMovesLeft && `Game Draw`}</h3>
    </div>
  )
}
