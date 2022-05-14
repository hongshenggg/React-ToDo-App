import React from "react";
import {useState, useEffect} from "react";
import get from "../utilities";
import "./TodoSection.css"
import TodoHeader from "./TodoHeader.js";
import TodoList from "./TodoList.js";
import CreateToDo from "./CreateToDo";

export default function TodoSection(props) {

  const [creatingToDo, setCreatingToDo] = useState(false);
  const [todoCards, setToDoCards] = useState([]);
  const [numOfItems, setNumOfItems] = useState(0);

  function handleAddToDo() {
    setCreatingToDo(true);
  }

  function handleBack() {
    setCreatingToDo(false);
  }

  function addToDo(title, description) {
    let listOfCards = [...todoCards];
    if (title) {
      listOfCards.push({id: numOfItems, title: title, desc: description});
      setNumOfItems(numOfItems + 1);
    }
    setToDoCards(listOfCards);
    setCreatingToDo(false);
  }

  function deleteToDo(id) {
    let listOfCards = [...todoCards];
    for (let i = 0; i < listOfCards.length; i++) {
      if (listOfCards[i].id === id) {
        listOfCards.splice(i,1);
        break;
      }
    }
    setToDoCards(listOfCards);
  }

  if (!creatingToDo) {
    return (
      <>
        <h1>Hello {props.user.name}, what would you like to do today?</h1>
        <div className="todoSection">
          <TodoHeader handleButtonClick={handleAddToDo}/>
          <TodoList todoCards={todoCards} onDelete={deleteToDo}/>
        </div>
      </>
  )
  } else {
    return (
      <>
        <h1>Hello {props.user.name}, what would you like to do today?</h1>
        <CreateToDo handleDoneClick={addToDo} handleBackClick={handleBack}/>
      </>
    )
  }
}