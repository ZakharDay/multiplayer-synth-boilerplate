import './page.css'

import * as Tone from 'tone'
import React from 'react'
import { createRoot } from 'react-dom/client'

import { setToneNode } from './javascript/store.js'
import Container from './javascript/Container.jsx'

const changableSettings = {
  frequency: 440,
  phase: 0,
  wet: 1,
  roomSize: 0.5
}

const synth = new Tone.Synth({
  volume: -20,
  detune: 0,
  portamento: 0.05,
  envelope: {
    attack: 0.05,
    attackCurve: 'exponential',
    decay: 0.2,
    decayCurve: 'exponential',
    sustain: 0.2,
    release: 1.5,
    releaseCurve: 'exponential'
  },
  oscillator: {
    type: 'sawtooth',
    modulationType: 'sine',
    // partialCount: 0,
    // partials: [],
    phase: 0,
    harmonicity: 0.5
  }
})

const jcReverb = new Tone.JCReverb({
  wet: changableSettings.wet,
  roomSize: changableSettings.roomSize
}).toDestination()

// const chorus = new Tone.Chorus(chorusSettings).start().toDestination()

synth.chain(jcReverb)

synth.triggerAttack(changableSettings.frequency, '1n')

setToneNode('synth', synth)
setToneNode('jcReverb', jcReverb)

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('reactComponentRoot')
  const root = createRoot(container)

  root.render(<Container settings={changableSettings} />)
})
