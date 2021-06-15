import React from "react";
import "./SecondSection.css";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function SecondSection() {
  const { t } = useTranslation();
  return (
    <Container className="aboutMe__height">
      <div>
        <h2 className="aboutMe__title text-center pb-1">{t("about_title")}</h2>
      </div>
      <div className="aboutMe__container">
        <Row className="d-flex align-items-center aboutMe__border">
          <Col sm={6}>
            <p className="aboutMe__desc text-center pt-4 pb-2">
              {t("desc_first_part")}
              <br />
              <br />
              {t("desc_second_part")}
            </p>
          </Col>
          <Col sm={6}>
            <h2 className="aboutMe__sub text-center pt-3">{t("desc_sub")}</h2>
            <div className="progress ml-auto mr-auto mb-3">
              <div className="progress__value">
                <p className="progress__p">HTML/CSS</p>
              </div>
            </div>
            <div className="progress ml-auto mr-auto mb-3">
              <div className="progress__value2">
                <p className="progress__p">REACT JS</p>
              </div>
            </div>
            <div className="progress ml-auto mr-auto mb-3">
              <div className="progress__value3">
                <p className="progress__p">REACT NATIVE</p>
              </div>
            </div>
            <div className="progress ml-auto mr-auto mb-3">
              <div className="progress__value4">
                <p className="progress__p">BOOTSTRAP</p>
              </div>
            </div>
            <div className="progress ml-auto mr-auto mb-3">
              <div className="progress__value5">
                <p className="progress__p">JAVASCRIPT</p>
              </div>
            </div>
            <div className="progress ml-auto mr-auto mb-3">
              <div className="progress__value6">
                <p className="progress__p">WORDPRESS</p>
              </div>
            </div>
            <div className="progress ml-auto mr-auto mb-3">
              <div className="progress__value7">
                <p className="progress__p">SASS</p>
              </div>
            </div>
            <div className="progress ml-auto mr-auto mb-3">
              <div className="progress__value8">
                <p className="progress__p">VUE JS</p>
              </div>
            </div>
            <div className="progress ml-auto mr-auto">
              <div className="progress__value9">
                <p className="progress__p">PYTHON</p>
              </div>
            </div>
          </Col>
        </Row>
        </div>
    </Container>
  );
}

export default SecondSection;
