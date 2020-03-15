// StepTwo
import React, {Component} from 'react';
import {Button, Form} from 'semantic-ui-react';

class StepTwo extends Component {
	continue = (e) => {
		e.preventDefault();
		this.props.nextStep();
	}

	back = (e) => {
		e.preventDefault();
		this.props.prevStep();
	}

	render() {
		const {values} = this.props
		return (
			<Form color='blue'>
				<h1 className="ui centered">Are you experiencing any of the following:</h1>
				<ul>
					<li>short of breath at rest</li>
					<li>inability to lie down because of difficulty breathing</li>
					<li>chronic health conditions that you are having difficulty managing because of your current
						respiratory illness
					</li>
				</ul>
				<Button onClick={this.continue}>No</Button>
				<Button onClick={this.yesEmergency}>Yes</Button>
				<Button onClick={this.back}>Back</Button>
			</Form>
		)
	}
}

export default StepTwo;