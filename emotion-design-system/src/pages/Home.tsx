import React from 'react'
import './home.css'

function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#111827',
      padding: '48px 40px',
      fontFamily: 'inherit'
    }}>
      <h1 style={{ color: '#ffffff', textAlign: 'center', marginBottom: '48px', fontSize: '2.5rem' }}>
        Emotion Design System
      </h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '24px',
        maxWidth: '1100px',
        margin: '0 auto'
      }}>

        {/* Card 1 */}
        <div style={{
          backgroundColor: '#1f2937',
          borderRadius: '20px',
          padding: '32px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.4)'
        }}>
          <p style={{ color: '#6b7280', fontSize: '12px', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Box 1</p>
          <h2 style={{ color: '#ffffff', fontSize: '1.25rem', marginBottom: '8px' }}>Project A</h2>
          <p style={{ color: '#9ca3af', fontSize: '13px', marginBottom: '28px' }}>Variation 1 — Primary</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
              <button className="btn btn-primary btn-sm">Small</button>
              <button className="btn btn-primary btn-base">Default</button>
              <button className="btn btn-primary btn-lg">Large</button>
              <button className="btn btn-primary btn-base" disabled>Disabled</button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div style={{
          backgroundColor: '#1f2937',
          borderRadius: '20px',
          padding: '32px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.4)'
        }}>
          <p style={{ color: '#6b7280', fontSize: '12px', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Box 2</p>
          <h2 style={{ color: '#ffffff', fontSize: '1.25rem', marginBottom: '8px' }}>Project B</h2>
          <p style={{ color: '#9ca3af', fontSize: '13px', marginBottom: '28px' }}>Variation 2 — Outline</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
              <button className="btn btn-outline btn-sm">Small</button>
              <button className="btn btn-outline btn-base">Default</button>
              <button className="btn btn-outline btn-lg">Large</button>
              <button className="btn btn-outline btn-base" disabled>Disabled</button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div style={{
          backgroundColor: '#1f2937',
          borderRadius: '20px',
          padding: '32px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.4)'
        }}>
          <p style={{ color: '#6b7280', fontSize: '12px', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Box 3</p>
          <h2 style={{ color: '#ffffff', fontSize: '1.25rem', marginBottom: '8px' }}>Project C</h2>
          <p style={{ color: '#9ca3af', fontSize: '13px', marginBottom: '28px' }}>Variation 3 — Ghost</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
              <button className="btn btn-ghost btn-sm">Small</button>
              <button className="btn btn-ghost btn-base">Default</button>
              <button className="btn btn-ghost btn-lg">Large</button>
              <button className="btn btn-ghost btn-base" disabled>Disabled</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home
