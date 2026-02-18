import React from 'react'
import { Container, Row, Col, Card, Badge, ProgressBar } from 'react-bootstrap'

function Skills() {
  const skills = [
    { name: 'JavaScript', level: 75, color: 'warning', icon: '⚡' },
    { name: 'React', level: 70, color: 'info', icon: '⚛️' },
    { name: 'HTML/CSS', level: 85, color: 'danger', icon: '🎨' },
    { name: 'Node.js', level: 60, color: 'success', icon: '🚀' },
    { name: 'Python', level: 65, color: 'primary', icon: '🐍' }
  ]

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={10}>
          <Card className="profile-card border-0">
            <Card.Body className="p-4">
              <div className="text-center mb-4">
                <Badge bg="primary" className="px-3 py-2">My Expertise</Badge>
              </div>
              
              <h2 className="section-title text-center mb-4">Technical Skills</h2>
              
              <Row className="mb-5">
                {skills.map((skill, index) => (
                  <Col md={12} key={index} className="mb-4">
                    <div className="d-flex align-items-center mb-2">
                      <span className="fs-4 me-2">{skill.icon}</span>
                      <strong className="flex-grow-1">{skill.name}</strong>
                      <Badge bg={skill.color} className="px-3 py-2">{skill.level}%</Badge>
                    </div>
                    <ProgressBar 
                      now={skill.level} 
                      variant={skill.color}
                      style={{ height: '12px', borderRadius: '10px' }}
                    />
                  </Col>
                ))}
              </Row>

              <h5 className="text-primary mb-3">📋 Other Skills & Tools</h5>
              <Row>
                <Col md={6}>
                  <ul className="list-unstyled">
                    <li className="mb-2">✅ Git & GitHub</li>
                    <li className="mb-2">✅ Bootstrap & React-Bootstrap</li>
                    <li className="mb-2">✅ REST APIs</li>
                  </ul>
                </Col>
                <Col md={6}>
                  <ul className="list-unstyled">
                    <li className="mb-2">✅ Database Management (MySQL)</li>
                    <li className="mb-2">✅ Problem Solving</li>
                    <li className="mb-2">✅ Team Collaboration</li>
                  </ul>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
s
export default Skills