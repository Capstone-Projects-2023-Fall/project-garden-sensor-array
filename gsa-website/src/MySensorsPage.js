import React from 'react';
import { Form, Card } from "react-bootstrap"
import { signOut } from "firebase/auth"; 
import { auth } from "./firebase"; //configuring website's authentication with auth const
import Authenticate from './components/Authenticate';
import { useNavigate } from "react-router-dom";


export default function MySensorsPage() {

    let navigate = useNavigate();



    const logOut = () => {
        signOut(auth)
          .then(() => {
            console.log("Logged Out");
            navigate("/")//Logging out and going back to landing page
          })
          .catch((error) => console.log(error));
    };

    const { authUser } = Authenticate();


    return (
        <>
        <h2 style={{textAlign: "center"}}>My Sensors Page</h2>
        <Card>
            <Card.Body>
                <Card.Title>Sensor 1:</Card.Title>
                    <Card.Text>
                        Sensor Status: 
                    </Card.Text>
                <Form>
                </Form>
            </Card.Body>
        </Card>
        <div>
        {authUser ? (
        <>
          <p>{`Signed In as ${authUser.email}`}</p>
          <button onClick={logOut}>Sign Out</button>
        </>
        ) : (
        <p>Signed Out</p>
        )}
        </div>
        </>
    )
}