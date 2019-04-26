import React from 'react';
import logo from './logo.svg';
import './App.css';
import StopWatch from './StopWatch';


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
          <StopWatch status={this.state.counting} seconds={this.state.seconds} handleStart={this._startsTimer} handleStop={this._stopTimer} handleReset={this._resetTimer}/>
        </header>
      </div>
    );
  }

  _startsTimer = () => {
    this.setState({
      counting: true
    })
    this.something = setInterval(() => {
      if(this.state.counting) {
        this.setState({
          seconds: this.state.seconds + 1
        })
      }
    }, 1000)    
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
