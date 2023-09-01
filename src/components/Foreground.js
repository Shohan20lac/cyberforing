import { React, useState } from 'react';
import TextPanel from './TextPanel'
import Image from './Image'

function Foreground (props) {

    return (
        <div className = "foreground">
            <TextPanel/>
            <Image 
                currentScreenIndex = {props.currentScreenIndex}
                setCurrentScreenIndex = {props.setCurrentScreenIndex}
            />
        </div>
    );
}

export default Foreground;