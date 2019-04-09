import React, { Component } from 'react';
import '../styles/App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom'; 
import Navbar from './Navbar';
import Header from './Header';
import Home from './Home';
import About from './About';
import Services from './Services';
import Testimonials from './Testimonials';
import Contact from './Contact';
import gmail from '../assets/logos/gmaillogo.png'

class App extends Component {
  render() {
    return (
      <div className="App-container">
        <Router>
          <div className="App">
            <Header />
            <Navbar />
            
            <main>
              <Route exact path="/" component={Home} />
              <Route exact path="/" component={About} />
              <Route exact path="/" component={Services} />
              <Route exact path="/" component={Testimonials} />
              <Route exact path="/" component={Contact} />
            </main>
            <footer>
              <div class="contact-links">
                  <div class="contact-link">
                      <button onClick={() => window.open('mailto:tess@cepcommunications.com')}>
                      <i class="far fa-envelope"></i>
                      </button> 
                  </div>

                  <div class="contact-link">
                      <button onClick={() => window.open('https://www.instagram.com/tess.trotter/')}>
                      <i class="fab fa-instagram"></i>
                      </button>
                  </div>
              </div>
              <p id="location">
                &#128205; Based in (but not limited to) Los Angeles, CA.
                </p>
            </footer>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
