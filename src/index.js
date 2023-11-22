import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';

// Retrieve the application usage count from localStorage
const appUsageCount = parseInt(localStorage.getItem('appUsageCount')) || 0;

if(appUsageCount){
  localStorage.setItem('appUsageCount', parseInt(appUsageCount) +1)
}
else{
  localStorage.setItem('appUsageCount', parseInt(1))
}

// Check if the count is a multiple of 5 and show an alert
if (appUsageCount > 0 && appUsageCount % 5 === 0) {
  alert("If you miss him you should text him..")
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
