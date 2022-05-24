import React from 'react'

export default function History({history, moveTo, currentMove}) {
  return (
    <div>
      <ul>
          {
              history.map((_, move)=>{
                  return(
                    <li key = {move}> <button style={{
                        fontWeight : move===currentMove? 'bold' : 'normal'
                    }} type='button' onClick={()=> moveTo(move)}>{move===0?'Go to start game':`Go to #${move}`}</button> </li>
                  )
              })
          }
      </ul>
    </div>
  )
}
