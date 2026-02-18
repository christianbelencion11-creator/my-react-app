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

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      width: '100%'
    },
    row: {
      display: 'flex',
      justifyContent: 'center',
      margin: '0 auto',
      width: '100%'
    },
    col: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%'
    },
    card: {
      background: 'white',
      borderRadius: '20px',
      padding: '2.5rem',
      boxShadow: '0 20px 50px rgba(0,0,0,0.2)',
      margin: '2rem auto',
      border: 'none',
      width: '100%',
      maxWidth: '900px',
      textAlign: 'center'
    },
    badgeContainer: {
      textAlign: 'center',
      marginBottom: '2rem'
    },
    badge: {
      fontSize: '1rem',
      padding: '0.6rem 1.8rem',
      borderRadius: '50px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      border: 'none',
      display: 'inline-block',
      color: 'white',
      fontWeight: 'bold'
    },
    titleContainer: {
      textAlign: 'center',
      marginBottom: '2rem'
    },
    sectionTitle: {
      color: '#667eea',
      fontSize: '2.5rem',
      fontWeight: 'bold',
      margin: '0 auto',
      paddingBottom: '1rem',
      textAlign: 'center',
      position: 'relative',
      display: 'inline-block'
    },
    skillsContainer: {
      maxWidth: '700px',
      margin: '0 auto',
      width: '100%'
    },
    skillItem: {
      marginBottom: '2rem',
      width: '100%'
    },
    skillHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '0.5rem',
      width: '100%'
    },
    skillName: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    },
    skillBadge: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '0.4rem 1rem',
      borderRadius: '20px',
      fontSize: '0.9rem',
      fontWeight: 'bold'
    },
    progress: {
      height: '12px',
      borderRadius: '10px',
      backgroundColor: '#e9ecef',
      width: '100%',
      margin: '0.5rem 0'
    },
    otherSkillsTitle: {
      color: '#667eea',
      fontSize: '1.3rem',
      fontWeight: 'bold',
      margin: '2rem 0 1.5rem',
      textAlign: 'center'
    },
    listContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem',
      flexWrap: 'wrap'
    },
    list: {
      textAlign: 'left',
      listStyle: 'none',
      padding: 0,
      margin: 0,
      minWidth: '250px'
    },
    listItem: {
      marginBottom: '1rem',
      fontSize: '1rem',
      color: '#555',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    }
  }

  return (
    <Container style={styles.container}>
      <Row style={styles.row}>
        <Col md={10} style={styles.col}>
          <Card style={styles.card}>
            <Card.Body>
              {/* Badge */}
              <div style={styles.badgeContainer}>
                <span style={styles.badge}>MY SKILLS</span>
              </div>
              
              {/* Section Title */}
              <div style={styles.titleContainer}>
                <h2 style={styles.sectionTitle}>
                  Technical Expertise
                </h2>
              </div>
              
              {/* Skills List */}
              <div style={styles.skillsContainer}>
                {skills.map((skill, index) => (
                  <div key={index} style={styles.skillItem}>
                    <div style={styles.skillHeader}>
                      <div style={styles.skillName}>
                        <span>{skill.icon}</span>
                        <strong>{skill.name}</strong>
                      </div>
                      <span style={styles.skillBadge}>{skill.level}%</span>
                    </div>
                    <ProgressBar 
                      now={skill.level} 
                      style={styles.progress}
                    />
                  </div>
                ))}
              </div>

              {/* Other Skills Title */}
              <h5 style={styles.otherSkillsTitle}>Other Skills & Tools</h5>
              
              {/* Other Skills Lists */}
              <div style={styles.listContainer}>
                <ul style={styles.list}>
                  <li style={styles.listItem}>
                    <span>✅</span> Git & GitHub
                  </li>
                  <li style={styles.listItem}>
                    <span>✅</span> Bootstrap & React-Bootstrap
                  </li>
                  <li style={styles.listItem}>
                    <span>✅</span> REST APIs
                  </li>
                </ul>
                
                <ul style={styles.list}>
                  <li style={styles.listItem}>
                    <span>✅</span> MySQL Database
                  </li>
                  <li style={styles.listItem}>
                    <span>✅</span> Problem Solving
                  </li>
                  <li style={styles.listItem}>
                    <span>✅</span> Team Collaboration
                  </li>
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Skills