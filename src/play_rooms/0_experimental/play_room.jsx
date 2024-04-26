import './play_room.css'

import React from 'react'
import { createRoot } from 'react-dom/client'
import Container from './javascript/Container.jsx'

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('reactComponentRoot')
  const root = createRoot(container)

  root.render(<Container />)
})
