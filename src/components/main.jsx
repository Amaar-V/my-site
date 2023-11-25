import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './home';
import Blog from './blog';

const Main = () => {
  return (
    <Routes>
      <Route path='/' element={Home}></Route>
      <Route path='/blog' element={Blog}></Route>
    </Routes>
  );
}

export default Main;