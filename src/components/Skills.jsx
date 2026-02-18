import React from 'react'
import { Container, Row, Col, Card, Badge, ProgressBar } from 'react-bootstrap'

function Skills() {
  const skills = [
    { name: 'JavaScript', level: 75, color: 'warning' },
    { name: 'React', level: 70, color: 'info' },
    { name: 'HTML/CSS', level: 85, color: 'danger' },
    { name: 'Node.js', level: 60, color: 'success' },
    { name: 'Python', level: 65, color: 'primary' }
  ]

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="profile-card">
            <Card.Body>
              <h2 className="section-title">My Skills</h2>
              
              <h5 className="mb-4">Technical Skills</h5>
              
              {skills.map((skill, index) => (
                <div key={index} className="mb-4">
                  <div className="d-flex justify-content-between">
                    <strong>{skill.name}</strong>
                    <Badge bg={skill.color}>{skill.level}%</Badge>
                  </div>
                  <ProgressBar 
                    now={skill.level} 
                    variant={skill.color}
                    className="mt-2"
                    style={{ height: '10px' }}
                  />
                </div>
              ))}

              <hr className="my-4" />

              <h5 className="mb-3">Other Skills:</h5>
              <ul className="list-unstyled">
                <li>✅ Git & GitHub</li>
                <li>✅ Bootstrap & React-Bootstrap</li>
                <li>✅ REST APIs</li>
                <li>✅ Database Management (MySQL)</li>
                <li>✅ Problem Solving</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Skills