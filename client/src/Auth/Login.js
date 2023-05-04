import React, { useState } from 'react';
import { toast } from "react-toastify";
import { Link, useNavigate } from 'react-router-dom'


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      if (response.ok) {
        const { token } = await response.json();
        localStorage.setItem('token', token);
        // redirect to dashboard or home page
        toast.success('Logged in')
        navigate('/')
      } else {
        const { error } = await response.json();
        toast.error(error);
      }
    } catch (error) {
      toast.error('Something went wrong');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>

      <div>
        <Link to="/forgot-password">Forgot Password (Demo)</Link>
        <h1></h1>
        <Link to="#">Register (Demo)</Link> 
      </div>
    </div>
    
  );
}

export default Login;
