import React from "react";
import "./Footer.css";
import { Col, Container } from "react-bootstrap";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

function Footer() {
  return (
    <div className="footer__container">
      <Container>
        <Col className="d-flex justify-content-center pt-5 pb-2">
          <a href="https://www.linkedin.com/in/julien-sacher/" target="_blank" rel="noreferrer">
            <LinkedInIcon className="mx-2" />
          </a>
          <a href="https://github.com/JulienSacher" target="_blank"rel="noreferrer">
            <GitHubIcon className="mx-2" />
          </a>
        </Col>
        <Col className="d-flex justify-content-center pb-5">
          <span className="footer__copyright">Julien Sacher © 2021</span>
        </Col>
      </Container>
    </div>
  );
}

export default Footer;
