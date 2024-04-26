import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { initToneNodes, setToneNodeProperty } from './synth_nodes.js'

import SC_Button from '../../../javascript/components/SC_Button.jsx'
import SC_Slider from '../../../javascript/components/SC_Slider.jsx'
import SC_ToggleButtonSet from '../../../javascript/components/SC_ToggleButtonSet.jsx'

export default class Container extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isStarted: false,
      soundPreset: 'default',
      bpm: 80
    }
  }

  handleChange = (property, value) => {
    this.setState({
      [`${property}`]: value
    })

    setToneNodeProperty(property, value)
  }

  handleStart = () => {
    this.setState({
      isStarted: true
    })

    initToneNodes()
  }

  renderUI = () => {
    const { soundPreset, bpm } = this.state

    return (
      <div className="Container">
        <SC_ToggleButtonSet
          name="Sound Preset"
          options={['default', 'preset1', 'preset2']}
          value={soundPreset}
          property="soundPreset"
          handleChange={this.handleChange}
        />

        <SC_Slider
          name="BPM"
          min={0}
          max={300}
          step={1}
          value={bpm}
          property="bpm"
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
