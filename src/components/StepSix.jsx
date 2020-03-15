// StepSix.jsx
import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';

class StepSix extends Component {
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
				<h1 className="ui centered">In the past 14 days have you returned from travel to any other locations outside of Philippines?</h1>
				<h2>Travel includes passing through an airport.</h2>
				<Button onClick={this.continue}>No</Button>
				<Button onClick={this.yesEmergency}>Yes</Button>
				<Button onClick={this.back}>Back</Button>
			</div>
		)
	}
}

export default StepSix;