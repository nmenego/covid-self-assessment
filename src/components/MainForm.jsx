// MainForm.jsx
import React, {Component} from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import Confirmation from './Confirmation';
import Success from './Success';
import Emergency from './Emergency';

class MainForm extends Component {
	state = {
		step: 1,
		firstName: '',
		lastName: '',
		email: '',
		age: '',
		city: '',
		country: ''
	}

	emergencyStep = () => {
		const {step} = this.state
		this.setState({
			step: 10
		})
	}

	nextStep = () => {
		const {step} = this.state
		this.setState({
			step: step + 1
		})
	}

	prevStep = () => {
		const {step} = this.state
		this.setState({
			step: step - 1
		})
	}

	handleChange = input => event => {
		this.setState({[input]: event.target.value})
	}

	render() {
		const {step} = this.state;
		const {firstName, lastName, email, age, city, country} = this.state;
		const values = {firstName, lastName, email, age, city, country};
		switch (step) {
			case 1:
				return <StepOne
					nextStep={this.nextStep}
					emergencyStep={this.emergencyStep}
					handleChange={this.handleChange}
					values={values}
				/>
			case 2:
				return <StepTwo
					nextStep={this.nextStep}
					emergencyStep={this.emergencyStep}
					prevStep={this.prevStep}
					handleChange={this.handleChange}
					values={values}
				/>
			case 3:
				return <Confirmation
					nextStep={this.nextStep}
					prevStep={this.prevStep}
					values={values}
				/>
			case 4:
				return <Success/>
			case 10:
				return <Emergency/>
			default:
				return <Emergency/>
		}
	}
}

export default MainForm;