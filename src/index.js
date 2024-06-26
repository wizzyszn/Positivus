import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ThemeContextAPI from './context/ThemeContextAPI';
import CustomCursorManager from "../src/context/Manager"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CustomCursorManager>
    <ThemeContextAPI>
    <App />
    </ThemeContextAPI>
    </CustomCursorManager>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
