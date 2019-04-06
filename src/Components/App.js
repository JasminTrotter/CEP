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

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
