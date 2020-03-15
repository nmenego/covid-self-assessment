// Emergency.jsx
import React, {Component} from 'react';
import {Button} from "semantic-ui-react";

class Emergency extends Component {

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
				<p>**links that direct them to the nearest testing centers</p>
				<Button onClick={this.next} className="btn btn-primary btn-lg btn-block" role="button">Restart
					Assessment</Button>
			</div>
		)
	}
}

export default Emergency;