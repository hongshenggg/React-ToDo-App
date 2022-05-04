import React from "react";
import {useState} from "react";
import "./CreateToDoPage.css";
import "./TodoSection.css";

export default function CreateToDoPage(props) {

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
    <div className="createToDoPage todoSection">
      <div className="createToDoTitle">Create ToDo</div>
      <input type="text" placeholder="Title of ToDo" className="todoTitleInput textBox" onChange={handleTitleChange}></input>
      <textarea rows="2" placeholder="Description of ToDo" className="todoDescriptionText textBox" onChange={handleDescChange}></textarea> 
      <div className="buttonsContainer">
        <button onClick={onDone}>Done</button>
        <button onClick={props.handleBackClick}>Back</button>
      </div>
    </div>
  )
}