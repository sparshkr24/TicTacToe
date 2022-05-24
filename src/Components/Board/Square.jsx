import React from "react";


export default function Square({value, onclick, winningSquare}) {

  return (
    <button style={{
      backgroundColor: winningSquare? '#09164f': 'white',
      color: winningSquare? 'white': 'black',
      fontWeight: winningSquare? 'bold': 'normal'
    }} onClick = {onclick} className="square" type="button">{value}</button>
  );
}
