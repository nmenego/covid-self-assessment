// StepOne.jsx
import React, {Component} from 'react';
import {Button, Form} from 'semantic-ui-react';

class StepOne extends Component {

	saveAndContinue = (e) => {
		e.preventDefault()
		this.props.nextStep()
	}

	render() {
		const {values} = this.props;
		return (
			<Form>
				<h1 className="ui centered">Enter User Details</h1>
				<Form.Field>
					<input
						type='checkbox'
						placeholder='First Name'
						onChange={this.props.handleChange('firstName')}
						defaultValue={values.firstName}
					/>
					<label>Symptom 1</label>
				</Form.Field>
				<Form.Field>
					<input
						type='checkbox'
						placeholder='Last Name'
						onChange={this.props.handleChange('lastName')}
						defaultValue={values.lastName}
					/>
					<label>Symptom 2</label>
				</Form.Field>
				<Form.Field>
					<input
						type='checkbox'
						placeholder='Email Address'
						onChange={this.props.handleChange('email')}
						defaultValue={values.email}
					/>
					<label>Symptom 3</label>
				</Form.Field>
				<Button onClick={this.saveAndContinue}>Next</Button>
			</Form>
		)
	}
}

export default StepOne;