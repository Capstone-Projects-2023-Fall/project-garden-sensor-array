import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap"; 
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Authenticate from './Authenticate';
// import { collection, doc, setDoc, addDoc } from "firebase/firestore";
import { getDatabase, ref, set } from "firebase/database";


const Register = () => {

    //Store the values that are going to entered into the input fields 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [passwordConfirm, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false) //

    const database = getDatabase();

    let navigate = useNavigate();//navigate to the next change after submission
    const { authUser } = Authenticate(); //to call on this specific user 

    //Create the user account with firebase function
    const signUp = async (e) => { //e passes the event from the form 
        e.preventDefault(); //page doesn't reload after submission 

        if (password !== passwordConfirm) { //checking if entered in password and confirmed password matches 
            return setError("Passwords do not match")
        }
        setError("")
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
          .then( async (userCredential) => { 
            console.log(userCredential);// returns a promise to wait until resovled and get back user credentials
            const user = userCredential.user; 
            try {
                set(ref(database, 'Users/' + user.uid), {  // adds user information to realtime database
                    Username: displayName,
                    Email: email,
                })

                console.log("Successfully Added Account!");

              } catch (e) {
                console.error("Error registering Account!: ", e);
              }

            navigate("/MySensorsPage")//going to MySensorsPage
          }) 
          .catch((error) => {
            console.log(error.message);
            setError(error.message);
          });
          setLoading(false)
      };









  return (
        <>
            <div className="p-4 box">
            <h2 className="mb-3">Register</h2>
            {error && <Alert variant="danger">{error}</Alert>}


            <Form onSubmit={signUp}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                    type="email"
                    placeholder="Email address"
                    value = {email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDisplayName">
                <Form.Control
                    type="displayName"
                    placeholder="UserName"
                    value = {displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
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


                <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
                <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    value = {passwordConfirm}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                </Form.Group>

                <div className="d-grid gap-2">
                <Button disabled={loading} variant="primary" type="Submit">
                    Register
                </Button>
                </div>
            </Form>
            </div>
            <div className="p-4 box mt-3 text-center">
            Already have an account? <Link to="/Login">Log In</Link>
            </div>
        </>
    );
};

export default Register;