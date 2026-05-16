import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import DataEntry from './pages/DataEntry'
import Simulation from './pages/Simulation'

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <aside style={{ width: 220, background: '#0d1420', borderRight: '1px solid rgba(0,229,255,0.1)', padding: '20px' }}>
          <h2 style={{ color: '#00e5ff', fontSize: '20px' }}>DataTwin</h2>
          <nav style={{ marginTop: '30px' }}>
            <NavLink to="/" end>Dashboard</NavLink>
            <NavLink to="/entry">Log Day</NavLink>
            <NavLink to="/simulate">Simulate</NavLink>
          </nav>
        </aside>
        <main style={{ flex: 1, padding: '40px' }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/entry" element={<DataEntry />} />
            <Route path="/simulate" element={<Simulation />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}