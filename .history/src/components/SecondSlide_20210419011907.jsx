import React from 'react'
import './SecondSlide.css';
import { Container, Row, Col } from 'react-bootstrap';


function SecondSlide() {
    return (
        <Container className="mt-4">
            <p className="aboutMe__title text-center pt-1 pb-1">About Me</p>
            <div className="aboutMe__container">
                
                <Row>
                <Col sm={6}><p className="aboutMe__desc text-center pt-4 pl-5 pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at blandit augue. Vivamus in lectus scelerisque, aliquet diam eu, iaculis ipsum. Maecenas risus erat, malesuada at fermentum in, malesuada id erat. Duis varius lacinia lacus commodo rhoncus. Sed ornare non ligula sed tincidunt. Donec consectetur felis sed nunc rhoncus sodales.
                            <br/>
                            <br/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at blandit augue. Vivamus in lectus scelerisque, aliquet diam eu, iaculis ipsum. </p> </Col>
                <Col sm={6}> </Col>
                </Row>
            </div>

        </Container>
    )
}


export default SecondSlide
