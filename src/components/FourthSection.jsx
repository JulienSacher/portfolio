import React, { useState } from "react";
import "./FourthSection.css";
import { Container, Col, Form, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

function FourthSection() {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const encode = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((k) => {
      formData.append(k, data[k]);
    });
    return formData;
  };

  const handleSubmit = (e) => {
    const data = { "form-name": "contact", name, email, message };

    fetch("/", {
      method: "POST",
      body: encode(data),
    })
      .then(() => setStatus(i18n.t("form_message")))
      .catch((error) => setStatus("form_failed"));

    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      return setName(value);
    }
    if (name === "email") {
      return setEmail(value);
    }
    if (name === "message") {
      return setMessage(value);
    }
  };
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
          <Form
            onSubmit={handleSubmit}
            name="contactform"
            className="contactMe__formContainer"
          >
            <Form.Group>
              <Form.Control
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                placeholder={i18n.t("name")}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Email"
              />
            </Form.Group>
            <Form.Group className="contactMe__message">
              <Form.Control
                as="textarea"
                rows={6}
                type="text"
                value={message}
                onChange={handleChange}
                name="message"
                placeholder="Message"
              />
            </Form.Group>
            <div className="d-flex justify-content-end">
              <Button variant="primary" type="submit">
                {t("send")}
              </Button>
            </div>
            <h3>{status}</h3>
          </Form>
        </div>
      </Col>
    </Container>
  );
}

export default FourthSection;
