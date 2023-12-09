// for the 1st/leftmost section of the hubcard - will show the user's selected photo either from files or possibly from AI generation 
//import this component into the hubcard (MySensorsPage)

import "firebase/firestore";
import "firebase/storage";
import React from 'react'; 
import { useState, useEffect } from 'react';
import { Box } from "@mui/material";
import { getStorage, getDownloadURL, ref} from 'firebase/storage'

const HubPhoto = () => { 


  const [url, setUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);



  useEffect(() => {
    const fetchImageUrl = async () => {
      try {
        const storage = getStorage();
        const reference = ref(storage, '/test0.jpg');
        const imageUrl = await getDownloadURL(reference);
        setUrl(imageUrl);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImageUrl();
  }, []);



  return (


    //here is the return for the entire photo section : 

    <Box sx={{ border: 1 }} gridColumn="span 3" gridRow="span 2"   p="30px">
    {isLoading && <p>Loading image...</p>}
    {error && <p>Error fetching image: {error.message}</p>}
    {url && (
      <img src={url} alt="Pics" style={{ width: '100%', height: '50%' }} />
    )}
  </Box>
    
      


  )
}

export default HubPhoto