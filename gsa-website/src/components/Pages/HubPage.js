import React, { useState, useRef, useEffect, useCallback } from 'react'; // Importing to use for variables and functions
import { Box, Typography, Card, CardContent, Button, TextField, Stack, Grid, Paper, CardHeader } from "@mui/material"; //Layout Material
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'; // To create modals
import { auth } from '../../firebase'; //Get user 
import Authenticate from '../Authenticate'; //Get Signed in user
import { useNavigate } from "react-router-dom"; //Allow for website to switch pages
import { getDatabase, ref, set, get, update } from "firebase/database"; //Real-time
import { getFirestore, collection, doc, setDoc } from "firebase/firestore"; //Firestore 
import { DataGrid } from '@mui/x-data-grid';  

import ScuPage from './ScuPage'
import Layout from '../Format/Layout'; 


const HubPage = () => {
  
  //useEffect()

  //constants for functionality 
  const database = getDatabase();
  const firestore = getFirestore();
  const { authUser } = Authenticate();   
  const [error, setError] = useState("");
  const navigate = useNavigate(); 

  //Constants 
  const [openHistoryModal, setOpenHistoryModal] = React.useState(false); //for the data table
  const currentHub = localStorage.getItem('currHub'); 

  const [userSensorNames, setUserSensNames] = useState([""]);
  const [registeredSens, setRegisteredSens] = useState([""]);
  const [sensCardAmount, setSensCardAmount] = useState('');
  
// Columns for the data table - currently filled with fake filler numbers
  const columns = [
    { field: 'Date', headerName: 'Date', width: 90 },
    { field: 'Temperature', headerName: 'Temperature', type: 'number', width: 150, editable: true,},
    { field: 'Moisture', headerName: 'Moisture', type: 'number', width: 150, editable: true,},
    { field: 'Sunlight', headerName: 'Sunlight', type: 'number', width: 110, editable: true, },
  ]; 
// rows for the data table - currently filled with fake filler numbers 
  const rows = [
    { id: 1, Temperature: 56, Moisture: 63, Sunlight: 35 },
    { id: 2, Temperature: 41, Moisture: 71, Sunlight: 42 },
    { id: 3, Temperature: 50, Moisture: 22, Sunlight: 45 },
    { id: 4, Temperature: 47, Moisture: 52, Sunlight: 16 },
    { id: 5, Temperature: 38, Moisture: 86, Sunlight: 90 },
    { id: 6, Temperature: 39, Moisture: 89, Sunlight: 150 },
    { id: 7, Temperature: 43, Moisture: 55, Sunlight: 44 },
    { id: 8, Temperature: 49, Moisture: 57, Sunlight: 36 },
    { id: 9, Temperature: 54, Moisture: 31, Sunlight: 65 },  
    { id: 10, Temperature: 71, Moisture: 60, Sunlight: 43 },
    { id: 11, Temperature: 55, Moisture: 88, Sunlight: 19 },
    { id: 12, Temperature: 39, Moisture: 72, Sunlight: 61 },
  ]; 
    //Functionality for opening and closing the data table modal
    const handleOpenHistoryModel = () => {
        setOpenHistoryModal(true);
    };

    const handleCloseHistoryModal = () => {
      setOpenHistoryModal(false);
    }; 



    //Function for the go to ScuPage button 
    const GoToScuPage = () => {
      navigate(`/ScuPage`);
    };

    const [time, setTime] = useState(0);

    const today = () => {
      setTime(1)
    };

    const week = () => {
      setTime(7)
    };

    const month = () => {
      setTime(31)
    };

    const year = () => {
      setTime(365)
    };
  
    const FetchSens = useCallback(async() => { 
      try {
        if (authUser) {
          const userUid = authUser.uid;
          
          // real-time database, get ref for information under user's account ID 
          console.log(`Users/${userUid}/HUBS/${currentHub}/SENSORS`)
          const userRef = ref(database, `Users/${userUid}/HUBS/${currentHub}/SENSORS`);
          const snapshot = await get(userRef); //get a snapshot
          if (snapshot.exists()) { //if there's data - proceed 
            
            const sens = snapshot.val(); //data found saved as a const
            console.log('Sensors:', sens); //should print out a user's: email, username, and name of hubs 
    
            let nameOfSens, acctInfo; 
              
            nameOfSens = Object.keys(sens); 
            
            console.log('Sens Names:', nameOfSens); 
            setRegisteredSens(nameOfSens); //setting in constant use-state variable

            return nameOfSens
          } else {
            console.log('No info found for this user.');
          }
        } else {
          setError('You must be logged in to see hubs.');
        }
      } catch (error) {
        
      }
      return [];
    },[authUser, database, setError]);

    const LoadCards = async (nameOfSens) => { 
      if (nameOfSens) {
        setUserSensNames(nameOfSens);
        setSensCardAmount(nameOfSens.length); 
      }
    }

    useEffect(() => {
      const fetchData = async () => {
        const nameOfSens = await FetchSens();

        await LoadCards(nameOfSens);
      };

      fetchData();
    }, [FetchSens]);


    //Brings you to general Hub Page when clicking the middle section of HubCards
  const handleClickCard = (index) => {
    const SensorPage = userSensorNames[index];
    console.log('Clicked on sensor:', SensorPage);

    const dataToSend = SensorPage;
    localStorage.setItem('currSens', dataToSend);
    
    navigate(`/ScuPage`);
  }; 

  return ( 
    <> 

    <div style={{ backgroundColor: 'tan' }}> 

      <Layout />    
      <Box m="20px">
      {/* Below is the Grid of the General HubPage */}
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="240px" gap="20px">  


        {/* Row 1: Header/Welcome */}
        <Box sx={{ border: 1,  backgroundColor: 'white'  }}  gridColumn="span 12"  p="30px" alignItems="center">
            <Typography variant="h3" fontWeight="600" textAlign="center">{currentHub}'s Hubpage </Typography> 
            <Typography> Brief explanation of what HubPage is and the features it offers.</Typography>
          </Box>  


        {/* Row 2 - Hub Statistics  */} 
        <Box sx={{ border: 1,  backgroundColor: 'white'  }}  gridColumn="span 3" gridRow="span 2"   p="30px" alignItems="center">
          <Typography variant="h5" fontWeight="600">
            What the Data Means 
          </Typography>
          <Box  height="250px" m="-20px 0 0 0"display="flex" flexDirection="column" alignItems="center" mt="25px" > 
            How to Read the Data - in words 
          </Box>
        </Box>  

        <Box sx={{ border: 3,  backgroundColor: 'white'  }} gridColumn="span 6" gridRow="span 2" p="30px" alignItems="center" >
          <Typography variant="h5" fontWeight="600" textAlign="center">
            {currentHub}  
          </Typography>  
          {/* This is for the DATE BUTTONS !!! - Alter code here - or add functions to onClick part */}
          <Box alignItems="center">    
            <p>
              {time === 1
              ? `Data Range Selected: Last 24 Hours`
              : `Data Range Selected: Last ${time} Days`}
            </p>
            <Stack direction="row" spacing={1} alignItems="center">
              <Button size="small" variant="contained" onClick={today}> Today </Button>
              <Button size="small" variant="contained" onClick={week}> Week </Button>
              <Button size="small" variant="contained" onClick={month}> Month </Button>
              <Button size="small" variant="contained" onClick={year}> Year </Button> 
            </Stack>
          </Box> 
          {Array.from({ length: sensCardAmount }, (_, index) => (
                <div key={index}>
                    <Card style = {{marginBottom: '46px', marginTop: '46px', cursor: 'pointer' }} > 

                        <CardContent style={{ display: 'flex', flexDirection: 'row' }}>
                       
                            <Grid container spacing={2}>

                                <Grid item xs={4} onClick={handleClickCard.bind(null, index)}>
                                    <Typography variant="h5" color="textSecondary" align = 'center'>
                                      {userSensorNames[index]}
                                    </Typography>
                                </Grid>

                          
                            </Grid>
                        </CardContent>
                    </Card>
                </div>
            ))}

        </Box>  

        <Box  sx={{ border: 1,  backgroundColor: 'white'  }} gridColumn="span 3" gridRow="span 2"  p="30px" alignItems="center">
          <Typography variant="h5" fontWeight="600" textAlign="center">
            Hub Status 
          </Typography>
          <Box  height="250px" m="-20px 0 0 0"display="flex" flexDirection="column" alignItems="center" mt="25px"> 
            alerts the user on what they should focus on -
          </Box>
        </Box>          
  

      </Box>  
    </Box>   
    </div>
    

    </>
  );
};

export default HubPage; 
