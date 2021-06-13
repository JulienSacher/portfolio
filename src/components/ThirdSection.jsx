import React from "react";
import "./ThirdSection.css";
import { Container, Row, Col, Figure } from "react-bootstrap";
import exotic from "../img/exotic-import.jpg";
import snack from "../img/snack-atlass.jpg";
import { useTranslation } from "react-i18next";

function ThirdSection() {
  const { t } = useTranslation();
  return (
    <Container className="thirdSlide__Container">
      <h2 className="myWork__title text-center pb-1">{t("work_title")}</h2>
      <Row className=" thirdSlide__imgContainer mt-4">
        <Col md={6}>
          <div className="thirdSlide__border">
            <Figure className="position-relative">
              <Figure.Image
                alt=""
                src={exotic}
                className="img-fluid thirdSlide__img"
              />

              <Figure.Caption className="text-center">
                <a href="#" className="thirdSlide__caption">
                  Exotic Import
                  <br />
                  ReactJS/NodeJS
                </a>
              </Figure.Caption>
            </Figure>
          </div>
        </Col>
        <Col md={6}>
          <div className="thirdSlide__border">
            <Figure className="position-relative">
              <Figure.Image
                alt=""
                src={snack}
                className="img-fluid thirdSlide__img"
              />
              <Figure.Caption className="text-center">
                <a href="#" className="thirdSlide__caption">
                  Snack Atlass
                  <br />
                  Html/Sass
                </a>
              </Figure.Caption>
            </Figure>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ThirdSection;
