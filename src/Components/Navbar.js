import React from 'react';
// eslint-disable-next-line 
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import '../styles/Navbar.css';

export default class Navbar extends React.Component {
      constructor(props) {
        super(props);
        // this.addActiveClass= this.addActiveClass.bind(this);
        this.state = {
            isHamburgerOpen: false,
        };
       }
          hamburgerShow() {
              const currentState = this.state.isHamburgerOpen;
              this.setState({ isHamburgerOpen: !currentState });
          };
      
 

      render() {

            const navLinks = <div>
                                    <div><Link to="/" className="navlink">Home</Link></div>
                                    <div><Link to="/about" className="navlink">About</Link></div>
                                    <div><Link to="/services" className="navlink">Services</Link></div>
                                    <div><Link to="/testimonials" className="navlink">Testimonials</Link></div>
                                    <div><Link to="/contact" className="navlink">Contact</Link></div>
                              </div>

            if(this.state.isHamburgerOpen) {
                  return (
                        <div className="navbar">
                              <nav className="mobile-nav">
                                    <button className="hamburger" onClick={()=>{this.hamburgerShow()}}><i className="fa fa-angle-double-up"></i></button>
                                    <div className="link-container">
                                          {navLinks}
                                    </div>
                              </nav>
                        </div>
                  );

            }
      	return (
      		<div className="navbar">
            		<nav className="desktop-nav">
                              {navLinks}
            		</nav>
                        
                        <nav className="mobile-nav hidden">
                              <button className="hamburger" onClick={()=>{this.hamburgerShow()}}><i className="fa fa-angle-double-down"></i></button>
                        </nav>
                  
                  </div>
      	);
      }
}
