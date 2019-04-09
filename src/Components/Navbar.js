import React from 'react';
import '../styles/Navbar.css';
import NavLinks from './NavLinks';

export default class Navbar extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
            isHamburgerOpen: false,
        };

        this.closeHamburger = this.closeHamburger.bind(this);
      }
      
      hamburgerShow() {
            const currentState = this.state.isHamburgerOpen;
            this.setState({ isHamburgerOpen: !currentState });
      };

      closeHamburger() {
            this.setState({isHamburgerOpen: false});
      }
 

      render() {

            if(this.state.isHamburgerOpen) {
                  return (
                        <div className="navbar">
                              <nav className="mobile-nav">
                                    <button className="hamburger" onClick={()=>{this.hamburgerShow()}}><i className="fa fa-angle-double-up"></i></button>
                                    <div className="link-container">
                                          <NavLinks
                                                closeHamburger={this.closeHamburger}
                                          />
                                    </div>
                              </nav>
                        </div>
                  );

            }
      	return (
      		<div className="navbar">
            		<nav className="desktop-nav">
                              <NavLinks 
                                    closeHamburger={this.closeHamburger}
                              />
            		</nav>
                        
                        <nav className="mobile-nav hidden">
                              <button className="hamburger" onClick={()=>{this.hamburgerShow()}}><i className="fa fa-angle-double-down"></i></button>
                        </nav>
                  
                  </div>
      	);
      }
}
