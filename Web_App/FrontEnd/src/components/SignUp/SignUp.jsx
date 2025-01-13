import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignUp.css';

function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); 

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/signup', {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });

      alert(response.data.message); 
      navigate('/signin');
      
    } catch (error) {
      console.error(error);
      alert("Error signing up. Please try again.");
    }
  };

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
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" 
                   id="username" 
                   placeholder="Enter your username" 
                   value={formData.username}
                   onChange={handleChange}
                   required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" 
                   id="email" 
                   placeholder="Enter your email" 
                   value={formData.email}
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
                   required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" 
                   id="confirmPassword" 
                   placeholder="Confirm your password" 
                   value={formData.confirmPassword}
                   onChange={handleChange}
                   required />
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
