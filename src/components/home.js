import React from 'react'
import kavion from "../images/kavion.jpg"
import kavion1 from "../images/kavion1.jpg"
import jaben from "../images/jaben.jpg"
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Container, Image } from "react-bootstrap";


export default function home() {
  return (
    <main className='main-container'>
      <Container>
        <Row className='px-4 my-5'>
          <Col sm={8}>
            <Image src={kavion} fluid rounded />
            <h1>My little genius Kavion Carter is why i wake up to do better.</h1>
          </Col>

          <Col sm={4}>
            <Image src={jaben} fluid rounded />
            <h2>I miss my big brother so much , he is another motivation for me to do better in this world</h2>
            <h2>. </h2>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
