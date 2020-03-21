import React, {Component} from 'react';
import StepZero from './StepZero';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import PersonUnderMonitoring from './PersonUnderMonitoring';
import Emergency from './Emergency';
import NoTest from "./NoTest";
import NoTestWithSymptoms from "./NoTestWithSymptoms";
import ReactGA from 'react-ga';

ReactGA.initialize('UA-160601011-1');

class MainForm extends Component {
	state = {
		step: 0,
		hasExposure: null,
		hasSymptoms: null,
		hasTravel: null,
		age: '',
		city: '',
	};

	initialState = () => {
		this.setState({
			step: 0,
			hasExposure: null,
			hasSymptoms: null,
			hasTravel: null,
		})
	};

	nextStep = () => {
		const {step} = this.state;
		this.setState({
			step: step + 1
		})
	};

	prevStep = () => {
		const {step} = this.state;
		this.setState({
			step: step - 1
		})
	};

	handleChange = (name, value) => {
		this.setState({[name]: value})
	};

	render() {
		ReactGA.pageview(window.location.pathname + window.location.search);
		const {step, hasExposure, hasSymptoms, hasTravel} = this.state;
		switch (step) {
			case 0:
				return <StepZero
					nextStep={this.nextStep}
				/>;
			case 1: // 1.0 symptoms
				return <StepOne
					nextStep={this.nextStep}
					prevStep={this.prevStep}
					handleChange={this.handleChange}
				/>;
			case 2: // 2.0 travel history step
				return <StepTwo
					nextStep={this.nextStep}
					prevStep={this.prevStep}
					handleChange={this.handleChange}
				/>
			case 3: // 3.0 exposure step
				return <StepThree
					nextStep={this.nextStep}
					prevStep={this.prevStep}
					handleChange={this.handleChange}
				/>;
			case 4: // final step decision

				// person under investigation (PUI)
				if ((hasSymptoms && hasTravel && hasExposure) ||
					(hasSymptoms && hasTravel && !hasExposure) ||
					(hasSymptoms && !hasTravel && hasExposure)) {
					ReactGA.event({
						category: 'Result',
						action: 'Person under investigation'
					});
					return <Emergency next={this.initialState}/>
				}
				// appropriate treatment
				else if ((hasSymptoms && !hasTravel && !hasExposure)) {
					ReactGA.event({
						category: 'Result',
						action: 'No test needed, but with symptoms'
					});
					return <NoTestWithSymptoms next={this.initialState}/>
				}
				// person under monitoring (PUM)
				else if ((!hasSymptoms && hasTravel && hasExposure) ||
					(!hasSymptoms && hasTravel && !hasExposure) ||
					(!hasSymptoms && !hasTravel && hasExposure)) {
					ReactGA.event({
						category: 'Result',
						action: 'Person under monitoring'
					});
					return <PersonUnderMonitoring next={this.initialState}/>
				}
				// no immediate medical action
				else {
					ReactGA.event({
						category: 'Result',
						action: 'No action needed'
					});
					return <NoTest next={this.initialState}/>
				}
			default:
				return <StepZero
					nextStep={this.nextStep}/>;
		}
	}
}

export default MainForm;