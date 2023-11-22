import React, { useEffect, useState } from "react";

const Greeting = () => {
    let [message, setMessage] = useState('');

    useEffect(()=>{       
        var now = new Date();
        var hour = now.getHours();
        let msg = "";
        if (hour>= 5 && hour<12)
            msg = "Morning\n❤️";
        else if (hour>=12 && hour<18)
            msg = "Afternoon\n❤️"
        else if (hour>=18 && hour<21)
            msg = "Evening\n❤️";
        else
            msg = "Night\n❤️";

        setMessage(msg);
    },[]);

    return (
        <>
            <span style={{"font-size": "54px"}}>Good</span>
            <br />
            <span style={{"font-size": "60px"}}>{message}</span>
        </>
    );
}

export default Greeting;

