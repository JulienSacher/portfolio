import React from 'react';
import './Footer.css';
import { Col, Container } from 'react-bootstrap';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Footer() {
    return (
        <div className="test2">
            <Container className="d-flex justify-content-center">
                <Col>
                <LinkedInIcon />
                <GitHubIcon />
                </Col>
            </Container>
            
        </div>
    )
}

export default Footer
