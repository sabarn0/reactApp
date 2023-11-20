import './App.css'

function App(){
    var now = new Date();
    var hour = now.getHours();

    var greeting = "";
    if(hour>=21 || hour<5)
        greeting = "Good Night ❤️";
    else if(hour>=5 && hour<12)
        greeting = "Good Morning ❤️";
    else if(hour>=12 && hour<=18)
        greeting = "Good Afternoon 💪";
    else
        greeting = "Good Evening ☕";

    var message = greeting;
    
    return(
        <div className='App'>
            <div className='App-header'>
                <a className='App-link'>{message}</a>                
            </div>
        </div>
    )
}

export default App