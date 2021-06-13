import React from "react";
import "./FourthSection.css";
import { Container, Col, Form, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

function FourthSection() {
  const { t } = useTranslation();
  return (
    <Container className="fourthSection__container">
      <h2 className="contactMe__title text-center pb-1">
        {t("contact_title")}
      </h2>
      <h3 className="contactMe__subTitle text-center pb-2">
        {t("contact_sub")}
      </h3>
      <Col className="d-flex justify-content-center">
        <div className="contactMe__container">
          <Form className="contactMe__formContainer">
            <Form.Group>
              <Form.Control placeholder={i18n.t("name")} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group className="contactMe__message">
              <Form.Control as="textarea" rows={6} placeholder="Message" />
            </Form.Group>
            <div className="d-flex justify-content-end">
              <Button variant="primary" type="submit">
                {t("send")}
              </Button>
            </div>
          </Form>
        </div>
      </Col>
    </Container>
  );
}

export default FourthSection;
