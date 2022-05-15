import React from "react";
import "./TodoHeader.css";

export default function TodoHeader(props) {
  return (
    <div className="todoHeader">
      <div className="title">{props.title}</div> 
      <button className={props.className} onClick={props.handleButtonClick}>
        <div className="tooltip">{props.tooltip}</div>
      </button>
    </div>
  )
}