import React from 'react';
import {Box,Card,CardContent,Typography,Button, avatarGroupClasses} from '@mui/material'
import { getFirestore, collection, doc, setDoc, onSnapshot } from "firebase/firestore";
import { useState, useRef, useEffect} from "react";

import { auth } from '../firebase';
import Authenticate from './Authenticate';
import { getDatabase, ref, onValue, get } from "firebase/database";
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

import { query, where, orderBy, getDocs } from "firebase/firestore";

const CardData = (props) => {
    const [hubTime, setHubTime] = useState('');
    const [hubMoisture, setHubMoisture] = useState('');
    const [hubSunlight, setHubSunlight] = useState('');
    const [hubTemperature, setHubTemperature] = useState('');
    const [openTemp, setOpenTemp] = useState(false);
    const [openMoisture, setOpenMoisture] = useState(false);
    const [openSunlight, setOpenSunlight] = useState(false);

    const db = getFirestore();
    const fs = getDatabase();

    const currentDate = new Date();
    let currDate = new Date();
    let prevDate = new Date();
    currDate.setDate(currentDate.getDate());
    currDate.setHours(23)
    currDate.setMinutes(59)
    currDate.setSeconds(59)

    prevDate.setDate(currentDate.getDate() - 1)
    prevDate.setHours(23)
    prevDate.setMinutes(59)
    prevDate.setSeconds(59)

    const currentHub = props.name;
    console.log(currentHub)

    const { authUser } = Authenticate();

    const [sun, setSun] = useState([]);
    const [moi, setMoi] = useState([]);
    const [tem, setTem] = useState([]);
    const [dates, setDates] = useState([]);
    const [serial, setSerial] = useState('');

    
    const [avg, setAvg] = useState({ "Temperature": 0, "Moisture": 0, "Sunlight": 0 });

    async function fillCard() {
      try {
        let s;
        let q;
        let qry;
    
        if (authUser) {
          const userUid = authUser.uid;
    
          const dbref = ref(fs, 'Users/' + userUid + '/' + currentHub);
          onValue(dbref, (snapshot) => {
            s = snapshot.val().Serial;
            setSerial(s);
            qry = query(collection(db, "HUB_2"), where("AccountID", "==", s));
          });
        }
    
        q = query(
          collection(db, "HUB_2"),
          orderBy("Time", "asc"),
          where("Time", "<", currDate),
          where("Time", ">", prevDate)
        );
    
        const querySnapshot = await getDocs(q);
    
        let totalTemperature = 0;
        let totalMoisture = 0;
        let totalSunlight = 0;
    
        querySnapshot.forEach((doc) => {
          totalTemperature += parseFloat(doc.data().Temperature);
          totalMoisture += parseFloat(doc.data().Moisture);
          totalSunlight += parseFloat(doc.data().Sunlight);
    
          setSun((prevSun) => [...prevSun, doc.data().Sunlight]);
          setMoi((prevMoi) => [...prevMoi, doc.data().Moisture]);
          setTem((prevTem) => [...prevTem, doc.data().Temperature]);
    
          var date = doc.data().Time.toDate();
          setDates((prevDates) => [
            ...prevDates,
            date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(),
          ]);
        });

        console.log("Sunlight Total: " +  totalSunlight)
        console.log("Query Snapshot Size: " + querySnapshot.size)
    
        const avgTemperature = totalTemperature / querySnapshot.size;
        const avgMoisture = totalMoisture / querySnapshot.size;
        const avgSunlight = totalSunlight / querySnapshot.size;

        console.log("AVG SUNLIGHT: " + avgSunlight)
    
        setAvg({
          Temperature: avgTemperature,
          Moisture: avgMoisture,
          Sunlight: avgSunlight,
        });
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }
  
    useEffect(() => { // useEffect ensures it only runs when mounted
      fillCard();
    },[ authUser ]);
    
  return (
    <>
    <Box>
        <Typography>
            Today's Averages
        </Typography>
        <Typography>
            Temperature: {avg["Temperature"].toFixed(2)}
        </Typography>
        <Typography>
            Moisture: {avg["Moisture"].toFixed(2)}
        </Typography>
        <Typography>
            Sunlight: {avg["Sunlight"].toFixed(2)}
        </Typography>
    </Box>
    
    </>
    
  )
}

export default CardData