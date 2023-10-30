import React from 'react';
import { Form, Card } from "react-bootstrap"; 
import { Link } from "react-router-dom";



export default function Landing() {


    return (
        <>
        <Card>
            <Card.Body>
            <h2 className="text-center mb-4">Garden Sensor Array</h2>
            <Form>
                <Link to="/Login" className="btn btn-primary w-100 mt-3">Login</Link>
                &nbsp;
                <Link to="/Register" className="btn btn-primary w-100 mt-3">Register</Link>
            </Form>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            Happy Planting
        </div>
        </>
    )
}

