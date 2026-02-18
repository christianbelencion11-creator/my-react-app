import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function SubmissionSuccess({ formData }) {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="profile-card text-center">
            <Card.Body>
              <div className="mb-4">
                <span style={{ fontSize: '4rem' }}>✅</span>
              </div>
              
              <h2 className="text-success mb-4">Thank You!</h2>
              
              <Card.Text className="lead mb-4">
                Thank you, <strong>{formData.name}</strong>! Your message has been sent.
              </Card.Text>

              <Card className="bg-light mb-4">
                <Card.Body>
                  <h5>Submitted Details:</h5>
                  <p><strong>Name:</strong> {formData.name}</p>
                  <p><strong>Email:</strong> {formData.email}</p>
                  <p><strong>Message:</strong> {formData.message}</p>
                </Card.Body>
              </Card>

              <Button as={Link} to="/" variant="primary">
                Back to Home
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default SubmissionSuccess