import * as Tone from 'tone'
import { setToneNode } from '../../javascript/store.js'

function startSynthRoom(settings) {
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
    wet: settings.wet,
    roomSize: settings.roomSize
  }).toDestination()

  // const chorus = new Tone.Chorus(chorusSettings).start().toDestination()

  synth.chain(jcReverb)

  synth.triggerAttack(settings.frequency, '1n')

  setToneNode('synth', synth)
  setToneNode('jcReverb', jcReverb)
}

export { startSynthRoom }
