import React, { useState } from 'react';
import axios from 'axios';
import './SignIn.css';
import { useNavigate } from 'react-router-dom';
import Toast from '../Toast';

function SignIn() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [toastMessage, setToastMessage] = useState('');
  const navigate = useNavigate();  // Initialize navigate

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/signin', {
        username: formData.username,
        password: formData.password,
      });

      const { token, message, username } = response.data;

      localStorage.setItem("authToken", token);
      localStorage.setItem("username", username);

      alert(message);  
      navigate('/generate_trip');  // redirect to the GenerateTrip page
    } catch (error) {
      if (error.response) {
        switch (error.response.status) {
          case 400:
            if (error.response.data.message === 'User not found. Please sign up.') {
              navigate('/signup');
            }
            break;
          case 403:
            setToastMessage('Your account has been banned. Please contact support.');
            localStorage.removeItem("authToken");
            localStorage.removeItem("username");
            setToastMessage('Your account has been banned. Please contact support.');
            break;
          default:
            setToastMessage('An error occurred. Please try again.');
        }
      } else {
        setToastMessage('An error occurred. Please try again.');
      }
    }
  };

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
        <form className="signin-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Username</label>
            <input type="username" 
                   id="username" 
                   placeholder="Enter your username" 
                   value={formData.username}
                   onChange={handleChange}
                   required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" 
                   id="password" 
                   placeholder="Enter your password" 
                   value={formData.password}
                   onChange={handleChange}
                   required />
            {/* <a href="/forgot-password" className="forgot-password">Forgot Password?</a> */}
          </div>
          <button type="submit" className="signin-button">Login</button>
        </form>
      </div>
      <Toast message={toastMessage} onClose={() => setToastMessage("")} />
    </div>
  );
}

export default SignIn;
