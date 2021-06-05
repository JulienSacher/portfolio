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
                    <Form className="contactMe__formContainer m-auto pt-5 pb-5">
                        <Form.Group>
                            <Form.Control placeholder="Name" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control placeholder="Message" />
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
