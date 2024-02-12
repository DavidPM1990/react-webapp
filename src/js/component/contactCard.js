import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLocationDot,
    faPhone,
    faEnvelope,
    faPencilAlt,
    faTrash,
} from "@fortawesome/free-solid-svg-icons";

import ModalDelete from "./modalDelete";

import ModalForm from "./modalForm";

const ContactCard = ({ contact }) => {

    const { actions } = useContext(Context);

    const [showModal, setShowModal] = useState(false);
    const [contactIdToDelete, setContactIdToDelete] = useState(null);
    const [show, setShow] = useState(false);
    const [selectedContact, setSelectedContact] = useState(null);
    const [newContact, setNewContact] = useState({
        full_name: "",
        email: "",
        phone: "",
        address: "",

    });

    console.log("Objeto contacto y sus propiedades --->", contact)

    useEffect(() => {
        if (selectedContact) {
            setNewContact({
                full_name: selectedContact.full_name,
                email: selectedContact.email,
                phone: selectedContact.phone,
                address: selectedContact.address,
                img: selectedContact.img,
            });
        }
    }, [selectedContact]);


    const handleShow = () => {
        setSelectedContact(contact);
        setShow(true);
    };

    const handleClose = () => setShow(false);

    const handleChange = (e) => {
        setNewContact({ ...newContact, [e.target.name]: e.target.value });
    };

    const handleSave = () => {

        console.log("ID del contacto:", contact.id);

        console.log("Full name:", newContact.full_name);

        actions
            .updateContact(newContact, contact.id)
            .then(() => {
                handleClose();
                actions.getContacts();

            })
            .catch((error) => {
                console.error("Error updating contact:", error);
            });
    };

    const handleDeleteContact = (id) => {
        setContactIdToDelete(id);
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
        setContactIdToDelete(null);
    };

    const handleDeleteConfirmation = () => {
        if (contactIdToDelete !== null) {
            actions.deleteContact(contactIdToDelete);
            handleModalClose();
        }
    };

    return (

        <div className="container d-flex justify-content-center align-items-center ">
            <div className="card w-100 h-20" style={{ height: "auto" }}>
                <div className="row no-gutters">
                    <div className="col-12 col-md-3">
                        <img
                            src="https://media.licdn.com/dms/image/D4D03AQF-pjuxDYqkYw/profile-displayphoto-shrink_400_400/0/1663532698544?e=1713398400&v=beta&t=Ra67bocf8sHgITAANXCvRG73ljpqVEK3rFIJhGyvrvU"
                            className="mt-3 ms-5 pt-2 pb-2 ps-4 pe-4 rounded-circle"
                            style={{ height: "150px", width: "75%" }}
                            alt="alternativeImage"
                        />
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="card-body">
                            <h5 className="card-title pb-3 ">{contact.full_name}</h5>
                            <p className="card-text text-secondary fw-bolder">
                                <FontAwesomeIcon
                                    icon={faLocationDot}
                                    size="lg"
                                    className="pe-4"
                                />
                                {contact.address}
                            </p>
                            <p className="card-text text-secondary fw-bolder">
                                <FontAwesomeIcon icon={faPhone} size="lg" className="pe-4" />
                                {contact.phone}
                            </p>
                            <p className="card-text text-secondary fw-bolder">
                                <FontAwesomeIcon icon={faEnvelope} size="lg" className="pe-4" />
                                {contact.email}
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 p-3 d-flex flex-column justify-content-between">
                        <div className="d-flex justify-content-center mb-5 pb-5">
                            <button className="btn pe-5"
                                onClick={handleShow}
                            >
                                <FontAwesomeIcon icon={faPencilAlt} size="lg" />
                            </button>
                            <button
                                href="#"
                                className="btn ps-3"
                                onClick={() => handleDeleteContact(contact.id)}
                            >
                                <FontAwesomeIcon icon={faTrash} size="lg" />
                            </button>
                        </div>
                    </div>
                </div>
                <ModalForm
                    show={show}
                    handleClose={handleClose}
                    contact={newContact}
                    handleChange={handleChange}
                    handleSave={handleSave}
                />
            </div>
            {showModal && (
                <ModalDelete
                    showModal={showModal}
                    onClose={handleModalClose}
                    onDeleteConfirmation={handleDeleteConfirmation}
                />
            )}
        </div>
    );
};

export default ContactCard;