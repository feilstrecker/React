import React from "react"
import PropTypes from 'prop-types'
import './timer.css'

export default function Timer({time, handleReset, handlePause, handleStart}) {
  return (
    <div className="timer">
      <h2>{time}</h2>
      <div className="timer-buttons">
      <button onClick={handleReset} className="reset-button">Reset</button>
        <button onClick={handlePause} className="stop-button">Stop</button>
        <button onClick={handleStart} className="start-button">Start</button>
      </div>
    </div>
  )
}

Timer.propTypes = {
  time: PropTypes.string.isRequired,
  handleReset: PropTypes.func.isRequired,
  handlePause: PropTypes.func.isRequired,
  handleStart: PropTypes.func.isRequired
}