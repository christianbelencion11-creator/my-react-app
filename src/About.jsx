import React from 'react'
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap'

function About() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="profile-card">
            <Card.Body>
              <h2 className="section-title">About Me</h2>
              
              <h5 className="mt-4">Background</h5>
              <p>
                I'm a passionate student at the University of Cabuyao, currently 
                taking up Bachelor of Science in Information Technology. I love 
                learning new technologies and building web applications.
              </p>

              <h5 className="mt-4">Education</h5>
              <ListGroup variant="flush" className="mb-3">
                <ListGroup.Item>🎓 University of Cabuyao - BS Information Technology (2023-Present)</ListGroup.Item>
                <ListGroup.Item>🏫 Cabuyao Integrated National High School - STEM (2017-2023)</ListGroup.Item>
              </ListGroup>

              <h5 className="mt-4">Hobbies & Interests</h5>
              <ListGroup variant="flush">
                <ListGroup.Item>💻 Coding and building web apps</ListGroup.Item>
                <ListGroup.Item>📚 Reading tech blogs and tutorials</ListGroup.Item>
                <ListGroup.Item>🎮 Playing video games</ListGroup.Item>
                <ListGroup.Item>🎵 Listening to music</ListGroup.Item>
                <ListGroup.Item>🏀 Playing basketball</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default About