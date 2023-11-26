import React, { Component } from 'react'

export default class Blog extends Component {
  render() {
    return (
      <div id="colorlib-main">
        <br></br>
        <br></br>
        <h1 className="text-center" data-section="top">Blog</h1>
        <br></br>
        <section className="colorlib-about" data-section="post1">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className='heading-meta'><small>November 21, 2023</small> | <small> Video Games </small> </span>
                    <h2 className="colorlib-heading"> My Top Games by Hours Played</h2>
                    <p> .
                        </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about" data-section="post2">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className='heading-meta'><small>November 21, 2023</small> | <small> Music </small> </span>
                    <h2 className="colorlib-heading">A Journey into my Music Tastes by Spotify Playlists</h2>
                    <p> .
                        </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about" data-section="post3">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className='heading-meta'><small>November 21, 2023</small> | <small> Food </small> </span>
                    <h2 className="colorlib-heading"> My Top 3 From each Continent</h2>
                    <p> .
                        </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}