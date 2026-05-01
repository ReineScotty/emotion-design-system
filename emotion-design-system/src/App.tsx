import './App.css'
import './components/atoms/Button.css'

function App() {
  return (
    <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '48px' }}>

      <h1>Emotion Design System</h1>

      <section>
        <h2>Variation 1 — Primary</h2>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginTop: '16px' }}>
          <button className="btn btn-primary btn-sm">Small</button>
          <button className="btn btn-primary btn-base">Default</button>
          <button className="btn btn-primary btn-lg">Large</button>
          <button className="btn btn-primary btn-base" disabled>Disabled</button>
        </div>
      </section>

      <section>
        <h2>Variation 2 — Outline</h2>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginTop: '16px' }}>
          <button className="btn btn-outline btn-sm">Small</button>
          <button className="btn btn-outline btn-base">Default</button>
          <button className="btn btn-outline btn-lg">Large</button>
          <button className="btn btn-outline btn-base" disabled>Disabled</button>
        </div>
      </section>

      <section>
        <h2>Variation 3 — Ghost</h2>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginTop: '16px' }}>
          <button className="btn btn-ghost btn-sm">Small</button>
          <button className="btn btn-ghost btn-base">Default</button>
          <button className="btn btn-ghost btn-lg">Large</button>
          <button className="btn btn-ghost btn-base" disabled>Disabled</button>
        </div>
      </section>

    </div>
  )
}

export default App