import React from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'
import coloring  from "../images/coloring.jpg"

export default function portfolio() {
  return (
    <main className='main'> 
      <Container>
        <Row className="px-4 my-5">
          <Col sm={7}>
            <Image src="{coloring}" fluid rounded />
          </Col>
          <Col sm={5}>sm=4</Col>
        </Row>
      </Container>
    </main>
  )
}
