import React from 'react';
import './FirstSlide.css';
// import Framer Motion
import { motion } from "framer-motion"

function FirstSlide() {
    const line1 = "Julien Sacher"
    const line1 = "Web Developer"

    const sentence = {
        hidden: { opacity },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.5,
                staggerChildren: 0.08,
            },
        },
    }

    const letter = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
        },
    }
    return (
        <div>
            
        </div>
    )
}

export default FirstSlide
