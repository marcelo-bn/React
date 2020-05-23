import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App nome="Marcelo" idade={99}/>
  </React.StrictMode>,
  document.getElementById('root')
);


