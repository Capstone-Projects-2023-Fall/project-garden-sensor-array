import React, { useState, useRef, useEffect, useCallback } from 'react'; // Importing to use for variables and functions
import { Box, Typography, Card, CardContent, Button, TextField, Stack, Grid, Paper, CardHeader } from "@mui/material"; //Layout Material
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'; // To create modals
import { auth } from '../../firebase'; //Get user 
import Authenticate from '../Authenticate'; //Get Signed in user
import { useNavigate } from "react-router-dom"; //Allow for website to switch pages
import { getDatabase, ref, set, get, update } from "firebase/database"; //Real-time
import { getFirestore, collection, doc, setDoc } from "firebase/firestore"; //Firestore  

import Layout from '../Format/Layout'; 


//General Scu Page - calls to retrieve data of specfic user's selected hub

const ScuPage = () => { 

  return (
    <>  
        <Layout />
        <div>
            <h1>ScuPage</h1>
        </div>

    </>
  )
}

export default ScuPage