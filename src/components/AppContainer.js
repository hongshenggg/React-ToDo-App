import React from "react";
import "./AppContainer.css";
import TodoSection from "./TodoSection.js";

export default function AppContainer(props) {
  return (
    <div className="appContainer">
      <TodoSection/>
    </div>
  )
}