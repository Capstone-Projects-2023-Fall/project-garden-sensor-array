
import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set } from "firebase/database"; 
import {Button, CssBaseline, TextField, FormControlLabel, Checkbox, Paper,Box,Grid,Typography, Alert, AlertTitle, Container  } from '@mui/material';  
import './Landing.css'; 
import { Form, Card } from "react-bootstrap"; 





const Landing = ()=> {  

    let navigate = useNavigate();

    const GoToRegister = () => {
        navigate(`/Register`);
      }; 

    const GoToLogin = () => {
    navigate(`/Login`);
    };



    return (
        <>
         <Card>
            <Card.Body>
            <h2 className="text-center mb-4">Garden Sensor Array</h2>
            <Form>
                <Link to="/Login" className="btn btn-primary w-100 mt-3">Login</Link>
                &nbsp;
                <Link to="/Register" className="btn btn-primary w-100 mt-3">Register</Link>
            </Form>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            Happy Planting
        </div>  

        {/* <Container className="landingpic" >
            <Button variant="contained" className="landingbtns" onClick={GoToRegister}>Register</Button> 
            <Button variant="contained" className="landingbtns" onClick={GoToLogin}>Log In</Button>
        </Container>  */}
        </>
    )
}
export default Landing; 