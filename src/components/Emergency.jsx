// Emergency.jsx
import React, {Component} from 'react';
import {Button} from "semantic-ui-react";

class Emergency extends Component {

	contactDetails = (e) => {
		e.preventDefault()
		this.props.contactDetails()
	}

	next = (e) => {
		e.preventDefault()
		this.props.next()
	}

	render() {
		return (
			<div>
				<h1 className="ui centered">Call your nearest emergency department.</h1>
				<p>They will ask more questions to assess you further. You will be brought to the COVID-19 Isolation
					Area for admission or the Resuscitation Area of the hospital if you don’t want to be admitted.</p>
				<p>[This part is under construction, please contact DOH directly below.]</p>
				<Button onClick={this.contactDetails} className="btn btn-primary btn-lg btn-block" role="button">COVID-19
					Emergency Contact Details</Button>
				<Button onClick={this.next} className="btn btn-primary btn-lg btn-block" role="button">Restart
					Assessment</Button>
			</div>
		)
	}
}

export default Emergency;