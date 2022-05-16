import React, {useState} from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import AppPage from "./pages/AppPage.js";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import {Router} from "@reach/router";

export default function App() {
  const [user, setUser] = useState();

  function logout() {
    setUser(null);
  }

  return (
    <div>
      <Navbar user={user} logout={logout}/>
      <Router>
        <AppPage user={user} path="/"/>
        <LoginPage login={setUser} path="/login"/>
        <NotFoundPage default/>
      </Router>
    </div>
  );
}