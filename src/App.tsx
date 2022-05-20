import React from 'react';
import { Outlet } from 'react-router-dom';
import logo from '/public/logo-512x512.png';
import './style.css';

function App() {
  return (
    <main className='App'>
    <h1>React App TS</h1>
    <img src={logo} className="App-logo" alt="logo" />
    <Outlet/>
    </main>
  )
}

export default App