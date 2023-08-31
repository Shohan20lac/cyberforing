import { React, useState } from 'react';

const cybersecServices = [
    "Risk Assessment",
    "Vulnertability Assessment",
    "Penetration Testing",
    "Cyber Threat Intelligence"
]

function Navbar (props) {

    return (
        <div className = "navbar">
            {cybersecServices.map((service, index) => (
                <button
                    key={index}
                    className={`navbutton${props.currentScreenIndex === index ? '-pressed': ''}`}
                    onClick = {
                        () => {
                            props.handleButtonClick(index)
                        }
                    }
                >
                    {service}
                </button>
            ))}
        </div>
    );
}

export default Navbar;