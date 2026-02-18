import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

function Home() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={10}>
          {/* Hero Section */}
          <Card className="profile-card text-center border-0">
            <Card.Body className="p-5">
              <div className="mb-4">
                <span className="display-1">👋</span>
              </div>
              <h1 className="display-3 mb-4 text-primary fw-bold">Welcome to My Profile!</h1>
              <Card.Text className="lead mb-4">
                Hi! I'm <span className="text-primary fw-bold">Christian</span>, an aspiring web developer passionate about creating 
                amazing web applications.
              </Card.Text>
              
              <Row className="mt-5">
                <Col md={4} className="mb-3">
                  <div className="feature-box p-3">
                    <h3 className="h5 text-primary">🎯 Career Goal</h3>
                    <p className="small">To become a full-stack developer and build solutions that make a difference</p>
                  </div>
                </Col>
                <Col md={4} className="mb-3">
                  <div className="feature-box p-3">
                    <h3 className="h5 text-primary">📚 Currently</h3>
                    <p className="small">Studying at University of Cabuyao - Application Development</p>
                  </div>
                </Col>
                <Col md={4} className="mb-3">
                  <div className="feature-box p-3">
                    <h3 className="h5 text-primary">🚀 Passion</h3>
                    <p className="small">Building innovative web solutions that help people</p>
                  </div>
                </Col>
              </Row>

              <hr className="my-4" />
              
              <p className="text-muted">
                "The only way to do great work is to love what you do." - Steve Jobs
              </p>
              
              <Button variant="primary" className="mt-3 px-4" href="#about">
                Learn More About Me
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Home