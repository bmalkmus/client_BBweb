import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('menuContainer')
);


registerServiceWorker();