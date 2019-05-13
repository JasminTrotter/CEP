import React from 'react';
import ClientLogos from './ClientLogos';
import '../styles/Home.css';
import stock from '../assets/images/homepage-stock.jpg';
import lendevity from '../assets/images/lendevity.png';
import artpropel from '../assets/images/artpropel.png';
import BeWhys from '../assets/images/BeWhys_Logo_whitecolor.png';
import Eevoy from '../assets/images/Eevoy.png';
import hobknobin from '../assets/images/hobknobin.png';
import GetALoveLife from '../assets/images/get-a-love-life.png'
import LeeTaylorNelms from '../assets/images/LeeTaylorNelms.png';
// eslint-disable-next-line
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Slider from './PhotoSlider/Slider';


export default class Home extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		window.scrollTo(0, 0);
		this.props.isHome();
	}

	render() {
		return (
			
			<div className="Home">
				<section className="photo-section">
					<div className="photo-section-text">
						<p>
							CEP Communications assists with results-oriented social media management and advertising, SEO, email marketing and various other communications collateral.
						</p>
						<Link to="/about">
							<div className="read-more">
								<span>Read More</span>
							</div>
						</Link>
					</div>
					<div className="photo-container">
						<img src={stock} alt="stock for CEP Communications marketing" />
					</div>
				</section>
				<section className="list-of-services">
					<h2>Services</h2>
					<Link to="/services">
						<ul>
							<li>Social Media Page Management </li>
							<li>Social Media Advertising</li>
							<li>SEO</li>
							<li>Email Marketing</li>
						</ul>
						<div className="read-more">
							<span>Read More</span>
						</div>
					</Link>
				</section>
				<section className="client-logos">
					<h2>Clients</h2>
					<ClientLogos 
						logosArray={[
							{ name: lendevity, background: 'white' }, 
							{ name: artpropel, background: 'dark' },
							{ name: LeeTaylorNelms, background: 'light'},
							{ name: Eevoy, background: 'light' }, 
							{ name: hobknobin, background: 'white' }, 
							{ name: GetALoveLife, background: 'white' }, 
							{ name: BeWhys, background: 'dark' }, 
						]} 
					/>
				</section>
			</div>
		);
    }
}