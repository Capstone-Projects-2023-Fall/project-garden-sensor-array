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
import { green, lightGreen, brown} from '@mui/material/colors';

import Navbar from '../Format/Navbar';  
import Footer from '../Format/Footer'; 

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
  const [openTemp, setOpenTemp] = useState(false);
  const [openMoisture, setOpenMoisture] = useState(false);
  const [openSunlight, setOpenSunlight] = useState(false);

  //constants for functionality 
  const database = getDatabase();
  const firestore = getFirestore();
  const { authUser } = Authenticate();   
  const [error, setError] = useState("");
  //const sensorName = localStorage.getItem('currSens');

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
  const hubSens = localStorage.getItem('hubSens'); 

  const [sun, setSun] = useState([]);
  const [moi, setMoi] = useState([]);
  const [tem, setTem] = useState([]);
  const [dates, setDates] = useState([]);
  const [serial, setSerial] = useState('');

    
  const [avg, setAvg] = useState({ "Temperature": 0, "Moisture": 0, "Sunlight": 0 });

  const [time, setTime] = useState(0);

  const today = () => {
    setTime(1)
  };

  const week = () => {
    setTime(7)
  };

  const month = () => {
    setTime(31)
  };

  const year = () => {
    setTime(365)
  };
 
    //Functionality for opening and closing the data table modal
  const handleOpenHistoryModel = () => {
        setOpenHistoryModal(true);
  };

  const handleCloseHistoryModal = () => {
      setOpenHistoryModal(false);
  }; 

  const names = hubSens.split(',')
  const currentHub = names[0];
  console.log(currentHub)

  const currentSens = names[1];
  console.log(currentSens)

  useEffect(() => {
    const fetchData = async () => {
      try {
        let hubs;
        let sensors;
        let q;


        console.log('Users/' + 'userUid' + '/HUBS/' + currentHub + '/' + currentSens)
        if (authUser) {
          const userUid = authUser.uid;
          
          //console.log('Users/' + userUid + '/HUBS/' + currentHub + '/' + currentSens)
          //const dbref = ref(fs, 'Users/qiI94Y9OHXYygsYyy5wp2SeSrAn2/HUBS/Test-Hub/SENSORS/tomato');
          const dbref = ref(fs, 'Users/' + userUid + '/HUBS/' + currentHub + '/SENSORS/' + currentSens);
          const snapshot = await get(dbref); // Use get to retrieve the data once
          console.log("exist: " + snapshot.exists())
          if (snapshot.exists()) {
            sensors = snapshot.val().SensorSerial;
            setSerial(sensors);
            console.log("serial: " + sensors)
          }
          
          //const hubRef = ref(fs, 'Users/qiI94Y9OHXYygsYyy5wp2SeSrAn2/HUBS/Test-Hub');
          const hubRef = ref(fs, 'Users/' + userUid + '/HUBS/' + currentHub);

          const hubSnapshot = await get(hubRef); // Use get to retrieve the data once
          console.log("exist: " + hubSnapshot.exists())
          if (hubSnapshot.exists()) {
            hubs = hubSnapshot.val().HubSerial;
            setSerial(hubs);
            console.log("serial: " + hubs)
          }
        }

      currDate.setDate(currentDate.getDate());
      currDate.setHours(23)
      currDate.setMinutes(59)
      currDate.setSeconds(59)

      prevDate.setDate(currentDate.getDate() - time)
      prevDate.setHours(23)
      prevDate.setMinutes(59)
      prevDate.setSeconds(59)

      console.log(hubs + "/" + sensors + "/data")
      q = query(
        collection(db, hubs, sensors, "data"),
        where("Time", ">", prevDate),
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
  }, [ time ]); // Run this effect whenever 'props.range' changes


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
          maxTicksLimit: 4
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

  return ( 
    <> 

    <div style={{ backgroundColor: 'tan' }}> 

      <Navbar />    
      <Box m="20px">
      {/* Below is the Grid of the General HubPage */}
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="180px" gap="20px">  


        {/* Row 1: Header/Welcome */}
        <Box sx={{ border: 3,  backgroundColor: 'white', boxShadow: 7, borderRadius: '8px', borderColor: "#1b5e20"  }}  gridColumn="span 12"  p="30px" alignItems="center">
            <Typography variant="h3" fontWeight="600" textAlign="center">{currentSens}'s SensorPage </Typography>  
            <Typography variant="h6" fontWeight="400" textAlign="center">Live data from your sensor- View the graphs below to see it's history </Typography> 
            <Typography> </Typography>
          </Box>  


        {/* Row 2 - Hub Statistics  */} 
        <Box sx={{ border: 3,  backgroundColor: 'white', boxShadow: 7, borderRadius: '8px', borderColor: "#1b5e20" }}  gridColumn="span 3" gridRow="span 2"   p="20px" alignItems="center">
          <Typography variant="h5" fontWeight="600"  textAlign="center">
            What the Data Means 
          </Typography>
          <Box  height="250px" m="-20px 0 0 0"display="flex" flexDirection="column" alignItems="center" mt="20px" >  
          <Typography gutterBottom fontWeight="600"> Temperature Ranges:</Typography>
            <Typography gutterBottom>Low: &gt;5 </Typography>
            <Typography gutterBottom>Good: 5 to 32 </Typography> 
            <Typography gutterBottom>Too High: 32&lt;</Typography> 
            <Typography gutterBottom fontWeight="600"> Sunlight Ranges:</Typography>
            <Typography gutterBottom>Low: &gt;50 </Typography>
            <Typography gutterBottom>Good: 50 to 150 </Typography> 
            <Typography gutterBottom>Too High: 150&lt;</Typography> 
            <Typography gutterBottom fontWeight="600"> Moisture Ranges:</Typography>
            <Typography gutterBottom>Low: &gt;300 </Typography>
            {/* <Typography gutterBottom>Good: 5 to 32 </Typography> 
            <Typography gutterBottom>Too High: 32&lt;</Typography> */}
             
          </Box>
        </Box>  

        <Box sx={{ border: 4,  backgroundColor: 'white', boxShadow: 7, borderRadius: '8px', borderColor: "#1b5e20" }} gridColumn="span 6" gridRow="span 2" p="30px" alignItems="center">
          <Typography variant="h4" fontWeight="600" textAlign="center">
            {currentHub}  
          </Typography>  
          {/* This is for the DATE BUTTONS !!! - Alter code here - or add functions to onClick part */} 
          <Typography>
          <Box alignItems="center" mx="165px" p="11px" >    
            <Stack direction="row" spacing={1} alignItems="center">
              <Button size="small" variant="contained"  background-Color= '#1b5e20' onClick={today}> Today </Button>
              <Button size="small" variant="contained" background-Color = '#1b5e20' onClick={week}> Week </Button>
              <Button size="small" variant="contained"  background-Color=  '#1b5e20' onClick={month}> Month </Button>
              <Button size="small" variant="contained"  background-Color= '#1b5e20' onClick={year}> Year </Button> 
            </Stack> 
          
            <p>
              {time === 1
              ? `Data Range Selected: Last 24 Hours`
              : `Data Range Selected: Last ${time} Days`}
             </p>
            </Box> 
          </Typography>
          <Box height="250px" m="20px " display="flex" flexDirection="column" alignItems="center" mt="15px"> 
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

        <Box  sx={{ border: 3,  backgroundColor: 'white', boxShadow: 7, borderRadius: '8px', borderColor: "#1b5e20"  }} gridColumn="span 3" gridRow="span 2"  p="30px" alignItems="center">
          <Typography variant="h5" fontWeight="600" textAlign="center">
            Sensor Status 
          </Typography>
          <Box  height="5%" m="-20px 0 0 0"display="flex" flexDirection="column" alignItems="center" mt="25px"> 
            
          </Box>
          <Box>
            
        <Box align="center">
            <IconButton onClick={handleOpenMoisture}>{readMoistureIcon} </IconButton> 
            
        </Box>
        <Box align="center">
           
            <IconButton onClick={handleOpenTemp}>{readTempIcon} </IconButton>
            
        </Box>
        <Box align="center">
            
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
        </Box> 


        {/* Row 4 - Line Graphs */} 
        <Box  sx={{ border: 3,  backgroundColor: 'white', boxShadow: 7, borderRadius: '8px', borderColor: "#1b5e20"  }} gridColumn="span 4" gridRow="span 2" bg="white" >
          <Box mx="132px" p="35px" display="flex " justifyContent="space-between" alignItems="center" textAlign="center">
            <Box>
              <Typography variant="h5" fontWeight="600" textAlign="center" alignItems="center">
                Moisture
              </Typography>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0"> 
          {/* Enter what is returend for Moisture Graph here */} 
          <Line data={moi_data} options={options} />
          </Box>
        </Box>  


        <Box  sx={{ border: 3,  backgroundColor: 'white', boxShadow: 7, borderRadius: '8px', borderColor: "#1b5e20"   }}gridColumn="span 4" gridRow="span 2" bg="white">
          <Box mx="110px" p="35px" display="flex " justifyContent="space-between" alignItems="center">
            <Box>
              <Typography variant="h5" fontWeight="600" textAlign="center"  >
                Temperature
              </Typography>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0" >
            {/* Enter what is returned for Temperature graph here */} 
            <Line data={tem_data} options={options} />
          </Box>
        </Box>  

        <Box  sx={{ border: 3,  backgroundColor: 'white', boxShadow: 7, borderRadius: '8px', borderColor: "#1b5e20"  }}gridColumn="span 4" gridRow="span 2" bg="white">
          <Box mx="137px" p="35px" display="flex " justifyContent="space-between" alignItems="center">
            <Box>
              <Typography variant="h5" fontWeight="600" textAlign="center"  >
                Sunlight
              </Typography>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
          {/* Enter what's returned for Sunlight Graph here  */} 
          <Line data={sun_data} options={options} />
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
