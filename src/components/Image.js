import { React, useState, useEffect } from 'react';
import dude0 from '../images/dude0.png'
import dude1 from '../images/dude1.png'
import dude2 from '../images/dude2.png'
import dude3 from '../images/dude3.png'
import dude4 from '../images/dude4.png'
import dude5 from '../images/dude5.png'
import dude6 from '../images/dude6.png'
import dudeB0 from '../images/dudeB0.png'

const dudes1 = [dude0, dude1, dude2, dude3, dude4, dude5, dude6]
const dudes2 = [dudeB0, dudeB0, dudeB0, dudeB0, dudeB0, dudeB0, dudeB0]

const screens = [
    {
        name: 'Risk Asssessment',
        images: dudes1,
    },
    {
        name: 'Vulnerabilitiy Assessment',
        images: dudes2,
    },
    {
        name: 'Penetration Testing',
        images: dudes1, // TODO: update images for this screen once received
    },
    {
        name: 'Cyber Threat Intelligence',
        images: dudes2, // TODO: update images for this screen once received
    },
    // Define more screens here as needed
];

function Image (props) {
    const [current, setCurrent] = useState (0);
    const [next,    setNext]    = useState (0);

    const [showCurrent,  setShowCurrent]  = useState (true);
    const [showNext, setShowNext] = useState(false);

    useEffect(() => {

        const currentScreenImages = screens[props.currentScreenIndex].images;
        const totalImages = currentScreenImages.length;

        let intervalDuration = 1000; // 2000ms interval duration
        let transitionDuration = 1000; // 1000ms transition duration
        const finalImageDuration = 3000;

        console.log("Component has mounted. current:", current, " next:", next);

        const interval = setInterval(() => {
            setShowCurrent(false); // Fading out current image

            setTimeout(() => {
                setShowNext(true); // Fading in next image
                setCurrent((current) => (current + 1) % currentScreenImages.length); // Update currentIndex
                setNext((next) => (next + 1) % currentScreenImages.length); // Update nextIndex

                if ((current + 1) % totalImages === 0) {
                    transitionDuration = finalImageDuration; // 3000ms for the final image
                } else {
                    transitionDuration = finalImageDuration; // Reset transition duration for other images
                }

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
                src={screens[props.currentScreenIndex].images[current]}
                alt={`dude${current}`}
                className={`image ${showCurrent? 'fadeIn' : ''}`}
            />
            <img
                src={screens[props.currentScreenIndex].images[next]}
                alt={`dude${next}`}
                className={`image ${showNext ? 'fadeIn':''}`}
            />
            
        </div>
    );
}

export default Image;



