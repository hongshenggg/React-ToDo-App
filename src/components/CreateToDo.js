import React from "react";
import {useState} from "react";
import TodoHeader from "./TodoHeader";
import "./CreateToDo.css";
import "./TodoSection.css";

export default function CreateToDo(props) {

  const [todoTitle, setToDoTitle] = useState();
  const [todoDesc, setToDoDesc] = useState();

  function onDone() {
    props.handleDoneClick(todoTitle, todoDesc);
  }

  function handleTitleChange(e) {
    setToDoTitle(e.target.value);
  }

  function handleDescChange(e) {
    setToDoDesc(e.target.value);
  }

  return (
    <div className="todoSection">
      <TodoHeader className="backButton" title="Create ToDo" handleButtonClick={props.handleBackClick} tooltip="Back"/>
      <input type="text" placeholder="Title of ToDo" className="todoTitleInput textBox" onChange={handleTitleChange}></input>
      <textarea placeholder="Description of ToDo" className="todoDescriptionText textBox" onChange={handleDescChange}></textarea> 
      <button className="doneButton" onClick={onDone}>Add ToDo</button>
    </div>
  )
}