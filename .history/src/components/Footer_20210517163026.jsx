import React from 'react';
import './Footer.css';
import { Col, Container } from 'react-bootstrap';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Footer() {
    return (
        <div className="footer__container">
            <Container>
                <Col className="d-flex justify-content-center pt-5">
                <LinkedInIcon className="mx-1" />
                <GitHubIcon className="mx-1" />
                </Col>
            </Container>
            
        </div>
    )
}

export default Footer
