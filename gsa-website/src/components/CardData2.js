import React from 'react'; 
import {Box,Card,CardContent,Typography,Button} from '@mui/material'
import { getFirestore, collection, doc, setDoc, onSnapshot } from "firebase/firestore";
import { useState } from "react";





const CardData2 = () => {
    const [hubTime, setHubTime] = useState('');
    const [hubMoisture, setHubMoisture] = useState('');
    const [hubSunlight, setHubSunlight] = useState('');
    const [hubTemperature, setHubTemperature] = useState('');


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

export default CardData2