import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import './signup.css';

function Login() {
  return (
    <div className="container">
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>
      <div className="form-container sign-up">
        <div className="innerbox">
          <h1>Welcome to Our E-waste Community</h1>
          <h3>Login Here</h3>
          <div className="form">
            <label htmlFor="email">Email</label>
            <input name="email" type="email" />
            <label htmlFor="password">Password</label>
            <input name="password" className="pass" type="password" />
          </div>
          <button className="login-btn">Login</button>
        </div>
      </div>
      <div className="lgn-image">
        <div className="acc">
          <p>Create a new Account</p>
          <Link className="login-link" to="/signup">Create</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
