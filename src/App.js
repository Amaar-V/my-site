import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Main from './components/home'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <Sidebar></Sidebar> 
          <Main></Main>
      	</div>
      </div>
    );
  }
}

export default App;