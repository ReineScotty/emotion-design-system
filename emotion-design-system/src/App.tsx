import './App.css'
import './components/atoms/Button.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <div>
      <nav style={{ padding: '20px 40px', background: '#0b1220', display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600 }}>Home</Link>
        <Link to="/about" style={{ color: '#9ca3af', textDecoration: 'none' }}>About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App