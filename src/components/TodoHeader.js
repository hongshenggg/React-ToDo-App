import React from "react";
import "./TodoHeader.css";

export default function TodoHeader(props) {
  return (
    <div className="todoHeader">
      <div className="title">ToDos</div> 
      <button onClick={props.handleButtonClick}>
        <div className="tooltip">Create ToDo</div>
      </button>
    </div>
  )
}