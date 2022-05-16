import React from "react";
import "./Navbar.css";

export default function Navbar(props) {
  return (
    <nav className="navbar">
      <div className="left-section">ToDo List</div>
      <div className="right-section">
        {props.user ? <button className="logout-button" onClick={props.logout}>Logout</button> : <></>}
      </div>
    </nav>
  )
}