import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Blog from './components/blog';

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar></Sidebar> 
          <Routes>
            <Route path='/' element={Home}></Route>
            <Route path='/blog' element={Blog}></Route>
          </Routes>
      	</div>
      </div>
    );
  }
}

export default App;