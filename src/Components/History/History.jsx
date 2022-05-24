import React from 'react'

export default function History({history, moveTo, currentMove}) {
  return (
    <div className='history-wrapper'>
      <ul className='history'>
          {
              history.map((_, move)=>{
                  return(
                    <li key = {move}> <button 
                    className={`btn-move ${move===currentMove? 'active': ''}`}
                     type='button' onClick={()=> moveTo(move)}>{move===0?'Go to start game':`Go to #${move}`}</button> </li>
                  )
              })
          }
      </ul>
    </div>
  )
}
