import React, {useState, useEffect} from "react";
import {useNavigate} from "@reach/router";
import "./AppPage.css";
import TodoSection from "../components/TodoSection.js";

export default function AppPage(props) {

  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('user');
    if (!props.user && !isLoggedIn) {
      navigate('/login');
    }
  }, [props.user])


  return (
    <div className="appContainer">
      <TodoSection user={props.user}/>
    </div>
  )
}