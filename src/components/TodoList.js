import React, {useState} from "react";
import "./TodoList.css";
import TodoCard from "./TodoCard.js";

export default function ToDoList(props) {

  const clickTracker = {};
  for (let i = 0; i < props.todoCards.length; i++) {
    clickTracker[props.todoCards[i].id] = false;
  }

  const [clickedCards, setClickedCards] = useState(clickTracker);

  let items;
  if (props.todoCards.length !== 0) {
    items = props.todoCards.map(item => {
      return <TodoCard 
      key={item.id} id={item.id} title={item.title} 
      description={item.desc} isClicked={clickedCards[item.id]} 
      onCardClick={handleCardClick} onDelete={handleDelete}></TodoCard>
    });
  } else {
    items = <div className="emptyList">Nothing to do!</div>
  }

  function handleCardClick(id) {
    const newClickedCards = {...clickedCards};
    for (const key in newClickedCards) {
      if (key === id.toString()) {
        newClickedCards[key] = !newClickedCards[key];
      } else {
        newClickedCards[key] = false;
      }
    }
    setClickedCards(newClickedCards);
  }

  function handleDelete(id) {
    const newClickedCards = {...clickedCards};
    delete newClickedCards[id];
    setClickedCards(newClickedCards);
    props.onDelete(id);
  }

  return (
    <ol className="todoList">
      {items}
    </ol>
  )
}