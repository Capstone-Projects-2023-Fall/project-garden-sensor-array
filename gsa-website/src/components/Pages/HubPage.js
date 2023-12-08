import React, { useEffect, useState } from 'react';
import Layout from '../Format/Layout';
import { useParams } from 'react-router-dom';
import { get, ref } from 'firebase/database';
import { getDatabase,  set,  update } from "firebase/database"; 
import { Box, Typography, Card, CardContent } from "@mui/material";
import Authenticate from '../Authenticate';
import { useNavigate } from "react-router-dom"; 
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";

const HubPage = () => {
  
  //useEffect()

  const database = getDatabase();
  const firestore = getFirestore();
  const { authUser } = Authenticate();  

  const currentHub = localStorage.getItem('currHub');

  return (
    <>
      <Layout />    
      <Box m="20px">
      {/* Below is the Grid of the General HubPage */}
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="240px" gap="20px">  


        {/* Row 1: Header */}
        <Box sx={{ border: 1 }}  gridColumn="span 12"  p="30px">
            <Typography variant="h5" fontWeight="600">
              {currentHub}'s Hubpage .. Welcome to your ... hubpage! Here you can find ....
            </Typography>
          </Box>  

        {/* Row 2 - Hub Statistics  */}
        <Box sx={{ border: 1 }}  gridColumn="span 3" gridRow="span 2"   p="30px">
          <Typography variant="h5" fontWeight="600">
            What the Data Means 
          </Typography>
          <Box  height="250px" m="-20px 0 0 0"display="flex" flexDirection="column" alignItems="center" mt="25px"> 
            How to Read the Data - in words - maybe even chart to help understand data 
          </Box>
        </Box>  

        <Box sx={{ border: 3 }} gridColumn="span 6" gridRow="span 2"   p="30px">
          <Typography variant="h5" fontWeight="600">
            {currentHub}  
          </Typography>
          <Box height="250px" m="-20px 0 0 0" display="flex" flexDirection="column" alignItems="center" mt="25px"> 
            Stats 
          </Box>
        </Box>  


        <Box  sx={{ border: 1 }} gridColumn="span 3" gridRow="span 2"   p="30px">
          <Typography variant="h5" fontWeight="600">
            Hub Status 
          </Typography>
          <Box  height="250px" m="-20px 0 0 0"display="flex" flexDirection="column" alignItems="center" mt="25px"> 
            Component similar to IconBox, alerts the user on what they should focus on -
          </Box>
        </Box>   


          {/* Row 3: Statistic Buttons */}
          <Box sx={{ border: 1 }}  gridColumn="span 12"  p="30px">
              <Typography variant="h5" fontWeight="600">
                  Weekday Buttons and Update Hub Button 
              </Typography>
          </Box>  




        {/* Row 4 - Line Graphs */} 
        <Box  sx={{ border: 1 }} gridColumn="span 4" gridRow="span 2"  >
          <Box mt="25px" p="0 30px" display="flex " justifyContent="space-between" alignItems="center">
            <Box>
              <Typography variant="h5" fontWeight="600" >
                Moisture Line Chart 
              </Typography>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0"> 
          {/* Space for Another Graph or figure - prob Bar Graph  */}
          </Box>
        </Box>  


        <Box  sx={{ border: 1 }}gridColumn="span 4" gridRow="span 2">
          <Box mt="25px" p="0 30px" display="flex " justifyContent="space-between" alignItems="center">
            <Box>
              <Typography variant="h5" fontWeight="600"   >
                Temperature Line Chart
              </Typography>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            {/* Space for Another Graph or figure - prob Bar Graph  */}
          </Box>
        </Box>  

        <Box  sx={{ border: 1 }}gridColumn="span 4" gridRow="span 2">
          <Box mt="25px" p="0 30px" display="flex " justifyContent="space-between" alignItems="center">
            <Box>
              <Typography variant="h5" fontWeight="600"   >
                Sunight Line Chart
              </Typography>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
          {/* Space for Another Graph or figure - prob Bar Graph  */}
          </Box>
        </Box> 



        {/* Row 5 - Access More Data */}
        <Box gridColumn="span 4" gridRow="span 2"   p="30px">
          <Typography variant="h5" fontWeight="600">
            Free Space 
          </Typography>
          <Box display="flex" flexDirection="column" alignItems="center" mt="25px"> 
            Can add component right here - but keep empty for now
          </Box>
        </Box>  

        <Box sx={{ border: 1 }} gridColumn="span 4" gridRow="span 2"   p="30px">
          <Typography variant="h5" fontWeight="600">
            Access More of Your Hub's Data: 
          </Typography>
          <Box display="flex" flexDirection="column" alignItems="center" mt="25px">  
            <Box>
              <Typography  >
                Go to {currentHub}'s SCU page to find the readings of each individual sensor. 
              </Typography> 
                Button 
                <Box>
              <Typography>
                Click on "Show History Button to see your Hub's Recorded Averages."
              </Typography>
            </Box>
            </Box>   
          </Box>
        </Box>  


        <Box gridColumn="span 4" gridRow="span 2"   p="30px">
          <Typography variant="h5" fontWeight="600">
            Free Space 
          </Typography>
          <Box display="flex" flexDirection="column" alignItems="center" mt="25px"> 
            Can add component right here - but keep empty for now
          </Box>
        </Box> 

      </Box>  
    </Box> 

    </>
  );
};

export default HubPage; 








