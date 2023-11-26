
import React from 'react';
import {Box,Card,CardContent,Typography,Button, IconButton} from '@mui/material'
import { getFirestore, collection, doc, setDoc, onSnapshot } from "firebase/firestore";
import { useState } from "react";
//Temperature
import AcUnitTwoToneIcon from '@mui/icons-material/AcUnitTwoTone'; //Low Temp - snowflake 
import WbSunnyTwoToneIcon from '@mui/icons-material/WbSunnyTwoTone'; // Good Temp - sun 
import LocalFireDepartmentTwoToneIcon from '@mui/icons-material/LocalFireDepartmentTwoTone'; // Too Hot Temp, fire 
//Moisture
import WaterDropTwoToneIcon from '@mui/icons-material/WaterDropTwoTone'; // Low Moisture - just one drop 
import WavesTwoToneIcon from '@mui/icons-material/WavesTwoTone'; // Good Moisture - water 
//Sunlight
import BedtimeTwoToneIcon from '@mui/icons-material/BedtimeTwoTone'; // Low Sunglight - the moon (cresent) 
import EmojiObjectsTwoToneIcon from '@mui/icons-material/EmojiObjectsTwoTone'; // Good Sunlight - lightbulb
import LightModeTwoToneIcon from '@mui/icons-material/LightModeTwoTone'; // Too much  Sunlight - the sun 
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';

const IconBox2 = () => {

    const [hubTime, setHubTime] = useState('');
    const [hubMoisture, setHubMoisture] = useState('');
    const [hubSunlight, setHubSunlight] = useState('');
    const [hubTemperature, setHubTemperature] = useState('');
    const [openTemp, setOpenTemp] = useState(false);
    const [openMoisture, setOpenMoisture] = useState(false);
    const [openSunglight, setOpenSunlight] = useState(false);


    const firestore = getFirestore();


    const unsub = onSnapshot(doc(firestore, "HUBS_ONLINE", "HUB_2"), (doc) => {
        const hubData = doc.data()
        if (hubData) {
            const t = hubData.Time.toDate();
            const time = t.toLocaleString();
            setHubTime(time);

            const s = hubData.Sunlight;
            setHubSunlight(s);

            const te = hubData.Temperature;
            setHubTemperature(te);

            const m = hubData.Moisture;
            setHubMoisture(m);
        }
    });

    const handleOpenTemp = () => {
        setOpenTemp(true);
    };
      const handleCloseTemp = () => {
        setOpenTemp(false);
    };
    
    
    
    const handleOpenMoisture = () => {
        setOpenMoisture(true);
    };
    const handleCloseMoisture = () => {
    setOpenMoisture(false);
    };




    const handleOpenSunlight = () => {
        setOpenSunlight(true);
    };
    const handleCloseSunlight = () => {
     setOpenSunlight(false);
    };



    //Temperature Icon
    function TempLogic() { 
        let icon, status;
        if (hubTemperature === 1 || hubTemperature === 2) { 
            icon =  <AcUnitTwoToneIcon  color="warning" sx={{ fontSize: 65 }} />
            status = "Low Temperature";
        } else if (hubTemperature === 3 || hubTemperature ===  4 || hubTemperature === 5) {
            icon = <WbSunnyTwoToneIcon color="success"  sx={{ fontSize: 65 }}/>
            status = "Good Temperature";
        } else { 
            icon =  <LocalFireDepartmentTwoToneIcon  color="error" sx={{ fontSize: 65 }}/>
            status = "Temperature is too High"; 
        }
        return {icon, status};
    }
    let { icon: readTempIcon, 
        status: readTempStatus } = TempLogic();
    

    //Sunglight Logic
    function SunlightLogic() { 
        let icon, status;  
        if (hubSunlight === 1 ) { 
            icon = <BedtimeTwoToneIcon color="warning"  sx={{ fontSize: 65 }}/> 
            status = "Not Enough Sunlight"; 
        } else if (hubSunlight === 2 || hubSunlight === 3 || hubSunlight === 4 || hubSunlight === 5) {
            icon = <EmojiObjectsTwoToneIcon color="success"  sx={{ fontSize: 65 }}/>
            status = "Good Sunlight";
        } else { 
            icon =  <LightModeTwoToneIcon color="error"  sx={{ fontSize: 65 }}/>
            status = "Too Much Sunlight"; 
        }
        return {icon, status};
    }
    let { icon: readSunlightIcon, 
        status: readSunlightStatus } = SunlightLogic();



    function MoistureInfo() {
        let icon, status;
    
        if (hubMoisture === 1 || hubMoisture === 2) {
            icon = <WaterDropTwoToneIcon  color="warning" sx={{ fontSize: 65 }}/>;
            status = "Low Moisture";
        } else {
            icon = <WavesTwoToneIcon color="success"  sx={{ fontSize: 65 }}/>;
            status = "Good Moisture";
        }
        return {icon, status};
    }
    let { icon: readMoistureIcon, 
        status: readMoistureStatus } = MoistureInfo();



  return (
    <Box>
        <Box align="center">
            <IconButton onClick={handleOpenMoisture}>{readMoistureIcon}, </IconButton> 
            <IconButton onClick={handleOpenTemp}>{readTempIcon}, </IconButton>
            <IconButton onClick={handleOpenSunlight}>{readSunlightIcon}</IconButton>
        </Box>

        <Dialog open={openMoisture} onClose={handleCloseMoisture} fullWidth>
            <DialogTitle>Moisture Status:</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {readMoistureStatus}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleCloseMoisture} color="primary">
                Okay
            </Button>
            </DialogActions>
      </Dialog> 
      {/* Dialog for Temperature: */}
      <Dialog open={openTemp} onClose={handleCloseTemp} fullWidth>
            <DialogTitle>Temperature Status:</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {readTempStatus}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleCloseTemp} color="primary">
                Okay
            </Button>
            </DialogActions>
      </Dialog> 

      {/* Dialog for Sunlight:  */} 
      <Dialog open={openSunglight} onClose={handleCloseSunlight} fullWidth>
            <DialogTitle>Sunlight Status:</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {readSunlightStatus}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleCloseSunlight} color="primary">
                Okay
            </Button>
            </DialogActions>
      </Dialog>


    </Box>

    
  )
}

export default IconBox2;