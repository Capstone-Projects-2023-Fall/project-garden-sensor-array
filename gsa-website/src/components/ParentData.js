/* 
* ParentData.js 
* Purpose: The parent component for the HubCards on "MySensorsPage" and the pages that are connected to those HubCards - HubPage 
* It handles the data that the hubCards should know, 
* Not a page that Users can see  

*/ 


//MAKE SURE TO CALL THIS FILE SOMEWHERE - OTHERWISE IT WON'T RUN - MAYBE RUN THIS AFTER LOGGING IN 

import React, {useEffect, useState, useCallback} from 'react'; 
//imports for database access 
import { getFirestore, collection, doc, setDoc, onSnapshot } from "firebase/firestore"; 
import { getDatabase, ref, set, get, update, onValue } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { auth } from '../firebase';
import Authenticate from './Authenticate';


//"lifting state up - to pass information from Parent to child"  - don't use const functions by themselves 

function ParentData() {    
    
  //Use State Variables:  
  const [userInfo, setUserInfo ] = useState(''); 
  const [registeredHubs, setRegisteredHubs] = useState('');
  const [hubName, setHubName] = useState("");//just in case  
  const [error, setError] = useState("");

  const database = getDatabase();
  const firestore = getFirestore();
  const { authUser } = Authenticate();  


  //same function from MySensorsPage 
  //Baselevel /First Level of items in Realtime database - under "User ID" - 
  const FetchBaseLevel = useCallback(async() => { 
  try {
    if (authUser) {
      const userUid = authUser.uid;
      // Reference to the user's data in the Realtime Database
      const userRef = ref(database, `Users/${userUid}`);

      // Fetch the data
      const snapshot = await get(userRef);

      if (snapshot.exists()) {
          
        // Gathering the Data that exists
        const hubs = snapshot.val();
        console.log('Hubs:', hubs); //printing out to console to see what we get 
        //Making the Data found into an Array of objects - 1st level, contains everything still
        let nameOfHub, acctInfo; 
        const acctUser = ['Email', 'Username'];
 
        nameOfHub = Object.keys(hubs); 
        nameOfHub = nameOfHub.filter(el => ![acctUser].includes(el)); //removes Username + Email, only hub names present 
        console.log('Hub Names:', nameOfHub); 
        setRegisteredHubs(nameOfHub); //setting in constant use-state variable
        acctInfo = Object.keys(hubs); 
        acctInfo = acctInfo.filter(el => acctUser.includes(el));//removes HubNames and gives back an array of only username and email 
        console.log('User Info:', acctInfo);
        setUserInfo(acctInfo); //setting in constant use-state variable      
        return {nameOfHub, acctInfo}; 
      } else {
        console.log('No info found for this user .');
      }
    } else {
      setError('You must be logged in to see your hubs.');
    }
  } catch (error) {
  }
  return [];
},[authUser, database, setError]); //end of this fetch function  




  //The second Level of realtime Database, once each hubname/id is found - this function reports thier respective serial numbers, and their sensor names 
  const FetchSecondLevel = useCallback(async() => { 
  try {
    if (authUser) {
      const userUid = authUser.uid;
      
      // Reference to the hubs a user has 
      const hubRef = ref(database, `Users/${userUid}/${registeredHubs}`);

      // Fetch the data
      const snapshot = await get(hubRef);

      if (snapshot.exists()) {
        // Data exists, retrieve the hubs
        const hubs = snapshot.val();

        console.log('Hub Info:', hubs);


        let hubInfo = Object.keys(hubs); 

        console.log('Hub Info:', hubInfo);
        
        return hubInfo
      } else {
        console.log('No hub information found for the user.');
      }
    } else {
      setError('You must be logged in to fetch hubs.');
    }
  } catch (error) {
    
  }
  return [];
},[authUser, database, setError]);








  //-- put functions above this 
  return ( 
      <>
      
      </>

  ); 
}  
export default ParentData; 