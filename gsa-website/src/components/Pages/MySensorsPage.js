
import React from 'react'; 
import Layout from '../Format/Layout';
import CardData from "../CardData";
import CardData2 from '../CardData2';
import { Box, Typography, Card, CardContent } from "@mui/material";
import { useState, useRef } from 'react';


import { signOut } from "firebase/auth"; 
import { auth } from '../../firebase';
import Authenticate from '../Authenticate';
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, set } from "firebase/database";
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


/* 
For Milestone 2 
    * Working Navigation Bar - clickable Links, no issues at all, and pretty (bonus for leaf plant overhead)
        * glowing when you click on each tab - bonus for staying glowed on when active on it 
    * Working Footer - simple, same color as navbar, provide icons and links to github, docusauras, and on the side, have logout button + who's currently signed in 
    * Cards show real hub data - but when clicking on (add hub or add sensor buttons - you hard code fake data ) to add another and show hub 2's data 
    * modals for the add new sensors 
*/



const MySensorsPage = () => {

    const [hubName, setHubName] = useState("");
    const [sensorName, setSensorName] = useState("");
    const [hubSerial, setHubSerial] = useState("");
    const [sensorSerial, setSensorSerial] = useState("");
    const [sensorHubName, setSensorHubName] = useState("");
    const [fileBase64, setFileBase64] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);
    const navigate = useNavigate();

    const [userHubNames, setUserHubNames] = useState(["Hub_1"]);
    let addedHubName; 

    const [hubCardAmount, setHubCardAmount] = useState(1);
    const [openHubModal, setOpenHubModal] = React.useState(false);
    const [openSensorModal, setOpenSensorModal] = React.useState(false);
  
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
      setOpenSensorModal(false);
  };

  const handleAddHubCard = () => {
    const addedHubName = `Name: ${hubName} ${hubSerial} || Hub_${hubCardAmount}`;
    setUserHubNames([...userHubNames, addedHubName]);
    setHubCardAmount(hubCardAmount + 1);
    setHubName('');
    setHubSerial('');
  
  }; 

  const handleAddingSensor = () => {
    const addedHubName = hubName || `Hub_${hubCardAmount}`;
    setUserHubNames([...userHubNames, addedHubName]);
    setHubCardAmount(hubCardAmount + 1);
    setHubName('');
  
  };

  function convertFile(files) {
    if (files) {
      const fileRef = files[0] || "";
      const fileType = fileRef.type || "";
      console.log("This file upload is of type:", fileType);
      const reader = new FileReader();

      reader.onload = function (ev) {
        // convert it to base64
        setFileBase64("data:" + fileType + ";base64," + btoa(ev.target.result));
        setSelectedFile(fileRef);
      };

      reader.readAsBinaryString(fileRef);
    }
  }
  const handleClickCard = (index) => {
    const hubPage = userHubNames[index];
    
    navigate(`/Specific-Hub-Page/${hubPage}`);
  };






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
                    <Typography gutterBottom variant='h5' component='div' align="center"> {userHubNames[index]}</Typography>
                    <Typography gutterBottom variant='h7' component='div' align="center">Sensor Count: </Typography>
                        <CardContent style={{ display: 'flex', flexDirection: 'row' }}>
                       
                            <Grid container spacing={2}>
                                <Grid item xs={4}>
                                    <Typography variant="h5" component="div" color="textSecondary" > 
                                        {/* Card {index + 1} Section 1 */}
                                        <div>
                                        <input
                                            type="file"
                                            onChange={(e) => convertFile(e.target.files)}
                                            style={{ display: 'none' }}
                                            ref={fileInputRef} />
                                        <Button
                                            variant="outlined"
                                            component="label"
                                            htmlFor="fileInput"
                                            style={{ marginRight: '8px' }}
                                            onClick={() => fileInputRef.current.click()} 
                                        >
                                        Choose Photo
                                        </Button>
                                        <Box>
                                            {selectedFile && (
                                                <img src={fileBase64} alt="Uploaded File" style={{ maxWidth: '100px', maxHeight: '100px' }}/>
                                            )}
                                            </Box>
                                        </div>
                                       
                                        
                                    </Typography>
                                </Grid>

                                <Grid item xs={4} onClick={handleClickCard}>
                                    <Typography variant="h5" color="textSecondary" align = 'center'>
                                        {index + 1 === 1 ? <CardData /> : <CardData2 />}
                                    </Typography>
                                </Grid>

                                <Grid item xs={4}>
                                    <Typography variant="h5" color="textSecondary">
                                    {index + 1 === 1 ? <IconBox1 /> : <IconBox2 />}
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
                <Button onClick={() => { handleCloseHubModal(); handleAddHubCard(); }}>Add</Button>
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
              <DialogTitle>Add New Sensor</DialogTitle>


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
                <Button onClick={handleCloseSensorModal}>Add</Button>
              </DialogActions>
          </Dialog>
        </React.Fragment>
      </div>
    </div>



    </>

  )
}

export default MySensorsPage; 