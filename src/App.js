import React, {useState} from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import AppPage from "./pages/AppPage.js";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import {Router} from "@reach/router";

export default function App() {
  const [user, setUser] = useState();

  return (
    <div>
      <Navbar/>
      <Router>
        <AppPage user={user} path="/"/>
        <LoginPage setUser={setUser} path="/login"/>
        <NotFoundPage default/>
      </Router>
    </div>
  );
}