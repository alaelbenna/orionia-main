import React, { useState } from 'react';
import './Login.css';
import Navbar from '../Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  
  const [isLoginVisible, setIsLoginVisible] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLoginVisible(!isLoginVisible);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', {
        email: email,
        password: password
      });
  
      // Assuming your backend sends back tokens in the response
      const { accessToken, refreshToken } = response.data;
  
      // Store the tokens securely (e.g., in localStorage or secure cookies)
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);


  
      // Handle successful login response here (e.g., redirect user to a protected route)
      console.log('Login successful:', response.data);
      navigate('/');

    } catch (error) {
      // Handle error here
      console.error('Error logging in:', error);
    }
  };
  
  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/users/register', {
        name: 'John Doe', // Replace with actual user input or dynamic data
        email: email,
        password: password
      });
  
      // Assuming your backend sends back tokens in the response
      const { accessToken, refreshToken } = response.data;
  
      // Store the tokens securely (e.g., in localStorage or secure cookies)
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
  
      // Handle successful registration response here (e.g., redirect user to a protected route)
      console.log('Registration successful:', response.data);
    } catch (error) {
      // Handle error here
      console.error('Error registering:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className='cntr'>
        <div className={`form-structor ${isLoginVisible ? 'slide-up' : ''}`}>
          <div className='signup'>
            <h2 className='form-title' id='signup'>
              <span>or</span>Sign up
            </h2>
            <div className='form-holder'>
              <input type='text' className='input' placeholder='Name' onChange={(e) => setEmail(e.target.value)} />
              <input type='email' className='input' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
              <input type='password' className='input' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button className='submit-btn' onClick={handleRegister}>Sign up</button>
          </div>
          <div className={`login ${isLoginVisible ? '' : 'slide-up'}`}>
            <div className='center'>
              <h2 className='form-title' id='login' onClick={toggleForm}>
                <span>or</span>Log in
              </h2>
              <div className='form-holder'>
                <input type='email' className='input' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                <input type='password' className='input' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
              </div>
              <button className='submit-btn' onClick={handleLogin}>Log in</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
