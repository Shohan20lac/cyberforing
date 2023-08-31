import { React, useState, useEffect } from 'react';
import dude0 from '../images/dude0.png'
import dude1 from '../images/dude1.png'
import dude2 from '../images/dude2.png'
import dude3 from '../images/dude3.png'
import dude4 from '../images/dude4.png'
import dude5 from '../images/dude5.png'
import dude6 from '../images/dude6.png'
import dudeB0 from '../images/dudeB0.png'

const dudes = [
    dude0,
    dude1,
    dude2,
    dude3,
    dude4,
    dude5,
    dude6
]

function Image (props) {
    const [current, setCurrent] = useState (0);
    const [next,    setNext]    = useState (0);

    const [showCurrent,  setShowCurrent]  = useState (true);
    const [showNext,     setShowNext]     = useState (false);
    

    useEffect(() => {
        const intervalDuration = 2000; // 2000ms interval duration
        const transitionDuration = 1000; // 1000ms transition duration

        console.log("Component has mounted. current:", current, " next:", next);
        setTimeout(
            () => { },
            1000
        );

        const interval = setInterval(() => {
            setShowCurrent(false); // Fading out current image

            setTimeout(() => {
                setShowNext(true); // Fading in next image
                setCurrent((current) => (current + 1) % dudes.length); // Update currentIndex
                setNext   ((next)    => (next    + 1) % dudes.length); // Update nextIndex
            }, transitionDuration);
        }, intervalDuration);

        // Clean up the interval when the component unmounts
        return () => clearInterval(interval);
    }, []);


    return (
        <div className = "image-container">
            <div className ="image-border">
            </div>
            
            <img
                src={dudes[current]}
                alt={`dude${current}`}
                className={`image ${showCurrent? 'fadeIn' : ''}`}
            />
            <img
                src={dudes[next]}
                alt={`dude${next}`}
                className={`image ${showNext ? 'fadeIn':''}`}
            />
            
        </div>
    );
}

export default Image;



