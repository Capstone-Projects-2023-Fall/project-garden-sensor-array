import React from 'react';
import {Routes, Route} from "react-router-dom";
import Login from './components/Login';
import Landing from './Landing';
import MySensorsPage from './MySensorsPage';
import Register from './components/Register';




function App() {


  <div>hello</div>

  return (
  
      <Routes> 
    
        <Route path="/" element={<Landing />} /> 
        <Route path="/Register" element={<Register />} /> 
        <Route path="/Login" element={<Login />} />
        <Route path="/MySensorsPage" element={<MySensorsPage />} />

      </Routes>


  )
}

export default App

