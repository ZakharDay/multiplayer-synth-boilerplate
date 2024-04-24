let toneNodes = {}

function setToneNode(name, node) {
  toneNodes[name] = node
}

function setToneNodeProperty(node, property, value) {
  if (property === 'wet') {
    toneNodes[node].wet.value = value
  } else if (typeof property === 'object') {
    toneNodes[node][property[0]][property[1]] = value
  } else {
    toneNodes[node].set({
      [`${property}`]: value
    })
  }
}

export { setToneNode, setToneNodeProperty }
