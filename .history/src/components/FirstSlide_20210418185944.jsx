import React from 'react';
import './FirstSlide.css';

function FirstSlide() {
    const props = useSpring({
        opacity: 1,
        from: { opacity: 0 },
      })
    return (
        <div>
            <animated.h1 style={props}>hello</animated.h1>
        </div>
    )
}

export default FirstSlide
