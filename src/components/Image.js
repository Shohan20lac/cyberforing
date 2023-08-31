import { React, useState } from 'react';
import dude0 from '../images/dude0.png'
import dude1 from '../images/dude1.png'
import dude2 from '../images/dude2.png'
import dude3 from '../images/dude3.png'
import dude4 from '../images/dude4.png'
import dude5 from '../images/dude5.png'
import dude6 from '../images/dude6.png'
import dudeB0 from '../images/dudeB0.png'

const dudes = [
    dude6,
    dudeB0,
    dude6,
    dudeB0,
    dude6,
    dudeB0,
]

function showImages (currentScreenIndex) {
    console.log ("show images");
    
    return (
        <img src={dudes[currentScreenIndex]} alt={dude0} className="image"/>
    )
}

function Image (props) {

    return (
        <div className = "image-container">
            <div className ="image-border">
            </div>
            {showImages(props.currentScreenIndex)}
        </div>
    );
}

export default Image;