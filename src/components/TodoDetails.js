import React from "react";
import "./TodoDetails.css";

export default function TodoDetails(props) {

  return (
    <div className="todoDetails">
      <h4 className="todoTitle">{props.title}</h4>
      <p className="todoDescription">{props.description}</p>
      <button className="deleteButton" onClick={props.onDelete}>Delete ToDo</button>
    </div>
  )
}