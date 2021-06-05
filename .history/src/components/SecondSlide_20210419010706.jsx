import React from 'react'
import './SecondSlide.css';
import { Container, Row, Col, Span } from 'react-bootstrap';


function SecondSlide() {
    return (
        <Container className="mt-4">
            <div className="aboutMe__container">
                <Span>About Me</Span>
                <Row>
                <Col sm={4}><p></p> </Col>
                <Col sm={8}> </Col>
                </Row>
            </div>

        </Container>
    )
}


export default SecondSlide
