import { useState } from 'react'
import { dataAPI } from '../api'

export default function Simulation() {
  const [val, setVal] = useState({ sleepHours: 4, studyHours: 10 })
  const [result, setResult] = useState(null)

  const run = async () => {
    const res = await dataAPI.simulate(val)
    setResult(res.data.predictedScore)
  }

  return (
    <div className="card">
      <h2>What-If Simulator</h2>
      <p>Simulate how bad habits affect your productivity score.</p>
      <button className="btn-primary" onClick={run}>Run Simulation</button>
      {result && <h1 style={{marginTop: '20px'}}>Predicted Score: {result}/100</h1>}
    </div>
  )
}