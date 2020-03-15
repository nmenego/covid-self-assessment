// StepTwo
import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';

class StepTwo extends Component {

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
			<div color='blue'>
				<h1 className="ui centered">Have you travelled outside the country or to provinces that have confirmed COVID-19 cases?</h1>
				<h2>Travel includes passing through an airport.</h2>
				<Button onClick={this.noStep}>No</Button>
				<Button onClick={this.yesStep}>Yes</Button>
				<Button onClick={this.back}>Back</Button>
			</div>
		)
	}
}

export default StepTwo;