import React from 'react';
import './FourthSlide.css';
import { Container, Col, Form, Button } from 'react-bootstrap';


function FourthSlide() {
    return (
        <Container className="fourthSection__container">
            <h2 className="contactMe__title text-center mt-5 pb-3">Contact Me</h2>
            <h3 className="contactMe__subTitle text-center pb-3">Have A Question Or Want To Work Together ?</h3>
            <Col className="d-flex justify-content-center">
                <div className="contactMe__container">
                    <Form className="contactMe__formContainer m-auto pt-5 pb-5">
                        <Form.Group>
                            <Form.Control placeholder="Name" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group className="contactMe__message">
                        <Form.Control as="textarea" rows={7} placeholder="Message" />
                        </Form.Group>
                        <div className="d-flex justify-content-end">
                            <Button variant="primary" type="submit">
                                SEND
                            </Button>
                        </div>
                    </Form>
                </div>
            </Col>
        </Container>
    )
}

export default FourthSlide
