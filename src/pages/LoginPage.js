import React, {useState} from "react";
import "./LoginPage.css";
import LoginSection from "../components/LoginSection";
import RegisterSection from "../components/RegisterSection";

export default function LoginPage(props) {
  const [register, setRegister] = useState(false);

  if (!register) {
    return (
      <div className='userInputContainer'>
        <LoginSection setUser={props.setUser}/>
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
