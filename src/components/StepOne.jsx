// StepOne.jsx
import React, {Component} from 'react';
import {Button, Form} from 'semantic-ui-react';

class StepOne extends Component {

	yesStep = (e) => {
		e.preventDefault()
		this.props.emergencyStep()
	}

	noStep = (e) => {
		e.preventDefault()
		this.props.nextStep()
	}

	render() {
		const {values} = this.props;
		return (
			<Form>
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
					<li>severe difficulty breathing (e.g., struggling for each breath, speaking in single words)</li>
					<li>severe chest pain</li>
					<li>having a very hard time waking up</li>
					<li>feeling confused</li>
					<li>lost consciousness</li>
				</ul>
				<Button onClick={this.noStep}>No</Button>
				<Button onClick={this.yesStep}>Yes</Button>
			</Form>
		)
	}
}

export default StepOne;