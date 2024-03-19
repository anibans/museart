import React from 'react';
import { ParallaxProvider, useParallax } from 'react-scroll-parallax';


const ScrollEffect = () => {
    const parallax = useParallax({
        rotateY: [0, 360]
    })

    return (
      
            <div className="container-body">
                <div ref={parallax.ref} className="spinner"></div>
            </div>
      
    )
};

export default ScrollEffect;