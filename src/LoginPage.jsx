import React, {  useState } from 'react';

import { useNavigate } from 'react-router-dom';
import './login.css';

const LoginPage = ({users , seIsLoggedIn}) => {
  const navigate = useNavigate();
  const [formInput, setFormInput] = useState({
    email: "",
    username: "",
  });

  const handleChange = (e) => {
    setFormInput((prev) => {return { ...prev , [e.target.name]: e.target.value }})
  }

  const handleLogin = (e)=>{
    e.preventDefault();
    users.find(e => (e.name == formInput.name) && (e.email == formInput.email))  
    ? (
      seIsLoggedIn(true) ,
      navigate('/') 
      ) 
    : alert("User Not Found")
  }

  

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <form >
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              type="email"
              id="email"
              name="email"
              value={formInput.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              onChange={handleChange}
              type="text"
              id="username"
              name="username"
              value={formInput.username}
            />
          </div>
          <div className="form-group">
            <button onClick={(e)=>handleLogin(event)} type="submit">Log In</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
