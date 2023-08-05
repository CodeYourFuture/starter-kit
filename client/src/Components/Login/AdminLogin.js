import React, { useState } from 'react';
import "./AdminLogin.css";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const AdminLogin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can perform your authentication logic using email and password
    // For a real application, you would typically send the data to a backend server for authentication.

    console.log('Email:', email);
    console.log('Password:', password);

    // Reset the form after submission
    setEmail('');
    setPassword('');
  };

  return (
    <div>
    <Navbar />
    <div className='signin-form-container'>
      <form className="signin-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} required />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} required />
      </div>
      <Link to="/admin-dashboard">
      <button type="submit" className="signin-button">Sign In</button>
      </Link>
    </form>
    </div>

<Footer />
    </div>

  );
};

export default AdminLogin;
