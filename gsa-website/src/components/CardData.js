import React from 'react';
import {Box,Card,CardContent,Typography,Button} from '@mui/material'
import { getFirestore, collection, doc, setDoc, onSnapshot } from "firebase/firestore";
import { useState } from "react";
import { auth } from '../firebase';
import Authenticate from './Authenticate';
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





const CardData = () => {
    const [hubTime, setHubTime] = useState('');
    const [hubMoisture, setHubMoisture] = useState('');
    const [hubSunlight, setHubSunlight] = useState('');
    const [hubTemperature, setHubTemperature] = useState('');


    const firestore = getFirestore();


    const unsub = onSnapshot(doc(firestore, "HUBS_ONLINE", "HUB_1"), (doc) => {
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



    //Temperature Icon
    function TempLogic() { 
        let icon, status;
        if (hubTemperature === 1 || hubTemperature === 2) { 
            icon =  <AcUnitTwoToneIcon />
            status = "Low Temperature";
        } else if (hubTemperature === 3 || hubTemperature ===  4 || hubTemperature === 5) {
            icon = <WbSunnyTwoToneIcon />
            status = "Good Temperature";
        } else { 
            icon =  <LocalFireDepartmentTwoToneIcon />
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
            icon = <BedtimeTwoToneIcon /> 
            status = "Not Enough Sunlight"; 
        } else if (hubSunlight === 2 || hubSunlight === 3 || hubSunlight === 4 || hubSunlight === 5) {
            icon = <EmojiObjectsTwoToneIcon />
            status = "Good Sunlight";
        } else { 
            icon =  <LightModeTwoToneIcon />
            status = "Too Much Sunlight"; 
        }
        return {icon, status};
    }
    let { icon: readSunlightIcon, 
        status: readSunlightStatus } = SunlightLogic();



    function MoistureInfo() {
        let icon, status;
    
        if (hubMoisture === 1 || hubMoisture === 2) {
            icon = <WaterDropTwoToneIcon />;
            status = "Low Moisture";
        } else {
            icon = <WavesTwoToneIcon />;
            status = "Good Moisture";
        }
        return {icon, status};
    }
    let { icon: readMoistureIcon, 
        status: readMoistureStatus } = MoistureInfo();




  return (
    <>
    <Box>
        <Typography>
            Time: {hubTime}
        </Typography>
        <Typography>
            Temperature: {hubTemperature}
        </Typography>
        <Typography>
            Moisture: {hubMoisture}
        </Typography>
        <Typography>
            Sunlight: {hubSunlight}
        </Typography>
    </Box>
    
    </>
    
  )
}

export default CardData