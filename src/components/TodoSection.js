import React from "react";
import {useState} from "react";
import "./TodoSection.css"
import TodoHeader from "./TodoHeader.js";
import TodoList from "./TodoList.js";
import CreateToDoPage from "./CreateToDoPage";

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
      <div className="todoSection">
        <TodoHeader handleButtonClick={handleAddToDo}/>
        <TodoList todoCards={todoCards} onDelete={deleteToDo}/>
      </div>
  )
  } else {
    return (
      <CreateToDoPage handleDoneClick={addToDo} handleBackClick={handleBack}/>
    )
  }
}