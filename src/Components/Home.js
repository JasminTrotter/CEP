import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default class Home extends React.Component {
	componentDidMount() {
  		window.scrollTo(0, 0)
	}

	render() {
		return (
			
			<div className="Home">
				<div className="intro">
					
				</div>
				<div className="home-text">
					
				</div>
			</div>
		);
    }
}