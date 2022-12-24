import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
