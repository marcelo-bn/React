import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css' 


ReactDOM.render(
  <React.StrictMode>
    <App nome="Marcelo" idade={99}/>
  </React.StrictMode>,
  document.getElementById('root')
);


