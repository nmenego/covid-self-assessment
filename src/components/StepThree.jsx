// StepFour.jsx
import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';

class StepThree extends Component {
	continue = (e) => {
		e.preventDefault();
		this.props.nextStep();
	}

	back = (e) => {
		e.preventDefault();
		this.props.prevStep();
	}

	render() {
		const {values: {firstName, lastName, email, age, city, country}} = this.props;

		return (
			<div>
				<h1 className="ui centered">Are you experiencing any of the following:</h1>
				<ul>
					<li>fever</li>
					<li>cough</li>
					<li>shortness of breath</li>
					<li>sore throat</li>
				</ul>
				<Button onClick={this.continue}>No</Button>
				<Button onClick={this.yesEmergency}>Yes</Button>
				<Button onClick={this.back}>Back</Button>
			</div>
		)
	}
}

export default StepThree;