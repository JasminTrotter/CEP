import React from 'react';
import '../styles/Testimonials.css';

export default class Testimonials extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		window.scrollTo(0, 0);
		this.props.isHome();
	}

	render() {
		return(
			<div className="Testimonials-container">
				<h2>Testimonials</h2>
				<section className="testimonial-item">
					<div className="quote-block">
						<i className="fas fa-quote-left"></i>
							<div>
								It has been a pleasure working with Tess. She is great at what she does and maintains professionalism at all times.
							</div>
						<i className="fas fa-quote-right"></i>
					</div>
					<p className="attribution-block">
						<em>-- EEVOY</em>
					</p>
				</section>
				<section className="testimonial-item">
					<div className="quote-block">
						<i className="fas fa-quote-left"></i>
							<div>
								Tess is very professional and willing to help where needed! She has great ideas and was able to help us develop a good social media strategy. Thanks Tess!
							</div>
						<i className="fas fa-quote-right"></i>
					</div>
					<p className="attribution-block">
						<em>-- National Real Estate Management Group</em>
					</p>
				</section>
				<section className="testimonial-item">
					<div className="quote-block">
						<i className="fas fa-quote-left"></i>
							<div>
								It's been an absolute joy to work with Tess. She did a fantastic job assisting me with social media and marketing tasks, with my new program launch, always ready with solid recommendations to build/grow and readiness to get things done quickly and effortlessly. I look forward to working with her on my upcoming projects in the upcoming year.
							</div>
						<i className="fas fa-quote-right"></i>
					</div>
					<p className="attribution-block">
						<em>-- My Amazing LYFE</em>
					</p>
				</section>
				<section className="testimonial-item">
					<div className="quote-block">
						<i className="fas fa-quote-left"></i>
							<div>
							Tess has been an absolute pleasure working with! She did an excellent job providing original organic content to my Facebook page. Thank you.
							</div>
						<i className="fas fa-quote-right"></i>
					</div>
					<p className="attribution-block">
						<em>-- Hobknobin</em>
					</p>
				</section>
			</div>
		);
	}
}