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
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
							</div>
						<i className="fas fa-quote-right"></i>
					</div>
					<p className="attribution-block">
						<em>-- Lorem Ipsum, Dolor Sit Amet Company</em>
					</p>
				</section>
				<section className="testimonial-item">
					<div className="quote-block">
						<i className="fas fa-quote-left"></i>
							<div>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
							</div>
						<i className="fas fa-quote-right"></i>
					</div>
					<p className="attribution-block">
						<em>-- Lorem Ipsum, Dolor Sit Amet Company</em>
					</p>
				</section>
				<section className="testimonial-item">
					<div className="quote-block">
						<i className="fas fa-quote-left"></i>
							<div>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
							</div>
						<i className="fas fa-quote-right"></i>
					</div>
					<p className="attribution-block">
						<em>-- Lorem Ipsum, Dolor Sit Amet Company</em>
					</p>
				</section>
				<section className="testimonial-item">
					<div className="quote-block">
						<i className="fas fa-quote-left"></i>
							<div>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
							</div>
						<i className="fas fa-quote-right"></i>
					</div>
					<p className="attribution-block">
						<em>-- Lorem Ipsum, Dolor Sit Amet Company</em>
					</p>
				</section>
				<section className="testimonial-item">
					<div className="quote-block">
						<i className="fas fa-quote-left"></i>
							<div>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
							</div>
						<i className="fas fa-quote-right"></i>
					</div>
					<p className="attribution-block">
						<em>-- Lorem Ipsum, Dolor Sit Amet Company</em>
					</p>
				</section>
			</div>
		);
	}
}