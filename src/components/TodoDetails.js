import React from "react";
import TodoHeader from "./TodoHeader";
import "./TodoDetails.css";

export default function TodoDetails(props) {

  return (
    <div className="todoDetails todoSection">
      <TodoHeader title={props.title} className="backButton" handleButtonClick={props.onClose} tooltip="Close" />
      <p className="todoDescription">{props.description}</p>
      <button className="deleteButton" onClick={props.onDelete}>Delete ToDo</button>
    </div>
  )
}