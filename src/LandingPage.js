// src/LandingPage.js
import React, { useState } from 'react';

const LandingPage = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const handleSubmit = () => {
    onSubmit(name);
  };

  return (
    <div>
      <h1>Welcome to the Greeting App!</h1>
      <p>Please enter your name:</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default LandingPage;
