import React, { useState, useRef, useEffect, useCallback } from 'react'; // Importing to use for variables and functions
import { Box, Typography, Card, CardContent, Button, TextField, Stack, Grid, Paper, CardHeader } from "@mui/material"; //Layout Material
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'; // To create modals
import { auth } from '../../firebase'; //Get user 
import Authenticate from '../Authenticate'; //Get Signed in user
import { useNavigate } from "react-router-dom"; //Allow for website to switch pages
import { getDatabase, ref, set, get, update } from "firebase/database"; //Real-time
import { getFirestore, collection, doc, setDoc } from "firebase/firestore"; //Firestore 


import ScuPage from './ScuPage'
import Navbar from '../Format/Navbar';  



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

    const dataToSend = [currentHub, SensorPage];
    localStorage.setItem('hubSens', dataToSend);
    
    navigate(`/ScuPage`);
  }; 

  return ( 
    <> 

    <div style={{ backgroundColor: 'tan' }}> 

      <Navbar />    
      <Box m="20px">
      {/* Below is the Grid of the General HubPage */}
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="240px" gap="20px">  


        {/* Row 1: Header/Welcome */}
        <Box sx={{  }}  gridColumn="span 12"  p="30px" alignItems="center">
            <Typography variant="h3" fontWeight="600" textAlign="center" p="40px">{currentHub}'s Hubpage </Typography> 
            <Typography variant="h6"  textAlign="center" p="-5px"> Welcome to your hubpage!</Typography>
        </Box>   
        


        {/* Row 2 - Hub Statistics  */} 
        <Box sx={{ border: 4,  backgroundColor: 'white', boxShadow: 5, borderRadius: '15px', borderColor: "#1b5e20"  }}  gridColumn="span 3" gridRow="span 2"   p="30px" alignItems="center">
          <Typography variant="h5" fontWeight="600">
            HubPage Background 
          </Typography>
          <Box  height="250px" m="-20px 0 0 0"display="flex" flexDirection="column" alignItems="center" mt="25px" > 
            Every Hub you register to your account will get a HubPage just like this one! Hubpages allow you to get a closer look at what's going on with your plants.
            The Hub itself will showcase the averages of the sensor(s) connected to it (as seen on the HubCards). Click on any of the sensor cards listed in the "Data" box to the right to view thier respective data recordings.
          </Box>
        </Box>  

        <Box sx={{ border: 4,  backgroundColor: 'white', boxShadow: 5, borderRadius: '15px', borderColor: "#1b5e20" }} gridColumn="span 6" gridRow="span 2" p="30px" alignItems="center" >
          <Typography variant="h5" fontWeight="600" textAlign="center">
            {currentHub}'s Sensors
          </Typography>  
          
          {Array.from({ length: sensCardAmount }, (_, index) => (
                <div key={index}>
                    <Card style = {{marginBottom: '34px', marginTop: '34px', cursor: 'pointer', boxShadow: 5, color: '#dcedc8'  }} > 

                        <CardContent style={{ display: 'flex', flexDirection: 'row', color:'#dcedc8' }}>
                       
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

        <Box  sx={{ border: 4,  backgroundColor: 'white', boxShadow: 5, borderRadius: '15px', borderColor: "#1b5e20" }} gridColumn="span 3" gridRow="span 2"  p="20px" alignItems="center">
          <Typography variant="h5" fontWeight="600" textAlign="center">
            What the Data Means 
          </Typography>
          <Box  height="250px" m="-20px 0 0 0"display="flex" flexDirection="column" alignItems="center" mt="25px"> 
            <Typography gutterBottom fontWeight="600"> Temperature Ranges:</Typography>
            <Typography gutterBottom>Low: &gt;5 </Typography>
            <Typography gutterBottom>Good: 5 to 32 </Typography> 
            <Typography gutterBottom>Too High: 32&lt;</Typography> 
            <Typography gutterBottom fontWeight="600"> Sunlight Ranges:</Typography>
            <Typography gutterBottom>Low: &gt;50 </Typography>
            <Typography gutterBottom>Good: 50 to 150 </Typography> 
            <Typography gutterBottom>Too High: 150&lt;</Typography> 
            <Typography gutterBottom fontWeight="600"> Moisture Ranges:</Typography>
            <Typography gutterBottom>Low: &gt;300 </Typography>
            {/* <Typography gutterBottom>Good: 5 to 32 </Typography> 
            <Typography gutterBottom>Too High: 32&lt;</Typography> */}

          </Box>
        </Box>          
  

      </Box>  
    </Box>    
    
    </div>  

   
    

    </>
  );
};

export default HubPage; 
