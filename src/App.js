// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Registartion from './components/Registartion';



function App() {
  return (

    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/Registartion" element ={<Registartion/>} />
    </Routes>
      );
}

export default App;
