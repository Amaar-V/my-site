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
						<Link to="/my-site/blog" className="blog-img">
							<img src="images/blogvideogames.png" className="img-responsive" alt="my steam library" />
							<div className="desc">
								<span><small>November 21, 2023</small> | <small> Video Games </small> </span>
								<h3><a href="blog.html"> My Various Top Games</a></h3>
								<p>This is a pastime that I use to relax, connect with friends, and simulate my mood so there are many 
                       games I cherish yet...</p>
							</div>
						</Link>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
					<div className="blog-entry">
						<Link to="/my-site/blog" className="blog-img">
							<img src="images/blogmusic.png" className="img-responsive" alt="my spotify wrapped" />
							<div className="desc">
								<span><small>November 21, 2023 </small> | <small> Music </small> </span>
								<h3><a href="blog.html"> A Journey into my Music Tastes by Spotify Playlists</a> </h3>
								<p>My top playlists on Spotify include general genres like Pop, EDM, Rock, Hip-Hop, and Classical. 
                      I wanted to take a closer... </p>
							</div>
						</Link>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<Link to="/my-site/blog" className="blog-img">
							<img src="images/blogkatsu.jpeg" className="img-responsive" alt="my chicken katsu" />
							<div className="desc">
								<span><small>November 21, 2023 </small> | <small> Food </small> </span>
								<h3><a href="blog.html"> My Recipe for Chicken Katsu</a></h3>
								<p>This recipe is pretty basic but Chicken Katsu is my favorite dish and I wanted to document how I make it.
                       You will need chicken breast, egg... </p>
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
