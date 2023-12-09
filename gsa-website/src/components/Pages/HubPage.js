import React, { useState, useRef, useEffect, useCallback } from 'react'; // Importing to use for variables and functions
import { Box, Typography, Card, CardContent, Button, TextField, Stack, Grid, Paper, CardHeader } from "@mui/material"; //Layout Material
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'; // To create modals
import { auth } from '../../firebase'; //Get user 
import Authenticate from '../Authenticate'; //Get Signed in user
import { useNavigate } from "react-router-dom"; //Allow for website to switch pages
import { getDatabase, ref, set, get, update } from "firebase/database"; //Real-time
import { getFirestore, collection, doc, setDoc } from "firebase/firestore"; //Firestore 
import { DataGrid } from '@mui/x-data-grid';  

import Layout from '../Format/Layout'; 


const HubPage = () => {
  
  //useEffect()

  //constants for functionality 
  const database = getDatabase();
  const firestore = getFirestore();
  const { authUser } = Authenticate();   
  const [error, setError] = useState("");
  const navigate = useNavigate(); 

  //Constants 
  const [openHistoryModal, setOpenHistoryModal] = React.useState(false); //for the data table
  const currentHub = localStorage.getItem('currHub'); 




// Columns for the data table - currently filled with fake filler numbers
  const columns = [
    { field: 'Date', headerName: 'Date', width: 90 },
    { field: 'Temperature', headerName: 'Temperature', type: 'number', width: 150, editable: true,},
    { field: 'Moisture', headerName: 'Moisture', type: 'number', width: 150, editable: true,},
    { field: 'Sunlight', headerName: 'Sunlight', type: 'number', width: 110, editable: true, },
  
  ]; 
// rows for the data table - currently filled with fake filler numbers 
  const rows = [
    { id: 1, Temperature: 56, Moisture: 63, Sunlight: 35 },
    { id: 2, Temperature: 41, Moisture: 71, Sunlight: 42 },
    { id: 3, Temperature: 50, Moisture: 22, Sunlight: 45 },
    { id: 4, Temperature: 47, Moisture: 52, Sunlight: 16 },
    { id: 5, Temperature: 38, Moisture: 86, Sunlight: 90 },
    { id: 6, Temperature: 39, Moisture: 89, Sunlight: 150 },
    { id: 7, Temperature: 43, Moisture: 55, Sunlight: 44 },
    { id: 8, Temperature: 49, Moisture: 57, Sunlight: 36 },
    { id: 9, Temperature: 54, Moisture: 31, Sunlight: 65 }, 

  ]; 

    //Functionality for opening and closing the data table modal
    const handleOpenHistoryModel = () => {
        setOpenHistoryModal(true);
    };

    const handleCloseHistoryModal = () => {
      setOpenHistoryModal(false);
    }; 


    //Function for the go to ScuPage button 
    const GoToScuPage = () => {
      navigate(`/ScuPage`);
    };




  return ( 
    <> 

    <div style={{ backgroundColor: 'tan' }}> 

      <Layout />    
      <Box m="20px">
      {/* Below is the Grid of the General HubPage */}
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="240px" gap="20px">  


        {/* Row 1: Header/Welcome */}
        <Box sx={{ border: 1,  backgroundColor: 'white'  }}  gridColumn="span 12"  p="30px" alignItems="center">
            <Typography variant="h3" fontWeight="600" textAlign="center">{currentHub}'s Hubpage </Typography> 
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
                Temperature: 
            </Typography>
            <Typography>
                Moisture: 
            </Typography>
            <Typography>
                Sunlight: 
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



        {/* Row 3: Statistic Buttons */}
        <Box sx={{ border: 1 }}  gridColumn="span 12"  p="30px" alignItems="center">
            <Typography variant="h6" fontWeight="600" textAlign="center">
                Update Hub Button
            </Typography>  
            <Box display="flex" flexDirection="column" alignItems="center" mt="75px">
            <Button size="large" variant="contained" onClick={null}> Update Hub Statistics </Button> 
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

        <Box sx={{ border: 1,  backgroundColor: 'white'  }} gridColumn="span 4" gridRow="span 2"   p="35px" > 
            <Typography variant="h5" fontWeight="600" textAlign="center">
              Access More of Your Hub's Data: 
            </Typography>  
            <Box display="flex" flexDirection="column" alignItems="center" mt="75px"> 
            <Button size="large" variant="contained" onClick={handleOpenHistoryModel}>Show History </Button> 
              <Dialog open={openHistoryModal} onClose={handleCloseHistoryModal} fullWidth>
                <DialogTitle> {currentHub}'s History</DialogTitle>
                <DialogContent>
                <DialogContentText></DialogContentText>  
                  <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  initialState={{
                    pagination: {
                      paginationModel: {
                        pageSize: 5,
                      },
                    },
                  }}
                  pageSizeOptions={[5]}
                  checkboxSelection
                  disableRowSelectionOnClick
                />
                </Box>
                
                
                </DialogContent> 
                <DialogActions>
                  <Button onClick={handleCloseHistoryModal}>Cancel</Button>
                </DialogActions>
              </Dialog>
            </Box> 
            <Box display="flex" flexDirection="column" alignItems="center" mt="75px">
            <Button size="large" variant="contained" onClick={GoToScuPage}> Go to SCU Page </Button> 
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

export default HubPage; 








