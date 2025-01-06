import React from 'react';
import './SignIn.css';

function SignIn() {
  return (
    <div className="signin-container">
      <div className="signin-left">
        <h1>VISIT</h1>
        <p>Explore the world effortlessly. Discover top destinations, find the perfect stays, and plan your dream trip in just a few clicks.</p>
      </div>
      <div className="signin-right">
        <h2>Login to your account</h2>
        <p>
          Don’t have an account? <a href="/SignUp">Sign Up</a>
        </p>
        <form className="signin-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
            <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
          </div>
          <button type="submit" className="signin-button">Login</button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
