// import logo from './logo.svg';
import logo from './pic.png'
import './App.css';

function sendMessage(){
  // alert("How you doin'?");
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <a className="App-link">
          Hello
          {sendMessage()}
        </a>
      </header>
    </div>
  );
}

export default App;
