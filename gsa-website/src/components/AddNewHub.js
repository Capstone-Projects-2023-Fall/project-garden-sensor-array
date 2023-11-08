// AddHubPage.js
import React, { useState } from 'react';

export default function AddNewHub() {
  const [hubName, setHubName] = useState('');

  const handleHubNameChange = (e) => {
    setHubName(e.target.value);
  };

  const handleHubNameSubmit = (e) => {
    e.preventDefault();
    // Handle the submission, e.g., save the hub name to your database
    console.log('Hub Name:', hubName);
    // You can use Firebase, Axios, or other methods to store the hub name
  };

  return (
    <div>
      <h2>Add New Hub</h2>
      <form onSubmit={handleHubNameSubmit}>
        <label>
          Hub Name:
          <input type="text" value={hubName} onChange={handleHubNameChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
