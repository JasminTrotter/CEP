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


export default class Home extends React.Component {
	componentDidMount() {
  		window.scrollTo(0, 0)
	}

	render() {
		return (
			
			<div className="Home">
				<section className="intro-blurb">
					<div className="blurb">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</p>
						<button className="read-more">Read More</button>	
					</div>
					<div className="stock-photo">
						<img src={stock} alt="stock for CEP Communications marketing" />
					</div>
				</section>
				<section className="list-of-services">
					<h2>Services</h2>
					<ul>
						<li>Lorem Ipsum</li>
						<li>Dolor Sit Amet</li>
						<li>Consectetur Adipiscing Elit</li>
						<li>Sed do Eiusmod Tempor Incididunt ut Labore et Dolore Magna Aliqua</li>
						<li>Ut Enim ad Minim Veniam</li>
					</ul>
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