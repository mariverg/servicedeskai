/* import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; */

import React from 'react';
 import ReactDOM from 'react-dom';
import './styles/global.css';  // Estilos globales
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// src/index.js
// src/index.js
/*  import React from 'react';
 import ReactDOM from 'react-dom';
import './styles/global.css';  // Estilos globales
import App from './App';
import reportWebVitals from './reportWebVitals';  */ // Importamos reportWebVitals

/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); */

// Si quieres usar reportWebVitals
reportWebVitals();

