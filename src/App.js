import logo from './logo.svg';
import './App.css';
import LiveClockUpdate from './liveTime';
import vd1 from './vid1.mp4';
import vd2 from './vid2.mp4';

function App() {
  let now = new Date();
  console.log(now)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <a className="App-link">
        <LiveClockUpdate></LiveClockUpdate>
        </a>
      </header>
      <div className='vdContainer'>        
      <iframe className='video' src={vd1} loop></iframe>
      </div>
      <div className='vdContainer'>        
      <iframe className='video' src={vd2} loop></iframe>
      </div>
    </div>
  );
}

export default App;
