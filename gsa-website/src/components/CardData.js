import React from 'react';
import {Box,Card,CardContent,Typography,Button, IconButton} from '@mui/material'
import { getFirestore, collection, doc, setDoc, onSnapshot, query, where, orderBy, getDocs, Timestamp } from "firebase/firestore";
import { getDatabase, ref, onValue, get } from "firebase/database";
import { useState, useRef, useEffect } from "react";
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
import { Line } from 'react-chartjs-2';
import Authenticate from './Authenticate';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


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

    prevDate.setDate(currentDate.getDate() - props.range)
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

    useEffect(() => {
      const fetchData = async () => {
        try {
          let s;
          let q;
          let qry;
  
          if (authUser) {
            const userUid = authUser.uid;
      
            const dbref = ref(fs, 'Users/' + userUid + '/HUBS/' + currentHub);
    
            const snapshot = await get(dbref); // Use get to retrieve the data once
  
            if (snapshot.exists()) {
              s = snapshot.val().HubSerial;
              setSerial(s);
              qry = query(collection(db, s), where("AccountID", "==", s));
            }
          }

        currDate.setDate(currentDate.getDate());
        currDate.setHours(23)
        currDate.setMinutes(59)
        currDate.setSeconds(59)

        prevDate.setDate(currentDate.getDate() - props.range)
        prevDate.setHours(23)
        prevDate.setMinutes(59)
        prevDate.setSeconds(59)

        q = query(
          collection(db, s),
          orderBy("Time", "asc"),
          where("Time", "<", currDate),
          where("Time", ">", prevDate)
        );
  
          // Use onSnapshot to listen for real-time updates
          const unsubscribe = onSnapshot(q, (querySnapshot) => {
            // Clear previous data when a change occurs
            setSun([]);
            setMoi([]);
            setTem([]);
            setDates([]);
  
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
              const options = { weekday: 'long' };
  
              if (props.range == 1) {
                setDates((prevDates) => [
                  ...prevDates,
                  date.toLocaleDateString('en-US', options) + ", " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(),
                ]);
              } else {
                setDates((prevDates) => [
                  ...prevDates,
                  date.toLocaleDateString('en-US', options) + ", " + date.getHours() + ":" + date.getMinutes(),
                ]);
              }
            });
  
            const avgTemperature = totalTemperature / querySnapshot.size;
            const avgMoisture = totalMoisture / querySnapshot.size;
            const avgSunlight = totalSunlight / querySnapshot.size;
  
            setAvg({
              Temperature: avgTemperature,
              Moisture: avgMoisture,
              Sunlight: avgSunlight,
            });
          });

          return () => {
            unsubscribe();
          };
        } catch (error) {
          console.log("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, [ props.range ]); // Run this effect whenever 'props.range' changes
    
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
