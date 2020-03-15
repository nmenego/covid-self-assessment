// StepOne.jsx
import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';

class StepOne extends Component {

	yesStep = (e) => {
		e.preventDefault()
		this.props.yesStep()
	}

	noStep = (e) => {
		e.preventDefault()
		this.props.noStep()
	}

	render() {
		return (
			<div>
				<h1 className="ui centered">Are you experiencing any of the following:</h1>
				{/*<Form.Field>*/}
				{/*	<input*/}
				{/*		type='checkbox'*/}
				{/*		onChange={this.props.handleChange('firstName')}*/}
				{/*		defaultValue={values.firstName}*/}
				{/*	/>*/}
				{/*	<label>severe difficulty breathing (e.g., struggling for each breath, speaking in single words)</label>*/}
				{/*</Form.Field>*/}
				<ul>
					<li>Fever</li>
					<li>Cough</li>
					<li>Shortness of breath or difficulty breathing</li>
					<li>Diarrhea</li>
				</ul>
				<Button onClick={this.noStep}>No</Button>
				<Button onClick={this.yesStep}>Yes</Button>
			</div>
		)
	}
}

export default StepOne;