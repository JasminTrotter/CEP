import React, { Component } from 'react';
import './../App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom'; 
import Navbar from './Navbar';
import Header from './Header';
import Home from './Home';

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

            </main>

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
