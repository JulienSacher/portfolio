import React from 'react'
import './SecondSlide.css';
import { Container, Row, Col } from 'react-bootstrap';

function SecondSlide() {
    return (
        <Container className="mt-4">
            <h2 className="aboutMe__title text-center pt-1 pb-3">About Me</h2>
            <div className="aboutMe__container"> 
                <Row className="d-flex align-items-center">
                    <Col sm={6}>
                        <p className="aboutMe__desc text-center pt-4 pl-5 pb-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at blandit augue. Vivamus in lectus scelerisque, aliquet diam eu, iaculis ipsum. Maecenas risus erat, malesuada at fermentum in, malesuada id erat. Duis varius lacinia lacus commodo rhoncus. Sed ornare non ligula sed tincidunt. Donec consectetur felis sed nunc rhoncus sodales.
                        <br/>
                        <br/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at blandit augue. Vivamus in lectus scelerisque, aliquet diam eu, iaculis ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at blandit augue. Vivamus in lectus scelerisque, aliquet diam eu, iaculis ipsum. 
                        </p> 
                    </Col>
                    <Col sm={6}> 
                        <h2 className="aboutMe__sub text-center pt-4">Languages & Frameworks</h2>
                        <div className="progress ml-auto mr-auto mb-2">
                            <div className="progress__value">
                                <p className="progress__p">HTML/CSS <span className="text-black float-right">80%</span></p>
                            </div>
                        </div>
                        <div className="progress m-auto mb-2">
                            <div className="progress__value">
                                <p className="progress__p">REACT JS <span className="text-black float-right">70%</span></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

        </Container>
    )
}


export default SecondSlide
