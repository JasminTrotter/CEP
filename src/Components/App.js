import React, { Component } from 'react';
import '../styles/App.css';
import {HashRouter as Router, Route} from 'react-router-dom'; 
import Navbar from './Navbar';
import Header from './Header';
import Home from './Home';
import About from './About';
import Services from './Services';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';
import Slider from './PhotoSlider/Slider';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHomePage: false
    }
    this.isHomePage = this.isHomePage.bind(this);
    this.isNotHomePage = this.isNotHomePage.bind(this);
  }

  isHomePage() {
    this.setState({
      isHomePage: true
    })
  }

  isNotHomePage() {
    this.setState({
      isHomePage: false
    })
  }

  render() {

console.log(this.state.isHomePage);

    return (
      <div className="App-container">
        <Router>
          <div className="App">
            <Header />
            <Navbar />
            { this.state.isHomePage && <Slider /> }
            <main>
              <Route exact path="/" render={(props) => <Home {...props} isHome={this.isHomePage} />} />
              <Route exact path="/about" render={(props) => <About {...props} isHome={this.isNotHomePage} />} />
              <Route exact path="/services" render={(props) => <Services {...props} isHome={this.isNotHomePage} />} />
              <Route exact path="/testimonials" render={(props) => <Testimonials {...props} isHome={this.isNotHomePage} />} />
              <Route exact path="/contact" render={(props) => <Contact {...props} isHome={this.isNotHomePage} />} />
            </main>
            <div style={{height:'60px'}}></div>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
