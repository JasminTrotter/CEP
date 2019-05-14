import React from 'react';
import tessHeadshot from '../assets/images/tess-headshot.jpeg';

export default class About extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0);
		this.props.isHome();
	}
	  
	render() {
		return(
			<div className="About-container">
				<section>
					<h2>About Tess</h2>
					<div className="photo-section">
						<div className="photo-section-text">
							<p>
								Tess Trotter graduated from Georgetown University with a B.A. in English. While working at a non-profit as a Communications Associate, she gained extensive experience in building brand awareness, social media management and writing/editing. Because of this experience, she started CEP Communications (Connect. Engage. Promote.) in 2016.
							</p>
							<p>
								CEP Communications assists with results-oriented social media management and advertising, SEO, email marketing and various other communications collateral.
							</p>
						</div>
						<div className="photo-container">
							<img src={tessHeadshot} alt="tess trotter" />
						</div>
					</div>
				</section>
			</div>
		);
	}
}