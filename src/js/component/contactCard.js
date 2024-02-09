import React from "react";


const ContactCard = () => {
    return (

        <div className="m-2">
            <div className="border d-flex flex-row" style={{ width: "100%", height: "10rem" }}>
                <div className="container mt-2 mb-2">
                    <img src="https://media.licdn.com/dms/image/D4D03AQF-pjuxDYqkYw/profile-displayphoto-shrink_400_400/0/1663532698544?e=1712793600&v=beta&t=SJyKLzzBaW71ANw28Ysm7O5Twiw1zFKQxa6NBi_wbiM" className="card-img-left rounded-circle w-25 h-100" alt="..." />
                </div>

                <div className="card-body">
                    <h5 className="card-title">David Pardo</h5>
                    <p className="card-text">Tietar 5</p>
                    <p className="card-text">618303391</p>
                    <p className="card-text">davidpardomartin@gmail.com</p>
                </div>
                <div className="d-flex flex-row h-25">
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>

            </div>
        </div>

    );
}

export default ContactCard;

