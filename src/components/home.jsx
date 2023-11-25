import React, { Component } from 'react';
import Introduction from './introduction'
import About from './about'
import Projects from './projects'
import BlogIndex from './blogIndex'

class Home extends Component {
  render() {
    return (
		<div id="colorlib-main">
			<Introduction></Introduction>
			<About></About>
      <Projects></Projects>
      <BlogIndex></BlogIndex>
      <div>
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
        <p>.</p>
      </div>
    </div>
    );
  }
}

export default Home;