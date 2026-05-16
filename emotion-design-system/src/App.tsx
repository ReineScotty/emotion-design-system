import './App.css'
import './components/atoms/Button.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Documentation from './pages/Documentation'
import Releases from './pages/Releases'

function App() {
  return (
    <div>
      <nav style={{ padding: '20px 40px', background: '#0b1220', display: 'flex', alignItems: 'center', gap: '18px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600 }}>Home</Link>
          <Link to="/documentation" style={{ color: '#9ca3af', textDecoration: 'none' }}>Documentation</Link>
          <Link to="/releases" style={{ color: '#9ca3af', textDecoration: 'none' }}>Releases</Link>
          <Link to="/about" style={{ color: '#9ca3af', textDecoration: 'none' }}>About</Link>
        </div>
        <div style={{ marginLeft: 'auto', color: '#fff', fontWeight: 700, fontSize: '1rem' }}>
          Emotion Design System
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/releases" element={<Releases />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App