import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Qrcode.css';
import Qrcode from './Components/Qrcode';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Qrcode/>
  </React.StrictMode>
);
