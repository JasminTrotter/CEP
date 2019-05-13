import React from 'react';
import computer from '../assets/images/computer.jpg';

export default class Services extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		window.scrollTo(0, 0);
		this.props.isHome();
	}

	render() {
		return(
			<div className="Services-container">
				<section>
					<h2>Social Media Management</h2>
					<p>
					Social media management provides a way to continuously push out brand content and bring in new leads. Frequent activity on social media gives your brand a more personable and approachable essence.
					</p>
					<div className="service-includes">
						<p><b>Service includes:</b></p>
						<ul>
							<li>Social media audit</li>
							<li>Social media recommendations and strategy</li>
							<li>Monthly social media calendar</li>
							<li>Daily engagement (commenting, liking, responding to questions, etc.)</li>
							<li>Monthly reports on social channel growth</li>
						</ul>
					</div>
				</section>
				<section>
					<h2>Social Media Advertising </h2>
					<p>
						Social media advertising helps increase your digital reach, ultimately driving traffic to your website and increasing sales.
					</p>
					<div className="service-includes">
						<p><b>Service includes:</b></p>
						<ul>
							<li>Campaign recommendations and strategy</li>
							<li>Campaign content creation</li>
							<li>Target demographic research and testing</li>
							<li>A/B testing</li>
							<li>Reporting</li>
						</ul>
					</div>
				</section>
				<section>
					<h2>SEO</h2>
					<div className="photo-section">
						<div>
							<p className="photo-section-text">
								SEO helps boost search engine visibility and drive traffic to your website.
							</p>
							<div className="service-includes">
								<p><b>Service includes:</b></p>
								<ul>
									<li>Website content audit</li>
									<li>Website content curation</li>
								</ul>
							</div>
						</div>
						<div className="photo-container">
							<img src={computer} alt="tess trotter" />
						</div>
					</div>
				</section>
				<section>
					<h2>Email Marketing</h2>
					<p>
						Email marketing campaigns are an effective way to nurture existing leads. Keep them up-to-date with company news, offer discounts, etc.
					</p>
					<div className="service-includes">
						<p><b>Service includes:</b></p>
						<ul>
							<li>Email template design</li>
							<li>Campaign creation</li>
							<li>Content curation</li>
						</ul>
					</div>
				</section>
			</div>
		);
	}
}