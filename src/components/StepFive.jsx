// StepFive.jsx
import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';

class StepFive extends Component {
	yesStep = (e) => {
		e.preventDefault()
		this.props.yesStep()
	}

	noStep = (e) => {
		e.preventDefault()
		this.props.noStep()
	}

	back = (e) => {
		e.preventDefault();
		this.props.prevStep();
	}

	render() {

		return (
			<div>
				<h1 className="ui centered">Do you have symptoms of respiratory illness?</h1>
				<h2>Travel includes passing through an airport.</h2>
				<Button onClick={this.continue}>No</Button>
				<Button onClick={this.yesEmergency}>Yes</Button>
				<Button onClick={this.back}>Back</Button>
			</div>
		)
	}
}

export default StepFive;