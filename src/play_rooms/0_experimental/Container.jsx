import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { startSynthRoom } from './synth.js'
import { setToneNodeProperty } from '../../javascript/store.js'
import SC_Slider from '../../javascript/components/SC_Slider.jsx'
import SC_Button from '../../javascript/components/SC_Button.jsx'

export default class Container extends Component {
  constructor(props) {
    super(props)

    this.state = this.props.settings
    this.state.isStarted = false
  }

  handleChange = (node, property, value) => {
    if (typeof property === 'object') {
      this.setState({
        [`${property[1]}`]: value
      })

      setToneNodeProperty(node, property[1], value)
    } else {
      this.setState({
        [`${property}`]: value
      })

      setToneNodeProperty(node, property, value)
    }
  }

  handleStart = () => {
    const { settings } = this.props

    this.setState({
      isStarted: true
    })

    startSynthRoom(settings)
  }

  renderUI = () => {
    const { frequency, phase, jcReverbWet, jcReverbRoom } = this.state

    return (
      <div className="Container">
        {frequency}

        <SC_Slider
          name="Oscillator Frequency"
          min={0}
          max={1000}
          step={1}
          node="synth"
          property="frequency"
          value={frequency}
          handleChange={this.handleChange}
        />

        <SC_Slider
          name="Oscillator Phase"
          min={0}
          max={1000}
          step={1}
          node="synth"
          property={['oscillator', 'phase']}
          value={phase}
          handleChange={this.handleChange}
        />

        <SC_Slider
          name="JC Reverb Wet"
          min={0}
          max={1}
          step={0.01}
          node="jcReverb"
          property="wet"
          value={jcReverbWet}
          handleChange={this.handleChange}
        />

        <SC_Slider
          name="JC Reverb Room Size"
          min={0}
          max={1}
          step={0.01}
          node="jcReverb"
          property="roomSize"
          value={jcReverbRoom}
          handleChange={this.handleChange}
        />
      </div>
    )
  }

  renderStartButton = () => {
    return (
      <SC_Button
        text="Art Design & Coding Community"
        handleClick={this.handleStart}
      />
    )
  }
  render() {
    const { isStarted } = this.state

    return (
      <div className="Container">
        {isStarted ? this.renderUI() : this.renderStartButton()}
      </div>
    )
  }
}
