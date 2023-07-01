import { React, Component } from "react"
import './Main.css'
import Timer from './Timer'

export default class Main extends Component {
  state = {
    current_time: '00:00:00',
    timerInterval: null,
    startTime: 0,
    elapsedTime: 0

  }

  formatTime(milliseconds) {
    const date = new Date(milliseconds);
    return date.toISOString().substr(11, 8);
  }

  updateTimer = () => {
    const { startTime, elapsedTime } = this.state
    const currentTime = Date.now();
    const deltaTime = currentTime - startTime;
    const totalTime = elapsedTime + deltaTime;
    this.setState({
      current_time: this.formatTime(totalTime) 
    })
  }

  startTimer = () => {
    const { timerInterval } = this.state
    if (!timerInterval) {
      this.setState({
        startTime: Date.now(),
        timerInterval: setInterval(this.updateTimer, 1000)
      })
    }
  }

  pauseTimer = () => {
    let { startTime, timerInterval, elapsedTime } = this.state
    if (timerInterval) {
      clearInterval(timerInterval);
      elapsedTime += Date.now() - startTime;
      this.setState({
        timerInterval: null,
        elapsedTime
      })
    }
  }

  resetTimer = () => {
    this.pauseTimer()
    let { timerInterval, elapsedTime } = this.state
    clearInterval(timerInterval);
    timerInterval = null;
    elapsedTime = 0;
    this.setState({
      current_time: '00:00:00',
      elapsedTime
    })
  }


  render() {
    const { current_time } = this.state
    return (
      <div className="main">
        <h1>Timer with React</h1>
        <Timer
          time={current_time}
          handleReset={this.resetTimer}
          handlePause={this.pauseTimer}
          handleStart={this.startTimer}
        />
      </div>
    )
  }
}