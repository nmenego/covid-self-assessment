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
		this.props.back();
	}

	render() {

		return (
			<div>
				<h1 className="ui centered">Do you have symptoms of respiratory illness?</h1>
				<Button onClick={this.noStep} className="btn btn-primary btn-lg btn-block" role="button">NO</Button>
				<Button onClick={this.yesStep} className="btn btn-primary btn-lg btn-block" role="button">YES</Button>
				<Button onClick={this.back} className="btn btn-primary btn-lg btn-block" role="button">BACK</Button>
			</div>
		)
	}
}

export default StepFive;