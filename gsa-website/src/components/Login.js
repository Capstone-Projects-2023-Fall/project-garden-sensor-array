import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap"; 
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set } from "firebase/database";


const Login = () => {

  //Store the values that are going to entered into the input fields 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  let navigate = useNavigate();

  const database = getDatabase();


  //Log into user account with firebase function
  const signIn = async (e) => { //e passes the event from the form 

    e.preventDefault(); //page doesn't reload after submission 
    setError("");
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => { 
        console.log(userCredential); // returns a promise to wait until resovled and get back user credentials 

        const user = userCredential.user; 

        set(ref(database, 'Users/' + 'Current User'), {  // adds user information to realtime database
          UID: user.uid
        })

        navigate("/MySensorsPage")//going to MySensorsPage
      }) 
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };


  return (
    <>
      <div className="p-4 box">
          <h2 className="mb-3">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={signIn}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email address"
                value = {email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                value = {password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="primary" type="Submit">
                Log In
              </Button>
            </div>
          </Form>
          <hr />
        </div>
        <div className="p-4 box mt-3 text-center">
          Don't have an account? <Link to="/Register">Register</Link>
        </div>
    </>
    
  )
}

export default Login