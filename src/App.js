// import logo from './logo.svg';
import './App.css';
import LiveClockUpdate from './liveTime';

function App() {
  let now = new Date();
  console.log(now)
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
        <a className="App-link">
        <LiveClockUpdate></LiveClockUpdate>
        </a>
      </header>
    </div>
  );
}

export default App;
