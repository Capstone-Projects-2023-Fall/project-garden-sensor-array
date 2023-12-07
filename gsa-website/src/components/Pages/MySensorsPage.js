
import React from 'react'; 
import Layout from '../Format/Layout';
import CardData from "../CardData";
import CardData2 from '../CardData2';
import { Box, Typography, Card, CardContent } from "@mui/material";
import { useState, useRef, useEffect, useCallback } from 'react';


import { signOut } from "firebase/auth"; 
import { auth } from '../../firebase';
import Authenticate from '../Authenticate';
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, set, get, update } from "firebase/database";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
import {  Stack, Grid, Paper } from '@mui/material'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconBox1 from '../IconBox1';
import IconBox2 from '../IconBox2';
import HubPhoto from '../HubPhoto';
import ParentData from '../ParentData';





const MySensorsPage = () => { 

  
  //use state variables - entered by user and recorded through modals 
    const [hubName, setHubName] = useState("");
    const [sensorName, setSensorName] = useState("");
    const [hubSerial, setHubSerial] = useState("");
    const [sensorSerial, setSensorSerial] = useState("");
    const [sensorHubName, setSensorHubName] = useState("");

    //constants for functionality 
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const database = getDatabase();
    const firestore = getFirestore();
    const { authUser } = Authenticate();  

    //use state variables for the cards shown on page
    const [userHubNames, setUserHubNames] = useState([""]);
    const [registeredHubs, setRegisteredHubs] = useState([""]);
    const [hubCardAmount, setHubCardAmount] = useState('');

    //Modal constants 
    const [openHubModal, setOpenHubModal] = React.useState(false);
    const [openSensorModal, setOpenSensorModal] = React.useState(false); 
    const [hubDialogTitle, setHubDialogTitle] = useState('Add New Sensor');
  


    //Functionality for opening and closing modals 
    const handleClickOpenHub = () => {
        setOpenHubModal(true);
    };
  
    const handleClickOpenSensor = () => {
      setOpenSensorModal(true);
  };
  
    const handleCloseHubModal = () => {
        setOpenHubModal(false);
    };
  
    const handleCloseSensorModal = () => {
      setHubDialogTitle("Add New Sensor")
      setOpenSensorModal(false);
  };



  /* Handles AddHUBCard and adds corresponding data to the Database */
  const handleAddHubCard = () => {
    const addedHubName = `Name: ${hubName} ${hubSerial}`;
    setUserHubNames([...userHubNames, addedHubName]);
    setHubCardAmount(hubCardAmount + 1);
    setHubName('');
    setHubSerial('');
  
  }; 

  const AddingHub = async (e) => {
    if (e) {
      e.preventDefault();
    }

    if (authUser) {
      // Get the user's UID from the authUser object
      const userUid = authUser.uid;

      update(ref(database, `Users/${userUid}`), {   // add HUB to UID folder in Users
        [hubName]: { Serial: hubSerial }
      })

      const serialMapDocRef = doc(collection(firestore, 'SERIAL_MAP'), hubSerial);  // add HUB to SERIAL_MAP
        await setDoc(serialMapDocRef, {
          HubName: hubName,
          User: userUid
        })

        .then(() => {
          console.log("Hub Name added successfully!");
          handleCloseHubModal();
        })
        .catch((error) => {
          console.error("Error adding Hub Name: ", error);
        });
    } else {
      setError("You must be logged in to add a hub.");
    }
  };

  /* Handles AddSensorCard and adds corresponding data to the Database */
  const handleAddingSensor = () => {
    setHubName('');
    setSensorName('');
    setSensorSerial('');  
  };

  const AddingSensor = async (e) => {
    if (e) {
      e.preventDefault();
    }

    if (authUser) {   
      const userUid = authUser.uid;  // get user uid

      const hubRef = ref(database, `Users/${userUid}/${hubName}`);  // get reference to User
      
      // Fetch data to check if the hub exists
      get(hubRef) 
        .then((snapshot) => {
          if (snapshot.exists()) {
            // Hub exists, proceed with the update
            update(ref(database, `Users/${userUid}/${hubName}`), {
              [sensorName]: { sensorSerial }
            })

            // Sensor information added to SERIAL_MAP
            const serialMapDocRef = doc(collection(firestore, 'SERIAL_MAP'), sensorSerial);
              setDoc(serialMapDocRef, {
                SensorName: sensorName,
                User: userUid
              })

            .then(() => {
              console.log("Sensor added successfully!");
              handleCloseSensorModal();
            })
            .catch((error) => {
              console.log("Error checking for Hub: ", error);
              setError("Hub doesn't exist: " + error.message);
            });
          } else {
            // Changes Title when Hub doesn't exist
            setHubDialogTitle("Hub doesn't exist, try again.")
          }
        })
        .catch((error) => {
          console.log("Error checking for Hub: ", error);
          setError("Error checking for Hub");
        });
    } else {
      setError("You must be logged in to add a sensor.");
    }
  };



  //Brings you to general Hub Page when clicking the middle section of HubCards
  const handleClickCard = (index) => {
    const hubPage = userHubNames[index];

    console.log(hubPage)
    const dataToSend = hubPage;
    localStorage.setItem('currHub', dataToSend);
    
    navigate(`/HubPage`);
  }; 



  //Gets the name of the hubs for the specific user signed in, and uses the hub names to name each card 
  const FetchHubs = useCallback(async() => { 
    try {
      if (authUser) {
        const userUid = authUser.uid;
        
        // real-time database, get ref for information under user's account ID 
        const userRef = ref(database, `Users/${userUid}`);
        const snapshot = await get(userRef); //get a snapshot
        if (snapshot.exists()) { //if there's data - proceed 
          
          const hubs = snapshot.val(); //data found saved as a const
          console.log('Hubs:', hubs); //should print out a user's: email, username, and name of hubs 
  
          //two variables, one for an array of hubnames, the other for an array of just email + username
          let nameOfHub, acctInfo; 
          const acctUser = ['Email', 'Username'];
            
          nameOfHub = Object.keys(hubs); 
          nameOfHub = nameOfHub.filter(el => !acctUser.includes(el)); //removes Username + Email, only hub names present 
          console.log('Hub Names:', nameOfHub); 
          setRegisteredHubs(nameOfHub); //setting in constant use-state variable

          acctInfo = Object.keys(hubs); 
          acctInfo = acctInfo.filter(el => acctUser.includes(el));//removes HubNames and gives back an array of only username and email 
          console.log('User Info:', acctInfo);
          return nameOfHub
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


  //loads all the cards that the user would have - accurately shows what hubs they have registered on firebase, 
  const LoadCards = async (nameOfHubs) => { 
    if (nameOfHubs) {
      setUserHubNames(nameOfHubs);
      setHubCardAmount(nameOfHubs.length); 
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      <ParentData />
      const nameOfHub = await FetchHubs();
      //await FetchHubs();
      //await LoadCards();
      await LoadCards(nameOfHub);
    };
  
    fetchData();
  }, [FetchHubs]);








  return (
    <>
        <Layout /> 
        <Box>
            <Box align = "center">
                <Typography align="center" variant="h3" sx={{ fontWeight: 900 }}>
                    My Sensors
                </Typography>
                <Typography align="center" variant="body2" sx={{ fontWeight: 100 }}>
                    Here are your Hubs! Click on them to find more info
                </Typography>
            </Box>
        </Box>
        <Box> 

          
            {Array.from({ length: hubCardAmount }, (_, index) => (
                <div key={index}>
                    <Card style = {{marginBottom: '46px', marginTop: '46px', cursor: 'pointer' }} > 
                    <Typography gutterBottom variant='h5' component='div' align="center"> {registeredHubs[index]}</Typography>
                    <Typography gutterBottom variant='h7' component='div' align="center">Sensors: </Typography>
                        <CardContent style={{ display: 'flex', flexDirection: 'row' }}>
                       
                            <Grid container spacing={2}>
                                <Grid item xs={4}>
                                    <Typography variant="h5" component="div" color="textSecondary" > 
                                        {/* Card {index + 1} Section 1 */}
                                        <div>
                                            <HubPhoto /> 
                                        </div>
                                       
                                        
                                    </Typography>
                                </Grid>

                                <Grid item xs={4} onClick={handleClickCard.bind(null, index)}>
                                    <Typography variant="h5" color="textSecondary" align = 'center'>
                                      <CardData name = {userHubNames[index]}/>
                                    </Typography>
                                </Grid>

                                <Grid item xs={4}>
                                    <Typography variant="h5" color="textSecondary">
                                      <IconBox1 name = {userHubNames[index]}/>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </div>
            ))}
        </Box>


    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div>
        <React.Fragment>
          <Button variant="outlined" onClick={handleClickOpenHub}>
              Add Hub
          </Button>
          <Dialog open={openHubModal} onClose={handleCloseHubModal} fullWidth>
              <DialogTitle>Add New Hub</DialogTitle>

              <DialogContent>
              <DialogContentText>Add HUB to Account:</DialogContentText>
              <TextField autoFocus margin="dense" id="hubName" variant="outlined" label="Hub Name" type="hubName" fullWidth value={hubName} onChange={(e) => setHubName(e.target.value)}/>
              <DialogContentText>Add HUB Serial:</DialogContentText>
              <TextField autoFocus margin="dense" id="hubSerial" variant="outlined" label="Hub Serial" type="hubSerial" fullWidth value={hubSerial} onChange={(e) => setHubSerial(e.target.value)}/>
              </DialogContent>

              <DialogActions>
                <Button onClick={handleCloseHubModal}>Cancel</Button>
                <Button onClick={() => { AddingHub(); handleAddHubCard(); }}>Add</Button>
              </DialogActions>
          </Dialog>
        </React.Fragment>
      </div>
      <div>
        <React.Fragment align='center'>
          <Button  align= "center" variant="outlined" onClick={handleClickOpenSensor}>
              Add Sensor
          </Button>
          <Dialog open={openSensorModal} onClose={handleCloseSensorModal} fullWidth>
              <DialogTitle>{hubDialogTitle}</DialogTitle>


              <DialogContent>
                <DialogContentText>Connect Sensor to Hub:</DialogContentText>
                <TextField autoFocus margin="dense" id="hubName" variant="outlined" label="Hub Name" type="hubName" fullWidth value={hubName} onChange={(e) => setHubName(e.target.value)}/>
                <DialogContentText>Sensor Name:</DialogContentText>
                <TextField autoFocus margin="dense" id="sensorName" variant="outlined" label="Sensor Name" type="sensorName" fullWidth value={sensorName} onChange={(e) =>setSensorName(e.target.value)}/>
                <DialogContentText>Sensor Serial:</DialogContentText>
                <TextField autoFocus margin="dense" id="sensorSerial" variant="outlined" label="Sensor Serial" type="sensorSerial" fullWidth value={sensorSerial} onChange={(e) => setSensorSerial(e.target.value)}/>
              </DialogContent>
              
              <DialogActions>
                <Button onClick={handleCloseSensorModal}>Cancel</Button>
                <Button onClick={() => { AddingSensor(); handleAddingSensor(); }}>Add</Button>
              </DialogActions>
          </Dialog>
        </React.Fragment>
      </div>
    </div>



    </>

  )
}

export default MySensorsPage; 
