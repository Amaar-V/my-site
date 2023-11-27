import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/profile.jpg)'}} />
              <h1 id="colorlib-logo"><a href="./#/my-site">Amaar Valliani</a></h1>
              <span className="email"><i className="icon-mail"></i> amaarvalliani@gmail.com</span>
              <span className="email"><i className="icon-mail"></i> avallian@ucsd.edu</span>
              <br></br>
              <p style={{color: 'blue'}}>Please refresh (CMD + R or WINDOWS + R) page if blank. Still sorting out some technical problems!</p>
            </div>
            <br></br>
            {/*<nav id="colorlib-main-menu" role="navigation">
            <div id="navbar" className="collapse">
            <ul>
                <li><Link to="/my-site">Home Page</Link></li>
                <li><Link to="/my-site/blog">Blog Page</Link></li>
              </ul>
            </div>
            </nav>*/}
            <br></br>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
              {this.props.location.pathname.includes('/blog') ? (
                <ul>
                  <li className="active"><a href="#top" data-nav-section="top">Home</a></li>
                  <li><a href="#post1" data-nav-section="post1"> Title 1</a></li>
                  <li><a href="#post2" data-nav-section="post2"> Title 2</a></li>
                  <li><a href='#post3' data-nav-section='post3'> Title 3</a></li>
                </ul>
              ) : (
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Home</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#projects" data-nav-section="projects">Projects</a></li>
                  <li><a href='#blog' data-nav-section='blog'>Blog</a></li>
                </ul>
              )}
              </div>
            </nav>
            <br></br>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="http://www.linkedin.com/in/AmaarValliani" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/Amaar-V" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
              </ul>
            </nav>
            <br></br>
            <br></br>
            <div className="colorlib-footer">
              <p><small>
                  Made with <i className="icon-heart" aria-hidden="true" /> and <i className="icon-coffee" aria-hidden="true"></i><br></br>
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
