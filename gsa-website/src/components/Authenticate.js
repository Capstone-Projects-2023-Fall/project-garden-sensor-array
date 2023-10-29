
import { useState, useEffect } from "react";
import { auth } from "../firebase"; //configuring website's authentication with auth const
import { onAuthStateChanged } from "firebase/auth"; 



const Authenticate = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
          if (user) {
            setAuthUser(user);
          } else {
            setAuthUser(null);
          }
        });
    
        return () => {
          listen();
        };
      }, []);
    

    return { authUser }; // Return authUser in an object
};


export default Authenticate 
