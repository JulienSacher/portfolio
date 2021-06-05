import React from 'react';
import './ThirdSlide.css';
import { Container, Row, Col, Figure } from 'react-bootstrap';
import exotic from '../img/exotic-import.jpg';
import snack from '../img/snack-atlass.jpg';


function ThirdSlide() {
    return (
        <Container className="pt-4 thirdSlide__Container">
            <h2 className="myWork__title text-center pb-3">My Work</h2>
            <Row className=" thirdSlide__imgContainer mt-5">
                <Col md={6}>
                    <div className="thirdSlide__border">
                        <Figure className="position-relative">
                            <Figure.Image
                                alt=""
                                src={exotic}
                                className="img-fluid thirdSlide__img"
                            />
                            
                            <Figure.Caption className="text-center">
                            <a href="" className="thirdSlide__caption">
                                Exotic Import
                                <br/>
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
                            <Figure.Caption className="text-center thirdSlide__caption">
                                Snack Atlass
                                <br/>
                                Html/Sass
                            </Figure.Caption>
                        </Figure>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ThirdSlide
