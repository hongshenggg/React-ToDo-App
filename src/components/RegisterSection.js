import React, {useState} from 'react'
import {post} from "../utilities";

function RegisterSection(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
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
      setMessage('Passwords do not match');
    }
  }

  return (
    <>
      <h1>Register</h1>
      {message ? <p className='message'>{message}</p> : <p className='message'></p>}
      <form onSubmit={register}>
        <div>
            <input 
              type="text"
              placeholder='Enter name'
              required
              name='name'
              id='name'
              onChange={e => {
                setName(e.target.value);
              }}
            />
          </div>
        <div>
          <input 
            type="text"
            placeholder='Enter email'
            required
            name='email'
            id='email'
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder='Enter password'
            required
            name='password'
            id='password'
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder='Confirm password'
            required
            name='password'
            id='confirmPassword'
            onChange={e => {
              setConfirmPassword(e.target.value);
            }}
          />
        </div>
        <button type='submit'>REGISTER</button>
      </form>
    </>
  )
}

export default RegisterSection