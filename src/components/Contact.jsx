import React, { useState } from 'react'
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap'
import SubmissionSuccess from './SubmissionSuccess'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [showAlert, setShowAlert] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      setShowAlert(true)
      setTimeout(() => setShowAlert(false), 3000)
      return
    }

    setSubmitted(true)
  }

  if (submitted) {
    return <SubmissionSuccess formData={formData} />
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="profile-card border-0">
            <Card.Body className="p-4">
              <div className="text-center mb-4">
                <Badge bg="primary" className="px-3 py-2">Get in Touch</Badge>
              </div>
              
              <h2 className="section-title text-center mb-4">Contact Me</h2>
              
              {showAlert && (
                <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible className="text-center">
                  ⚠️ Please fill in all fields!
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label className="fw-bold">👤 Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="py-2"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label className="fw-bold">📧 Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="py-2"
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formMessage">
                  <Form.Label className="fw-bold">💬 Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="What would you like to say?"
                    className="py-2"
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 py-2 fw-bold">
                  Send Message 📨
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact