import React from 'react';
import {Box,Card,CardContent,Typography,Button, IconButton} from '@mui/material'
import { getFirestore, collection, doc, setDoc, onSnapshot, query, where, orderBy, getDocs, Timestamp } from "firebase/firestore";
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

const IconBox1 = () => {

    const [hubTime, setHubTime] = useState('');
    const [hubMoisture, setHubMoisture] = useState('');
    const [hubSunlight, setHubSunlight] = useState('');
    const [hubTemperature, setHubTemperature] = useState('');
    const [openTemp, setOpenTemp] = useState(false);
    const [openMoisture, setOpenMoisture] = useState(false);
    const [openSunlight, setOpenSunlight] = useState(false);

    const firestore = getFirestore();

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

    const [sun, setSun] = useState([]);
    const [moi, setMoi] = useState([]);
    const [tem, setTem] = useState([]);
    const [dates, setDates] = useState([]);

    const [avg, setAvg] = useState({ "Temperature": 0, "Moisture": 0, "Sunlight": 0 });
    
    async function fillGraph() {
      try {
        let q;
    
        q = query(
          collection(firestore, "HUB_2"),
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
              maxTicksLimit: 12
            }
          },
        },
      };
    
      useEffect(() => { // useEffect ensures it only runs when mounted
        fillGraph();
      }, []);

    console.log("moi_data:", moi_data);
    console.log("average:", avg["Moisture"]);

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
        } else if (avg["Temperature"] > 5 || avg["Temperature"] <= 32) {
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
        if (avg["Sunlight"] < 50 ) { 
            icon = <BedtimeTwoToneIcon color="warning"  sx={{ fontSize: 65 }}/> 
            status = "Not Enough Sunlight"; 
        } else if (avg["Sunlight"]  > 50 || avg["Sunlight"]  <= 150) {
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
    
        if (avg["Moisture"]  < 300) {
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

    
  )
}

export default IconBox1