import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import ContactCard from "../component/contactCard";
import { Context } from "../store/appContext";

const ContactList = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getContacts();
    }, []);

    return (
        <div>
            <div className="d-flex justify-content-end m-2 pb-2">
                <Link to="/form">
                    <button className="btn btn-success btn-lg" href="#" role="button">
                        Add new contact
                    </button>
                </Link>
            </div>

            <div>
                {store.contacts.map(contact => (
                    <ContactCard key={contact.id} contact={contact} />
                ))}
            </div>
        </div>
    );
};

export default ContactList;