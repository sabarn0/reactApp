// src/App.js
import React, { useState, useEffect } from 'react';
import Greeting from './GreetingPage';
import './App.css';
import img from './pic.jpg';
import img2 from './pic2.jpg';
import img3 from './pic3.jpg';
import gif from './gif.gif';

const App = () => {
  const [userName, setUserName] = useState('');
  const [inputName, setInputName] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    let storedName = localStorage.getItem('userName');
    if (storedName) {
      setUserName(storedName);
    }

    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  let [image_source, setSource] = useState(img);
  let images = [img, img2, img3];

  useEffect(() => {
    setSource(images[currentImageIndex]);
  }, [currentImageIndex, images]);

  const handleNameSave = () => {
    localStorage.setItem('userName', inputName);
    setUserName(inputName);
  };

  const resetName = () => {
    localStorage.setItem('userName', '');
    setUserName('');
  };

  const contactDev = () => {
    let res = 'tel:9008937624';
    window.location.href = res;
  };

  return (
    <div className='main-container'>
      {userName ? (
        <div>
          <div className='message-container'>
            <span style={{ fontSize: '36px' }}>Hi {userName},</span>
            <br />
            <span className='msg_size_M'>
              <Greeting></Greeting>
            </span>
            {/* <button className='btn btn-danger' onClick={resetName}>Reset</button> */}
          </div>
          <div className='image-container'>
            <img src={image_source} className='img' />
          </div>
          <div className='image-container'>
            Brain is not braining, Developer is not developing.<br />
            Kya dekh rhi ho?
            <img src={gif} className='img' />
          </div>
          <div className='help-div'>
            <button className='btn help_btn' onClick={contactDev}>
              Report An Issue!
            </button>
          </div>
        </div>
      ) : (
        <div className='login-container'>
          <h1>Enter Your Name</h1>
          <div className='input-container'>
            <input
              className='input_ao_ta'
              type='text'
              id='name_ip'
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
            />
            <button className='input_ao_btn' onClick={handleNameSave}>
              K
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
