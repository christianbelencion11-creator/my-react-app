import React from 'react'
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function SubmissionSuccess({ formData }) {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="profile-card text-center border-0">
            <Card.Body className="p-5">
              <div className="mb-4">
                <span className="display-1">✅</span>
              </div>
              
              <Badge bg="success" className="px-4 py-2 mb-4">SUCCESS!</Badge>
              
              <h2 className="text-success mb-4">Thank You, {formData.name}!</h2>
              
              <Card.Text className="lead mb-5">
                Your message has been sent successfully.
              </Card.Text>

              <Card className="bg-light border-0 mb-5">
                <Card.Body>
                  <h5 className="mb-4">📋 Submitted Details:</h5>
                  <p className="mb-2"><strong>Name:</strong> {formData.name}</p>
                  <p className="mb-2"><strong>Email:</strong> {formData.email}</p>
                  <p className="mb-0"><strong>Message:</strong> {formData.message}</p>
                </Card.Body>
              </Card>

              <Button as={Link} to="/" variant="primary" size="lg" className="px-5">
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