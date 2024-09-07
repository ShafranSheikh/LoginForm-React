import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

function FormContent() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.post('http://localhost:3000/api/', {username, password});
      if(response.data.success){
        console.log("Login Successful");
      }else{
        console.log("An error occured");
        
      }
    }catch(error){
      console.log(error);
    }
  
  }
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" placeholder="Enter your username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"value={password} onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>

        <div className="form-links">
          <p>
            Don't have an account? <Link to="/SignUpFormContent">Create an account</Link>
          </p>
          <p>Or</p>
          <a href="/google-signin" className="google-signin">
            Sign in with Google
          </a>
        </div>
      </form>
    </div>
  );
}

export default FormContent;
