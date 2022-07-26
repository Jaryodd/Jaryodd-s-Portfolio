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
            <Card.Header>Bach That Thang Up</Card.Header>
            <Card.Body>
              <Card.Title>Link to project</Card.Title>
              <Card.Text>
                This is a music app that my classmates and I made
                <Card.Link href="https://github.com/SabotMBT/ClassProject1">Bach That Thang Up</Card.Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card border="primary" style={{ width: '18rem' }}>
            <Card.Header>Weather App</Card.Header>
            <Card.Body>
              <Card.Title>Link to project</Card.Title>
              <Card.Text>
                This is a weather app that I made 
                <Card.Link href="https://github.com/Jaryodd/WeatherApp2">Weather App</Card.Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card border="primary" style={{ width: '18rem' }}>
            <Card.Header>Almost_Faim_ous</Card.Header>
            <Card.Body>
              <Card.Title>Almost_Faim_ous</Card.Title>
              <Card.Text>
                This is a messaging app that my classmates and I made
                <Card.Link href="https://github.com/ruxpin86/Almost-FAIM-ous">Almost_Faim_ous</Card.Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </main>
  )
}
