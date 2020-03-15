// StepFour.jsx
import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';

class StepThree extends Component {
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
				<h1 className="ui centered">Were you exposed to someone who has been confirmed as having COVID-19?</h1>
				<ul>
					<li>Providing direct care for COVID-19 patient</li>
					<li>Working together or staying in the same close environment of a COVID-19</li>
					<li>Traveling together with COVID-19 patient in any kind of conveyance</li>
					<li>Living in the same household as a COVID-19 patient</li>
				</ul>
				<Button onClick={this.noStep} className="btn btn-primary btn-lg btn-block" role="button">NO</Button>
				<Button onClick={this.yesStep} className="btn btn-primary btn-lg btn-block" role="button">YES</Button>
				<Button onClick={this.back} className="btn btn-primary btn-lg btn-block" role="button">BACK</Button>
			</div>
		)
	}
}

export default StepThree;