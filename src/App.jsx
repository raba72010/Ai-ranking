import React, { useState } from 'react'

const models = [
  { name: 'GPT-5', score: 98 },
  { name: 'Claude 3.7', score: 95 },
  { name: 'Gemini Pro', score: 93 },
]

export default function App() {
  const [sorted, setSorted] = useState(models)

  return (
    <div style={{ padding: 20 }}>
      <h1>AI Model Ranker</h1>
      {sorted.map((m, i) => (
        <div key={i}>
          #{i + 1} {m.name} — {m.score}
        </div>
      ))}
    </div>
  )
}
