import React from 'react';
import './Footer.css';
import { Col, Container } from 'react-bootstrap';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Footer() {
    return (
        <div className="test2">
            <Container>
                <Col className="d-flex justify-content-center mt-4">
                <LinkedInIcon />
                <GitHubIcon />
                </Col>
            </Container>
            
        </div>
    )
}

export default Footer
