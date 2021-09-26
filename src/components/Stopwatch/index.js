import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {minutesCount: 0}

  onStart = () => {
    clearInterval(this.timerId)
    this.timerId = setInterval(this.tick, 1000)
  }

  onStop = () => {
    clearInterval(this.timerId)
  }

  onReset = () => {
    this.setState({minutesCount: 0})
    clearInterval(this.timerId)
  }

  tick = () => {
    this.setState(prevState => ({minutesCount: prevState.minutesCount + 1}))
  }

  showMinutes = () => {
    const {minutesCount} = this.state
    const minutes = Math.floor(minutesCount / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  showSeconds = () => {
    const {minutesCount} = this.state
    const seconds = Math.floor(minutesCount % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  render() {
    const minuteSeconds = `${this.showMinutes()}:${this.showSeconds()}`

    return (
      <div className="main-container">
        <div className="bg-container">
          <div>
            <h1 className="stopwatch-heading">Stopwatch</h1>
            <div className="card-container">
              <div className="row-styling">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                  alt="stopwatch"
                  className="timer-image"
                />
                <h1 className="timer-heading">Timer</h1>
              </div>
              <p className="stopwatch-timer" id="timer">
                {minuteSeconds}
              </p>
              <div className="buttons">
                <button
                  type="button"
                  className="button-1"
                  onClick={this.onStart}
                >
                  Start
                </button>
                <button
                  type="button"
                  className="button-2"
                  onClick={this.onStop}
                >
                  Stop
                </button>
                <button
                  type="button"
                  className="button-3"
                  onClick={this.onReset}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
