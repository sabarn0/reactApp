import './App.css';
import React, {UseState, UseEffect} from 'react';
import MessageComponent from './message.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        
        <a className="App-link">
        <LiveClockUpdate></LiveClockUpdate>
        </a> */}
        
        <a className='App-link'>
          
      <MessageComponent />
        </a>
      </header>
    </div>
  );
}

export default App;
