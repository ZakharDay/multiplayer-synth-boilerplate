let toneNodes = {}
let frequency = 440
let jcReverbWet = 1
let jcReverbRoom = 0.5

function getToneNode(name) {
  return toneNodes[name]
}

function setToneNode(name, node) {
  toneNodes[name] = node
}

function setToneNodeProperty(node, property, value) {
  if (property === 'wet') {
    toneNodes[node].wet.value = value
  } else {
    toneNodes[node].set({
      [`${property}`]: value
    })
  }
}

function getFrequency() {
  return frequency
}

function setFrequency(f) {
  frequency = f
  setToneNodeProperty('synth', 'frequency', f)
}

function getJcReverbWet() {
  return jcReverbWet
}

function setJcReverbWet(f) {
  jcReverbWet = f
  setToneNodeProperty('jcReverb', 'wet', f)
}

function getJcReverbRoom() {
  return jcReverbRoom
}

function setJcReverbRoom(f) {
  jcReverbRoom = f
  setToneNodeProperty('jcReverb', 'roomSize', f)
}

export {
  getToneNode,
  setToneNode,
  getFrequency,
  setFrequency,
  getJcReverbWet,
  setJcReverbWet,
  getJcReverbRoom,
  setJcReverbRoom
}
