import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';

const appUsageCount = parseInt(localStorage.getItem('appUsageCount')) || 0;

if(appUsageCount){
  localStorage.setItem('appUsageCount', parseInt(appUsageCount) +1)
}
else{
  localStorage.setItem('appUsageCount', 1)
}

if (appUsageCount > 0 && appUsageCount % 5 === 0) {
  alert("If you miss him you should text him..")
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
