
import React, {useEffect, useState} from 'react'; 
import {Box,Card,CardContent,Typography,Button} from '@mui/material'
import IconBox2 from './IconBox2';
import { getFirestore, collection, doc, setDoc, onSnapshot } from "firebase/firestore"; 



/* 
CardData2.js - 
* This component shows fake hub data for the Hub Cards shown on the MySensorsPage.
* This is a DEMO/MILESTONE file ONLY- It contains functions to access HUB_1, HUB_2, and also fake generated data - for demo purposes 
* This data does not accurately represent data for any specifc user 
* CardData2 can be/is used on the second/middle section of the HubCard   

*/


const CardData2 = () => { 
    //Data Variables for HUB_1:
    const [hubTime1, setHubTime1] = useState('');
    const [hubMoisture1, setHubMoisture1] = useState('');
    const [hubSunlight1, setHubSunlight1] = useState('');
    const [hubTemperature1, setHubTemperature1] = useState(''); 
    //Data Variables for HUB_2:
    const [hubTime2, setHubTime2] = useState('');
    const [hubMoisture2, setHubMoisture2] = useState('');
    const [hubSunlight2, setHubSunlight2] = useState('');
    const [hubTemperature2, setHubTemperature2] = useState(''); 
    //Fake Generated Data:  
    const [fakeHubMoisture, setFakeHubMoisture] = useState('');
    const [fakeHubSunlight, setFakeHubSunlight] = useState('');
    const [fakeHubTemperature, setFakeHubTemperature] = useState(''); 
    //Setting the Fake Data array so it can be sent to other files - in this case, IconBox2.js 
    const [fakeDataArray, setFakeDataArray] = useState(''); 



    const firestore = getFirestore();



    //Keeping Hub_1 info function incase we want to use it in the future, currently not being used for CardData2 
    const hubInfo1 = onSnapshot(doc(firestore, "HUBS_ONLINE", "HUB_1"), (doc) => {
        const  hubData1 = doc.data()
        if ( hubData1) {
            const t =  hubData1.Time.toDate();
            const time = t.toLocaleString();
            setHubTime1(time);

            const s =  hubData1.Sunlight;
            setHubSunlight1(s);

            const te =  hubData1.Temperature;
            setHubTemperature1(te);

            const m =  hubData1.Moisture;
            setHubMoisture1(m);
        }
    });

    //Keeping Hub_2 info function incase we want to use it in the future, currently not being used for CardData2 
    const hub2Info = onSnapshot(doc(firestore, "HUBS_ONLINE", "HUB_2"), (doc) => {
        const hubData2 = doc.data()
        if (hubData2) {
            const t = hubData2.Time.toDate();
            const time = t.toLocaleString();
            setHubTime2(time);

            const s = hubData2.Sunlight;
            setHubSunlight2(s);

            const te = hubData2.Temperature;
            setHubTemperature2(te);

            const m = hubData2.Moisture;
            setHubMoisture2(m);
        }
    }); 


    //Fake Data Generating Function, creates a random array of 3 integers 
    function fakeData(min, max) {
        const fakeArray = Array.from({
            length: 3
        }, () => Math.floor(Math.random() * (max - min + 1) + min)); 
        
        //console.log(fakeArray); 
        setFakeDataArray(fakeArray); 
        AddFakeData(fakeArray);
        
        
    }  


    function AddFakeData(fakeArray) {
        if (fakeArray) { 

            const s =  fakeArray[0];
            setFakeHubSunlight(s);

            const te =  fakeArray[1];
            setFakeHubTemperature(te);

            const m =  fakeArray[2];
            setFakeHubMoisture(m);

        }
    } 

    useEffect(() => {
        fakeData(1,6); 
        
    },[fakeHubTemperature, fakeHubMoisture, fakeHubSunlight]);




  return ( 
    <>
    <Box>
         <Typography>
            Time: {hubTime1}
        </Typography>
        <Typography>
            Temperature: {fakeHubTemperature}
        </Typography>
        <Typography>
            Moisture: {fakeHubMoisture}
        </Typography>
        <Typography>
            Sunlight: {fakeHubSunlight}
        </Typography> 
    </Box>
    
    </>
    
  )
}

export default CardData2;