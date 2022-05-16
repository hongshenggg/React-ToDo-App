import React, {useEffect} from "react";
import {useNavigate} from "@reach/router";
import "./AppPage.css";
import TodoSection from "../components/TodoSection.js";

export default function AppPage(props) {

  const navigate = useNavigate();

  useEffect(() => {
    if (!props.user) {
      navigate('/login');
    }
  }, [props.user])


  return (
    <div className="appContainer">
      <TodoSection user={props.user}/>
    </div>
  )
}