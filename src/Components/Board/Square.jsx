import React from "react";


export default function Square({value, onclick, winningSquare}) {

  return (
    <button
    className={`square ${winningSquare?'winning': ''} ${value==='X'?'text-green': 'text-orange'}`}
    onClick = {onclick} type="button">{value}</button>
  );
}
