import React from 'react';
import logo from './logo.svg';
import './App.css';
import ElapsedTime from './ElapsedTime';
import StartButton from './StartButton';
import StopButton from './StopButton';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ElapsedTime />
          <StartButton />
          <StopButton />
        </header>
      </div>
    );
  }
}

export default App;
