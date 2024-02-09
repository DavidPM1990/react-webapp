import React from "react";
import "../../styles/home.css";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";


const ContactForm = () => {

    return (
        <div>

            <div className="container d-flex justify-content-center">
                <h1>Add a new contact</h1>
            </div>

            <div className="container">

                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Full name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="number" placeholder="enter phone" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter address" />
                    </Form.Group>

                </Form>

            </div>


            <div className="d-flex justify-content-center">
                <Button variant="primary">Save</Button>
            </div>

            <div className="container">
                <Link to="/contact-list">
                    or get back to contacts
                </Link>
            </div>

        </div>
    );

}

export default ContactForm