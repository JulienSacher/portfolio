import React from 'react';
import './FirstSlide.css';
// import Framer Motion
import { motion } from "framer-motion"

function FirstSlide() {
    const line1 = "Julien Sacher"
    const line2 = "Web Developer"

    const sentence = {
        hidden: { opacity: 1 },
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
            <motion.h3
                className="load-screen--message"
                variants={sentence}
                initial="hidden"
                animate="visible"
            >
                {line1.split("").map((char,index) => {
                    return (
                        <motion.span key={char + "-" + index} variants={letter}>
                            {char}
                        </motion.span>
                    )
                })}
                <br/>
                {line2.split("").map((char,index) => {
                    return (
                        <motion.span key={char + "-" + index} variants={letter}>
                            {char}
                        </motion.span>
                    )
                })}

            </motion.h3>
        </div>
    )
}

export default FirstSlide
