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


const IconBox1 = (props) => {
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
  
          // Clean up the listener when the component unmounts or when it's no longer needed
          return () => {
            unsubscribe();
          };
        } catch (error) {
          console.log("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, [ props.range ]); // Run this effect whenever 'props.range' changes

    const sun_data = {
      labels: dates,
      datasets: [{
        label: 'Sunlight',
        data: sun,
        borderColor: 'rgb(255, 100, 0)',
      }]
    };
  
    const moi_data = {
      labels: dates,
      datasets: [{
        label: 'Moisture',
        data: moi,
        borderColor: 'rgb(0, 100, 255)',
      }]
    };
  
    const tem_data = {
      labels: dates,
      datasets: [{
        label: 'Temperature',
        data: tem,
        borderColor: 'rgb(100, 255, 0)',
      }]
    };
  
    const options = {
      responsive: true,
      scales: {
        x: {
          ticks: {
            display: true,
            autoSkip: true,
            maxTicksLimit: 7
          }
        },
      },
    };


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
    if (avg["Temperature"] < 5) { 
        icon =  <AcUnitTwoToneIcon  color="warning" sx={{ fontSize: 65 }} />
        status = "Low Temperature";
    } else if (avg["Temperature"] > 5 && avg["Temperature"] <= 32) {
        icon = <WbSunnyTwoToneIcon color="success"  sx={{ fontSize: 65 }}/>
        status = "Good Temperature";
    } else if (avg["Temperature"] > 32) {
        icon =  <LocalFireDepartmentTwoToneIcon  color="error" sx={{ fontSize: 65 }}/>
        status = "Temperature is too High"; 
    } else {
        icon =  <LocalFireDepartmentTwoToneIcon  color="Black" sx={{ fontSize: 65 }}/>
    }
    return {icon, status};
}
let { icon: readTempIcon, 
    status: readTempStatus } = TempLogic();


//Sunglight Logic
function SunlightLogic() { 
    let icon, status;  
    if (avg["Sunlight"] < 50 ) { 
        icon = <BedtimeTwoToneIcon color="warning"  sx={{ fontSize: 65 }}/> 
        status = "Not Enough Sunlight"; 
    } else if (avg["Sunlight"]  > 50 && avg["Sunlight"]  <= 150) {
        icon = <EmojiObjectsTwoToneIcon color="success"  sx={{ fontSize: 65 }}/>
        status = "Good Sunlight";
    } else if (avg["Sunlight"] > 150) { 
        icon =  <LightModeTwoToneIcon color="error"  sx={{ fontSize: 65 }}/>
        status = "Too Much Sunlight"; 
    } else {
        icon =  <LightModeTwoToneIcon color="Black"  sx={{ fontSize: 65 }}/>
    }
    return {icon, status};
}
let { icon: readSunlightIcon, 
    status: readSunlightStatus } = SunlightLogic();



function MoistureInfo() {
    let icon, status;

    if (avg["Moisture"]  <= 300) {
        icon = <WaterDropTwoToneIcon  color="warning" sx={{ fontSize: 65 }}/>;
        status = "Low Moisture";
    } else if (avg["Moisture"]  > 300) {
        icon = <WavesTwoToneIcon color="success"  sx={{ fontSize: 65 }}/>;
        status = "Good Moisture";
    } else {
        icon = <WavesTwoToneIcon color="Black"  sx={{ fontSize: 65 }}/>;
    }
    return {icon, status};
}
let { icon: readMoistureIcon, 
    status: readMoistureStatus } = MoistureInfo();

    
  return (
    <>
    <Box>
        <Box align="center">
            <IconButton onClick={handleOpenMoisture}>{readMoistureIcon}, </IconButton> 
            <IconButton onClick={handleOpenTemp}>{readTempIcon}, </IconButton>
            <IconButton onClick={handleOpenSunlight}>{readSunlightIcon}</IconButton>
        </Box>

        <Dialog open={openMoisture} onClose={handleCloseMoisture} fullWidth>
            <DialogTitle>Moisture Status:</DialogTitle>
            <DialogContent>
                <Line data={moi_data} options={options} />
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
            <Line data={tem_data} options={options} />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleCloseTemp} color="primary">
                Okay
            </Button>
            </DialogActions>
      </Dialog> 

      {/* Dialog for Sunlight:  */} 
      <Dialog open={openSunlight} onClose={handleCloseSunlight} fullWidth>
            <DialogTitle>Sunlight Status:</DialogTitle>
            <DialogContent>
            <Line data={sun_data} options={options} />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleCloseSunlight} color="primary">
                Okay
            </Button>
            </DialogActions>
      </Dialog>


    </Box>
    
    </>
    
  )
}

export default IconBox1
