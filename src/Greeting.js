import './App.css'

function Greeting(){
    var now = new Date();
    var hour = now.getHours();

    var greeting = "";
    if(hour>=21 || hour<5)
        greeting = "Night ❤️";
    else if(hour>=5 && hour<12)
        greeting = "Morning ❤️";
    else if(hour>=12 && hour<=18)
        greeting = "Afternoon 💪";
    else
        greeting = "Evening ☕";

    var message = greeting;
    
    return(
        <span>Good<br />{message}</span> 
    )
}

export default Greeting