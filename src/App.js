import React from 'react';
import logo from './logo.svg';
import './App.css';
import StopWatch from './StopWatch';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 0,
      counting: false,
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <StopWatch status={this.state.counting} time={this.state.time} handleStart={this._startsTimer} handleStop={this._stopTimer}/>
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
          time: this.state.time + 1
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
}

export default App;
