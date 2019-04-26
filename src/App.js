import React from 'react';
import logo from './logo.svg';
import './App.css';
import ElapsedTime from './ElapsedTime';
import StartButton from './StartButton';
import StopButton from './StopButton';
import ResetButton from './ResetButton';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      seconds: 0,
      counting: false,
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ElapsedTime seconds={this.state.seconds} />
          <StartButton handleStart={this._startsTimer} />
          <StopButton handleStop={this._stopTimer} />
          <ResetButton handleReset={this._resetTimer} />
        </header>
      </div>
    );
  }

  _startsTimer = () => {
    clearInterval(this.something);
    this.setState({
      counting: true
    })
    this.something = setInterval(() => {
      if(this.state.counting) {
        this.setState({
          seconds: this.state.seconds + 1
        })
      }
    }, 10)    
  }
  _stopTimer = () => {
    clearInterval(this.something);
    this.setState({
      counting: false
    })
  }
  _resetTimer = () => {
    clearInterval(this.something);
    this.setState({
      counting: false,
      seconds: 0
    })
  }
}

export default App;
