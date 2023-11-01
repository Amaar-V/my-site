import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>Hello, I am Amaar Valliani. I'm a senior at UC San Diego studying Mathematics-Computer Science. 
                        I have lived most of my life in Houston, TX and am currently live in San Diego, CA.
                        I enjoy working with Computer Science, especially when it comes to working on projects or teaching topics in the field.
                        I have worked as a tutor for the UCSD CSE department where I taught for 7 quarters with many courses (CSE 12, CSE 15L, CSE 100, CSE 105).
                        I plan to do a masters in Computer Science next year to continue my education and specialize further in the field.
                        </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What do I do?</span>
                <h2 className="colorlib-heading">Here are some things I enjoy:</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-code" />
                </span>
                <div className="desc">
                    <h3>Computer Science</h3>
                    <p>Computer Science has always facinated me along with the tools and techniques involved in creating useful technologies used daily by billions. I paticularly want to focus on descrete Mathematics and computation theory in CS.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-steam" />
                </span>
                <div className="desc">
                    <h3>Video Games</h3>
                    <p>I have played games every since I was a kid and it continues to be a common and relaxing hobby of mine. I currently have many hours in R6, CSGO, and Apex, but also play many single-player games.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-food" />
                </span>
                <div className="desc">
                    <h3>Food</h3>
                    <p>I love exploring new cuisines and also trying new dishes whenever I eat. I also enjoying cooking, baking, and going to interesting resturants to find insperation for my own creations. </p>
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