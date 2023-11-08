import React from 'react';
import {Routes, Route} from "react-router-dom";
import Login from './components/Login';
import Landing from './Landing';
import MySensorsPage from './MySensorsPage';
import Register from './components/Register';
import AddNewHub from './components/AddNewHub';
import AddNewSensor from './components/AddNewSensor';




function App() {


  <div>hello</div>

  return (
  
      <Routes> 
    
        <Route path="/" element={<Landing />} /> 
        <Route path="/Register" element={<Register />} /> 
        <Route path="/Login" element={<Login />} />
        <Route path="/MySensorsPage" element={<MySensorsPage />} />
        <Route path="/AddNewHub" element={<AddNewHub />} /> 
        <Route path="/AddNewSensor" element={<AddNewSensor />} /> 
      </Routes>


  )
}

export default App

