import React, { useState } from 'react'
import { Container, Row, Col, Card, Form, Button, Alert, Badge } from 'react-bootstrap'
import SubmissionSuccess from './SubmissionSuccess'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const validateForm = () => {
    if (!formData.name.trim()) {
      setAlertMessage('⚠️ Please enter your name')
      return false
    }
    if (!formData.email.trim()) {
      setAlertMessage('⚠️ Please enter your email')
      return false
    }
    if (!formData.email.includes('@')) {
      setAlertMessage('⚠️ Please enter a valid email address')
      return false
    }
    if (!formData.message.trim()) {
      setAlertMessage('⚠️ Please enter your message')
      return false
    }
    return true
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
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
      <Row>
        <Col md={8} className="mx-auto">
          <Card className="profile-card border-0">
            <Card.Body className="p-4 p-md-5">
              <div className="text-center mb-4">
                <Badge bg="primary" className="px-4 py-2">📬 CONTACT ME</Badge>
              </div>
              
              <h2 className="section-title mb-4">Get In Touch</h2>
              
              {showAlert && (
                <Alert variant="danger" className="text-center" dismissible onClose={() => setShowAlert(false)}>
                  {alertMessage}
                </Alert>
              )}

              <Form onSubmit={handleSubmit} className="contact-form">
                <Form.Group className="mb-4" controlId="formName">
                  <Form.Label className="fw-bold">👤 Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    size="lg"
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formEmail">
                  <Form.Label className="fw-bold">📧 Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    size="lg"
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formMessage">
                  <Form.Label className="fw-bold">💬 Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="What would you like to say? I'll get back to you as soon as possible."
                    size="lg"
                  />
                </Form.Group>

                <div className="button-container">
                  <Button 
                    variant="primary" 
                    type="submit" 
                    size="lg"
                    className="px-5 py-3 fw-bold"
                  >
                    Send Message 📨
                  </Button>
                </div>
              </Form>

              <hr className="my-5" />

              <Row className="text-center">
                <Col sm={4} className="mb-3 mb-sm-0">
                  <div className="contact-info">
                    <span className="fs-1">📧</span>
                    <p className="mt-2 mb-0"><strong>Email</strong></p>
                    <p className="text-muted">christian@example.com</p>
                  </div>
                </Col>
                <Col sm={4} className="mb-3 mb-sm-0">
                  <div className="contact-info">
                    <span className="fs-1">📱</span>
                    <p className="mt-2 mb-0"><strong>Phone</strong></p>
                    <p className="text-muted">+63 912 345 6789</p>
                  </div>
                </Col>
                <Col sm={4}>
                  <div className="contact-info">
                    <span className="fs-1">📍</span>
                    <p className="mt-2 mb-0"><strong>Location</strong></p>
                    <p className="text-muted">Cabuyao, Laguna</p>
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

export default Contact