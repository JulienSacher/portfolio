import React from 'react'
import './SecondSlide.css';
import { Container, Row, Col } from 'react-bootstrap';


function SecondSlide() {
    return (
        <Container className="mt-4">
            <div className="aboutMe__container">
                <p className="aboutMe__title">About Me</p>
                <Row>
                <Col sm={4}><p></p> </Col>
                <Col sm={8}> </Col>
                </Row>
            </div>

        </Container>
    )
}


export default SecondSlide
