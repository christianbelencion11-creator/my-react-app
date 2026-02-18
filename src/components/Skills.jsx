import React from 'react'
import { Container, Row, Col, Card, Badge, ProgressBar } from 'react-bootstrap'

function Skills() {
  const skills = [
    { name: 'JavaScript', level: 75, icon: '⚡' },
    { name: 'React', level: 70, icon: '⚛️' },
    { name: 'HTML/CSS', level: 85, icon: '🎨' },
    { name: 'Node.js', level: 60, icon: '🚀' },
    { name: 'Python', level: 65, icon: '🐍' }
  ]

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={10}>
          <Card className="profile-card border-0">
            <Card.Body className="p-4">
              <div className="text-center mb-4">
                <Badge bg="primary" className="px-4 py-2">MY SKILLS</Badge>
              </div>
              
              <h2 className="section-title mb-5">Technical Expertise</h2>
              
              <Row className="mb-5">
                <Col md={8} className="mx-auto">
                  {skills.map((skill, index) => (
                    <div key={index} className="mb-4">
                      <div className="d-flex align-items-center mb-2">
                        <span className="skill-icon">{skill.icon}</span>
                        <strong className="flex-grow-1">{skill.name}</strong>
                        <Badge bg="primary" className="px-3 py-2">{skill.level}%</Badge>
                      </div>
                      <ProgressBar now={skill.level} />
                    </div>
                  ))}
                </Col>
              </Row>

              <h5 className="text-primary mb-4 text-center">Other Skills & Tools</h5>
              <Row>
                <Col md={6}>
                  <ul className="list-unstyled">
                    <li className="mb-3">✅ Git & GitHub</li>
                    <li className="mb-3">✅ Bootstrap & React-Bootstrap</li>
                    <li className="mb-3">✅ REST APIs</li>
                  </ul>
                </Col>
                <Col md={6}>
                  <ul className="list-unstyled">
                    <li className="mb-3">✅ MySQL Database</li>
                    <li className="mb-3">✅ Problem Solving</li>
                    <li className="mb-3">✅ Team Collaboration</li>
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

export default Skills