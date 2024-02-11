import React, { useContext, useState } from "react";
import "../../styles/home.css";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";



const ContactForm = () => {

    const navigate = useNavigate();


    const { actions } = useContext(Context);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        agenda_slug: "davidpardomartin-agenda",
    });


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("como son los datos?????", formData);
        actions.createContact(formData);
        navigate("/contact-list");
        actions.getContacts(formData)
    };



    return (
        <div>
            <div className="container d-flex justify-content-center">
                <h1>Add a new contact</h1>
            </div>

            <div className="container">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Full name"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="enter phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <div className="d-flex justify-content-center">
                        <Button type="submit" variant="primary">
                            Save
                        </Button>
                    </div>
                </Form>
            </div>

            <div className="container">
                <Link to="/contact-list">or get back to contacts</Link>
            </div>
        </div>
    );

}

export default ContactForm