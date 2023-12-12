import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import { Routes, Route, useLocation } from 'react-router-dom';
import { useGlobalAudioPlayer } from 'react-use-audio-player';
import Home from './components/home';
import Blog from './components/blog';
import Music from './components/music';

const LocationComponent = props => {
  const location = useLocation()
  return <Sidebar location={location} {...props} /> 
}

const MusicComponent = props => {
  const { load } = useGlobalAudioPlayer();
  return <Music load = {load} {...props} />
}

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <LocationComponent></LocationComponent>
          <Routes>
            <Route path='/' Component={Home}></Route>
            <Route path='/blog' Component={Blog}></Route>
            <Route path='/music' Component={MusicComponent}></Route>
          </Routes>
      	</div>
      </div>
    );
  }
}

export default App;