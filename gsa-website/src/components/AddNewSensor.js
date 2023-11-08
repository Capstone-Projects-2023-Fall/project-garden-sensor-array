import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, set, update } from "firebase/database";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
import { Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Authenticate from './Authenticate';

const AddNewSensor = () => {
  const [sensorName, setSensorName] = useState("");
  const [hubName, setHubName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const database = getDatabase();
  const firestore = getFirestore();
  const auth = getAuth();
  let navigate = useNavigate();
  const { authUser } = Authenticate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Get the user's UID
        const userUid = user.uid;
        
        // Handle userUid or store it in state if needed
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const handleSensorNameChange = (e) => {
    setSensorName(e.target.value);
  };

  const handleHubNameChange = (e) => {
    setHubName(e.target.value);
  };

  const AddingSensor = async (e) => {
    e.preventDefault();

    if (authUser) {
      const userUid = authUser.uid;

      // Update Firestore with the sensor information
      const sensorDocRef = doc(collection(firestore, 'SENSORS'), sensorName);
      await setDoc(sensorDocRef, {
        SensorName: sensorName,
        HubName: hubName,
        UserUid: userUid
      })
      .then(() => {
        console.log("Sensor added successfully!");
        navigate("/MySensorsPage");
      })
      .catch((error) => {
        console.error("Error adding Sensor: ", error);
        setError("Error adding Sensor");
      });
    } else {
      setError("You must be logged in to add a sensor.");
    }
  };

  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Add New Sensor</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={AddingSensor}>
          <h6>Warning: Must have an existing Hub to add a Sensor</h6>
        
          <Form.Group className="mb-3" controlId="formHubName">
            <Form.Control
              type="hubName"
              placeholder="Hub Name"
              value={hubName}
              onChange={(e) => setHubName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formSensorName">
            <Form.Control
              type="sensorName"
              placeholder="Sensor Name"
              value={hubName}
              onChange={(e) => setSensorName(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button type="submit" disabled={loading}>Submit</Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AddNewSensor;
