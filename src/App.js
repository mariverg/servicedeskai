/* import logo from './logo.svg';
import './App.css';

 function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */
// src/App.js
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Cambiamos Switch por Routes
import Layout from './components/Layout';  // Layout principal
import Home from './pages/Home';           // Página de inicio
import Profile from './pages/Profile';     // Página de perfil
import Tickets from './pages/Tickets';     // Página de tickets

function App() {
  return (
    <Router>
      <Layout>
        <Routes>  {/* Cambiamos Switch por Routes */}
          <Route path="/" element={<Home />} />        {/* La sintaxis de Route también cambia */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/tickets" element={<Tickets />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
