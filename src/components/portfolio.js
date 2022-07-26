import React from 'react'
import { Col, Container, Row, Image,Card } from 'react-bootstrap'
import coloring from "../images/coloring.jpg"
import me_and_son from "../images/me and son.jpg"

export default function portfolio() {
  return (
    <main className='main'> 
      <Container>
        <Row className="px-4 my-5">
          <Col sm={7}>
            <Image src={me_and_son} fluid rounded />
          </Col>
          <Col sm={5}>sm=4</Col>
        </Row>
      </Container>
      <Row>
        <Col>
          <Card border="primary" style={{ width: '18rem' }}>
            <Card.Header>Almost_Faim_ous</Card.Header>
            <Card.Body>
              <Card.Title>Link to project</Card.Title>
              <Card.Text>
                This is a music app that my classmates and I made
                <Card.Link href="https://github.com/ruxpin86/Almost-FAIM-ous">Almost_Faim_ous</Card.Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card border="primary" style={{ width: '18rem' }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Primary Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                <Card.Link href="#">Card Link</Card.Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card border="primary" style={{ width: '18rem' }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Primary Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                <Card.Link href="#">Card Link</Card.Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </main>
  )
}
