// MainForm.jsx
import React, {Component} from 'react';
import StepZero from './StepZero';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import StepSix from "./StepSix";
import PersonUnderMonitoring from './PersonUnderMonitoring';
import Emergency from './Emergency';
import ContactPage from "./ContactPage";
import NoTest from "./NoTest";
import NoTestWithSymptoms from "./NoTestWithSymptoms";


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

	contactPageStep = () => {
		const {step} = this.state
		this.setState({
			step: 98
		})
	}

	emergencyStep = () => {
		const {step} = this.state
		this.setState({
			step: 99
		})
	}

	pumStep = () => {
		const {step} = this.state
		this.setState({
			step: 97
		})
	}

	noTestStep = () => {
		const {step} = this.state
		this.setState({
			step: 96
		})
	}

	noTestWithSymptomsStep = () => {
		const {step} = this.state
		this.setState({
			step: 95
		})
	}

	closeContactStep = () => {
		const {step} = this.state
		this.setState({
			step: 6
		})
	}

	preexistingIllnessStep = () => {
		const {step} = this.state
		this.setState({
			step: 5
		})
	}

	exposureDurationStep = () => {
		const {step} = this.state
		this.setState({
			step: 4
		})
	}

	exposureStep = () => {
		const {step} = this.state
		this.setState({
			step: 3
		})
	}

	travelHistoryStep = () => {
		const {step} = this.state
		this.setState({
			step: 2
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
		const {hasSymptoms, hasTravel} = this.state;
		const values = {hasSymptoms, hasTravel};
		switch (step) {
			case 0:
				return <StepZero
					nextStep={this.nextStep}
					values={values}
				/>
			case 1:
				return <StepOne
					yesStep={this.exposureStep}
					noStep={this.travelHistoryStep}
					values={values}
				/>
			case 2:
				return <StepTwo
					yesStep={this.pumStep}
					noStep={this.noTestStep}
					back={this.prevStep}
					values={values}
				/>
			case 3: // exposure step
				return <StepThree
					yesStep={this.emergencyStep}
					noStep={this.exposureDurationStep}
					back={this.prevStep}
					values={values}
				/>
			case 4: // exposure duration step
				return <StepFour
					yesStep={this.emergencyStep}
					noStep={this.preexistingIllnessStep}
					back={this.prevStep}
					values={values}
				/>
			case 5: // pre-existing illness
				return <StepFive
					yesStep={this.emergencyStep}
					noStep={this.closeContactStep}
					back={this.prevStep}
					values={values}
				/>
			case 6: // close-contact
				return <StepSix
					yesStep={this.emergencyStep}
					noStep={this.noTestWithSymptomsStep}
					back={this.prevStep}
					values={values}
				/>
			case 95:
				return <NoTestWithSymptoms next={this.initialState}/>
			case 96:
				return <NoTest next={this.initialState}/>
			case 97:
				return <PersonUnderMonitoring next={this.initialState}/>
			case 98:
				return <ContactPage
					next={this.initialState}
				/>
			case 99:
				return <Emergency next={this.initialState} contactDetails={this.contactPageStep}/>
			default:
				return <Emergency next={this.initialState} contactDetails={this.contactPageStep}/>
		}
	}
}

export default MainForm;