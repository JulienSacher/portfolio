import React from "react";
import "./Portfolio.css";
import { Container, Row, Col, Figure } from "react-bootstrap";
import monster from "../img/monstercat-logo.jpg";
import studio from "../img/studio-logo.jpg";
import { useTranslation } from "react-i18next";

function Portfolio() {
  const { t } = useTranslation();
  return (
    <Container className="thirdSlide__Container">
      <h2 className="myWork__title text-center pb-1">{t("work_title")}</h2>
      <Row className=" thirdSlide__imgContainer mt-4 d-flex">
        <Col md={6}>
          <div className="thirdSlide__borderContainer">
            <div className="thirdSlide__border">
              <Figure className="position-relative">
                <Figure.Image
                  alt="movie image"
                  src={studio}
                  className="img-fluid thirdSlide__img"
                />

                <Figure.Caption className="text-center">
                  <a
                    href="https://studio-ghibli-anime-movies.netlify.app/"
                    target="_blank"
                    className="thirdSlide__caption"
                  >
                    Studio Ghibli
                    <br />
                    ReactJS
                  </a>
                </Figure.Caption>
              </Figure>
            </div>
          </div>
        </Col>
        <Col md={6} className="thirdSlide__imgMargin">
          <div className="thirdSlide__borderContainer">
            <div className="thirdSlide__border">
              <Figure className="position-relative">
                <Figure.Image
                  alt=""
                  src={monster}
                  className="img-fluid thirdSlide__img"
                />
                <Figure.Caption className="text-center">
                  <a
                    href="https://monstercat-rebuild.netlify.app/"
                    target="_blank"
                    className="thirdSlide__caption"
                  >
                    Monstercat Rebuild
                    <br />
                    ReactJS/Sass
                  </a>
                </Figure.Caption>
              </Figure>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Portfolio;
