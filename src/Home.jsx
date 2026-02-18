import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

function Home() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="profile-card text-center">
            <Card.Body>
              <h1 className="display-4 mb-4">Welcome to My Profile! 👋</h1>
              <Card.Text className="lead">
                Hi! I'm Christian, an aspiring web developer passionate about creating 
                amazing web applications. My goal is to become a full-stack developer 
                and build solutions that make a difference in people's lives.
              </Card.Text>
              <hr className="my-4" />
              <p>
                I'm currently studying at the University of Cabuyao, taking up 
                Application Development and Emerging Technologies.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Home