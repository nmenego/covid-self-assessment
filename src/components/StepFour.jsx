// StepFour.jsx
import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';

class StepFour extends Component {
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
				<h1 className="ui centered">In the past 14 days have you had close contact with someone who is confirmed as having COVID-19?</h1>
				<h2>A close contact is defined as a person who:</h2>
				<ul>
					<li>provided care for the individual, including healthcare workers, family members or other caregivers, or who had other similar close physical contact without consistent and appropriate use of personal protective equipment OR</li>
					<li>who lived with or otherwise had close prolonged contact (within 2 meters) with the person while they were infectious OR</li>
					<li>had direct contact with infectious bodily fluids of the person (e.g. was coughed or sneezed on) while not wearing recommended personal protective equipment</li>
				</ul>
				<Button onClick={this.continue}>No</Button>
				<Button onClick={this.yesEmergency}>Yes</Button>
				<Button onClick={this.back}>Back</Button>
			</div>
		)
	}
}

export default StepFour;