import React from 'react';
import { Form, Card } from "react-bootstrap"
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { signOut } from "firebase/auth"; 
import { auth } from "./firebase"; //configuring website's authentication with auth const
import Authenticate from './components/Authenticate';
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, set } from "firebase/database";


export default function MySensorsPage() {

    let navigate = useNavigate();

    const database = getDatabase();

    const logOut = () => {
        signOut(auth)
          .then(() => {

            set(ref(database, 'Users/' + 'Current User'), {  // adds user information to realtime database
                UID: "-"
            })

            console.log("Logged Out");
            navigate("/")//Logging out and going back to landing page
          })
          .catch((error) => console.log(error));
    };

    const navigateToAddHub = () => {
        navigate("/AddNewHub");
    };

    const navigateToAddSensor = () => {
        navigate("/AddNewSensor");
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

                      {/* Add new Hub button */}
                      <button onClick={navigateToAddHub} style={{ marginRight: '10px' }}>
                      Add New Hub
                      </button>

                      {/* Add new Sensor button */}
                      <button onClick={navigateToAddSensor} style={{ marginRight: '10px' }}>
                      Add New Sensor
                      </button>
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