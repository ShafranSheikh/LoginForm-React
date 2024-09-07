import React, { useState } from "react";
import { Link } from 'react-router-dom';

function FormContent(props) {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Enter your username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
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
