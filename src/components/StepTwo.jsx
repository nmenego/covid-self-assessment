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
			<div className="col-sm-12 col-md-8 offset-md-2">
				<h1 className="ui centered">Have you travelled outside the country or to provinces that have confirmed
					COVID-19 cases?</h1>
				<h2>Travel includes passing through an airport.</h2>
				<Button onClick={this.noStep} className="btn btn-primary btn-lg btn-block" role="button">NO</Button>
				<Button onClick={this.yesStep} className="btn btn-primary btn-lg btn-block" role="button">YES</Button>
				<Button onClick={this.back} className="btn btn-primary btn-lg btn-block" role="button">BACK</Button>
			</div>
		)
	}
}

export default StepTwo;