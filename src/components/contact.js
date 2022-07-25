import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';

export default function contact() {
  return (
    <main className='contacts'>
      <Row>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>GitHub</Card.Title>
              <Card.Text>
                Below is the link to my GitHub Repo
              </Card.Text>
              <Button variant="outline-primary">GitHub</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Linkedin</Card.Title>
              <Card.Text>
                Below is the link to my Linkedin
              </Card.Text>
              <Button variant="outline-primary">Linkedin</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Email</Card.Title>
              <Card.Text>
                Below is the link to my email.
              </Card.Text>
              <Button variant="outline-primary">Email</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </main>
  );
}
