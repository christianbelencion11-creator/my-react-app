import './App.css'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="container">
        <h1>Hello, Vercel! 👋</h1>
        <p className="subtitle">My first React app deployed on Vercel</p>
        <p className="name">Made with ❤️ by Christian</p>
        
        <div className="card">
          <h2>Click Counter</h2>
          <p className="count">Count: {count}</p>
          <div className="buttons">
            <button onClick={() => setCount(count + 1)} className="btn btn-primary">
              Increase
            </button>
            <button onClick={() => setCount(count - 1)} className="btn btn-secondary">
              Decrease
            </button>
            <button onClick={() => setCount(0)} className="btn btn-reset">
              Reset
            </button>
          </div>
        </div>

        <div className="features">
          <div className="feature">
            <span>🚀</span>
            <h3>Deployed on Vercel</h3>
            <p>Auto-deploy from GitHub</p>
          </div>
          <div className="feature">
            <span>⚛️</span>
            <h3>React + Vite</h3>
            <p>Fast development</p>
          </div>
          <div className="feature">
            <span>🎨</span>
            <h3>Styled with CSS</h3>
            <p>Clean and modern</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App