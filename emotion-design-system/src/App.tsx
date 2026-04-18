import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import DownloadButton from './components/atoms/DownloadButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
          <h1>Design System Download Button</h1>
          <p>Showcasing three elegant button variants with semantic HTML and BEM conventions</p>
        </div>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <DownloadButton 
            label="Download" 
            variant="primary" 
            size="medium"
            onClick={() => console.log('Primary download initiated')}
          />
          <DownloadButton 
            label="Export" 
            variant="secondary" 
            size="medium"
          />
          <DownloadButton 
            label="Save As" 
            variant="minimal" 
            size="medium"
          />
        </div>

        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #ddd' }}>
          <h3>Different Sizes</h3>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
            <DownloadButton label="Small" variant="primary" size="small" />
            <DownloadButton label="Medium" variant="primary" size="medium" />
            <DownloadButton label="Large" variant="primary" size="large" />
          </div>
        </div>

        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #ddd' }}>
          <h3>Disabled State</h3>
          <DownloadButton 
            label="Download" 
            variant="primary" 
            size="medium"
            disabled={true}
          />
        </div>
      </section>
    </>
  )
}

export default App
