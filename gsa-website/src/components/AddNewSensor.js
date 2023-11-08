import React, { useState } from 'react';

export default function AddNewSensor() {
  const [sensorName, setSensorName] = useState('');
  const [hubName, setHubName] = useState('');

  const handleSensorNameChange = (e) => {
    setSensorName(e.target.value);
  };

  const handleHubNameChange = (e) => {
    setHubName(e.target.value);
  };

  const handleSensorNameSubmit = (e) => {
    e.preventDefault();
    // Handle the submission, e.g., save the sensor name and hub name to your database
    console.log('Sensor Name:', sensorName);
    console.log('HUB Name:', hubName);
    // You can use Firebase, Axios, or other methods to store the data
  };

  return (
    <div>
      <h2>Add New Sensor</h2>
      <h6>Warning: Must Use an existing Hub, if it doesn't exist please refer back to Add New Hub</h6>
      <form onSubmit={handleSensorNameSubmit}>
      <label>
          HUB Name:
          <input type="text" value={hubName} onChange={handleHubNameChange} />
        </label>
        <label>
          Sensor Name:
          <input type="text" value={sensorName} onChange={handleSensorNameChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}