import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import ContactCard from "../component/contactCard";


const ContactList = () => {
    return (

        <div className="">

            <div className="d-flex justify-content-end m-2 pb-2">

                <Link to="/form">
                    <button className="btn btn-success btn-lg" href="#" role="button">
                        Add new contact
                    </button>
                </Link>

            </div>

            <div>
                <ContactCard />
                <ContactCard />
                <ContactCard />
                <ContactCard />
                <ContactCard />
            </div>

        </div>

    )
}

export default ContactList