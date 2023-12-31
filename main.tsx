import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './src/app/app';
import './src/css/main.css';
import './src/css/styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
