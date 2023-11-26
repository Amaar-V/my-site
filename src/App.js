import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/home';
import Blog from './components/blog';

const LocationComponent = props => {
  const location = useLocation()
  return <Sidebar location={location} {...props} /> 
}

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <LocationComponent></LocationComponent>
          <Routes>
            <Route path='/my-site' Component={Home}></Route>
            <Route path='/my-site/blog' Component={Blog}></Route>
          </Routes>
      	</div>
      </div>
    );
  }
}

export default App;