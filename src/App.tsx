import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/home';
import Search from './pages/search';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/search' element={<Search></Search>}></Route>
    </Routes>
  );
}

export default App;
