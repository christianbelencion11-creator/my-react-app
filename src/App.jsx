import './App.css'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">🚀 ChristianDev</div>
          <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Hello, Vercel! 👋</h1>
          <p className="hero-subtitle">My first React app deployed on Vercel</p>
          <p className="hero-name">Made with ❤️ by Christian</p>
          <div className="hero-buttons">
            <button className="btn-primary">View Projects</button>
            <button className="btn-secondary">GitHub Profile</button>
          </div>
        </div>
      </section>

      {/* Counter Section */}
      <section className="counter-section">
        <div className="container">
          <h2 className="section-title">Interactive Counter</h2>
          <div className="counter-card">
            <div className="counter-display">
              <span className="counter-label">Current Count:</span>
              <span className="counter-value">{count}</span>
            </div>
            <div className="counter-buttons">
              <button onClick={() => setCount(count + 1)} className="counter-btn increment">
                + Increase
              </button>
              <button onClick={() => setCount(count - 1)} className="counter-btn decrement">
                - Decrease
              </button>
              <button onClick={() => setCount(0)} className="counter-btn reset">
                ↺ Reset
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Technologies Used</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚛️</div>
              <h3>React</h3>
              <p>Modern UI library for building interactive interfaces</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Vercel</h3>
              <p>Instant deployments and automatic SSL</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📦</div>
              <h3>Vite</h3>
              <p>Lightning fast build tool and dev server</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>CSS3</h3>
              <p>Modern styling with gradients and animations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <div className="container">
          <h2 className="section-title">My Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <img src="https://via.placeholder.com/300x200" alt="Project 1" />
              <h3>Project 1</h3>
              <p>Coming soon...</p>
            </div>
            <div className="project-card">
              <img src="https://via.placeholder.com/300x200" alt="Project 2" />
              <h3>Project 2</h3>
              <p>Coming soon...</p>
            </div>
            <div className="project-card">
              <img src="https://via.placeholder.com/300x200" alt="Project 3" />
              <h3>Project 3</h3>
              <p>Coming soon...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2024 Christian. All rights reserved.</p>
          <p>Deployed on Vercel 🚀</p>
        </div>
      </footer>
    </div>
  )
}

export default App