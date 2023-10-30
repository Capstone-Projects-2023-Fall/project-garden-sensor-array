

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "./AuthContext";

//importing database 
//import {database} from './firebase'; 
import { getDatabase, ref } from "firebase/database";
import { set } from "firebase/database";



const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [passwordConfirm, setConfirmPassword] = useState("");
  const [sensorUnit, setSensorUnitID] = useState("");
  const [sensorName, setSensorName] = useState("");
  const [error, setError] = useState("");


  const { signUp, user} = useUserAuth();
  


  let navigate = useNavigate();
  const [loading, setLoading] = useState(false)



    async function handleSubmit(e) {
        e.preventDefault()

        if (password !== passwordConfirm) {
        return setError("Passwords do not match")
        }

        try {
        setError("")
        setLoading(true)
        await signUp(email,password)

        const database = getDatabase();
        const userRef = ref(database,'users/' + user.uid); // Use the unique identifier for the user
        set(userRef, {
          email: email,
          displayName: displayName,
          sensorUnit: sensorUnit,
          sensorName: sensorName,
        });


        navigate("/MySensorsPage")
        } catch {
        setError("Failed to create an account")
        }
        setLoading(false)



    }

  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Signup</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDisplayName">
            <Form.Control
              type="displayName"
              placeholder="UserName"
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicSensorUnit">
            <Form.Control
              type="sensorUnit"
              placeholder="SensorUnitID"
              onChange={(e) => setSensorUnitID(e.target.value)}
            />
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicSensorName">
            <Form.Control
              type="sensorName"
              placeholder="SensorName"
              onChange={(e) => setSensorName(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button disabled={loading} variant="primary" type="Submit">
              Sign up
            </Button>
          </div>
        </Form>
      </div>
      <div className="p-4 box mt-3 text-center">
        Already have an account? <Link to="/">Log In</Link>
      </div>
    </>
  );
};

export default Signup;