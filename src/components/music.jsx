import React, { Component } from 'react'

export default class Music extends Component {
  render() {
    return (
      <div id="colorlib-main">
        <br></br>
        <br></br>
        <h1 className="text-center" data-section="top">Music App</h1>
        <br></br>
        <section className="colorlib-about" data-section="post1">
        <div className="colorlib-narrow-content">
        {this.props.load('http://goldfirestudios.com/proj/howlerjs/sound.ogg', {
            autoplay: true
        })}
        </div>
        </section>
      </div>
    )
  }
}