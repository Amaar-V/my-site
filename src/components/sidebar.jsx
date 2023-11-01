import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/img-bg.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Amaar Valliani</a></h1>
              <span className="email"><i className="icon-mail"></i> amaarvalliani@gmail.com</span>
              <span className="email"><i className="icon-mail"></i> avallian@ucsd.edu</span>
            </div>
            <br></br>
            <br></br>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Home</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#projects" data-nav-section="projects">Projects</a></li>
                </ul>
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
