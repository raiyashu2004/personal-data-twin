import { useState } from 'react'
import { dataAPI } from '../api'
import { Save } from 'lucide-react'

export default function DataEntry() {
  const [form, setForm] = useState({
    entryDate: new Date().toISOString().split('T')[0],
    sleepHours: 7,
    studyHours: 4,
    screenTime: 3,
    exerciseMinutes: 30,
    mood: 5,
    stressLevel: 5,
    notes: ""
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dataAPI.createEntry(form);
      alert("🧬 Twin Synced: Data logged successfully!");
    } catch (err) {
      alert("Error: Backend not reachable.");
    }
  }

  return (
    <div style={{ maxWidth: '600px' }}>
      <h1 style={{ color: 'var(--cyan)' }}>Log Daily Behavior</h1>
      <form className="card" onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label>Date</label>
          <input type="date" className="input" value={form.entryDate}
            onChange={e => setForm({...form, entryDate: e.target.value})} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          <div>
            <label>Sleep (Hours)</label>
            <input type="number" step="0.5" className="input" value={form.sleepHours}
              onChange={e => setForm({...form, sleepHours: parseFloat(e.target.value)})} />
          </div>
          <div>
            <label>Study (Hours)</label>
            <input type="number" step="0.5" className="input" value={form.studyHours}
              onChange={e => setForm({...form, studyHours: parseFloat(e.target.value)})} />
          </div>
        </div>

        <div style={{ marginTop: '15px' }}>
          <label>Mood (1-10)</label>
          <input type="range" min="1" max="10" style={{ width: '100%' }} value={form.mood}
            onChange={e => setForm({...form, mood: parseInt(e.target.value)})} />
        </div>

        <div style={{ marginTop: '15px' }}>
          <label>Stress Level (1-10)</label>
          <input type="range" min="1" max="10" style={{ width: '100%' }} value={form.stressLevel}
            onChange={e => setForm({...form, stressLevel: parseInt(e.target.value)})} />
        </div>

        <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '20px' }}>
          <Save size={16} /> Save Today's Log
        </button>
      </form>
    </div>
  )
}