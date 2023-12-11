import React, { useState, useRef, useEffect, useCallback } from 'react';
import {Button, Box, Typography, Container, Link, CssBaseline} from '@mui/material';  
import { signOut, getAuth } from "firebase/auth"; 
import { auth } from '../../firebase';
import { useNavigate } from "react-router-dom";






const Footer = () => {   

  const [error, setError] = useState(""); 
  const [currentU, setCurrentU] = useState(""); //user who is currently signed in 
  let navigate = useNavigate();  



  const logOut = async (e) => {   
    e.preventDefault(); //so page doesn't reload after submission 
    setError("");
        
    signOut(auth).then(() => { 
        //success
        navigate("/") 
    }).catch((error) => { //error
        setError(error.message);
    }); 
    
    
  } 


  return (
  
      <Box component="main" sx={{display: 'flex', flexDirection: 'column', minHeight: '45vh', backgroundColor: 'rgba(255, 255, 255, 0.5)'}}> 
      <Container  sx={{ mt: 55, mb: 0 }} maxWidth="sm">
      </Container> 
  
        <Box component="footer" sx={{ py: 3,  px: 2, mt: 'auto', backgroundColor: 'black'}} > 
        
       
            <Box sx={{alignContent: 'center'}}>
            <Button variant="contained" onClick={logOut} style={{ color: 'white' }}>  Log Out</Button>
            </Box>
        
         
        </Box>
      </Box>

  );
} 
export default Footer; 