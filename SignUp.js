import React, { useState } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    user_firstname: 'mani',
    user_lastname: 'ni', // Static data as per task
    user_email: 'mail@gmail.com',
    user_password: '123456',
    user_phone: '9876543210',
    user_city: 'Hyderabad', // Static data as per task
    user_zipcode: '500072' // Static data as per task
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
      const response = await fetch('https://syoft.dev/Api/user_registeration/api/user_registeration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Registration successful!');
        // Redirect to login page or perform other actions
      } else {
        const errorData = await response.json();
        alert(`Registration failed: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Error during registration. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" name="user_firstname" value={formData.user_firstname} onChange={handleInputChange} required />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" name="user_lastname" value={formData.user_lastname} disabled />
        </label>
        <br />
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
        <label>
          Phone:
          <input type="text" name="user_phone" value={formData.user_phone} onChange={handleInputChange} required />
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
  
