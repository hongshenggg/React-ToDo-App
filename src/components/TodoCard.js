import React from "react";
import "./TodoCard.css";
import TodoDetails from "./TodoDetails.js";

export default function TodoCard(props) {

  function handleCardClick() {
    props.onCardClick(props.id);
  }

  function handleDelete() {
    props.onDelete(props.id);
  }
  
  if (props.isClicked) {
    return (
        <div className="todoCard">
          <input type="checkbox" className="todoCheckbox"></input>
          <div className="todoButton" onClick={handleCardClick}>{props.title}</div>
          <TodoDetails title={props.title} description={props.description} onDelete={handleDelete} onClose={handleCardClick}></TodoDetails>
        </div>
    )
  } else {
    return (
      <div className="todoCard">
        <input type="checkbox" className="todoCheckbox"></input>
        <div className="todoButton" onClick={handleCardClick}>{props.title}</div>
      </div>
    )
  }
}