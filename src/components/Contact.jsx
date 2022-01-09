import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { Container, Col, Form, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

function Contact() {
  const { t } = useTranslation();

  const [result, showResult] = useState(false);

  const Result = () => {
    return <p className="text-center form__message">{t("form_message")}</p>;
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mk2jdkc",
        "template_r71uqmr",
        form.current,
        "user_j6xUNfYpB2zJIEi7BRkMa"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
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
            className="contactMe__formContainer"
            ref={form}
            onSubmit={sendEmail}
          >
            <Form.Group>
              <Form.Control
                type="text"
                name="fullName"
                placeholder={i18n.t("name")}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </Form.Group>
            <Form.Group className="contactMe__message">
              <Form.Control
                as="textarea"
                rows={6}
                type="text"
                name="message"
                placeholder="Message"
                required
              />
            </Form.Group>
            <div className="d-flex justify-content-end">
              <Button variant="primary" type="submit" value="Send">
                {t("send")}
              </Button>
            </div>
            {result ? <Result /> : null}
          </Form>
        </div>
      </Col>
    </Container>
  );
}

export default Contact;
