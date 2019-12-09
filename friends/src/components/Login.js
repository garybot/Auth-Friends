import React, {useState} from 'react';
import axios from 'axios';
import {axiosWithAuth} from '../utils/axiosWithAuth.js';

const Login = () => {
  const [userCredentials, setUserCredentials] = useState({username: "", password: ""});
  
  const handleChanges = (evt) => {
    setUserCredentials({...userCredentials, [evt.target.name]: evt.target.value})
  }
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    login(userCredentials);
  }

  const login = (userCredentials) => {
    axios
      .post('http://localhost:5000/api/login', userCredentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
      })
      .catch(err => console.log(err));
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" id="username" placeholder="username" value={userCredentials.username} onChange={handleChanges}/>
      <input type="text" name="password" id="password" placeholder="password" value={userCredentials.password} onChange={handleChanges}/>
      <button>Login</button>
    </form>
    )
}

export default Login;



