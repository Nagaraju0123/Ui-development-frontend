import React from 'react';

const Dashboard = () => {
  // Retrieve user data from localStorage
  const userData = JSON.parse(localStorage.getItem('userData'));

  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        <h3>User Information</h3>
        <p><strong>Name:</strong> {userData.user_firstname} {userData.user_lastname}</p>
        <p><strong>Email:</strong> {userData.user_email}</p>
        <p><strong>Phone:</strong> {userData.user_phone}</p>
        <p><strong>City:</strong> {userData.user_city}</p>
        <p><strong>Zipcode:</strong> {userData.user_zipcode}</p>
      </div>
      <button onClick={() => { localStorage.removeItem('userData'); window.location.replace('/'); }}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
