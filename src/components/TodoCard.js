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
      <React.Fragment>
        <div className="todoCard">
          <input type="checkbox" className="todoCheckbox"></input>
          <div className="todoButton" onClick={handleCardClick}>{props.title}</div>
        </div>
        <TodoDetails title={props.title} description={props.description} onDelete={handleDelete}></TodoDetails>
      </React.Fragment>
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