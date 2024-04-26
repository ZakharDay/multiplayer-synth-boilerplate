import './style.css'

import React from 'react'
import { createRoot } from 'react-dom/client'

import Container from './Container.jsx'

const changableSettings = {
  frequency: 440,
  phase: 0,
  wet: 1,
  roomSize: 0.5
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('reactComponentRoot')
  const root = createRoot(container)

  root.render(<Container settings={changableSettings} />)
})
