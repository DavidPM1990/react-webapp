import React from "react";

const ContactCard = ({ contact }) => {
    return (
        <div className="m-2">
            <div className="border d-flex flex-row" style={{ width: "100%", height: "12rem" }}>
                <div className="container mt-2 mb-2">
                    <img src={contact.profileImage} className="card-img-left rounded-circle w-25 h-100" alt="..." />
                </div>

                <div className="card-body">
                    <h5 className="card-title">{contact.full_name}</h5>
                    <p className="card-text">{contact.address}</p>
                    <p className="card-text">{contact.phone}</p>
                    <p className="card-text">{contact.email}</p>
                </div>
                <div className="d-flex flex-row h-25">
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;