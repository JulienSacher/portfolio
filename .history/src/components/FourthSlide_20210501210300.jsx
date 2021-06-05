import React from 'react';
import './FourthSlide.css';
import { Container, Col, Form, Button } from 'react-bootstrap';


function FourthSlide() {
    return (
        <Container>
            <h2 className="contactMe__title text-center mt-4 pb-3">Contact Me</h2>
            <h3 className="contactMe__subTitle text-center pb-3">HAVE A QUESTION OR WANT TO WORK TOGETHER ?</h3>
            <Col className="d-flex justify-content-center">
                <div className="contactMe__container">
                    <Form className="contactMe__formContainer ml-4 pt-4 pb-4">
                        <Form.Group>
                            <Form.Control placeholder="Name" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group className="contactMe__message">
                        <Form.Control as="textarea" rows={7} placeholder="Message" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            SEND
                        </Button>
                    </Form>
                </div>
            </Col>
        </Container>
    )
}

export default FourthSlide
