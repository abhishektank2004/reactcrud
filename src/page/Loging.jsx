import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios'; // Import axios for making API requests
import '../assets/Login.css'; // Make sure your styles are properly set in this CSS file

function Loging() {
  const [email, setEmail] = useState(''); // State for email input
  const [password, setPassword] = useState(''); // State for password input
  const [error, setError] = useState(''); // State to store error message
  const navigate = useNavigate(); // Initialize navigate function

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Make sure the user entered email and password
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    try {
      // Send login request to backend to check if user exists
      const response = await axios.post('http://localhost:8000/api/auth/login', { // Replace with your API URL
        email,
        password,
      });

      // If user is authenticated successfully
      if (response.status === 200) {
        // Store token (if available) and navigate to the home page
        localStorage.setItem('authToken', response.data.token); // Save token to localStorage
        navigate('/Home_page'); // Redirect to the home page (or dashboard page)
      } else {
        // If login failed (wrong credentials)
        setError('Invalid email or password');
      }
    } catch (error) {
      // Handle API errors (e.g., user not found)
      setError('Error occurred during login. Please try again later.');
      console.error(error); // Log the error for debugging
    }
  };

  // Handle navigating to the Sign Up page
  const handleSignUpClick = () => {
    navigate('/signup'); // Navigate to the /signup route
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          {/* Display error message if any */}
          {error && <p className="error-message">{error}</p>} 

          {/* Submit button */}
          <button type="submit" className="btn btn-login">Login</button>

          {/* Sign Up button to navigate to Sign Up page */}
          <button 
            type="button" 
            className="btn btn-signup"
            onClick={handleSignUpClick} // On click, navigate to SignUp page
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Loging;
