import './page.css'

import * as Tone from 'tone'
import React from 'react'
import { createRoot } from 'react-dom/client'

import {
  setToneNode,
  getFrequency,
  getJcReverbWet
} from './javascript/store.js'

// import { updateToneNode } from './javascript/tone_node_updater.js'
import Container from './javascript/Container.jsx'

const frequency = getFrequency()
const jcReverbWet = getJcReverbWet()
const jcReverbRoom = getJcReverbWet()

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
  wet: 1,
  roomSize: 0.3
}).toDestination()

// const chorus = new Tone.Chorus(chorusSettings).start().toDestination()

synth.chain(jcReverb)

synth.triggerAttack('A3', '1n')

setToneNode('synth', synth)
setToneNode('jcReverb', jcReverb)

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('reactComponentRoot')
  const root = createRoot(container)

  root.render(
    <Container
      frequency={frequency}
      jcReverbWet={jcReverbWet}
      jcReverbRoom={jcReverbRoom}
    />
  )
})
