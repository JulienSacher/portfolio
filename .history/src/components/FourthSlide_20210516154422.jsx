import React from 'react';
import './FourthSlide.css';
import { Container, Col, Form, Button } from 'react-bootstrap';


function FourthSlide() {
    return (
        <Container className="fourthSection__container pt-4">
            <h2 className="contactMe__title text-center pb-3">Contact Me</h2>
            <h3 className="contactMe__subTitle text-center pb-3">Have A Question Or Want To Work Together ?</h3>
            <Col className="d-flex justify-content-center">
                <div className="contactMe__container">
                    <Form className="contactMe__formContainer">
                        <Form.Group>
                            <Form.Control placeholder="Name" value=""/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Email" value="" />
                        </Form.Group>
                        <Form.Group className="contactMe__message">
                        <Form.Control as="textarea" rows={7} placeholder="Message" value="" />
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
