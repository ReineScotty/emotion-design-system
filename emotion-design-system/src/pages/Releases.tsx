function Releases() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#111827',
      padding: '48px 40px',
      fontFamily: 'inherit',
      color: '#e5e7eb'
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Releases</h1>
        <p style={{ color: '#9ca3af', fontSize: '15px', lineHeight: 1.8, maxWidth: '760px' }}>
          View the latest release notes for Emotion Design System. This page highlights new components, bug fixes,
          and improvements for the design system demo app.
        </p>

        <div style={{ marginTop: '38px', display: 'grid', gap: '24px' }}>
          <article style={{ backgroundColor: '#1f2937', borderRadius: '20px', padding: '32px', boxShadow: '0 8px 24px rgba(0,0,0,0.35)' }}>
            <h2 style={{ color: '#fff', marginBottom: '12px' }}>Version 1.0.0</h2>
            <p style={{ color: '#d1d5db', fontSize: '14px', lineHeight: 1.7 }}>
              Initial public release with Home, About, Documentation, and Releases pages, plus basic routing for GitHub Pages.
            </p>
          </article>

          <article style={{ backgroundColor: '#1f2937', borderRadius: '20px', padding: '32px', boxShadow: '0 8px 24px rgba(0,0,0,0.35)' }}>
            <h2 style={{ color: '#fff', marginBottom: '12px' }}>Version 1.0.1</h2>
            <p style={{ color: '#d1d5db', fontSize: '14px', lineHeight: 1.7 }}>
              Added documentation and release navigation links, and fixed GitHub Pages routing for the repo basename.
            </p>
          </article>
        </div>
      </div>
    </div>
  )
}

export default Releases
