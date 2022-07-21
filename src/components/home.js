import React from 'react'


import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Container, Image } from "react-bootstrap";

export default function home() {
  return (
    <main>
      <Container>
        <Row className='px-5 my-5'>
          <Col sm={7}>
            <Image scr="https://pic" fluid />
           
          </Col>
          <Col sm={5}>sm=4</Col>
        </Row>
      </Container>
    </main>
  );
}
