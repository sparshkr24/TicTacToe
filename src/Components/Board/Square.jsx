import React from "react";


export default function Square(props) {
  return (
    <button onClick = {props.onclick} className="square" type="button">{props.value}</button>
  );
}
