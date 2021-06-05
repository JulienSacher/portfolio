import React from 'react';
import './FourthSlide.css';
import { Container, Col } from 'react-bootstrap';


function FourthSlide() {
    return (
        <Container>
            <h2 className="contactMe__title text-center mt-4 pb-3">Contact Me</h2>
            <Col className="d-flex justify-content-center">
            <div className="contactMe__container">
                <h3 className="contactMe__subTitle text-center pt-4 pb-3">HAVE A QUESTION OR WANT TO WORK TOGETHER ?</h3>
            </div>
            </Col>
        </Container>
    )
}

export default FourthSlide
