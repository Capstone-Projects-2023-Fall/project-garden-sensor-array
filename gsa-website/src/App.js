import React from 'react';
import {Routes, Route} from "react-router-dom";
import Login from './components/Login';
import Landing from './Landing';
import MySensorsPage from './components/Pages/MySensorsPage';
import Register from './components/Register';
import AddNewHub from './components/AddNewHub';
import AddNewSensor from './components/AddNewSensor';
import Home from './components/Pages/Home';
import HelpPage from './components/Pages/HelpPage';
import MissionPage from './components/Pages/MissionPage';
import AccountPage from './components/Pages/AccountPage'; 
import HubPage from './components/Pages/HubPage'; 
import ScuPage from './components/Pages/ScuPage';






function App() {


  <div>hello</div>

  return (
  
      <Routes> 
    
        <Route path="/" element={<Login />} /> 
        <Route path="/Register" element={<Register />} /> 
        <Route path="/Landing" element={<Landing />} />
        <Route path="/MySensorsPage" element={<MySensorsPage />} />
        <Route path="/AddNewHub" element={<AddNewHub />} /> 
        <Route path="/AddNewSensor" element={<AddNewSensor />} /> 
        <Route path="/Home" element={<Home />} /> 
        <Route path="/HelpPage" element={<HelpPage />} /> 
        <Route path="/MissionPage" element={<MissionPage />} /> 
        <Route path="/AccountPage" element={<AccountPage />} />  
        <Route path="/HubPage" element={<HubPage />} />  
        <Route path="/ScuPage" element={<ScuPage />} /> 
   

      </Routes>


  )
}

export default App

