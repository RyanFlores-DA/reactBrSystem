import React from 'react';
import ReactDOM from 'react-dom/client';
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Header from './Header';
import Align from './Align';
import List from './Table';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Header /> */}
    <Align />
    <List />
  </React.StrictMode>
);


reportWebVitals();
