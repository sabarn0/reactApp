import React, { useState, useEffect } from 'react';

const MessageComponent = () => {
  const messages = [
    'Hi Tiksha',
    'Sorry for being unavailable the past few days',
    'I was caught up with work',
    'Hope you\'re not mad about it',
    '🫰',
    'Pani Puri in the evening?'
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;

        // Check if it's the last message and clear the interval
        if (nextIndex === messages.length-1) {
          clearInterval(intervalId);
        }

        return nextIndex % messages.length;
      });
    }, 3000);

    return () => clearInterval(intervalId);
  }, [messages.length]);

  return (
    <div className='msg'>
      <h1>{messages[currentMessageIndex]}</h1>
    </div>
  );
};

export default MessageComponent;
