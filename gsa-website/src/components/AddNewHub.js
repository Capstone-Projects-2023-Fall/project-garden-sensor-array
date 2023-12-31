import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, set, update } from "firebase/database";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
import { Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Authenticate from './Authenticate';

const AddNewHub = () => {
  // get all required fields
  const [hubName, setHubName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // initialize all databases
  const database = getDatabase();
  const firestore = getFirestore();
  const auth = getAuth();
  let navigate = useNavigate();
  const { authUser } = Authenticate();  


  // Main function
  const AddingHub = async (e) => {
    e.preventDefault();

    if (authUser) {
      // Get the user's UID from the authUser object
      const userUid = authUser.uid;

      update(ref(database, `Users/${userUid}`), {   // add HUB to UID folder in Users
        [hubName]: { name: hubName }
      })

      const serialMapDocRef = doc(collection(firestore, 'SERIAL_MAP'), hubName);  // add HUB to SERIAL_MAP
        await setDoc(serialMapDocRef, {
          SerialNumber: "-",
          User: userUid
        })

        .then(() => {
          console.log("Hub Name added successfully!");
          navigate("/MySensorsPage");
        })
        .catch((error) => {
          console.error("Error adding Hub Name: ", error);
        });
    } else {
      setError("You must be logged in to add a hub.");
    }
  };

  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Add New Hub</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={AddingHub}>

          <Form.Group className="mb-3" controlId="formHubName">
            <Form.Control
              type="hubName"
              placeholder="Hub Name"
              value={hubName}
              onChange={(e) => setHubName(e.target.value)}
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

export default AddNewHub;