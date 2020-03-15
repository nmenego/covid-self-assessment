// MainForm.jsx
import React, {Component} from 'react';
import StepZero from './StepZero';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import StepSix from "./StepSix";
import Success from './Success';
import Emergency from './Emergency';
import ContactPage from "./ContactPage";


class MainForm extends Component {
	state = {
		step: 0,
		firstName: '',
		lastName: '',
		email: '',
		age: '',
		city: '',
		country: ''
	}

	initialState = () => {
		const {step} = this.state
		this.setState({
			step: 0
		})
	}

	contactPage = () => {
		const {step} = this.state
		this.setState({
			step: 9
		})
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
			case 0:
				return <StepZero
					nextStep={this.nextStep}
					values={values}
				/>
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
				return <StepThree
					nextStep={this.nextStep}
					prevStep={this.prevStep}
					emergencyStep={this.emergencyStep}
					values={values}
				/>
			case 4:
				return <StepFour
					nextStep={this.nextStep}
					prevStep={this.prevStep}
					emergencyStep={this.emergencyStep}
					values={values}
				/>
			case 5:
				return <StepFive
					nextStep={this.nextStep}
					prevStep={this.prevStep}
					emergencyStep={this.emergencyStep}
					values={values}
				/>
			case 6:
				return <StepSix
					nextStep={this.nextStep}
					prevStep={this.prevStep}
					emergencyStep={this.emergencyStep}
					values={values}
				/>
			case 8:
				return <Success/>
			case 9:
				return <ContactPage
					next={this.contactPage}
				/>
			case 10:
				return <Emergency
					next={this.initialState}
				/>
			default:
				return <Emergency/>
		}
	}
}

export default MainForm;