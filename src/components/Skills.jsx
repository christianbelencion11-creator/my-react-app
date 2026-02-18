import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

function Skills() {
  const skills = [
    { name: 'JavaScript', level: 75, icon: '⚡' },
    { name: 'React', level: 70, icon: '⚛️' },
    { name: 'HTML/CSS', level: 85, icon: '🎨' },
    { name: 'Node.js', level: 60, icon: '🚀' },
    { name: 'Python', level: 65, icon: '🐍' }
  ]

  // DIRECT INLINE STYLES - 100% CENTERED
  const styles = {
    pageContainer: {
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    mainCard: {
      width: '100%',
      maxWidth: '900px',
      background: 'white',
      borderRadius: '20px',
      padding: '40px',
      boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
      margin: '20px auto'
    },
    badgeContainer: {
      textAlign: 'center',
      marginBottom: '30px'
    },
    badge: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '8px 25px',
      borderRadius: '50px',
      fontSize: '1rem',
      fontWeight: 'bold',
      display: 'inline-block',
      letterSpacing: '1px'
    },
    title: {
      textAlign: 'center',
      color: '#333',
      fontSize: '2.2rem',
      fontWeight: 'bold',
      marginBottom: '40px',
      position: 'relative',
      paddingBottom: '15px'
    },
    titleUnderline: {
      position: 'absolute',
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '80px',
      height: '4px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: '2px'
    },
    skillsWrapper: {
      maxWidth: '600px',
      margin: '0 auto',
      width: '100%'
    },
    skillItem: {
      marginBottom: '25px',
      width: '100%'
    },
    skillHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '8px'
    },
    skillLeft: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    },
    skillIcon: {
      fontSize: '1.5rem'
    },
    skillName: {
      fontSize: '1.1rem',
      fontWeight: '600',
      color: '#333'
    },
    skillPercentage: {
      background: '#667eea',
      color: 'white',
      padding: '5px 15px',
      borderRadius: '20px',
      fontSize: '0.9rem',
      fontWeight: 'bold'
    },
    progressBar: {
      width: '100%',
      height: '10px',
      background: '#e0e0e0',
      borderRadius: '10px',
      overflow: 'hidden'
    },
    progressFill: (level) => ({
      width: `${level}%`,
      height: '100%',
      background: 'linear-gradient(90deg, #667eea, #764ba2)',
      borderRadius: '10px',
      transition: 'width 0.3s ease'
    }),
    otherSkillsTitle: {
      textAlign: 'center',
      color: '#667eea',
      fontSize: '1.3rem',
      fontWeight: 'bold',
      margin: '40px 0 20px'
    },
    listsContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '50px',
      flexWrap: 'wrap'
    },
    listColumn: {
      minWidth: '250px'
    },
    list: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    listItem: {
      marginBottom: '12px',
      fontSize: '1rem',
      color: '#555',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    checkIcon: {
      color: '#667eea',
      fontSize: '1.2rem'
    }
  }

  return (
    <div style={styles.pageContainer}>
      <div style={styles.mainCard}>
        {/* Badge */}
        <div style={styles.badgeContainer}>
          <span style={styles.badge}>MY SKILLS</span>
        </div>

        {/* Title */}
        <h2 style={styles.title}>
          Technical Expertise
          <span style={styles.titleUnderline}></span>
        </h2>

        {/* Skills List */}
        <div style={styles.skillsWrapper}>
          {skills.map((skill, index) => (
            <div key={index} style={styles.skillItem}>
              <div style={styles.skillHeader}>
                <div style={styles.skillLeft}>
                  <span style={styles.skillIcon}>{skill.icon}</span>
                  <span style={styles.skillName}>{skill.name}</span>
                </div>
                <span style={styles.skillPercentage}>{skill.level}%</span>
              </div>
              <div style={styles.progressBar}>
                <div style={styles.progressFill(skill.level)}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Skills Title */}
        <h3 style={styles.otherSkillsTitle}>Other Skills & Tools</h3>

        {/* Other Skills Lists */}
        <div style={styles.listsContainer}>
          <div style={styles.listColumn}>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                <span style={styles.checkIcon}>✅</span> Git & GitHub
              </li>
              <li style={styles.listItem}>
                <span style={styles.checkIcon}>✅</span> Bootstrap & React-Bootstrap
              </li>
              <li style={styles.listItem}>
                <span style={styles.checkIcon}>✅</span> REST APIs
              </li>
            </ul>
          </div>
          <div style={styles.listColumn}>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                <span style={styles.checkIcon}>✅</span> MySQL Database
              </li>
              <li style={styles.listItem}>
                <span style={styles.checkIcon}>✅</span> Problem Solving
              </li>
              <li style={styles.listItem}>
                <span style={styles.checkIcon}>✅</span> Team Collaboration
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills