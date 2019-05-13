import React from 'react';
import PhoneInput, { format, normalize } from "react-phone-input-auto-format";
import '../styles/Contact.css';

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
				<p>
					Take the first step towards growing your digital presence! Fill out this contact form and I will be in touch to set up a call.
				</p>
				<form action="https://formspree.io/jasminmtrotter@gmail.com" method="POST">
					<div>
						<label>Name:</label>
						<input type="text" name="name" />
					</div>
					<div>
						<label>Email:</label>
						<input type="email" name="_replyto" />
					</div>
					<div>
						<label>Phone:</label>
						<PhoneInput name="phone" />
					</div>
					<div>
						<label>Message:</label>
						<textarea name="message"></textarea>
					</div>
					<input className="submit-button" type="submit" value="Send" />
				</form>
			</div>
		);
	}
}