import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLocationArrow,
    faPhone,
    faEnvelope,
    faPencilAlt,
    faTrash,
} from "@fortawesome/free-solid-svg-icons";

import ModalDelete from "./modalDelete";

const ContactCard = ({ contact }) => {

    const [showModal, setShowModal] = useState(false);
    const [contactIdToDelete, setContactIdToDelete] = useState(null);

    const { store, actions } = useContext(Context);



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
                            src={contact.profileImage}
                            className="ps-5 p-3 rounded-circle"
                            style={{ height: "200px", width: "100%" }}
                            alt="..."
                        />
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="card-body">
                            <h5 className="card-title pb-3 ">{contact.full_name}</h5>
                            <p className="card-text text-secondary fw-bolder">
                                <FontAwesomeIcon
                                    icon={faLocationArrow}
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
                        <div></div>
                        <div className="d-flex justify-content-center">
                            <button className="btn pe-5"
                                onClick={() => actions.setSelectedContact(contact)}
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