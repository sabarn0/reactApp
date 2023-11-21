import './main.css'
import Greeting from './Greeting';
import gif from './gif.gif';
import HelpWidget from './HelpWidget';

function App(){
    return(
        <div className='main-container'>
            <div className='greeting-container'>
                <Greeting></Greeting>
            </div>
            <div className='content-container'>
                <img src={gif} className='gif'></img>
                <span>Brain not braining, Developer not developing</span>
            </div>
            <HelpWidget></HelpWidget>
        </div>
    );
}

export default App