import React from 'react';
import './SignUp.css';

function SignUp() {
  return (
    <div className="signup-container">
      <div className="signup-left">
        <h1>VISIT</h1>
        <p>Explore the world effortlessly. Discover top destinations, find the perfect stays, and plan your dream trip in just a few clicks.</p>
      </div>
      <div className="signup-right">
        <h2>Create your account</h2>
        <p>
          Already have an account? <a href="/signin">Sign In</a>
        </p>
        <form className="signup-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Enter your username" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" placeholder="Confirm your password" required />
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
