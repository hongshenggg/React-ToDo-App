import React from "react";
import {useState, useEffect} from "react";
import {get, post, delTodo} from "../utilities";
import "./TodoSection.css"
import TodoHeader from "./TodoHeader.js";
import TodoList from "./TodoList.js";
import CreateToDo from "./CreateToDo";

export default function TodoSection(props) {

  const [creatingToDo, setCreatingToDo] = useState(false);
  const [message, setMessage] = useState('');
  const [todoCards, setToDoCards] = useState([]);

  useEffect(() => {
    async function getTodos() {
      const res = await get('/todos', {user: props.user});
      const todos = await res.json();
      setToDoCards(todos);
    }
    if (props.user) {
      getTodos();
    }
  }, [props.user]);
  

  function handleAddToDo() {
    setMessage('');
    setCreatingToDo(true);
  }

  function handleBack() {
    setMessage('');
    setCreatingToDo(false);
  }

  async function addToDo(title, description) {
    let listOfCards = [...todoCards];
    const res = await post('/todos', {
      user: props.user,
      body: {
        title: title,
        description: description
      }
    });
    if (res.status === 201) {
      const todo = await res.json();
      listOfCards.push(todo);
      setToDoCards(listOfCards);
      setCreatingToDo(false);
    } else {
      const data = await res.json();
      setMessage(data.message);
    }
  }

  async function deleteToDo(id) {
    let listOfCards = [...todoCards];
    const endpoint = '/todos/' + id;
    const res = await delTodo(endpoint, {user: props.user});
    if (res.status === 200) {
      for (let i = 0; i < listOfCards.length; i++) {
        if (listOfCards[i]._id === id) {
          listOfCards.splice(i,1);
          break;
        }
      }
      setToDoCards(listOfCards);
    } else {
      const data = await res.json();
      setMessage(data.message);
    }
    
  }

  if (props.user) {
    if (!creatingToDo) {
      return (
        <>
          <h1>Welcome {props.user.name}, what would you like to do today?</h1>
          {message ? <p className="message">{message}</p> : <></>}
          <div className="todoSection">
            <TodoHeader className="createTodoButton" title="ToDos" handleButtonClick={handleAddToDo} tooltip="Create Todo"/>
            <TodoList todoCards={todoCards} onDelete={deleteToDo}/>
          </div>
        </>
    )
    } else {
      return (
        <>
          <h1>Welcome {props.user.name}, what would you like to do today?</h1>
          {message ? <p className="message">{message}</p> : <></>}
          <CreateToDo handleDoneClick={addToDo} handleBackClick={handleBack}/>
        </>
      )
    }
  } else {
    return <></>
  }
}