function Documentation() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#111827',
      padding: '48px 40px',
      fontFamily: 'inherit',
      color: '#e5e7eb'
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Documentation</h1>
        <p style={{ color: '#9ca3af', fontSize: '15px', lineHeight: 1.8, maxWidth: '760px' }}>
          Welcome to the Emotion Design System documentation. Here you can find usage guidelines,
          design tokens, component examples, and best practices for building interfaces consistently.
        </p>

        <div style={{ marginTop: '38px', display: 'grid', gap: '24px' }}>
          <section style={{ backgroundColor: '#1f2937', borderRadius: '20px', padding: '32px', boxShadow: '0 8px 24px rgba(0,0,0,0.35)' }}>
            <h2 style={{ color: '#fff', marginBottom: '12px' }}>Getting Started</h2>
            <p style={{ color: '#d1d5db', fontSize: '14px', lineHeight: 1.7 }}>
              Learn how to install components, import styles, and use the design system within your React application.
            </p>
          </section>

          <section style={{ backgroundColor: '#1f2937', borderRadius: '20px', padding: '32px', boxShadow: '0 8px 24px rgba(0,0,0,0.35)' }}>
            <h2 style={{ color: '#fff', marginBottom: '12px' }}>Design Tokens</h2>
            <p style={{ color: '#d1d5db', fontSize: '14px', lineHeight: 1.7 }}>
              Review the color palette, spacing scale, typography, and shadow styles used across the design system.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Documentation
