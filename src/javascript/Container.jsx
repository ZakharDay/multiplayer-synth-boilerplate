import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { setFrequency, setJcReverbWet, setJcReverbRoom } from './store.js'
import SC_Slider from './components/SC_Slider.jsx'

export default class Container extends Component {
  constructor(props) {
    super(props)

    const { frequency, jcReverbWet, jcReverbRoom } = this.props

    this.state = {
      frequency,
      jcReverbWet,
      jcReverbRoom
    }
  }

  handleFrequencyChange = (property, value) => {
    this.setState({
      frequency: value
    })

    setFrequency(value)
    // updateToneNode('', '', value)
  }

  handleWetChange = (property, value) => {
    this.setState({
      jcReverbWet: value
    })

    setJcReverbWet(value)
    // updateToneNode('', '', value)
  }

  handleRoomChange = (property, value) => {
    this.setState({
      jcReverbRoom: value
    })

    setJcReverbRoom(value)
    // updateToneNode('', '', value)
  }

  render() {
    const { frequency, jcReverbWet, jcReverbRoom } = this.state

    return (
      <div className="Container">
        {frequency}

        <SC_Slider
          name="Oscillator Frequency"
          min={0}
          max={1000}
          step={1}
          property="none"
          value={frequency}
          handleChange={this.handleFrequencyChange}
        />

        <SC_Slider
          name="JC Reverb Wet"
          min={0}
          max={1}
          step={0.01}
          property="none"
          value={jcReverbWet}
          handleChange={this.handleWetChange}
        />

        <SC_Slider
          name="JC Reverb Wet"
          min={0}
          max={1}
          step={0.01}
          property="none"
          value={jcReverbRoom}
          handleChange={this.handleRoomChange}
        />
      </div>
    )
  }
}
