import React, {useState} from 'react'
import {post} from "../utilities";
import "./RegisterSection.css";

function RegisterSection(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [message, setMessage] = useState('');

  async function register(e) {
    e.preventDefault();
    if (password === confirmPassword) {
      const params = {
        name: name,
        email: email,
        password: password,
      }
      const res = await post('/users', params);
      const data = await res.json();
      setMessage(data.message);
      if (res.status === 201) {
        setTimeout(() => props.setRegister(false), 3000);
      }
    } else {
      setPasswordMatch(false);
    }
  }

  return (
    <>
      <h1>Register</h1>
      {message ? <p className='message'>{message}</p> : <></>}
      {passwordMatch ? <></> : <p className='message'>Passwords do not match</p>}
      <form>
        <div>
            <label htmlFor='name'>Name: </label>
            <input 
              type="text"
              required
              name='name'
              id='name'
              onChange={e => {
                setName(e.target.value);
              }}
            />
          </div>
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
        <div>
          <label htmlFor='confirmPassword'>Confirm Password: </label>
          <input
            type="password"
            required
            name='password'
            id='confirmPassword'
            onChange={e => {
              setConfirmPassword(e.target.value);
            }}
          />
        </div>
        <button type='submit' onClick={register}>Register</button>
      </form>
    </>
  )
}

export default RegisterSection