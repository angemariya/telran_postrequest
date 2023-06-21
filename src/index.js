import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeChanger } from './components/Eshop/ThemeChanger';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeChanger>
      <App />
    </ThemeChanger>
  </React.StrictMode>
);
