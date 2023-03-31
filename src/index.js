import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {configureStore} from './store'

const store=configureStore();
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log('store',store.getState());
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



