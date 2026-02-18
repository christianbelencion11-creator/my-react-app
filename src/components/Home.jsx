import React from 'react'
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap'

function Home() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={10}>
          <Card className="profile-card border-0">
            <Card.Body className="p-4">
              <div className="text-center mb-4">
                <Badge bg="primary" className="px-4 py-2">WELCOME</Badge>
              </div>
              
              <h1 className="display-4 mb-4">
                👋 Hello, I'm <span className="text-primary">Christian</span>
              </h1>
              
              <Card.Text className="lead mb-5">
                An aspiring web developer passionate about creating amazing 
                web applications that make a difference.
              </Card.Text>

              <Row className="g-4 mb-5">
                <Col md={4}>
                  <div className="feature-box">
                    <span className="display-6 mb-3 d-block">🎯</span>
                    <h4>Goal</h4>
                    <p className="mb-0">Become a Full-Stack Developer</p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="feature-box">
                    <span className="display-6 mb-3 d-block">📚</span>
                    <h4>Education</h4>
                    <p className="mb-0">BSIT @ University of Cabuyao</p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="feature-box">
                    <span className="display-6 mb-3 d-block">💡</span>
                    <h4>Passion</h4>
                    <p className="mb-0">Building innovative solutions</p>
                  </div>
                </Col>
              </Row>

              <hr className="my-4" />
              
              <p className="text-muted fst-italic mb-4">
                "The only way to do great work is to love what you do."
              </p>
              
              <Button variant="primary" size="lg" href="#about" className="px-5">
                Explore My Profile
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Home