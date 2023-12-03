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


 


  return (
    <>
      <Layout />   
      <Box m="20px">
      {/* GRID & CHARTS */}
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="240px" gap="20px">

        {/* Row 1 */}
        <Box sx={{ border: 1 }}  gridColumn="span 3" gridRow="span 2"   p="30px">
          <Typography variant="h5" fontWeight="600">
            What the Data Means 
          </Typography>
          <Box  height="250px" m="-20px 0 0 0"display="flex" flexDirection="column" alignItems="center" mt="25px"> 
            How to Read the Data - in words - maybe even chart to help understand data 
          </Box>
        </Box>  

        <Box sx={{ border: 1 }} gridColumn="span 6" gridRow="span 2"   p="30px">
          <Typography variant="h5" fontWeight="600">
            Hub Info 
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

  

        {/* Row 2 */} 
        <Box  sx={{ border: 1 }} gridColumn="span 6" gridRow="span 2"  >
          <Box mt="25px" p="0 30px" display="flex " justifyContent="space-between" alignItems="center">
            <Box>
              <Typography variant="h5" fontWeight="600" >
                Line Graph
              </Typography>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            {/* <LineChart isDashboard={true} /> */}
          </Box>
        </Box>  


        <Box  sx={{ border: 1 }}gridColumn="span 6" gridRow="span 2"  >
          <Box mt="25px" p="0 30px" display="flex " justifyContent="space-between" alignItems="center">
            <Box>
              <Typography variant="h5" fontWeight="600"   >
                Space for other Graph or figure
              </Typography>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
          {/* Space for Another Graph or figure - prob Bar Graph  */}
          </Box>
        </Box> 



        {/* Row 3 */}
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
            Access Hub's Recorded Data
          </Typography>
          <Box display="flex" flexDirection="column" alignItems="center" mt="25px"> 
            Button 
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






