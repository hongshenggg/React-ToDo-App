import React, {useState, useEffect} from "react";
import {useNavigate} from "@reach/router";
import "./LoginPage.css";
import LoginSection from "../components/LoginSection";
import RegisterSection from "../components/RegisterSection";

export default function LoginPage(props) {
  const [register, setRegister] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    if (props.user) {
      navigate('/');
    }
  }, [props.user])

  if (!register) {
    return (
      <div className='userInputContainer'>
        <div className='inputSection'>
          <LoginSection login={props.login}/>
          <button onClick={() => {
            setRegister(true);
          }}>Don't have an account? Click here to create one</button>
        </div>
      </div>
    )
  } else {
    return (
      <div className='userInputContainer'>
        <div className='inputSection'>
          <RegisterSection setRegister={setRegister}/>
          <button onClick={() => {
            setRegister(false);
          }}>Already have an account? Click here to log in</button>
        </div>
      </div>
    )
  }
}
