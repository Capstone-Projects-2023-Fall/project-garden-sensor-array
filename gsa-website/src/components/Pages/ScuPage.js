import React from 'react';
import {Box,Card,CardContent,Typography,Button, IconButton, Stack } from '@mui/material'
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
import Authenticate from '../Authenticate';

import Layout from '../Format/Layout'; 

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


const ScuPage = (props) => {
  
  //useEffect()

  //constants for functionality 
  const database = getDatabase();
  const firestore = getFirestore();
  const { authUser } = Authenticate();   
  const [error, setError] = useState("");
  const sensorName = localStorage.getItem('currSens');

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

  
  //Constants 
  const [openHistoryModal, setOpenHistoryModal] = React.useState(false); //for the data table
  const currentHub = localStorage.getItem('currHub'); 

  const [sun, setSun] = useState([]);
  const [moi, setMoi] = useState([]);
  const [tem, setTem] = useState([]);
  const [dates, setDates] = useState([]);
  const [serial, setSerial] = useState('');

    
  const [avg, setAvg] = useState({ "Temperature": 0, "Moisture": 0, "Sunlight": 0 });
 
    //Functionality for opening and closing the data table modal
  const handleOpenHistoryModel = () => {
        setOpenHistoryModal(true);
  };

  const handleCloseHistoryModal = () => {
      setOpenHistoryModal(false);
  }; 

  useEffect(() => {
    const fetchData = async () => {
      try {
        let s;
        let q;
        let qry;

        if (authUser) {
          const userUid = authUser.uid;
    
          const dbref = ref(fs, 'Users/' + userUid + '/HUBS/' + currentHub + '/SENSORS/' + sensorName);
    
          const snapshot = await get(dbref); // Use get to retrieve the data once

          if (snapshot.exists()) {
            s = snapshot.val().SensorSerial;
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

    <div style={{ backgroundColor: 'tan' }}> 

      <Layout />    
      <Box m="20px">
      {/* Below is the Grid of the General HubPage */}
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="240px" gap="20px">  


        {/* Row 1: Header/Welcome */}
        <Box sx={{ border: 1,  backgroundColor: 'white'  }}  gridColumn="span 12"  p="30px" alignItems="center">
            <Typography variant="h3" fontWeight="600" textAlign="center">{sensorName}'s SensorPage </Typography> 
            <Typography> Brief explanation of what HubPage is and the features it offers.</Typography>
          </Box>  


        {/* Row 2 - Hub Statistics  */} 
        <Box sx={{ border: 1,  backgroundColor: 'white'  }}  gridColumn="span 3" gridRow="span 2"   p="30px" alignItems="center">
          <Typography variant="h5" fontWeight="600">
            What the Data Means 
          </Typography>
          <Box  height="250px" m="-20px 0 0 0"display="flex" flexDirection="column" alignItems="center" mt="25px" > 
            How to Read the Data - in words 
          </Box>
        </Box>  

        <Box sx={{ border: 3,  backgroundColor: 'white'  }} gridColumn="span 6" gridRow="span 2" p="30px" alignItems="center">
          <Typography variant="h5" fontWeight="600" textAlign="center">
            {currentHub}  
          </Typography>  
          {/* This is for the DATE BUTTONS !!! - Alter code here - or add functions to onClick part */}
          <Box alignItems="center">    
            <Stack direction="row" spacing={1} alignItems="center">
              <Button size="small" variant="contained" onClick={null}> Today </Button>
              <Button size="small" variant="contained" onClick={null}> Week </Button>
              <Button size="small" variant="contained" onClick={null}> Month </Button>
             <Button size="small" variant="contained" onClick={null}> Year </Button> 
            </Stack>
            </Box> 
          <Box height="250px" m="-20px 0 0 0" display="flex" flexDirection="column" alignItems="center" mt="45px"> 
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
        </Box>  

        <Box  sx={{ border: 1,  backgroundColor: 'white'  }} gridColumn="span 3" gridRow="span 2"  p="30px" alignItems="center">
          <Typography variant="h5" fontWeight="600" textAlign="center">
            Hub Status 
          </Typography>
          <Box  height="250px" m="-20px 0 0 0"display="flex" flexDirection="column" alignItems="center" mt="25px"> 
            alerts the user on what they should focus on -
          </Box>
        </Box> 


        {/* Row 4 - Line Graphs */} 
        <Box  sx={{ border: 1,  backgroundColor: 'white'  }} gridColumn="span 4" gridRow="span 2" bg="white" >
          <Box mt="25px" p="0 30px" display="flex " justifyContent="space-between" alignItems="center">
            <Box>
              <Typography variant="h5" fontWeight="600" >
                Moisture Line Graph 
              </Typography>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0"> 
          {/* Enter what is returend for Moisture Graph here */}
          </Box>
        </Box>  


        <Box  sx={{ border: 1,  backgroundColor: 'white'   }}gridColumn="span 4" gridRow="span 2" bg="white">
          <Box mt="25px" p="0 30px" display="flex " justifyContent="space-between" alignItems="center">
            <Box>
              <Typography variant="h5" fontWeight="600"   >
                Temperature Line graph
              </Typography>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            {/* Enter what is returned for Temperature graph here */}
          </Box>
        </Box>  

        <Box  sx={{ border: 1,  backgroundColor: 'white'  }}gridColumn="span 4" gridRow="span 2" bg="white">
          <Box mt="25px" p="0 30px" display="flex " justifyContent="space-between" alignItems="center">
            <Box>
              <Typography variant="h5" fontWeight="600"   >
                Sunlight Line Graph
              </Typography>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
          {/* Enter what's returned for Sunlight Graph here  */}
          </Box>
        </Box> 




        {/* Row 5 - Access More Data */}
        <Box gridColumn="span 4" gridRow="span 2"   p="30px" bg="white">
          <Typography variant="h5" fontWeight="600">
           {/* Don't erase I'm putting pictures here  */}
          </Typography>
          <Box display="flex" flexDirection="column" alignItems="center" mt="25px"> 
          </Box>
        </Box>   
          

        <Box gridColumn="span 4" gridRow="span 2"   p="30px" >    
            
            <Typography variant="h5" fontWeight="600">
      
            </Typography>
            <Box display="flex" flexDirection="column" alignItems="center" mt="25px"> 
            </Box>   
            
        </Box>   
        
  

      </Box>  
    </Box>   
    </div>
    

    </>
  );
};

export default ScuPage; 
