import React, { useState, useEffect } from 'react';
import './App.css'

const MessageComponent = () => {
    const messages = [
        'Hi Tiksha',
        'Sorry i was busy the past few days',
        'I was caught up with work',
        'Please dont be mad',
        '🫰'
    ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [messages.length]); // Include messages.length in the dependency array

  return (
    <div>
      <h1>{messages[currentMessageIndex]}</h1>
      {/* {currentMessageIndex === messages.length - 1 && (
        <span className='emoji'>🫰</span>
      )} */}
    </div>
  );
};

export default MessageComponent;



