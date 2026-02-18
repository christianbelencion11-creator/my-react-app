import React from 'react'
import { Container, Row, Col, Card, Badge } from 'react-bootstrap'

function About() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={10}>
          <Card className="profile-card border-0">
            <Card.Body className="p-4">
              <div className="text-center mb-4">
                <Badge bg="primary" className="px-4 py-2">ABOUT ME</Badge>
              </div>
              
              <h2 className="section-title mb-5">Get to Know Me</h2>
              
              <Row>
                <Col md={5} className="text-center mb-4 mb-md-0">
                  <div className="profile-image-placeholder">
                    👨‍💻
                  </div>
                  <h3 className="h4 mt-3">Christian B.</h3>
                  <p className="text-muted">BSIT Student</p>
                </Col>
                
                <Col md={7}>
                  <h5 className="text-primary mb-3">📖 My Story</h5>
                  <p className="mb-4">
                    I'm a passionate IT student at the University of Cabuyao, 
                    diving deep into the world of web development. I love turning 
                    ideas into reality through code.
                  </p>

                  <h5 className="text-primary mb-3">🎓 Education</h5>
                  <p className="mb-2"><strong>University of Cabuyao</strong> - BSIT (2023-Present)</p>
                  <p className="mb-4"><strong>Cabuyao Integrated NHS</strong> - STEM (2017-2023)</p>
                </Col>
              </Row>

              <h5 className="text-primary mb-4 text-center">My Hobbies & Interests</h5>
              <Row className="g-3">
                <Col xs={6} md={4} lg={2}>
                  <div className="hobby-item">
                    <span className="fs-1 d-block">💻</span>
                    <small>Coding</small>
                  </div>
                </Col>
                <Col xs={6} md={4} lg={2}>
                  <div className="hobby-item">
                    <span className="fs-1 d-block">📚</span>
                    <small>Reading</small>
                  </div>
                </Col>
                <Col xs={6} md={4} lg={2}>
                  <div className="hobby-item">
                    <span className="fs-1 d-block">🎮</span>
                    <small>Gaming</small>
                  </div>
                </Col>
                <Col xs={6} md={4} lg={2}>
                  <div className="hobby-item">
                    <span className="fs-1 d-block">🎵</span>
                    <small>Music</small>
                  </div>
                </Col>
                <Col xs={6} md={4} lg={2}>
                  <div className="hobby-item">
                    <span className="fs-1 d-block">🏀</span>
                    <small>Basketball</small>
                  </div>
                </Col>
                <Col xs={6} md={4} lg={2}>
                  <div className="hobby-item">
                    <span className="fs-1 d-block">✈️</span>
                    <small>Travel</small>
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