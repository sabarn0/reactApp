import './helpwidget.css';
import React, { useState, useEffect} from 'react';

function LoadPhone(){
    var link = 'tel:9008937624';
    window.location.href = link;
}

function HelpWidget(){    
    const [isHidden, setIsHidden] = useState(true);

    useEffect(()=>{
        let x = setTimeout(()=>{
            setIsHidden(false)
        },1000);
        return ()=> clearTimeout(x);
    },[]);

    return(
        <div className={`widget-container ${isHidden?'hide':''}`}>
            <button className='widget' onClick={LoadPhone}>REPORT AN ISSUE</button>
        </div>
    )
}

export default HelpWidget;