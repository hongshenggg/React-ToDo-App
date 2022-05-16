import React, {useState, useEffect} from "react";
import {useNavigate} from "@reach/router";
import "./LoginPage.css";
import LoginSection from "../components/LoginSection";
import RegisterSection from "../components/RegisterSection";

export default function LoginPage(props) {
  const [register, setRegister] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('user');
    if (isLoggedIn) {
      navigate('/');
    }
  }, [])

  if (!register) {
    return (
      <div className='userInputContainer'>
        <LoginSection login={props.login}/>
        <button onClick={() => {
          setRegister(true);
        }}>Register</button>
      </div>
    )
  } else {
    return (
      <div className='userInputContainer'>
        <RegisterSection setRegister={setRegister}/>
        <button onClick={() => {
          setRegister(false);
        }}>Log In</button>
      </div>
    )
  }
}
