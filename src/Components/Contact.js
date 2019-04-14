import React from 'react';

export default class Contact extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		window.scrollTo(0, 0);
		this.props.isHome();
	}
	
	render() {
		return(
			<div className="Contact-container">
			  
			</div>
		);
	}
}