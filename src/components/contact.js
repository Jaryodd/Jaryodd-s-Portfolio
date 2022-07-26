import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import driving from '../images/driving.jpg';
import me1 from '../images/me1.jpg'
import me2 from '../images/me2.jpg'

export default function contact() {
  return (
    <main className='contacts'>
      <Row>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={driving} />
            <Card.Body>
              <Card.Title>GitHub</Card.Title>
              <Card.Text>
                Below is the link to my GitHub Repo
              </Card.Text>
              <Button href="https://github.com/Jaryodd" variant="outline-primary">GitHub</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={me1} />
            <Card.Body>
              <Card.Title>Linkedin</Card.Title>
              <Card.Text>
                Below is the link to my Linkedin
              </Card.Text>
              <Button href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BYAbcNkGkT1%2Brn6FDft0i%2FQ%3D%3D" variant="outline-primary">Linkedin</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={me2} />
            <Card.Body>
              <Card.Title>Email</Card.Title>
              <Card.Text>
                Below is the link to my email.
                jaryodd@gmail
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </main>
  );
}
