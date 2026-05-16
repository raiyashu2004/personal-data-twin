import { useState, useEffect } from 'react'
import { dataAPI } from '../api'
import { Brain, Activity, Database } from 'lucide-react'

export default function Dashboard() {
  const [stats, setStats] = useState(null)

  useEffect(() => {
    dataAPI.getSummary().then(res => setStats(res.data))
  }, [])

  if (!stats) return <div className="loading">Connecting to Neural Link...</div>

  return (
    <div>
      <h1 style={{ color: 'var(--cyan)', marginBottom: '30px' }}>Digital Twin Overview</h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>

        {/* Pearson Correlation Card */}
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#a855f7' }}>
            <Brain size={20} /> <strong>Habit Correlation</strong>
          </div>
          <div style={{ fontSize: '32px', margin: '15px 0' }}>
            {stats.correlation ? stats.correlation.value : "???"}
          </div>
          <p style={{ fontSize: '12px', opacity: 0.6 }}>
            {stats.correlation ? `Statistical link between ${stats.correlation.label}` : "Log 3+ days to see Pearson correlations"}
          </p>
        </div>

        {/* Burnout Risk Card */}
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ff4d6d' }}>
            <Activity size={20} /> <strong>Burnout Risk</strong>
          </div>
          <div style={{ fontSize: '32px', margin: '15px 0', color: stats.burnout.risk === 'HIGH' ? '#ff4d6d' : '#00ff9d' }}>
            {stats.burnout.risk}
          </div>
          <p style={{ fontSize: '12px', opacity: 0.6 }}>Stress Impact Score: {stats.burnout.score}/100</p>
        </div>

        {/* Data Sync Card */}
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--cyan)' }}>
            <Database size={20} /> <strong>System Status</strong>
          </div>
          <div style={{ fontSize: '32px', margin: '15px 0' }}>{stats.totalEntries} Days</div>
          <p style={{ fontSize: '12px', opacity: 0.6 }}>Database: H2 Local SQL - Synced</p>
        </div>

      </div>

      {stats.totalEntries === 0 && (
        <div className="card" style={{ marginTop: '30px', textAlign: 'center', border: '1px dashed var(--cyan)' }}>
           <p>Your Data Twin is currently empty. Start by logging a day.</p>
           <a href="/entry" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block', marginTop: '10px' }}>Go to Logs</a>
        </div>
      )}
    </div>
  )
}