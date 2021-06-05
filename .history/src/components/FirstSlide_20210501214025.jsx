import React from 'react';
import './FirstSlide.css';
// import Framer Motion
import { motion } from "framer-motion"
import { Row, Col, Container } from 'react-bootstrap';
import avatarDark from '../img/avatar-dark.png';


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
        <Container>
            <Row className="firstSlide__container d-flex align-items-center">
                <Col sm={4}>
                    <img className="firstSlide__img" src={avatarDark} alt=""/>
                </Col>

                <Col sm={8} className="d-flex justify-content-center pl-4">
                    <motion.h3
                        className="load-screen--message text-center"
                        variants={sentence}
                        initial="hidden"
                        animate="visible"
                    >
                        {line1.split("").map((char,index) => {
                            return (
                                <motion.span className="firstSlide__name" key={char + "-" + index} variants={letter}>
                                    {char}
                                </motion.span>
                            )
                        })}
                        <br/>
                        {line2.split("").map((char,index) => {
                            return (
                                <motion.span className="firstSlide__job" key={char + "-" + index} variants={letter}>
                                    {char}
                                </motion.span>
                            )
                        })}
                    </motion.h3>
                </Col>
            </Row>
        </Container>
    )
}

export default FirstSlide
