import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
// import signupImage from '../images/signup-image.jpg'; 

function Signup() {
  return (
    <div className="container">
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>

      <div className="form-container sign-up">
        <div className="innerbox">
          <h1>Welcome to Our E-waste Community</h1>
          <h3>Register Here</h3>

          <div className="form">
            <label htmlFor="name">Name</label>
            <input name="name" type="text" required />

            <label htmlFor="email">Email</label>
            <input name="email" type="email" required />

            <label htmlFor="password">Password</label>
            <input name="password" className="pass" type="password" required />

            <ul>
              <li>Use 8 or more characters</li>
              <li>One Uppercase character</li>
              <li>One Lowercase Character</li>
              <li>One special character</li>
              <li>One Number</li>
            </ul>
          </div>

          <div className="cbd">
            <input className="checkbox" type="checkbox" id="marketing" />
            <label htmlFor="marketing">
              I want to receive emails about project updates, events, and promotions.
            </label>
          </div>

          <p className="terms">
            By creating an account, you agree to the <Link to="/terms">Terms of Use</Link> and <Link to="/privacy">Privacy Policy</Link>.
          </p>

          <button className="login-btn">Create an Account</button>
        </div>
      </div>

      <div className="lgn-image">
        {/* <img src={signupImage} alt="Signup Visual" />  */}
        <div className="acc">
          <p>Already have an Account?</p>
          <Link className="login-link" to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
