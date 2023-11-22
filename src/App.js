// src/App.js
import React, { useState, useEffect } from 'react';
import Greeting from './GreetingPage';
import './App.css';
import img from './pic.jpg'
import MyComponent from './PicPopUp';

const App = () => {
  let [userName, setUserName] = useState('');
  let [inputName, setInputName] = useState('');

  useEffect(() => {
    // Check if the user name is stored in local storage
    let storedName = localStorage.getItem('userName');
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  const handleNameSave = () => {
    // Save the input name to local storage
    localStorage.setItem('userName', inputName);
    setUserName(inputName);
  };

  const resetName = () => {
    localStorage.setItem('userName', '');
    setUserName(''); // Update this line
  } 

  const contactDev = () =>{
    let res = "tel:9008937624"
    window.location.href = res;
  }

  return (
    <div className='main-container'>
      {userName ? (
        <div className='message-container'>
          <span style={{"font-size": "48px"}}>Hi {userName},</span><br />
          <span className='msg_size_M'><Greeting></Greeting></span>          
          <div className='image-container'>
            <img src={img} className='img'></img>
          </div>
          {/* <MyComponent></MyComponent> */}
          <button className='btn help_btn' onClick={contactDev}>Report An Issue!</button>
          {/* <button className='btn btn-danger' onClick={resetName}>Reset</button> */}
        </div>
      ) : (
        <div className='login-container'>
          <h1>Enter Your Name</h1>
          <div className='input-container'>
            <input
                className="input_ao_ta"
                type="text"
                id="name_ip"
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
            />
            <button className="input_ao_btn" onClick={handleNameSave}>K</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
