// for the 1st/leftmost section of the hubcard - will show the user's selected photo either from files or possibly from AI generation 
//import this component into the hubcard (MySensorsPage)


import React from 'react'; 
import Button from '@mui/material/Button';
import { useState, useRef, useEffect, useCallback } from 'react';
import { Box, Typography, Card, CardContent } from "@mui/material";

const HubPhoto = () => { 


  const [fileTransform, setFileTransform] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);



    function AddPhoto(files) {
      if (files) {
        const photofile = files[0] || "";
        const TypeFile = photofile.type || "";
        console.log("This file upload is of type:", TypeFile);
        const reader = new FileReader();
  
        reader.onload = function (ev) {
          
          setFileTransform("data:" + TypeFile + ";base64," + btoa(ev.target.result));
          setSelectedFile(photofile);
        };
  
        reader.readAsBinaryString(photofile);
      }
    }








  return (


    //here is the return for the entire photo section : 

    <div>
    <input type="file" onChange={(e) => AddPhoto(e.target.files)} style={{ display: 'none' }} ref={fileInputRef} />
    <Button variant="outlined" component="label" htmlFor="fileInput" style={{ marginRight: '8px' }} onClick={() => fileInputRef.current.click()} >
    Choose Photo
    </Button>
    <Box>
        {selectedFile && (
            <img src={fileTransform} alt="Uploaded File" style={{ maxWidth: '100px', maxHeight: '100px' }}/>
        )}
        </Box>
    </div>
    
      


  )
}

export default HubPhoto