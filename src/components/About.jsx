import React from 'react'
import { Container, Row, Col, Card, ListGroup, Badge } from 'react-bootstrap'

function About() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={10}>
          <Card className="profile-card border-0">
            <Card.Body className="p-4">
              <div className="text-center mb-4">
                <Badge bg="primary" className="px-3 py-2">About Me</Badge>
              </div>
              
              <h2 className="section-title text-center mb-4">Get to Know Me</h2>
              
              <Row>
                <Col md={5} className="text-center mb-4">
                  <div className="profile-image-placeholder p-4">
                    <span className="display-1">👨‍💻</span>
                  </div>
                  <h3 className="h4 mt-3">Christian B.</h3>
                  <p className="text-muted">BSIT Student @ University of Cabuyao</p>
                </Col>
                
                <Col md={7}>
                  <h5 className="text-primary">📖 Background</h5>
                  <p>
                    I'm a passionate student at the University of Cabuyao, currently 
                    taking up Bachelor of Science in Information Technology. I love 
                    learning new technologies and building web applications that solve 
                    real-world problems.
                  </p>

                  <h5 className="text-primary mt-4">🎓 Education</h5>
                  <ListGroup variant="flush" className="mb-3">
                    <ListGroup.Item className="ps-0">
                      <span className="fw-bold">University of Cabuyao</span> - BS Information Technology (2023-Present)
                    </ListGroup.Item>
                    <ListGroup.Item className="ps-0">
                      <span className="fw-bold">Cabuyao Integrated National High School</span> - STEM (2017-2023)
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>

              <h5 className="text-primary mt-4">🎯 Hobbies & Interests</h5>
              <Row className="g-3 mt-2">
                <Col xs={6} md={4}>
                  <div className="hobby-item p-3 text-center">
                    <span className="d-block fs-2">💻</span>
                    <small>Coding</small>
                  </div>
                </Col>
                <Col xs={6} md={4}>
                  <div className="hobby-item p-3 text-center">
                    <span className="d-block fs-2">📚</span>
                    <small>Reading</small>
                  </div>
                </Col>
                <Col xs={6} md={4}>
                  <div className="hobby-item p-3 text-center">
                    <span className="d-block fs-2">🎮</span>
                    <small>Gaming</small>
                  </div>
                </Col>
                <Col xs={6} md={4}>
                  <div className="hobby-item p-3 text-center">
                    <span className="d-block fs-2">🎵</span>
                    <small>Music</small>
                  </div>
                </Col>
                <Col xs={6} md={4}>
                  <div className="hobby-item p-3 text-center">
                    <span className="d-block fs-2">🏀</span>
                    <small>Basketball</small>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default About