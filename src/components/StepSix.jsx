// StepSix.jsx
import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';

class StepSix extends Component {
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
				<h1 className="ui centered">Have been in close contact with anyone who has respiratory illness in the past 14 days?</h1>
				<h2>A close contact is defined as a person who:</h2>
				<ul>
					<li>provided care for the individual, including healthcare workers, family members or other caregivers, or who had other similar close physical contact without consistent and appropriate use of personal protective equipment</li>
					<li>who lived with or otherwise had close prolonged contact (within 2 meters) with the person while they were infectious</li>
					<li>had direct contact with infectious bodily fluids of the person (e.g. was coughed or sneezed on) while not wearing recommended personal protective equipment</li>
				</ul>
				<Button onClick={this.noStep}>No</Button>
				<Button onClick={this.yesStep}>Yes</Button>
				<Button onClick={this.back}>Back</Button>
			</div>
		)
	}
}

export default StepSix;