import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default class Navbar extends React.Component {
      constructor(props) {
        super(props);
        // this.addActiveClass= this.addActiveClass.bind(this);
        this.state = {
            active: false,
        };
       }
          hamburgerShow() {
              const currentState = this.state.active;
              this.setState({ active: !currentState });
          };
      
 

      render() {

            const navLinks = <div>
                                    <Link to="/" className="navlink">Home</Link>
                                    <Link to="/about" className="navlink">About</Link>
                                    <Link to="/services" className="navlink">Services</Link>
                                    <Link to="/testimonials" className="navlink">Testimonials</Link>
                                    <Link to="/contact" className="navlink">Contact</Link> 
                              </div>

            if(this.state.active) {
                  return (
                        <nav className="mobileNav">
                              <div className="link-container">
                                    {navLinks}
                              </div>
                              <button className="hamburger" onClick={()=>{this.hamburgerShow()}}>Menu <i class="fa fa-angle-double-up"></i></button>
                                                      
                        </nav>

                  );

            }
      	return (
      		<div className="navbar">
            		<nav className="desktopNav">
                              {navLinks}
            		</nav>
                        
                        <nav className="mobileNav hidden">
                              <div className="link-container">
                              </div>
                              <button className="hamburger" onClick={()=>{this.hamburgerShow()}}>Menu <i class="fa fa-angle-double-down"></i></button>
                        </nav>
                  
                  </div>
      	);
      }
}
