import React, { useState, useEffect } from 'react';
import { ClipLoader } from 'react-spinners';
import Greeting from './Greeting';
import './App.css';
import gif from './gif.gif'

const LoadingSpinner = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading or any async operation
    const fetchData = async () => {
      // Simulating a delay with setTimeout
      setTimeout(() => {
        setLoading(false);
      }, 3000); // 10 seconds delay (adjust as needed)
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <div className="spinner-container">
            <ClipLoader color="#36D7B7" loading={loading} size={15} />
        </div>
      ) : (
        // <App />
        <div className='gif-container'>
          {/* <Greeting /> */}
          <img src={gif} className='img'></img>
        </div>
      )}
    </>
  );
};

export default LoadingSpinner;
