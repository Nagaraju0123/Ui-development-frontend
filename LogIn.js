import React, { useState } from 'react';

const LogIn = () => {
  const [formData, setFormData] = useState({
    user_email: '',
    user_password: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://syoft.dev/Api/userlogin/api/userlogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const userData = await response.json();
        localStorage.setItem('userData', JSON.stringify(userData)); // Store user data in localStorage
        alert('Login successful!');
        window.location.replace('/dashboard'); // Redirect to dashboard upon successful login
      } else {
        const errorData = await response.json();
        alert(`Login failed: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Error during login. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="user_email" value={formData.user_email} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="user_password" value={formData.user_password} onChange={handleInputChange} required />
        </label>
        <br />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LogIn;
