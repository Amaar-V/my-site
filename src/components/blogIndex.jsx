import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class BlogIndex extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-blog" data-section="blog">
			<div className="colorlib-narrow-content">
				<div className="row">
					<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
					<span className="heading-meta">Read</span>
					<h2 className="colorlib-heading">Recent Blog</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<Link to="/my-site/blog">
							<a href="" className="blog-img"><img src="images/blog-1.jpg" className="img-responsive" alt="my steam library" /></a>
							<div className="desc">
								<span><small>November 21, 2023</small> | <small> Video Games </small> </span>
								<h3><a href="blog.html"> a</a></h3>
								<p></p>
							</div>
						</Link>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
					<div className="blog-entry">
						<Link to="/my-site/blog">
							<a href="" className="blog-img"><img src="images/blog-2.jpg" className="img-responsive" alt="my spotify wrapped" /></a>
							<div className="desc">
								<span><small>November 21, 2023 </small> | <small> Music </small> </span>
								<h3><a href="blog.html"> a</a> </h3>
								<p> </p>
							</div>
						</Link>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<Link to="/my-site/blog">
							<a href="" className="blog-img"><img src="images/blog-4.jpg" className="img-responsive" alt="collage of food pics" /></a>
							<div className="desc">
								<span><small>November 21, 2023 </small> | <small> Food </small> </span>
								<h3><a href="blog.html"> a</a></h3>
								<p> </p>
							</div>
						</Link>
					</div>
					</div>
				</div>
			</div>
			</section>
      </div>
    )
  }
}
