import React, { useState } from 'react';

export default function AddNewSensor() {
  const [SensorName, setSensorName] = useState('');

  const handleSensorNameChange = (e) => {
    setSensorName(e.target.value);
  };

  const handleSensorNameSubmit = (e) => {
    e.preventDefault();
    // Handle the submission, e.g., save the hub name to your database
    console.log('Sensor Name:', SensorName);
    // You can use Firebase, Axios, or other methods to store the hub name
  };

  return (
    <div>
      <h2>Add New Sensor</h2>
      <h6>Warning: Must Add Hub First before adding new Sensor</h6>
      <form onSubmit={handleSensorNameSubmit}>
        <label>
          Sensor Name:
          <input type="text" value={SensorName} onChange={handleSensorNameChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}