import React from 'react'

export default function WinnerMsg({winner, current}) {

    let noMovesLeft = current.board.every((val)=> val!==null);

  return (
    <div className='status-message'>
      <h3>{winner && (
        <>
        Winner is <span className={winner==='X'?'text-green': 'text-orange'}>{winner}</span>
        </>
      )}
      {!winner && !noMovesLeft && (
        <>
        Next Turn <span className={current.isXNext?'text-green': 'text-orange'}>{current.isXNext? 'X': 'O'}</span>
        </>
      )}
      {!winner && noMovesLeft && `Game Draw`}</h3>
    </div>
  )
}
