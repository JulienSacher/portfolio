import React from 'react';
import './Footer.css';
import { Col, Container, Span } from 'react-bootstrap';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Footer() {
    return (
        <div className="footer__container">
            <Container>
                <Col className="d-flex justify-content-center pt-5 pb-3">
                <LinkedInIcon className="mx-2" />
                <GitHubIcon className="mx-2" />
                </Col>
                <Col className="d-flex justify-content-center">
                    <Span></Span>
                </Col>
            </Container>
            
        </div>
    )
}

export default Footer
