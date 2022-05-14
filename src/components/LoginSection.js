import React, {useState} from 'react';
import "./LoginSection.css";
import {post} from "../utilities";
import {useNavigate} from "@reach/router";

export default function LoginSection(props) {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  async function login(e) {
    e.preventDefault();
    const params = {
      email: email,
      password: password
    }
    const res = await post('/users/login', params);
    const data = await res.json();
    if (res.status === 200) {
      props.setUser(data);
      navigate('/');
    } else {
      setMessage(data.message);
    } 
  }

  return (
    <>
      <h1>Login</h1>
      {message ? <p className='message'>{message}</p> : <></>}
      <form>
        <div>
          <label htmlFor='email'>Email: </label>
          <input 
            type="text"
            required
            name='email'
            id='email'
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor='password'>Password: </label>
          <input
            type="password"
            required
            name='password'
            id='password'
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button type='submit' onClick={e => login(e)}>Log In</button>
      </form>
    </>
  )
}
