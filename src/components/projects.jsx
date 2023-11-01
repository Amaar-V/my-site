import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<a href="https://github.com/Amaar-V/CS-Term-Dictionary">
								<div className="project" style={{backgroundImage: 'url(images/img-1.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3>CS Term Dictionary</h3>
											<span>A CRUD web app that allows users to store, search, and sort Computer Science jargon and terms.</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> </a></span>
												<span><a href="#"><i className="icon-heart" /> </a></span>
											</p>
										</div>
									</div>
								</div>
								</a>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
							<a href="https://github.com/Amaar-V/Reddit_Bot">
								<div className="project" style={{backgroundImage: 'url(images/img-2.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3>Reddit Bot</h3>
											<span>A web bot created using an API that reads user posts and answers image queries on Reddit.</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> </a></span>
												<span><a href="#"><i className="icon-heart" /> </a></span>
											</p>
										</div>
									</div>
								</div>
							</a>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
							<a href="https://github.com/Amaar-V/my-site">
								<div className="project" style={{backgroundImage: 'url(images/img-3.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3>Personal Website</h3>
											<span>This website! A personal blog and protfolio created using React, Javascript, HTML, and CSS for MUS 15.</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> </a></span>
												<span><a href="#"><i className="icon-heart" /> </a></span>
											</p>
										</div>
									</div>
								</div>
								</a>
							</div>
							
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
							<a href="https://github.com/Amaar-V/FamilyTree">
								<div className="project" style={{backgroundImage: 'url(images/img-4.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3>Family Tree</h3>
											<span>A high school project showcasing data storage and manipulation using Java.</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /></a></span>
												<span><a href="#"><i className="icon-heart" /></a></span>
											</p>
										</div>
									</div>
								</div>
							</a>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
							<a href="https://github.com/Amaar-V/Lab6_Starter">
								<div className="project" style={{backgroundImage: 'url(images/img-6.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3>CSE 110 Lab 6</h3>
											<span>Web design project for CSE 110 using HTML, CSS, and JavaScript</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> </a></span>
												<span><a href="#"><i className="icon-heart" /></a></span>
											</p>
										</div>
									</div>
								</div>
							</a>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
							<a href="https://github.com/Amaar-V/fa22-cse110-lab3">
								<div className="project" style={{backgroundImage: 'url(images/img-5.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3>CSE 110 Lab 3</h3>
											<span>Meeting minutes webpage using HTML and CSS created for CSE 110.</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> </a></span>
												<span><a href="#"><i className="icon-heart" /></a></span>
											</p>
										</div>
									</div>
								</div>
							</a>
							</div>
						</div>
						{/*<div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
							</div>
						</div>*/}
					</div>
				</section>
      </div>
    )
  }
}
